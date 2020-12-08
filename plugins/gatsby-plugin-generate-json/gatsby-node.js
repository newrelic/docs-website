const fs = require('fs');
const path = require('path');

exports.onPostBuild = async ({ graphql, store }, pluginOptions) => {
  const { program } = store.getState();
  const { query, serialize } = pluginOptions;

  try {
    const resp = await graphql(query);

    const data = serialize(resp);

    const filepath = path.join(program.directory, 'public', pluginOptions.path);
    const dir = path.dirname(filepath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filepath, JSON.stringify(data));
  } catch (error) {
    console.error(`Unable to fetch data for JSON: ${error}`);
  }
};
