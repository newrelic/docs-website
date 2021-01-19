const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ddbClient = new AWS.DynamoDB.DocumentClient();

/**
 * @example loadFromDB(
 *    'TranslationQueues',
 *    { type: 'to_translate' }
 * );
 * @todo limit & offset
 * @param {string} table The table name.
 * @param {AWS.DynamoDB.DocumentClient.Key} key Table key(s).
 * @returns {Promise}
 */
const loadFromDB = (table, key) => {
  return new Promise((resolve, reject) => {
    /** @type AWS.DynamoDB.DocumentClient.GetItemInput */
    const params = {
      TableName: table,
      Key: key,
    };

    ddbClient.get(params, (error, data) => {
      if (error) {
        console.error(`[!] Unable to load data from ${table}:`);
        console.log(error);
        reject(error);
        return false;
      }

      console.log(`[*] Successfully loaded from ${table}`);
      resolve(data);
    });
  });
};

module.exports = loadFromDB;
