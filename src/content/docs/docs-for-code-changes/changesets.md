---
title: Changesets
description: How to write CHANGELOG messages using changesets.
---

You will be responsible for writing a **changeset** for your Astro PR. This is a Markdown file that states:

- which repository has changed
- the kind of change according to [Astro's semantic versioning](https://docs.astro.build/en/upgrade-astro/#semantic-versioning)
- a message describing the change that will be publicly displayed on the repo's CHANGELOG

```md title="my-super-cool-changeset.md" wrap
---
'astro': patch
---
Fixes unexpected `undefined` value when calling an action from the client without a return value
```

## Format

Begin your changeset message with **a present tense verb** that completes a sentence in the style of: "This PR . . ." or "This contribution ..."

- Adds
- Removes
- Fixes
- Updates
- Refactors
- Improves
- Deprecates

Finish the introductory sentence with a message focusing on what has changed that is meaningful to a **user** of Astro. It is usually more helpful to describe the change **as someone building an Astro site will experience it**, instead of describing **how you fixed it**.

### Patch updates

These updates are often fixes, refactors or other small improvements. They are typically not user-facing, and do not require someone to update their own project code. 

Verbs like "fixes" and "refactors" are helpful to let readers know this is an internal or implementation change that they do not need to worry about. At the same time, these messages are helpful to someone who is interested in keeping up with small changes to the codebase. 

 Often one line is enough to describe your change meaningfully to an Astro user:

```md title="my-patch-changeset.md" wrap
---
'astro': patch
---
Fixes a bug where the toolbar audit would incorrectly flag images as above the fold
```

```md title="my-patch-changeset.md" wrap
---
'astro': patch
---
Refactors internal handling of styles and scripts for content collections to improve build performance
```

```md title="my-patch-changeset.md" wrap
---
'astro': patch
---
Updates the `HTMLAttributes` type exported from `astro` to allow data attributes
```

These do not need to be full sentences and do not need end punctuation unless you write multiple sentences.

### New features

Begin your changeset with "Adds" to alert readers that there is something new and mention the names of any new items (options, functions) that have been added directly in the first sentence: 

```md title="my-minor-changeset.md" wrap
---
'astro': minor
---
Adds a new `flamethrow` view transitions animation
<!-- -->
```


Additionally, describe what people are now able to do because of these additions that they could not before. 

The changeset is an opportunity to call people's attention to new things they might wish to try in their Astro project, and may include a code example showing basic usage of the new feature:

``````md wrap title="my-minor-changeset.md"
---
'astro': minor
---
Adds a new, optional property `timeout` for the `client:idle` directive

This value allows you to specify a maximum time to wait, in milliseconds, before hydrating a UI framework component, even if the page is not yet done with its initial load. 

This means you can delay hydration for lower-priority UI elements with more control to ensure your element is interactive within a specified time frame.

```
<Button client:idle={{ timeout: 500 }} />
```
``````

:::tip[Don't hide the good stuff in the changeset!]
CHANGELOGS are often read only once, when someone is updating to the latest version of a package. Documentation is a constant reference that will be revisited and consulted frequently.

Make sure that the helpful explanations and examples for your fellow developers in both your changeset and your PR description are captured in the actual feature documentation, too!
:::

### Breaking changes

Changesets focus on what has changed, and **must include any breaking changes**, including changes to default behavior. Most users will have several default settings configured (often by not setting any value themselves), so changes to defaults can have a significant impact on someone's project!

Verbs like "removes", "changes", and "deprecates" call attention to something that might require attention. Unlike a new feature someone can choose not to use, changing default or expected behavior cannot be ignored.

```md title="my-major-changeset.md" wrap
---
'astro': major
---
Removes support for returning simple objects from endpoints. You must now return a `Response` instead.
```

Changeset messages for breaking changes must also provide clear guidance for updating. Diff code samples are encouraged when appropriate:

``````md title="my-major-changeset.md" wrap
---
'astro': major
---
Removes support for Shiki custom language's `path` property. The language JSON file must now be imported and passed to the option instead.

```diff
// astro.config.js
+ import customLang from './custom.tmLanguage.json'

export default defineConfig({
  markdown: {
    shikiConfig: {
      langs: [
-       { path: './custom.tmLanguage.json' },
+       customLang,
      ],
    },
  },
})
```
``````

If your contribution changes a default value, then it is helpful to describe how to revert back to the previous behavior. Readers may also appreciate being informed that they can remove configuration that is no longer needed.

``````md title="my-major-changeset.md" wrap
---
'astro': major
---
Changes the default value of `security.checkOrigin` to true, which now enables Cross-Site Request Forgery (CSRF) protection by default for pages rendered on demand.

If you had previously configured `security.checkOrigin: true`, you no longer need this set in your Astro config. This is now the default and it is safe to remove.

To revert to the previous default behavior and opt out of automatically checking that the “origin” header matches the URL sent by each request, you must now explicitly set `security.checkOrigin: false`:

```diff
export default defineConfig({
+  security: {
+    checkOrigin: false
+  }
})
```

``````