module.exports = {
  "stories": [
    "../components/LoginForm/LoginForm.stories.js",
    "../components/MapSlideUp/MapSlideUp.stories.js",
    "../components/SingleFbCard/SingleFbCard.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-next'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}