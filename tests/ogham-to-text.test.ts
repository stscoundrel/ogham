import { oghamToLetters } from '../src';

describe('Ogham to letters transformation tests', () => {
  test('Transforms Ballaqueeney Ogham Stone, from Isle of Man', () => {
    const ohham = '᚛ᚁᚔᚃᚐᚔᚇᚑᚅᚐᚄᚋᚐᚊᚔᚋᚒᚉᚑᚔ᚜ ᚛ᚉᚒᚅᚐᚃᚐ[ᚂᚔ]᚜';
    const expected = 'bivaidonasmaqimucoi cunava[li]';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });

  test('Transforms Breastagh Ogham Stone, from County Mayo, Ireland', () => {
    const ohham = '᚛ᚂᚓᚌᚌ[--]ᚄᚇ[--]ᚂᚓᚌᚓᚄᚉᚐᚇ᚜ ᚛ᚋᚐᚊ ᚉᚑᚏᚏᚁᚏᚔ ᚋᚐᚊ ᚐᚋᚋᚂᚂᚑᚌᚔᚈᚈ᚜';
    const expected = 'legg[--]sd[--]legescad maq corrbri maq ammllogitt';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });

  test('Transforms "Cunalegi, descendant of Qunacanos", from Island, Costello, Co Mayo', () => {
    const ohham = '᚛ᚉᚒᚅᚐᚂᚓᚌᚔ ᚐᚃᚔ ᚊᚒᚅᚐᚉᚐᚅᚑᚄ᚜';
    const expected = 'cunalegi avi qunacanos';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });

  test('Transforms "Netacari, nephew of Cagi", from Castletimon, Brittas Bay, Co Wicklow', () => {
    const ohham = '᚛ᚅᚓᚈᚐᚉᚐᚏᚔᚅᚓᚈᚐᚉᚉᚐᚌᚔ᚜';
    const expected = 'netacarinetaccagi';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });

  test('Transforms "Nettasagri, Briaci", from Bridell, Pembrokeshire', () => {
    const ohham = '᚛ᚅᚓᚈᚈᚐᚄᚐᚌᚏᚔ ᚋᚐᚊᚔ ᚋᚒᚉᚑᚓ ᚁᚏᚔᚐᚉᚔ᚜';
    const expected = 'nettasagri maqi mucoe briaci';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });

  test('Transforms Latin text written in ogham, in the Annals of Inisfallen of 1193', () => {
    const ohham = '᚛ᚅᚒᚋᚒᚄ ᚆᚑᚅᚑᚏᚐᚈᚒᚏ ᚄᚔᚅᚓ᚜ ᚛ᚅᚒᚋᚑ ᚅᚒᚂᚂᚒᚄ ᚐᚋᚐᚈᚒᚏ᚜';
    const expected = 'numus honoratur sine numo nullus amatur';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });

  test('Transforms Forfeda characters', () => {
    const ohham = '᚛ᚕᚖᚗᚘᚚᚙ᚜';
    const expected = 'koiuiiopai';

    const result = oghamToLetters(ohham);

    expect(result).toBe(expected);
  });
});
