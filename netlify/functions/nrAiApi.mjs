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
            top_k: 5,
            namespace: 'nr-docs',
            include_metadata: true,
          }),
        }
      );
    })
    .then((secondResponse) => secondResponse.json());
  console.log('RESULTS', results);
  return new Response(JSON.stringify(results));
};
