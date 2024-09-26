// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import aws from "astro-sst";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: aws(),
    integrations: [react(), tailwind()],
});
