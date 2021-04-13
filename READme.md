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

> returns full api response.

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

> returns payload rather than the entire api response, throws an error if success response is false.

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

#### ❓ example usages (1)

```js
// fetches template data and returns Template class with template methods
const template = await discordstyle.template('template_id');

// get template cached data from class
const cachedInfo = template.get(true);

// get fresh payload from api
const freshInfo = await template.get();

// like a template
const liked = await template.like();
```

#### ❓ example usages (2)

```js
// get template payload
const template = await discordstyle.template('template_id').get();

// like a template
const liked = await discordstyle.template('template_id').like();
```
