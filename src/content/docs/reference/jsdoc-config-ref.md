---
title: JSDoc Config Reference entries
description: How to format API reference entries.
---

The source documentation for the [configuration reference page](https://docs.astro.build/en/reference/configuration-reference/) is located in the main `withastro/astro` repository at: https://github.com/withastro/astro/blob/next/packages/astro/src/types/public/config.ts

Each entry is written in [JSDoc](https://jsdoc.app/), an API documentation generator for JavaScript. It is then converted to MDX for the docs repo, with entries displayed in the same order the entries are written in the source file.

## File Structure

The `config.ts` file is long, and can be difficult to navigate when you are used to Markdown files!

Instead of Markdown heading indicators (e.g. `##`), this file relies on the `@kind` tag of each item to describe the heading level that will be created on the configuration reference page:

- `@kind: heading` creates `<h2>` headings for the page.

	(e.g. Markdown Options)

- when the tag is not used, defaults to an `<h3>` main entry for the page.

	(e.g. `markdown.syntaxHighlight`)

- `@kind: h4` is used when you have subproperties to define.

	(e.g. `markdown.syntaxHighlight.excludeLangs`)

To add a new entery, you will need to:

- Find or create the heading for your entry (e.g. Top Level Options, Markdown Options, Build Options).
- Add a JSDoc entry in the same location as you want it to appear on the docs page, at the appropriate heading level.

The following sections on this page describe the [basic JSDoc syntax](#jsdoc-syntax), the [common JSDoc tags](#common-jsdoc-tags) we use, and the various heading level entries you may need to create: [categories](#categories-h2), [main entries](#main-entries-h3), and [subproperties](#subproperties-h4). Some [tips for writing your entry](#description-writing-tips) are also included!

## Example entry

The following is the JSDoc code for the `build.assets` configuration reference entry:

```ts wrap
/**
 * @docs
 * @name build.assets
 * @type {string}
 * @default `'_astro'`
 * @see outDir
 * @version 2.0.0
 * @description
 * Specifies the directory in the build output where Astro-generated assets (bundled JS and CSS for example) should live.
 *
 * ```js
 * {
 *   build: {
 *     assets: '_custom'
 *   }
 * }
 * ```
 */
assets?: string;
```

## JSDoc syntax

- Each comment must start with `/**` in order to be recognized by the JSDoc parser.
- Each new line begins with `*` followed by a space
- The last line to end the comment must be `*/`
- Immediately after (and outside of) the JSDoc comment, write the property being documented.

## Common JSDoc tags

Astro uses the following JSDoc tags to produce entries on the configuration reference page:

- `@docs`: indicates that the following entry should be used to generate a documentation entry

- `@name`: the heading text to display (i.e. the category name or the entry name)

- `@kind`: specifies the heading level of the entry; defaults to `h3`

- `@type`: the type of the entry (e.g. `{string}`, `{('static' | 'server')}`)

- `@default`: the default value or option

- `@see`: a suggested "See Also" entry

- `@version`: the version of Astro in which the feature was released (as stable)

- `@description`: indicates that the following text should be the body text of the entry. See [writing tips](#description-writing-tips) for guidance on writing the body of the description.


## Categories (`<h2>`)

Entries are separated by categories that are defined as **headings**. These become `<h2>` level headings on the page.

Use `@kind heading` to indicate that your entry is a new category of entries. You can optionally add a `@description` tag to display text before the first entry:

```ts {18-19}
export interface AstroUserConfig {
  /**
   * @docs
   * @kind heading
   * @name Top-Level Options
   */
   * // ... //
  /**
   * @docs
   * @kind heading
   * @name Build Options
   */
   * // ... //
  /**
   * @docs
   * @kind heading
   * @name Server Options
   * @description
   * Customize the Astro dev server, used by both `astro dev` and `astro preview`.
   * // ... //
}
```

## Main Entries (`<h3>`)

Unless specified, each new entry will be written as an `<h3>` level heading and will be visible in the configuration reference page's table of contents.

```ts wrap
/**
 * @docs
 * @name site
 * @type {string}
 * @description
 * Your final, deployed URL. Astro uses this full URL to generate your sitemap and canonical URLs in your final build. It is strongly recommended that you set this configuration to get the most out of Astro.
 *
 * ```js
 * {
 *   site: 'https://www.my-site.dev'
 * }
 * ```
 */
site?: string;

/**
 * @docs
 * @name trailingSlash
 * @type {('always' | 'never' | 'ignore')}
 * @default `'ignore'`
 * @see build.format
 * @description
 * Set the route matching behavior of the dev server.
 * 
 * Choose from the following options:
 *   - `'always'` - Only match URLs that include a trailing slash (ex: "/about/")
 *   - `'never'` - Never match URLs that include a trailing slash (ex: "/about")
 *   - `'ignore'` - Match URLs regardless of whether a trailing "/" exists
 *
 * Use this configuration option if your production host has strict handling of how trailing slashes work or do not work.
 *
 * You can also set this if you prefer to be more strict yourself, so that URLs with or without trailing slashes won't work during development.
 *
 * ```js
 * {
 *   // Example: Require a trailing slash during development
 *   trailingSlash: 'always'
 * }
 * ```
 */
trailingSlash?: 'always' | 'never' | 'ignore';
```

## Subproperties (`<h4>`)

For subproperties, for example to document a main entry's options, you must use `@kind` to specify their heading level (usually `<h4>`). Otherwise, the entry is written the same as a main entry.


## Things to check

- Entries should be added in the proper category. They will appear in the order listed in the source file.
- Only top-level main entries of the category do not require a `@kind` tag to indicate a heading level.
- Some characters might need escaping.
- Version numbers should refer to stable release both of Astro and of the feature.

## `@description` writing tips

Our reference pages are intended to be short, but comprehensive descriptions of API properties. They should answer "what", but not get into lengthy explanations of "why" or "how."

At a minimum, your description must include a [definition](#definition), an explanation of the possible [values](#values) for the entry, and an [example configured value](#example-configured-value).

### Definition

Each reference entry begins with a definition of the configuration value. These are concise descriptions that answer the question "What is this?" or "What does this do?"

The first line begins with an assumed (but not written) "This is..."

- An array of allowed hosts
- The base path to deploy to

Or, when describing what a value does, an assumed "This...":

- Specifies the output target for builds
- Enables security measures for an Astro website

```ts {8}
/**
 * @docs
 * @name outDir
 * @type {string}
 * @default `"./dist"`
 * @see build.server
 * @description
 * Sets the directory that `astro build` writes your final build to.
 *
 * The value can be either an absolute file system path or a path relative to the project root.
 *
 * ```js
 * {
 *   outDir: './my-custom-build-directory'
 * }
 * ```
 */
outDir?: string;
```

### Values

One of the most important parts of the entry is to enumerate and explain the possible values. People need to know which values they can set, and understand the options well enough to decide which value to choose.

```ts {10}
/**
 * @docs
 * @name server.open
 * @type {string | boolean}
 * @default `false`
 * @version 4.1.0
 * @description
 * Controls whether the dev server should open in your browser window on startup.
 *
 * Pass a full URL string (e.g. "http://example.com") or a pathname (e.g. "/about") to specify the URL to open.
 *
 * ```js
 * {
 *   server: { open: "/about" }
 * }
 * ```
 */
```

Use an unordered list to define a set of options:

```ts {10-13}
/**
 * @docs
 * @name build.inlineStylesheets
 * @type {('always' | 'auto' | 'never')}
 * @default `auto`
 * @version 2.6.0
 * @description
 * Controls whether project styles are sent to the browser in a separate css file or inlined into `<style>` tags.
 * 
 * Choose from the following options:
 *  - `'always'` - project styles are inlined into `<style>` tags
 *  - `'auto'` - only stylesheets smaller than `ViteConfig.build.assetsInlineLimit` (default: 4kb) are inlined. Otherwise, project styles are sent in external stylesheets.
 *  - `'never'` - project styles are sent in external stylesheets
 *
 * ```js
 * {
 * 	build: {
 *		inlineStylesheets: `never`,
 * 	},
 * }
 * ```
 */
inlineStylesheets?: 'always' | 'auto' | 'never';
```

### Example configured value

Each entry must show a code example of the value that is being configured. Use a Markdown code block with `js` as the code language.

```ts {12-16}
/**
 * @docs
 * @name outDir
 * @type {string}
 * @default `"./dist"`
 * @see build.server
 * @description
 * Set the directory that `astro build` writes your final build to.
 *
 * The value can be either an absolute file system path or a path relative to the project root.
 *
 * ```js
 * {
 *   outDir: './my-custom-build-directory'
 * }
 * ```
 */
outDir?: string;
```

Check existing entries on the docs configuration reference page for more examples of typical formats. 