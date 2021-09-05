export const getOghamMapping = (): Map<string, string> => {
  const oghamMapping = new Map();
  // Sentence start & end should not be empty.
  oghamMapping.set('᚛', '');
  oghamMapping.set('᚜', '');

  oghamMapping.set('ᚁ', 'b');
  oghamMapping.set('ᚂ', 'l');
  oghamMapping.set('ᚃ', 'v');
  oghamMapping.set('ᚄ', 's');
  oghamMapping.set('ᚅ', 'n');
  oghamMapping.set('ᚆ', 'h');
  oghamMapping.set('ᚇ', 'd');
  oghamMapping.set('ᚈ', 't');
  oghamMapping.set('ᚉ', 'c');
  oghamMapping.set('ᚊ', 'q');
  oghamMapping.set('ᚋ', 'm');
  oghamMapping.set('ᚌ', 'g');
  oghamMapping.set('ᚍ', 'ng');
  oghamMapping.set('ᚎ', 'z');
  oghamMapping.set('ᚏ', 'r');
  oghamMapping.set('ᚐ', 'a');
  oghamMapping.set('ᚑ', 'o');
  oghamMapping.set('ᚒ', 'u');
  oghamMapping.set('ᚓ', 'e');
  oghamMapping.set('ᚔ', 'i');
  oghamMapping.set('ᚕ', 'k');
  oghamMapping.set('ᚖ', 'oi');
  oghamMapping.set('ᚗ', 'ui');
  oghamMapping.set('ᚘ', 'io');
  oghamMapping.set('ᚙ', 'ai');
  oghamMapping.set('ᚚ', 'p');

  // space
  oghamMapping.set(' ', ' ');

  return oghamMapping;
};

export default {
  getOghamMapping,
};
