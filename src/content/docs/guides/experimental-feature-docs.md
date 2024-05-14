---
title: Adding docs for experimental features
description: A guide to writing docs for your feature released behind an experimental flag.
---

## Unflagging an experimental feature 

Key things:

- noting when this experimental flag was first introduced (there might be some helpful context for someone just now learning about this in case they wants to look up what we said about this when it was first released, either in the changelog or blog post)

- a description of what it is, because it is now essentially a "new feature" of Astro! (I took from the earlier changelog for an example) and some people ignore experimental features. They might have no idea what this is, and it deserves just as much description/fanfare as when it was released as experimental!

- "If you were using this feature..." and code showing removing the experimental flag. (Prompt because this may break projects)

- "If you have been waiting for stabilization before using.... , you can now do so." (Reminding them that maybe they saw this before and thought, "I'll wait!")

- link to finding more info in the docs

Example:


The `i18nDomains` routing feature introduced behind a flag in [v3.4.0](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md#430) is no longer experimental and is available for general use.

This routing option allows you to configure different domains for individual locales in entirely server-rendered projects using the [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) or [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) adapter with a `site` configured.

If you were using this feature, please remove the experimental flag from your Astro config:

```diff
import { defineConfig } from 'astro'

export default defineConfig({
-  experimental: {
-    i18nDomains: true,
-  }
})
```

If you have been waiting for stabilization before using this routing option, you can now do so. 

Please see [the internationalization docs](https://docs.astro.build/en/guides/internationalization/#domains) for more about this feature.