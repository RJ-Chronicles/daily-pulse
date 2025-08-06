const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];
