# Ogham

Convert Ogham inscriptions to latin text & vice versa.

### Install

`yarn add ogham-inscriptions`

#### Usage

You can either transform ogham to text, or text to ogham.

Latin text to ogham:

```javascript
import { lettersToOgham } from 'ogham-inscriptions'

// "Netacari, nephew of Cagi", from Castletimon, Brittas Bay, Co Wicklow 
const result = lettersToOgham('netacarinetaccagi')

console.log(result) // ᚛ᚅᚓᚈᚐᚉᚐᚏᚔᚅᚓᚈᚐᚉᚉᚐᚌᚔ᚜
```

Ogham to latin text:

```javascript
import { oghamToLetters } from 'ogham-inscriptions'

// "Nettasagri, Briaci", from Bridell, Pembrokeshire
const result = oghamToLetters('᚛ᚅᚓᚈᚈᚐᚄᚐᚌᚏᚔ ᚋᚐᚊᚔ ᚋᚒᚉᚑᚓ ᚁᚏᚔᚐᚉᚔ᚜')

console.log(result) // nettasagri maqi mucoe briaci
```

### About Ogham

Ogham (or ogam) is an Early Medieval alphabet used primarily to write the early Irish language, and later the Old Irish language. Used roughly from 4th to 10th centuries AD.
