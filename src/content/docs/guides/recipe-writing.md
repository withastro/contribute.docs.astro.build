---
title: Contributing a Recipe
description: A guide to writing a recipe for Astro docs.
---

Our recipe format is inspired by Diataxis's [how-to guides](https://diataxis.fr/how-to-guides/). Recipes:

- Provide step-by-step instructions
- Meet a user at a specific starting point by providing a Prerequisites section
- Show how to accomplish a specific task without theoretical explanation
- Use real-world examples

See our [HTML Forms](https://docs.astro.build/en/recipes/build-forms-api/) recipe as an example. It teaches a specific, practical goal (how to build and handle a form). It provides an example that can be modified and incorporated into your project. It uses step-by-step instructions and keeps explanations to a minimum.

Examples that we do not consider to be recipes:
- A blog post in narrative form that reports on what you did instead of structuring concise instructions for the reader to follow. (e.g. "How I finally got content collections set up with my custom remark plugin in my Astro project")
- A walk-through that teaches more than one task. (e.g. "How to set up Vue, TypeScript, and Partytown in Astro")
- A conceptual explanation of a topic, instead of a how-to guide that leads the reader through completing a specific task. (e.g. "How partial hydration works in Astro")
:::tip 
Recipes must follow both our [general writing style](/guides/writing-style/#writing-style), and advice for [writing instructions](/guides/writing-style/#giving-instructions).
:::

## Community Recipes

Community Recipes are external links whose content fits the definition of a recipe: typically short, focused how-to guides on a single topic. This lets us share community resources in our official documentation without requiring long-term maintenance of the content.

They are listed on our [Courses, Guides, and Recipes resource page](https://docs.astro.build/en/community-resources/content/) in docs and can be a post on a personal or company blog, or on your preferred blogging platform like [DEV.to](https://dev.to/). The site must not be behind a paywall or login, as we are committed to sharing resources that are available to everyone. 

This follows the IndieWeb principle of “Publish (on your) Own Site, Syndicate Elsewhere” ([POSSE](https://indieweb.org/POSSE)) and allows us to share and promote your content to the wider Astro community while allowing you to retain full ownership of your content.

After you publish your article, open a PR adding your link to our [Recipes and Guides](https://docs.astro.build/en/community-resources/content/#recipes-and-guides) in the appropriate section for your article's content (e.g CSS, images, animation, etc.)

The link should be of the form `[Post or article title](full URL)` and it should be added to the bottom of the list of existing community recipes. Use the existing entries above it as a guide, and if any changes are necessary, we can make them while reviewing the PR.

Please note that all community recipe PRs will be reviewed to make sure they fit our definition of a recipe (a **step-by-step how-to guide** for **accomplishing a specific task** in Astro). They may also be tested by a Team Docs member who will attempt to follow your recipe and make sure it works. So, while this may seem like a tiny PR, please know that there is work going on behind the scenes and it may take some time to properly evaluate your recipe!


## Add a new official recipe

The Official Recipes section is for officially maintained recipes, found in the `src/content/guides/recipes/` folder. Like the rest of our docs, these must meet the standards of our [Writing Guide](/guides/writing-style/). Unlike community recipes, we commit to the maintenance of these pages and our quality standards for acceptance are higher.

To add an official recipe:

1. Add a new `.mdx` file in the `src/content/guides/recipes/` folder with the following frontmatter: 

    ```mdx
    ---
    title: # start with a verb!  Build, Learn, Add....
    description: # also start with a verb! elaborate on the title
    type: recipe
    i18nReady: false
    ---
    ```

2. Add an introduction: what will the recipe accomplish? (A single sentence or paragraph is fine. Be clear about what the reader will now have or be able to do.)

3. Add a `## Prerequisites` section that includes any required configurations or steps to take before starting the recipe. If your recipe works with any project setup, then please list "An existing Astro project" as a prerequisite.

4. Add a `## Recipe` section that includes a numbered list of steps using [the Steps component](/reference/custom-components/#steps-component) as appropriate.

5. Follow our guidance for [writing instructions](/guides/writing-style/#giving-instructions) that are clear and helpful.

6. If you have external references or links, add a `## Resources` section at the end.
