const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: [
        "turbo",
        "plugin:tailwindcss/recommended",
        require.resolve("@vercel/style-guide/eslint/typescript"),
        "plugin:astro/recommended",
    ],
    parserOptions: { project },
    ignorePatterns: ["node_modules/", "dist/"],
    settings: {
        "import/resolver": {
            typescript: { project },
            node: {
                extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        "no-console": "warn",
    },
    overrides: [
        {
            files: ["*.tsx"],
            extends: [
                require.resolve("@vercel/style-guide/eslint/node"),
                require.resolve("@vercel/style-guide/eslint/browser"),
                require.resolve("@vercel/style-guide/eslint/react"),
            ],
        },
        {
            // Define the configuration for `.astro` file.
            files: ["*.astro"],
            // Allows Astro components to be parsed.
            parser: "astro-eslint-parser",
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
                project,
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
        // ...
    ],
};
