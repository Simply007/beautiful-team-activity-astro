import { defineConfig } from "astro/config";
import kontentAiAstro from "@simply007org/kontent-ai-astro";
import contentful from "contentful-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    kontentAiAstro({
      deliveryClientConfig: {
        environmentId: "f9397322-2816-00bd-c3d1-8686576112ae",
      },
      components: {
        // add your components here
        test: "components/Test",
      },
    }),
    // contentful({
    //   space: "iz8i3gwvhfzc",
    //   accessToken:
    //     "676373b2825f233d66488d4354f264535275faebcdee4bfc45cf15c68ee472e4",
    //   components: {
    //     test: "components/Test",
    //   },
    // }),
  ],
});
