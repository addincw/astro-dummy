import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://classy-sunburst-1a2a6c.netlify.app/",
  integrations: [preact()]
});