import yaml from 'js-yaml';

/**
 * deserializes JSON into YAML and removes translation configuration keys.
 */
const deserializeJson = async (jsonString) => {
  const result = JSON.parse(jsonString);
  delete result.smartling;
  const yamlString = yaml.dump(result, { schema: yaml.JSON_SCHEMA });

  return yamlString;
};

export default deserializeJson;
