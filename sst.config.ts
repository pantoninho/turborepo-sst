/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "sst-turborepo-starter",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
        };
    },
    async run() {
        new sst.aws.Astro('WebApp', {
            buildCommand: 'npx turbo build --filter=astro-webapp...',
            dev: {
                command: 'npx turbo run dev --filter=astro-webapp...',
            }
        });
        new sst.aws.Nextjs('Docs', {
            buildCommand: 'npx turbo build --filter=docs...',
            dev: {
                command: 'npx turbo run dev --filter=docs...',
            }
        });
    },
});
