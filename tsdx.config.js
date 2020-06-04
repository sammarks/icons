const external = require('rollup-plugin-peer-deps-external');
const svgr = require('@svgr/rollup').default

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins = [
      external(),
      svgr({ native: true }),
      ...config.plugins,
    ];

    return config;
  },
};
