---
title: Custom components
description: A guide to using the custom components available in Astro Docs.
---

In addition to [all available Starlight components](https://starlight.astro.build/components/using-components/), Astro Docs uses several custom components that are available for use in any `.mdx` files. Note that these components cannot be used for docs that live in the `astro` core repo (e.g. configuration reference, error reference docs). Be sure to always check a preview of your components in the browser to ensure they are rendering properly.

## Custom components

### Aside Component

Sometimes in documentation you want to provide information that is complementary but not strictly part of the current text or call out something that is particularly important. For example, maybe you want to include a tip that isn’t essential but could be helpful or warn a reader about a potential pitfall.

For these use cases you can use our aside component. This is an accessible component, based on the [recommended markup from the BBC’s GEL design system](https://bbc.github.io/gel/components/breakout-boxes/#recommended-markup).

The component has **note**, **tip**, **caution** and **danger** variants with colour, iconography, and default labelling distinct for each.

You can use a simple custom syntax to use the component in Markdown and also avoid needing to import it in the frontmatter all the time.

```
:::tip
It’s best to avoid using `<blockquote>` for things that aren’t quotes.
:::
```

The syntax also supports custom titles for the asides:

```
:::caution[Deprecated]
Using `<blockquote>` for notes is deprecated.
:::
```

You can see all three currently-used styles (we don't have any "danger" yet!) in action on the [Astro Components Page](https://docs.astro.build/en/core-concepts/astro-components/).

### Badge Component

Sometimes it is helpful to add a small badge to some content to label or highlight it. You can use the `<Badge />` component for this.

Badges work best when they only contain a single word or — at a push — two words. Think of them as a tag or label for something, not a way to highlight longer passages of text.

```mdx
import Badge from '~/components/Badge.astro';

<Badge>Nice</Badge>
```

By default, the badge uses a muted colour scheme to blend in. It also has an accented variant that can be used if you need it to stand out more from the surrounding context:

```mdx
<Badge variant="accent">Wow!</Badge>
```

#### Examples

- The [Editor Setup](https://docs.astro.build/en/editor-setup/#other-code-editors) page uses `<Badge />` to distinguish community and official editor support.
- The [Deployment guides navigation component](https://docs.astro.build/en/guides/deploy/) uses `<Badge />` internally to label the deployment types each service supports.

### Since Component

As features are added to Astro, it can be helpful to document *when* they were added. This allows users to easily see if the version of Astro (or other packages) they are running supports a specific feature as described in the docs.

You can use the `<Since />` component to display this information in a standardized way.

This component takes two props:

- A `v` prop, which indicates the version of the package in which the feature was added.
- A `pkg` prop, which indicates which package is being documented. This is optional and will default to `'astro'` so is only required when using `<Since />` for other packages.

```mdx
import Since from '~/components/Since.astro';

<p><Since v="1.0.0" /></p>
```

This will render the text “**Added in:** `astro@1.0.0`”.

The advantages of using the component include:

- “Added in” is automatically translated on pages in other languages.
- The passed version is checked against the current package version and “NEW” or “BETA” badges will be added automatically based on data from npm.

#### Examples

The standard usage of this component is on its own line, immediately following the feature's heading, for example:

```mdx
## `Astro.clientAddress`

<p><Since v="1.0.0-rc" /></p>

Specifies the IP address of the request. This property is only available when building for SSR (server-side rendering) and should not be used for static sites.
```

Or, it can be used in a short block of information, for example:

```mdx
### `server.host`

Type: `string | boolean`
Default: `false`
<Since v="0.24.0" />
```

Setting a custom package name helps us document integrations and other packages. For example:

```mdx
<Since v="2.1.0" pkg="@astrojs/rss" />
```

### Latest version Component

Sometimes it may be useful to display the latest version of a package on a page. For this, you can use the `<Version />` component, which must receive a valid package name from the npm registry as its `pkgName` prop.

```md
Astro's latest version:  <Version pkgName="astro" />
```

This will render **Astro's latest version: v1.2.1**.

The `<Version />` component is currently used in our Integrations pages as a way to keep each integration’s version up-to-date without having to merge changes to these pages directly. It's worth noting that this component is only updated at build-time, thus a package's version will not change until the site is rebuilt, be it manually or because a new PR was merged into main.

### Tabs Component

Astro Docs uses a `<Tabs>` component to allow readers to choose between different content views. You may also use [Starlight's `<Tabs>` component](https://starlight.astro.build/components/tabs/).

There are also two variants of this component, `<PackageManagerTabs>` and `<UIFrameworkTabs>`, for our most common use cases where readers might be interested in only one of several instructions or code samples: package managers and UI frameworks. Other custom components may be added over time. You can find all existing Tabs variations in `src/components/tabs/`.

Note that these components share state, so if a reader changes the active tab of one `<PackageManagerTabs>` or `<UIFrameworkTabs>` component, then all other instances of this component on the same page will also change. This allows the reader to see the same content choice by default while reading through the entire page.

#### Examples

To use an existing Tabs component (e.g. `<PackageManagerTabs>` , `<UIFrameworkTabs>`), import it in the `.mdx` file:

```mdx
import InstallGuideTabGroup from '~/components/TabGroup/InstallGuideTabGroup.astro';
import PackageManagerTabs from '~/components/tabs/PackageManagerTabs.astro'
```

Then, create a `<Fragment>` for each tab. The fragment's slot name will identify the tab label and the content between the opening and closing `<Fragment>...</Fragment>` tags will be the panel content.

Here is an example of `<PackageManagerTabs>` showing the `create astro` commands from our [Automatic Astro Installation](https://docs.astro.build/en/install/auto/#1-run-the-setup-wizard) page.

````jsx
<PackageManagerTabs>
  <Fragment slot="npm">
  ```shell
  # create a new project with npm
  npm create astro@latest
  ```
  </Fragment>
  <Fragment slot="pnpm">
  ```shell
  # create a new project with pnpm
  pnpm create astro@latest
  ```
  </Fragment>
  <Fragment slot="yarn">
  ```shell
  # create a new project with yarn
  yarn create astro
  ```
  </Fragment>
</PackageManagerTabs>
````

#### Creating your own custom Tabs component variation

If necessary, you can also create your own custom Tabs component using the base `Tabs.tsx` component. To do this, create a new Astro component in the [`src/components/tabs`](https://github.com/withastro/docs/blob/main/src/components/tabs/) directory, e.g. `MyCustomTabs.astro`. (Do not use `<Tabs>` directly in a Markdown page. Create your own component instead.)

Inside `MyCustomTabs.jsx`, import the Tabs component and create one `<Tabs>` component. Be sure to include the `client:visible` directive and give a unique name to the `sharedStore`. Each created Tabs component should have its own `sharedStore` to avoid unrelated tabs changing one another accidentally.

```astro
---
import Tabs from './Tabs';
---
<Tabs client:idle sharedStore="my-shared-store">
</Tabs>
```

To create your custom tab component, follow the pattern below using a `<Fragment>` with a named slot for each tab and panel to be created. Note that you must define your tab names here (e.g. Preact, React, Solid, Svelte, Vue), but the content for each panel will be written when your custom component is imported and used in a Markdown page, as in the previous `<PackageManagerTabs>` example.

```jsx
---
import Tabs from './Tabs';
---

<Tabs client:idle sharedStore="ui-frameworks">
 <Fragment slot="tab.preact">Preact</Fragment>
 <Fragment slot="tab.react">React</Fragment>
 <Fragment slot="tab.solid">Solid</Fragment>
 <Fragment slot="tab.svelte">Svelte</Fragment>
 <Fragment slot="tab.vue">Vue</Fragment>

 <Fragment slot="panel.preact"><slot name="preact" /></Fragment>
 <Fragment slot="panel.react"><slot name="react" /></Fragment>
 <Fragment slot="panel.solid"><slot name="solid" /></Fragment>
 <Fragment slot="panel.svelte"><slot name="svelte" /></Fragment>
 <Fragment slot="panel.vue"><slot name="vue" /></Fragment>
</Tabs>
```

The tabs will be displayed in alphabetical order, according to the slot name (e.g. `tab.*` and `panel.*`). For custom ordering, you can prefix your slot names with numbers (e.g. `tab.1.react`, `tab.2.preact`).

### Related recipe links

Astro Docs uses a `<RecipeLink>` component for displaying links to recipes with consistent styling. This is helpful when some page content has one or more relevant recipes you want to link to.

`<RecipeLink>` takes a single `slugs` prop, which is an array of the slugs of the recipes you want to link to. A slug has no leading or trailing slash and should match the language of the page you are currently on. For example, use `pt-br/recipes/captcha` on a Brazilian Portuguese page and not `en/recipes/captcha`.

```mdx
import RecipeLinks from "~/components/RecipeLinks.astro";

<RecipeLinks slugs={["en/recipes/captcha", "en/recipes/build-forms-api"]}/>
```

### Read More component

Astro Docs uses a `<ReadMore>` component for displaying internal links to related content with consistent styling. It uses an open book icon to indicate that there is more information somewhere else in docs.

Wrap any text in `<ReadMore></ReadMore>` to display the icon before your text. The component does not add any additional text, so include words like "Read more about..." in your text directly.

Use [meaningful link text](https://wcag.com/blog/writing-meaningful-link-text/) that gives the reader an indication of where the link will take them. For internal links to other Astro concepts, use the concept or page title as your link text instead of text like `[here]` (does not say what information is at the link) or `[Astro Docs]` (you're already *in* Astro Docs!)


```mdx
import ReadMore from "~/components/ReadMore.astro";

<ReadMore>Read more about [dynamic routing in Astro](/en/guides/routing/#dynamic-routes).</ReadMore>
```

## Starlight components

Please see [Starlights component documentation]() for all available Starlight components. The ones most often used in Astro docs include:

### FileTree Component

Import and use the [Starlight `<FileTree />` component](https://starlight.astro.build/components/file-tree/) to produce collapsable file trees in docs. Use hyphens (`-`) at different tab depths to show the file structure.

Please remember to add a `/` at the end of a folder name!

```mdx
import { FileTree } from '@astrojs/starlight/components';

### Example Project Tree

A common Astro project directory might look like this:

<FileTree>
- public/
  - robots.txt
  - favicon.svg
  - social-image.png
- src/
  - components/
    - Header.astro
    - Button.jsx
  - layouts/
    - PostLayout.astro
  - pages/
    - posts/
      - post1.md
      - post2.md
      - post3.md
    - index.astro
  - styles/
    - global.css
- astro.config.mjs
- package.json
- tsconfig.json
</FileTree>
```

Hightlighting is available by writing an item in bold. Inline comments may also be added.

```
<FileTree>
- folder/
  - file.js
  - **highlighted-file.ts**
  - file.astro With an inline comment too
</FileTree>
```

### Steps Component

Import and use the [Starlight `<Steps>` component](https://starlight.astro.build/components/steps/) to style numbered lists of tasks.

Remember, not every ordered list is a list of steps to follow! Only use this to show a linear sequence of instructions, and be sure to indent paragraphs and code blocks within each list item.

Wrap `<Steps>` around a standard Markdown ordered list.
All the usual Markdown syntax is applicable inside `<Steps>`.

````mdx title="src/content/docs/example.mdx"
import { Steps } from '@astrojs/starlight/components';

<Steps>

1. Import the component into your MDX file:

   ```js
   import { Steps } from '@astrojs/starlight/components';
   ```

2. Wrap `<Steps>` around your ordered list items.

</Steps>
````

The code above generates the following on the page:

import { Steps } from '@astrojs/starlight/components';

<Steps>

1. Import the component into your MDX file:

   ```js
   import { Steps } from '@astrojs/starlight/components';
   ```

2. Wrap `<Steps>` around your ordered list items.

</Steps>
