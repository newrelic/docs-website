const fs = require('fs');
const path = require('path');

exports.onPostBuild = async ({ graphql, store }, pluginOptions) => {
  const { program } = store.getState();
  const { query, serialize } = pluginOptions;

  try {
    // query graphql
    const resp = await graphql(query);

    // conver the results into the right format
    const data = serialize(resp);

    // make directory and save the file
    const filepath = path.join(program.directory, 'public', pluginOptions.path);
    const dir = path.dirname(filepath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filepath, JSON.stringify(data));
  } catch (err) {
    console.error(`Unable to fetch data for JSON: ${error}`);
  }
};
