module.exports = {
	env: { browser: true, es2020: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": "warn",
		"no-undef": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
	},
};
