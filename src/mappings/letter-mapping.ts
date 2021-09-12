export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();

  letterMapping.set('a', 'ᚐ');
  letterMapping.set('á', 'ᚐ');
  letterMapping.set('b', 'ᚁ');
  letterMapping.set('c', 'ᚉ');
  letterMapping.set('d', 'ᚇ');
  letterMapping.set('ð', 'ᚇ');
  letterMapping.set('e', 'ᚓ');
  letterMapping.set('é', 'ᚓ');
  letterMapping.set('f', 'ᚃ');
  letterMapping.set('g', 'ᚌ');
  letterMapping.set('h', 'ᚆ');
  letterMapping.set('i', 'ᚔ');
  letterMapping.set('í', 'ᚔ');
  letterMapping.set('j', 'ᚌ');
  letterMapping.set('k', 'ᚕ');
  letterMapping.set('l', 'ᚂ');
  letterMapping.set('m', 'ᚋ');
  letterMapping.set('n', 'ᚅ');
  letterMapping.set('o', 'ᚑ');
  letterMapping.set('ó', 'ᚑ');
  letterMapping.set('p', 'ᚚ');
  letterMapping.set('q', 'ᚊ');
  letterMapping.set('r', 'ᚏ');
  letterMapping.set('s', 'ᚄ');
  letterMapping.set('t', 'ᚈ');
  letterMapping.set('þ', 'ᚈ');
  letterMapping.set('u', 'ᚒ');
  letterMapping.set('ú', 'ᚒ');
  letterMapping.set('v', 'ᚃ');
  letterMapping.set('w', 'ᚃ');
  letterMapping.set('x', 'ᚎ');
  letterMapping.set('y', 'ᚔ');
  letterMapping.set('ý', 'ᚔ');
  letterMapping.set('z', 'ᚎ');
  letterMapping.set('å', 'ᚑ');
  letterMapping.set('ä', 'ᚙ');
  letterMapping.set('æ', 'ᚙ');
  letterMapping.set('ö', 'ᚑ');
  letterMapping.set('ø', 'ᚑ');
  letterMapping.set('ǫ', 'ᚑ');
  letterMapping.set('oi', 'ᚖ');
  letterMapping.set('ui', 'ᚗ');
  letterMapping.set('io', 'ᚘ');
  letterMapping.set('ai', 'ᚙ');

  // Spaces.
  letterMapping.set(' ', ' ');

  return letterMapping;
};

export const getDualLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();

  letterMapping.set('oi', 'ᚖ');
  letterMapping.set('ui', 'ᚗ');
  letterMapping.set('io', 'ᚘ');
  letterMapping.set('ai', 'ᚙ');

  return letterMapping;
};

export default {
  getLetterMapping,
  getDualLetterMapping,
};
