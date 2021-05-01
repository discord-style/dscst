# 🔮 dscst

_An asynchronous api wrapper around [discord.style](https://www.discord.style) built with **typescript**_

_typescript recommended, too lazy for documentation rn_

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

### 🔑 get an api key

> this is a temporary way of generating an api key, will be easier via frontend soon.

**`POST`** `https://api.discord.style/apikey` **with cookie header**

_an api key will be returned in the payload json response._

<hr>

### 🤹‍♂️ Utility based wrapper

_Use the api wrapper via separated methods._

> an api key has to be passed to every auth required method

> returns full api response from request.

#### typescript

```ts
import * as dscst from 'dscst';
```

#### javascript

```js
const dscst = require('dscst');
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

_Use the api wrapper, nicely._

**will soon contain cachable data from either in memory or redis client.**

> initialize the class with your api key, select and access methods from returned util classes

> returns payload rather than the entire api response, rejects with api error message if success is false.

#### typescript

```ts
import { discordstyle } from 'dscst';
```

#### javascript

```js
const { discordstyle } = require('dscst');
```

#### 🔨 initialize class

```js
const dscst = new discordstyle('api_key');
```

#### ❓ example usages (1)

```js
// fetches template data and returns Template class with template methods
const template = await dscst.template('template_id');

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
const template = await dscst.template('template_id').get();

// like a template
const liked = await dscst.template('template_id').like();
```
