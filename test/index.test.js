const assert = require('assert');
const { greet } = require('../index.js');

assert.strictEqual(greet(), 'Hello, World!');
assert.strictEqual(greet('Buildkite'), 'Hello, Buildkite!');

console.log('All tests passed.');
