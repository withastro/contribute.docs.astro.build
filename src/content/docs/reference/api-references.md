---
title: API references
description: How to format API reference entries.
---
Consistent formatting makes it easier for people to find the information they're looking for!

When adding or editing a reference entry, please start your entry with the following standard formatting:

```astro
##### `page.url.first`

<Meta version="4.12.0">`string | undefined`</Meta>
```

## Things to check

- The entry has a heading so that it can be directly linked to.
- The heading text is the name of the property/item, formatted as inline code. (e.g. `getStaticPaths()`, `width`)
- There is a `<Meta />` component that includes information about the type, default (if applicable), and version number.
- The text entry starts with a **definition** of what the property **is** or **does**.

## Full API reference example

```astro wrap
### `navigate()`

<Meta version="3.2.0">`(href: string, options?: Options) => void`</Meta>

A function that executes a navigation to the given `href` using the View Transitions API.

This function signature is based on the [`navigate` function from the browser Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate). Although based on the Navigation API, this function is implemented on top of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to allow for navigation without reloading the page.

#### `history`

<Meta default="`'auto'`" version="3.2.0">
`'auto' | 'push' | 'replace'`
</Meta>

Defines how this navigation should be added to the browser history.

- `'push'`: the router will use `history.pushState` to create a new entry in the browser history.
- `'replace'`: the router will use `history.replaceState` to update the URL without adding a new entry into navigation.
- `'auto'` (default): the router will attempt `history.pushState`, but if the URL cannot be transitioned to, the current URL will remain with no changes to the browser history.

This option follows the [`history` option](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate#history) from the browser Navigation API but simplified for the cases that can happen on an Astro project.
```
