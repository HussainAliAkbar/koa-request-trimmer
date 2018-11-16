const middleware = require('./index');
const noop = () => {};

let ctx;
describe('request trimmer', () => {
  beforeEach(() => {
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test('the middleware should be defined', () => {
    expect(middleware).toBeDefined();
  });

  test('it should trim body only with default options', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware();
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: 'invalid arg with spaces'
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    });
  });

  test('it should trim body only if we pass the body argument as true to the middleware', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware({
      body: true
    });
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: 'invalid arg with spaces'
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    });
  });

  test('it should not trim anything if we pass the body argument as false to the middleware', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware({
      body: false
    });
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    });
  });

  test('it should not trim the body only (default) if we pass invalid arguments to the middleware', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware({
      invalidArgument: false,
      someMoreInvalidArguments: 123,
      yetAnotherInvalidArgument: 'abc'
    });
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: 'invalid arg with spaces'
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    });
  });
  test('it should trim the body only and query if we pass relevant arguments to the middleware', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware({
      query: true,
      body: true
    });
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: 'invalid arg with spaces'
        }
      },
      query: {
        arg: 'arg  with spaces'
      },
      params: {
        arg: '       arg  with spaces         '
      }
    });
  });
  test('it should trim the body and query if we pass relevant arguments to the middleware', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware({
      query: true,
      body: true
    });
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: 'invalid arg with spaces'
        }
      },
      query: {
        arg: 'arg  with spaces'
      },
      params: {
        arg: '       arg  with spaces         '
      }
    });
  });

  test('it should trim the body, query and params if we pass relevant arguments to the middleware', async () => {
    ctx = {
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: '          invalid arg with spaces               '
        }
      },
      query: {
        arg: '       arg  with spaces         '
      },
      params: {
        arg: '       arg  with spaces         '
      }
    };

    const func = middleware({
      query: true,
      body: true,
      params: true
    });
    await func(ctx, noop);
    expect(ctx).toEqual({
      request: {
        body: {
          arg: 'valid arg',
          anotherArg: 'invalid arg with spaces'
        }
      },
      query: {
        arg: 'arg  with spaces'
      },
      params: {
        arg: 'arg  with spaces'
      }
    });
  });
});
