# 🔮 dscst

_An asynchronous api wrapper around [discord.style](https://www.discord.style) built with **typescript**_

## Installation

**npm**

```bash
npm i dscst
```

**yarn**

```bash
yarn add dscst
```

## Usage

### 🗃 Utility based wrapper

_Use the api wrapper via separated methods_

> an api key has to be passed to every auth required method

#### javascript

```js
const dscst = require('dscst');
```

#### typescript

```ts
import * as dscst from 'dscst';
```

#### ❓ example usage

```js
// non-auth
const info = await dscst.template.get('template_id');

console.log(info); // template response

// auth
const liked = await dscst.template.like('template_id', 'api_key');

console.log(liked); // liked template response
```

<hr>

### 🌴 Class based wrapper

_Use the api wrapper via a class_

> initialize the class with your api key, select and access methods from returned util classes

#### javascript

```js
const { dscst } = require('dscst');
```

#### typescript

```ts
import { dscst } from 'dscst';
```

#### 🔨 initialize class

```js
const discordstyle = new dscst('api_key');
```

#### ❓ example usage (1)

```js
// returns Template class with template methods
const template = discordstyle.template('template_id');

// get a template
const info = await template.get();

console.log(info); // template response

// like a template
const liked = await template.like();

console.log(liked); // liked template response
```

#### ❓ example usage (2)

```js
// get a template
const info = await discordstyle.template('template_id').get();

console.log(info); // template response

// like a template
const liked = await discordstyle.template('template_id').like();

console.log(liked); // liked template response
```
