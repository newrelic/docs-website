import 'dotenv/config';

export default async (event) => {
  return new Response('hello!');
  const query = event.body;
  console.log(event);
  const results = fetch(
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
    .then((response) => response.json())
    .then((json) => {
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
            top_k: 10,
            namespace: 'nr-docs',
            include_metadata: true,
          }),
        }
      );
    })
    .then((res) => res.json());
  return { body: results, statusCode: 200 };
};

export const config = { path: '/nrAiApi' };
