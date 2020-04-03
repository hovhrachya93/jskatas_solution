// 78: Promise - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Promise` API overview', function() {
  it('`new Promise()` requires a function as param', () => {
    //// const param = null;
    const param = () => {};
    assert.doesNotThrow(() => { new Promise(param); });
  });
  describe('resolving a promise', () => {
    // reminder: the test passes when a fulfilled promise is returned
    it('via constructor parameter `new Promise((resolve) => { resolve(); })`', () => {
      //// const param = () => { resolve(); };
      const param = (resolve) => { resolve(); };
      return new Promise(param);
    });
    it('using `Promise.resolve()`', () => {
      //// return Promise.reject('all fine');
      return Promise.resolve('all fine');
    });
  });
  describe('a rejected promise', () => {
    it('using the constructor parameter', (done) => {
      //// const promise = new Promise((reject) => { reject(); });
      const promise = new Promise((_, reject) => { reject(); });
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
    it('via `Promise.reject()`', (done) => {
      //// const promise = Promise.resolve();
      const promise = Promise.reject();
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });
  describe('`Promise.all()`', () => {
    it('`Promise.all([p1, p2])` resolves when all promises resolve', () => {
      //// return Promise.all([Promise.resolve(), Promise.reject(), Promise.resolve()])
      return Promise.all([Promise.resolve(), Promise.resolve()])
    });
    it('`Promise.all([p1, p2])` rejects when a promise is rejected', (done) => {
      //// Promise.all([Promise.resolve()])
      Promise.all([Promise.resolve(), Promise.reject()])
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    });
  });
  describe('`Promise.race()`', () => {
    it('`Promise.race([p1, p2])` resolves/reject when one of the promises resolves/rejects', () => {
      //// return Promise.race([Promise.reject(), Promise.reject()])
      return Promise.race([Promise.resolve(), Promise.reject()])
    });
    it('`Promise.race([p1, p2])` rejects when one of the promises rejects', (done) => {
      //// Promise.race([Promise.resolve()])
      Promise.race([Promise.reject(), Promise.resolve()])
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    });
    it('`Promise.race([p1, p2])` order matters (and timing)', () => {
      //// return Promise.race([Promise.reject(), Promise.resolve()])
      return Promise.race([Promise.resolve(), Promise.reject()])
    });
  });
});
