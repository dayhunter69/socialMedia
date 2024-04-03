module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked", // Update this line
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked", // Add this line
    "plugin:react/recommended", // Add this line
    "plugin:react/jsx-runtime", // Add this line
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"], // Add this line
    tsconfigRootDir: __dirname, // Add this line
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "@typescript-eslint/no-var-requires": "off", // Keep this existing rule
  },
};
