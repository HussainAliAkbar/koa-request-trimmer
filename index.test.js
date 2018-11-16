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
      },
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
      },
    });
  });
});
