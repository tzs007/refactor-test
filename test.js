const assert = require('assert');
const getCustomModuleNumber = require('./index');

it('should return the max number in module name', () => {
  assert.equal(getCustomModuleNumber(), 11);
});
