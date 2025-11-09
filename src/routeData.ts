import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const { entry } = context.locals.starlightRoute;

  const ogImageUrl = "/open-graph/" + (entry.id || "index") + ".png";
  const canonicalImageSrc = new URL(ogImageUrl, context.site);

  const { head } = context.locals.starlightRoute;

  head.push({
    tag: "meta",
    attrs: { property: "og:image", content: canonicalImageSrc.href },
  });
  head.push({
    tag: "meta",
    attrs: { name: "twitter:image", content: canonicalImageSrc.href },
  });
});
