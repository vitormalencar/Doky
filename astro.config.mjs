import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://maykbrito.github.io/doky",
  integrations: [
    starlight({
      title: "Doky",
      social: {
        github: "https://github.com/maykbrito/doky",
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
