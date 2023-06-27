#! /usr/bin/env node

import frontmatter from 'front-matter';
import * as fs from 'fs/promises';
import { glob } from 'glob10';
import yaml from 'js-yaml';
import _ from 'lodash';
import { mkdirp } from 'mkdirp';

/**
 * this script transforms the events and attributes Markdown in
 * `src/data-dictionary/events` into a new structure.
 *
 * ## before

 * previously, attributes specified which events they belonged to via
 * an `events` field in their frontmatter. this included specifying 
 * the parent event in their containing folder.
 *
 * ## after
 * 
 * running this script removes the `events` field from all attributes
 * and adds an `attributes` field to all events.
 * events now specify which attributes belong to them with a qualified name.
 * for example, for the BrowserTiming event to use an attribute from PageView,
 * it would have `PageView/deviceType` in its `attributes` list.
 * attributes in the same folder automatically belong to their parent event,
 * so PageView.event-definition.md MUST NOT specify `PageView/deviceType`.
 */

const constructYaml = ({ body, ...attributes }) => {
  let str = '---\n';
  str += yaml.dump(attributes);
  str += '---\n\n';
  str += body;
  return str;
};

const getParentFromPath = (path) => {
  const parts = path.split('/').slice(0, -1);
  return parts[parts.length - 1];
};

const markdownPaths = await glob('src/data-dictionary/events/**/*.md');

const events = new Map();
const attributes = new Map();

const eventPaths = markdownPaths.filter((path) =>
  path.includes('.event-definition')
);
const eventStrs = await Promise.all(
  eventPaths.map((path) =>
    fs.readFile(path, 'utf-8').then((str) => [path, str])
  )
);
eventStrs
  .map(([path, eventStr]) => [path, frontmatter(eventStr)])
  .forEach(([path, { attributes, body }]) =>
    events.set(attributes.name, {
      ...attributes,
      body,
      attributes: new Set(),
      fsPath: path,
    })
  );

let attributePaths = markdownPaths.filter(
  (path) => !path.includes('.event-definition')
);
let attributeStrs = await Promise.all(
  attributePaths.map((path) =>
    fs.readFile(path, 'utf-8').then((str) => [path, str])
  )
);
attributeStrs
  .map(([path, attributeStr]) => [path, frontmatter(attributeStr)])
  .forEach(([path, { attributes: mdAttributes, body }]) => {
    const qualifiedName = `${getParentFromPath(path)}/${mdAttributes.name}`
    attributes.set(qualifiedName, {
      ...mdAttributes,
      body,
      fsPath: path,
    })
  }
  );

for (const [qualifiedName, attribute] of attributes) {
  const parent = qualifiedName.split('/')[0]

  attribute.events
    .filter((event) => event !== parent)
    .forEach((event) => events.get(event).attributes.add(qualifiedName));
  delete attribute.events;

  let path = attribute.fsPath;
  delete attribute.fsPath;

  let yaml = constructYaml(attribute);
  const parentFolder = path.split('/').slice(0, -1).join('/');
  await mkdirp(parentFolder);
  fs.writeFile(path, yaml);
}

for (const [_name, event] of events) {
  let path = event.fsPath;
  delete event.fsPath;
  event.attributes = Array.from(event.attributes).sort();
  if (event.attributes.length === 0) {
    delete event.attributes;
  }

  let yaml = constructYaml(event);
  fs.writeFile(path, yaml);
}
