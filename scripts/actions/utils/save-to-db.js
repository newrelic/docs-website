const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ddbClient = new AWS.DynamoDB.DocumentClient();

/**
 * @example saveToDB(
 *    'TranslationQueues',
 *    { type: 'to_translate' },
 *    'set locales = :slugs',
 *    { ':slugs': slugs }
 * );
 * @param {string} table The table name.
 * @param {AWS.DynamoDB.DocumentClient.Key} key Table key(s).
 * @param {string} updateExpression Expression for how to update.
 * @param {AWS.DynamoDB.DocumentClient.ExpressionAttributeValueMap} values Values set using expression.
 * @returns {Promise}
 */
const saveToDB = (table, key, updateExpression, values) => {
  return new Promise((resolve, reject) => {
    /** @type AWS.DynamoDB.DocumentClient.UpdateItemInput */
    const params = {
      TableName: table,
      Key: key,
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: values,
    };

    ddbClient.update(params, (error) => {
      if (error) {
        console.error(`[!] Unable to save data to ${table}:`);
        console.log(error);
        reject(error);
        return false;
      }

      console.log(`[*] Successfully saved to ${table}`);
      resolve(true);
    });
  });
};

module.exports = saveToDB;
