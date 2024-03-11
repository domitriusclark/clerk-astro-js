import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import astroClerk from "astro-clerk-auth";

export default defineConfig({
  integrations: [
    astroClerk({
      afterSignInUrl: "/",
      afterSignUpUrl: "/",
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});