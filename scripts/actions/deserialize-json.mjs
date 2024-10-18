import yaml from 'js-yaml';

/**
 * deserializes JSON into YAML and removes translation configuration keys.
 */
const deserializeJson = async (jsonString) => {
  const result = JSON.parse(jsonString);
  // TODO: remove Smartling keys
  const yamlString = yaml.dump(result, { schema: yaml.JSON_SCHEMA });

  return yamlString;
};

export default deserializeJson;
