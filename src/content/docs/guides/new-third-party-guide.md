---
title: Adding an Astro + X guide
description: Guide to contributing a new third-party guide (CMS, backend, deploy).
---

If you'd like to add a new guide to using Astro with a third-party CMS, backend service or deploy host, the first step is to create a new "stub" page. 

Creating a stub page involves adding a logo and creating a short page of content using a template. New stubs do not require much editing effort and can often be merged into docs quickly. 

We recommend first creating a stub and linking to other guides (official guides, starter templates and tutorials, as well as community blog posts or videos) so that the new page will be available soon. Then, if you want to provide a full guide that requires testing and editing from our Docs team, additional content can be added at a later date. 

Submissions for full guides without first creating a stub page may be refused.

## Creating a Stub page

- Upload an optimized SVG logo to [the public `logos` folder](https://github.com/withastro/docs/tree/main/public/logos) named for your service
    - e.g. `keystatic.svg`
- Add an entry for your service in [the `logos.ts` data file](https://github.com/withastro/docs/blob/main/src/data/logos.ts) of the form:
    - e.g. `keystatic: { file: 'keystatic.svg', padding: '0' },`
- Create a new MDX page named for your service in [the CMS guides content folder](https://github.com/withastro/docs/tree/main/src/content/docs/en/guides/cms)
    - e.g. `keystatic.mdx`
- Use an existing guide as a reference, and the following frontmatter values in your `.mdx` file:
    ```
    ---
    title: Keystatic & Astro
    description: Add content to your Astro project using Keystatic as a CMS
    type: cms
    service: Keystatic
    i18nReady: true
    stub: true
    ---
    ```
- Write a single line description of your service. This should be factual, and not marketing-speak:
    ```
    [Keystatic](https://keystatic.com/) is an open source, headless content-management system that allows you to structure your content and sync it with GitHub.
    ```
- Use only the following `##` (`<h2>`) headings in the body of the file as needed, and add any appropriate content.
    ```
    ## Official Resources

    - Check out [the official Keystatic guide](https://keystatic.com/docs/installation-astro)
    - [Keystatic starter template](https://github.com/Thinkmill/keystatic/tree/main/templates/astro)

    ## Community Resources
    ```

 You can use this past PR for CaisyCMS as a model: https://github.com/withastro/docs/pull/3749/files

 If you decide to extend your stub into a full-guide, please consult the [Recipe Writing Guide](https://astro-docs-docs.netlify.app/guides/recipe-writing/) for more information about writing step-by-step guides for Astro docs.
