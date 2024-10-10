import type { Config } from "tailwindcss";
import uiConfig from "@org/ui/tailwind.config";

const config: Config = {
    content: ["./src/**/*.{tsx,astro}"],
    presets: [uiConfig],
};

export default config;
