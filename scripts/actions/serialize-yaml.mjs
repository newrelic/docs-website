import yaml from 'js-yaml';

/**
 * serializes YAML into JSON and adds translation configuration keys.
 *
 * our branching install docs are defined by YAML files in `src/install/config`.
 * Smartling can translate YAML, but we would have to wrap everything we didn't
 * want translated in comments, and anyone working on these files or creating new
 * install docs would have to remember this, which would get messy quickly.
 *
 * by contrast, we can define certain keys we want/don't want translated in JSON.
 */
const serializeYaml = async (yamlString) => {
  const result = yaml.safeLoad(yamlString, { schema: yaml.JSON_SCHEMA });
  // TODO: add Smartling keys to configure translations
  result.smartling = {
    translate_paths: [
      {
        path: 'title',
      },
      {
        path: 'metaDescription',
      },
      {
        path: 'appInfo/label',
      },
      {
        path: 'appInfo/placeholder',
      },
      {
        path: 'appInfo/placeholder',
      },
      {
        path: 'appInfo/options/displayName',
      },
    ],
  };

  return JSON.stringify(result, null, 2);
};

export default serializeYaml;
