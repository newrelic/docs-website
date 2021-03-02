const fs = require('fs');
const path = require('path');

exports.onPostBuild = async ({ graphql, store }, pluginOptions) => {
  const { program } = store.getState();
  const { query, serialize } = pluginOptions;

  console.log(`Creating JSON for ${pluginOptions.path}`);
  const data = query
    ? serialize(await graphql(query))
    : serialize({ data: null });

  const filepath = path.join(program.directory, 'public', pluginOptions.path);
  const dir = path.dirname(filepath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filepath, JSON.stringify(data));
};
