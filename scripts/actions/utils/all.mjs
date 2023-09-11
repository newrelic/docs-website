import { one } from './one.mjs';

export const all = (h, parent) => {
  const nodes = parent.children || [];
  const length = nodes.length;
  let values = [];
  let index = -1;
  let result;
  let head;

  while (++index < length) {
    result = one(h, nodes[index], parent);

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = result.value.replace(/^\s+/, '');
        }

        head = result.children && result.children[0];

        if (head && head.value) {
          head.value = head.value.replace(/^\s+/, '');
        }
      }

      values = values.concat(result);
    }
  }

  return values;
};
