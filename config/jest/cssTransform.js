'use strict';

// This is a custom Jest transformer that converts style imports into empty objects.
// For more information, see: http://facebook.github.io/jest/docs/en/webpack.html
module.exports = {
  // The `process` function transforms style imports into an empty object.
  process() {
    return 'module.exports = {};'; // Return an empty object
  },
  
  // The `getCacheKey` function returns a static cache key.
  getCacheKey() {
    // Since the output of the `process` function is always the same, the cache key is constant.
    return 'cssTransform';
  },
};
