const path = require('path');
const fs = require('fs');
const { ESLINT_MODES } = require('@craco/craco');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file
  },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css'
        }
      ]
    ]
  },
  webpack: {
    'react-dom': '@hot-loader/react-dom',
    alias: { '@': resolveApp('src') }
  },
  plugins: [{ plugin: require('craco-plugin-react-hot-reload') }, { plugin: require('craco-cesium')() }]
};
