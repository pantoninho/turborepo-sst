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
            path: 'apps/astro-webapp',
            buildCommand: 'npx --yes turbo run build --filter=@org/webapp...',
            dev: { command: 'npx --yes turbo run dev --filter=@org/webapp...' }
        });
        new sst.aws.Nextjs('Docs', {
            path: 'apps/docs',
            buildCommand: 'npx --yes turbo run build --filter=@org/docs^...; npx --yes open-next build',
            dev: { command: 'npx --yes turbo run dev --filter=@org/docs...' }
        });
    },
});
