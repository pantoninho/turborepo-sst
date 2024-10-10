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
        const counters = new sst.aws.Dynamo("Counters", {
            primaryIndex: { hashKey: "name" },
            fields: { name: "string" },
        });
        new sst.aws.Astro('AstroWebapp', {
            path: 'apps/astro',
            buildCommand: 'npx --yes turbo run build --filter=@org/astro...',
            dev: { command: 'npx --yes turbo run dev --filter=@org/astro...' },
            link: [counters]
        });
        new sst.aws.Nextjs('Docs', {
            path: 'apps/docs',
            buildCommand: 'npx --yes turbo run build --filter=@org/docs^...; npx --yes open-next build',
            dev: { command: 'npx --yes turbo run dev --filter=@org/docs...' }
        });
    },
});
