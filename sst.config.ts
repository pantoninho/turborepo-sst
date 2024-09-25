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
        const WebApp = new sst.aws.Astro('WebApp', { path: 'apps/astro-webapp' });
    },
});
