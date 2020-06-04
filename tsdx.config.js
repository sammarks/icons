const external = require('rollup-plugin-peer-deps-external');
const reactSvg = require('rollup-plugin-react-svg');
const svgoConfig = require('./svgo.config.json');
const { string } = require('rollup-plugin-string');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    // For the native code, include the SVG files as a string instead of
    // rendered react elements.
    const isNative = options.input.includes('/native.tsx')
    const svgPlugin = isNative
      ? string({ include: '**/*.svg' })
      : reactSvg({ svgo: svgoConfig })
    if (isNative) {
      config.output.file = config.output.file.replace('dist/icons.', 'native/icons.')
    }
    config.plugins = [
      external(),
      svgPlugin,
      ...config.plugins,
    ];

    return config;
  },
};
