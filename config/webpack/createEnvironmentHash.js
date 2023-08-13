'use strict';

// Import the required module
const { createHash } = require('crypto');

// Export a function that generates an MD5 hash based on the provided environment object.
module.exports = env => {
  // Create a new MD5 hash instance
  const hash = createHash('md5');
  
  // Update the hash with a JSON string representation of the provided environment object
  hash.update(JSON.stringify(env));
  
  // Generate and return the MD5 hash in hexadecimal format
  return hash.digest('hex');
};