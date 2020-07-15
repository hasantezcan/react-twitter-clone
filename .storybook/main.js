const path = require("path");

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register'],
  presets: [path.resolve(__dirname, './next-preset.js')]
}
