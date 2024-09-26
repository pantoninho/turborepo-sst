import type { Config } from "tailwindcss";
import uiConfig from "@org/ui/tailwind.config";
import plugin from 'tailwindcss/plugin'

const config: Config = {
    content: ["./src/**/*.{tsx,astro}"],
    presets: [uiConfig],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        }
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ]
};


export default config;
