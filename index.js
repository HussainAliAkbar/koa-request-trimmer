const trimmer = (opts) => {
  const options = {
    body: true,
    query: false,
    params: false
  };
  const mergedOptions = {...options, ...opts};
  console.log(mergedOptions)
  return async (ctx, next) => {
    if (mergedOptions.body && ctx.request.body) {
      ctx.request.body = trim(ctx.request.body);
    }
    if (mergedOptions.query && ctx.query) {
      ctx.query = trim(ctx.query);
    }
    if (mergedOptions.params && ctx.params) {
      ctx.params = trim(ctx.params);
    }
    await next();
  }
};

const trim = (obj) => {
  if (typeof obj === 'string') {
    obj = obj.trim();
  }
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      obj[key] = trim(obj[key]);
    }
  }
  return obj;
};


module.exports = trimmer;