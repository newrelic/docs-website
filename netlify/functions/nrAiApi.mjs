export default async (req) => {
  const results = await req
    .json()
    .then((query) =>
      fetch(
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
      )
    )
    .then((firstResponse) => firstResponse.json())
    .then((json) =>
      fetch(
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
            top_k: 10,
            namespace: 'nr-docs',
            include_metadata: true,
          }),
        }
      )
    )
    .then((secondResponse) => secondResponse.json());

  return new Response(JSON.stringify(results));
};
