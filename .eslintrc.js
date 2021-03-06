module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    
    "parser": "@babel/eslint-parser",
    "parserOptions": {
      "ecmaVersion": 2020,
      "requireConfigFile": false,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "rules": {
      "no-debugger": "off",
      "no-console": "off",
      "no-unused-vars": "warn",
      "react/prop-types": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "root": true
}