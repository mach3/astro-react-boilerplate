module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard-with-typescript"
  ],
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "extraFileExtensions": [".astro"]
      }
    },
    {
      "files": ["*.tsx"],
      "extends": [
        "plugin:react/recommended",
      ],
      "rules": {
        "react/react-in-jsx-scope": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/triple-slash-reference": "off"
  }
}
