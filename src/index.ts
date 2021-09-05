import { getOghamMapping } from './mappings/ogham-mapping';

const transform = (content: string, dictionary: Map<string, string>) : string => {
  let result = '';
  const parts: string[] = content.split('');

  parts.forEach((part) => {
    const partKey = part.toLocaleLowerCase();

    if (dictionary.has(partKey)) {
      result += dictionary.get(partKey);
    } else {
      result += part;
    }
  });

  return result;
};

export const oghamToLetters = (content: string) : string => {
  const oghamMapping = getOghamMapping();
  const result = transform(content, oghamMapping);

  return result;
};

export default {
  oghamToLetters,
  getOghamMapping,
};
