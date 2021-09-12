import { getOghamMapping } from './mappings/ogham-mapping';
import { getLetterMapping, getDualLetterMapping } from './mappings/letter-mapping';

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

const replace = (content: string, dictionary: Map<string, string>) : string => {
  let result = content;

  // eslint-disable-next-line no-restricted-syntax
  for (const [dualLetter, ogham] of dictionary.entries()) {
    result = result.split(dualLetter).join(ogham);
  }

  return result;
};

const transformLetters = (content: string) : string => {
  const letterMapping = getLetterMapping();
  const dualLetterMapping = getDualLetterMapping();

  // Handle double letters first, so that they're not incorrectly transformed twice.
  const dualLetterResult = replace(content, dualLetterMapping);

  // Then handle individual letter results
  return transform(dualLetterResult, letterMapping);
};

export const oghamToLetters = (content: string) : string => {
  const oghamMapping = getOghamMapping();
  const result = transform(content, oghamMapping);

  return result;
};

export const lettersToOgham = (content: string) : string => {
  const transformResult = transformLetters(content);

  // Append expected start/end characters.
  const result = `᚛${transformResult}᚜`;

  return result;
};

export default {
  oghamToLetters,
  lettersToOgham,
  getOghamMapping,
  getLetterMapping,
  getDualLetterMapping,
};
