export default async (req) => {
  const results = await req
    .json()
    .then((query) => {
      console.log('QUERY', query);
      return fetch(
        'https://nerd-completion.staging-service.nr-ops.net/v1/embeddings',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.PINECONE}`,
          },
          body: JSON.stringify({
            input: [query],
            model: 'text-embedding-ada-002',
          }),
        }
      );
    })
    .then((firstResponse) => firstResponse.json())
    .then((json) => {
      console.log('FIRST RESPONSE', json);
      return fetch(
        'https://nerd-completion.staging-service.nr-ops.net/pinecone/query',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.PINECONE}`,
          },
          body: JSON.stringify({
            index: 'new-relic-internal-docs-testing',
            vector: json.data[0].embedding,
            // we have to get more than we need to filter duplicates
            top_k: 15,
            namespace: 'nr-docs',
            include_metadata: true,
          }),
        }
      );
    })
    .then((secondResponse) => secondResponse.json())
    .then((results) => {
      const matches = new Set();
      return {
        ...results,
        matches: results.matches
          // ids look like
          // `nr-docs:src/content/docs/apm/agents/manage-apm-agents/agent-data/triage-run-diagnostics.mdx:0`
          .map((match) => ({ ...match, id: match.id.split(':').at(1) }))
          .filter((match) => !match.id.includes('whats-new'))
          .filter((match) => {
            if (matches.has(match.id)) {
              return false;
            } else {
              matches.add(match.id);
              return true;
            }
          })
          .slice(0, 5),
      };
    });
  console.log('RESULTS', results);
  return new Response(JSON.stringify(results));
};
