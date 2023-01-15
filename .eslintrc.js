module.exports = {
	"env": {
		"browser": true,
		"amd": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
	],
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"requireConfigFile": false,
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [1, "tab"],
		"no-unused-vars": 1
	}
}
