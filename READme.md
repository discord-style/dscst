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
const template = await dscst.template.get('template_id');

// auth
const liked = await dscst.template.like('template_id', 'api_key');
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

#### ❓ example usage

```js
// returns Template class
const template = await discordstyle.template('template_id');

// returned template
console.log(template);

// access delete method on returned template
await template.delete();
```
