[![Build Status](https://travis-ci.com/HussainAliAkbar/request-trimmer.svg?branch=master)](https://travis-ci.com/HussainAliAkbar/request-trimmer)
[![MIT License][license-badge]][LICENSE]

[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://github.com/HussainAliAkbar/request-trimmer/blob/master/LICENSE

# Koa Request Trimmer
A dependency-free koa middleware to trim incoming requests.
The middleware is able to trim the request body, URL parameters and query string parameters.


## Installation
```
npm i --save koa-request-trimmer
```

## Usage

```js
const Koa = require('koa');
// a body parser of your choice
const trimmer = require('koa-request-trimmer');


const app = new Koa();

const options = {
  body: true,
  query: true,
  params: true
};

// apply bodyparser middleware of your choice


app.use(trimmer(options));

```

Passing options to the middleware is optional. You can even use it like this:

```js
app.use(trimmer());
```

If you do not provide any options then by default, the middleware will only trim the request body.

To trim other things like query string parameters and URL parameters, the options object needs to be passed to the middleware:

```js
const options = {
  body: true,
  query: true,
  params: true
};
```

setting any of the property to true or false will dictate the middleware as to what to trim and what not.


[Sample Usage](https://github.com/HussainAliAkbar/koa-request-trimmer/blob/master/sample-usage.js)

## Still to come
Typescript Typings!

## Contributors


<a href="https://github.com/asjadsaboor"><img src="https://avatars1.githubusercontent.com/u/11973227?s=460&v=4" title="Asjad Saboor" width="80" height="80"></a>
<a href="https://github.com/mowaiskalam"><img src="https://avatars3.githubusercontent.com/u/17184822?s=460&v=4" title="M. Owais Kalam" width="80" height="80"></a>
<a href="https://github.com/wkgalla"><img src="https://avatars2.githubusercontent.com/u/22365139?s=460&v=4" title="Waqas Kiffal" width="80" height="80"></a>



## License

MIT © [Hussain Ali Akbar](http://hussainaliakbar.github.io)
