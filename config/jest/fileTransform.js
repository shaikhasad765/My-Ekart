'use strict';

// Import required modules
const path = require('path');
const camelcase = require('camelcase');

// This is a custom Jest transformer that transforms file imports into filenames.
// For more information, see: http://facebook.github.io/jest/docs/en/webpack.html
module.exports = {
  // The `process` function transforms the source code and filename.
  process(src, filename) {
    // Get the basename of the filename and create a JSON string of it.
    const assetFilename = JSON.stringify(path.basename(filename));

    if (filename.match(/\.svg$/)) {
      // If the file has an SVG extension
      // Generate a PascalCase component name based on the SVG filename.
      const pascalCaseFilename = camelcase(path.parse(filename).name, {
        pascalCase: true,
      });

      // Construct a React component for the SVG
      const componentName = `Svg${pascalCaseFilename}`;
      return `const React = require('react');
      module.exports = {
        __esModule: true,
        default: ${assetFilename},
        ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
          return {
            $$typeof: Symbol.for('react.element'),
            type: 'svg',
            ref: ref,
            key: null,
            props: Object.assign({}, props, {
              children: ${assetFilename}
            })
          };
        }),
      };`;
    }

    // For non-SVG files, simply export the asset filename.
    return `module.exports = ${assetFilename};`;
  },
};
