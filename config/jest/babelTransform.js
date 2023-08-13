'use strict';

// Import the babel-jest module
const babelJest = require('babel-jest').default;

// Determine if the JSX runtime should be used based on environment variables
const hasJsxRuntime = (() => {
  // Check if the new JSX transform is disabled via environment variable
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    // Try to resolve the 'react/jsx-runtime' module
    require.resolve('react/jsx-runtime');
    return true; // JSX runtime is available
  } catch (e) {
    return false; // JSX runtime is not available
  }
})();

// Export a Babel transformer with specific configuration
module.exports = babelJest.createTransformer({
  presets: [
    [
      // Use the 'babel-preset-react-app' preset with runtime configuration
      require.resolve('babel-preset-react-app'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic', // Choose JSX runtime type
      },
    ],
  ],
  babelrc: false, // Disable loading .babelrc configuration files
  configFile: false, // Disable loading Babel configuration files
});
