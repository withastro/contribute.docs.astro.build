---
title: JSDoc in `astro` repo
description: How to format API reference entries.
---
Some of the content for the Astro Docs website lives in the main `withastro/astro` repository and is written using JSDoc.

## Configuration reference

The source documentation for the configuration reference page is located at:

Astro v4: <br/>
https://github.com/withastro/astro/blob/main/packages/astro/src/%40types/astro.ts

Astro v5 beta:<br/>
https://github.com/withastro/astro/blob/next/packages/astro/src/types/public/config.ts

## Common JSDoc tags

Astro uses the following JSDoc tags to produce entries on the configuration reference page:

- `@docs`: indicates that the following entry should be used to generate a documentation entry

- `@name`: the heading text to display (name of the property/entry)

- `@description`: indicates that the following text should be the body text of the entry

- `@kind`: used to specify the heading level of the entry; defaults to `h3`

- `@type`: the type of the entry (e.g. `{string}`, `{('static' | 'server')}`)

- `@default`: the default value or option

- `@version`: the version of Astro in which the feature was released (as stable)

- `@see`: a suggested "See Also" entry


## Categories (`<h2>`)

Entries are separated by categories that are defined as **headings**. These become `<h2>` level headings on the page.

Use `@kind heading` to indicate that your entry is a new category of entries. You can optionally add a `@description` tag to display text before the first entry:

```ts
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
   *
   * Customize the Astro dev server, used by both `astro dev` and `astro preview`.
   * // ... //
}
```

## Main Entries (`<h3>`)

Unless specified, each new entry will be written as an `<h3>` level heading and will be visible in the configuration reference page's table of contents.

```ts
	/**
	 * @docs
	 * @name site
	 * @type {string}
	 * @description
   * 
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
	 *
	 * Set the route matching behavior of the dev server. Choose from the following options:
	 *   - `'always'` - Only match URLs that include a trailing slash (ex: "/foo/")
	 *   - `'never'` - Never match URLs that include a trailing slash (ex: "/foo")
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

## Sub-headings

Further sub-headings that are not shown in the page table of contents, for example to document a main entry's options, must use `@kind` to specify their heading level.

For example, to document `security.checkOrigin` as a subheading of the main `security` option, add `@kind h4`:

```ts
/**
   * @docs
   * @name security.checkOrigin
   * @kind h4
   * @type {boolean}
   * @default `true`
   * @version 4.9.0
   * @description
   *
   * Performs a check that the "origin" header, automatically passed by all modern browsers, matches the URL sent by each `Request`. This is used to provide Cross-Site Request Forgery (CSRF) protection.
   *
   * The "origin" check is executed only for pages rendered on demand, and only for the requests `POST`, `PATCH`, `DELETE` and `PUT` with
   * one of the following `content-type` headers: `'application/x-www-form-urlencoded'`, `'multipart/form-data'`, `'text/plain'`.
   *
   * If the "origin" header doesn't match the `pathname` of the request, Astro will return a 403 status code and will not render the page.
   */

  checkOrigin?: boolean;
```

## Things to check

- Entries should be added in the proper category. They will appear in the order listed in the source file.
- Only top-level main entries of the category do not require a `@kind` tag to indicate a heading level.
- Some characters might need escaping.
- Version numbers should refer to stable release both of Astro and of the feature.
