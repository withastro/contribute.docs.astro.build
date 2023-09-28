---
title: Adding docs for new features
description: A guide to writing docs for your new Astro feature.
---
Use the following guidance to document a new Astro core or integration feature.

If you'd like to see what will go into reviewing your documentation submission, you can see what our reviewers will be looking for in our [PR reviewing guide](/reviewers/1-reviewing-prs/).

## When to involve docs ?

Whenever you are thinking about how the user will use the feature!

It can be useful to get docs involved when you're considering the **user experience** of the feature, configuration option etc. Writing a new config option? Imagine configuring a non-default value *as a journey*. Which file do you have to navigate to? Is it the one you'd expect to go to? What is the name of the configuration setting? Does it accurately describe the user intention and what they are trying to achieve (and not for example what the underlying code or logic is doing, which might be quite different)?

In this way, docs can get involved earlier than you think... As soon as you know what the user story is!

Docs can also help you avoid some unfortunate naming by being an early "user" of the process and by imagining a user's thinking, expectations or possible errors while using the feature.

For example, if your code's logic *filters out* results in order to provide a list of items, but the user sees this as a way to *include* items, there can be the potential for confusing naming. Names that may be accurate but are prone to misspelling, or too close to other similar names, might be easily mistyped or even mixed up with each other.

Docs can help identify a user's thinking based on the end result of using the feature instead of caring about the underlying implementation of the feature.

## When is it too early to get docs involved?

When you can't yet picture how a user will use your feature! 

It's perhaps too early if you can't envision a user path or aren't ultimately clear exactly what a reader would do to use this feature or set this configuration. "I want to make it possible to enable view transitions" is potentially too early if you haven't yet explored whether this will be a sitewide configuration or a per page import.

## What should be documented

If you are adding a new feature to Astro, you must document any new **option**, **configuration**, or **method** that someone building a project with Astro might use.

It is important to clearly **define your new features** in a way that a reader does not have to dig into paragraphs of text to understand them. It is fine to state what something is before you have explained the context in which it is used! 

Start by imagining a reader scanning the page who only wants, or only needs, to understand **what** something is. (They understand the context, and perhaps just need to know which options they can configure.) Even the reader who doesn't know when or why they will use a feature will benefit from a clear explanation of **what** something is first. That reader will then be in a great position to ask, "Oh, and when would I use this?" or "Why would I configure this?" and read further.

Include a basic usage example, following our [guide to including code samples](/guides/code-samples/).

## What should NOT be documented

Generally, you do not need to document implementation details. You may choose to additionally include details that will help people **make decisions as they build their own projects**: choosing when to set a value other than a default, understanding the pros and cons or caveats of certain design decisions, etc. But, implementation details should never be provided **instead** of usage details and real-world examples.

For example, if a reader must choose between setting a value to `include` or `exclude`, describe different situations or goals for which each option is best. Do not instead explain the underlying code logic that powers each option. 

Ultimately, our goal is to document **how to build with Astro** and not **how Astro is built**.

Additionally, you do not need to document all possible usages of your feature. You may include a common advanced case, but you should not document usage that is unsupported or "off the happy path." You are not required to demonstrate all things possible, and in fact too many options can overwhelm someone trying to learn how to use your feature. 

"You can do this, but I wouldn't recommend it..." is **not** something for docs! Don't lead your reader down a dangerous path. They are free to explore themselves, and seek support for advanced or atypical use cases.

## Where do we document X?

The source content for Astro's documentation lives within two different repositories:

All content for the English Configuration Reference page in docs is written in JSDoc in this file: https://github.com/withastro/astro/blob/main/packages/astro/src/%40types/astro.ts 

English `README.md` files for all official Astro integrations to create the integration guides are found within each individual package here: https://github.com/withastro/astro/tree/main/packages/integrations

A full list of all the English error messages is found here: https://github.com/withastro/astro/blob/main/packages/astro/src/core/errors/errors-data.ts

All other content, including all non-English lanaguage content, is found within the Astro docs repo itself: https://github.com/withastro/docs 

## How pull requests work

Make a pull request to the appropriate file:

- as part of your feature PR, if the source file is in the main Astro core repo
- as a separate PR to the docs repo, if the source file is in the docs repo

Be sure to fill out the PR template for each repo, which will allow you to link an implementation PR to a corresponding docs PR. 

Use the `#docs-ptal` channel in Discord when you have a PR ready for review (from either repository). Please indicate how "urgently" a review is required, and do not be afraid to send multiple messages about the same PR when necessary!

If you are an Astro Maintainer with GitHub permissions, you will be responsible for merging **your own implementation PR** only after Docs has approved any documentation, **including the changeset** of that PR. Otherwise, a maintainer will merge your PR at the appropriate time. There is a nightly GitHub action that runs to create a PR to the docs repo with any documentation changes from the astro core repo. Normal docs changes will therefore be live on the docs site the next day after merging. This action can also be run manually to expedite the process, and is regularly done so for major and minor releases.

Unlike PRs to the astro repo, PRs to the docs repo are published live immediately upon merging. Therefore, **only Team DX merges PRs marked as `merge on release`** that are waiting for a feature to be released before updating the live docs site. Minor releases happen every other Tuesdays for the astro core package itself and the Docs Lead is aware of this regular schedule. Other packages, such as integrations, only release when necessary and you should also verify that any `merge on release` docs are released alongside the package as appropriate.

Maintainers are welcome to merge their own docs after appropriate approval for small updates and fixes that do not document an unreleased feature.

:::note[PR APPROVALS]
It is very common for several people to review docs PRs, and not all approvals mean that your PR can be merged! Team Docs encourages our community members to review PRs to catch small problems *before* Team DX edits larger contributions, or even to practice reviewing! 

If your PR is a smaller fix or correction, then any community member can be your "proofreader" so you can merge your own PR.

Any more substantial writing, including "rewriting to make it sound better", must be approved by a Team DX member, and all new feature documentation must be approved by the Docs Lead personally before the PR is considered ready to merge.
:::

## Changesets

You will also be responsible for writing a changeset for your feature. The changeset should focus on **what has changed**, and **must include any breaking changes**, including changes to default behavior. Most users will have several default settings configured (often by not setting any value themselves), so changes to defaults can have a significant impact on someone's project!

For new features, describe what people are now able to do that they could not before. The changeset is an opportunity to call people's attention to new things they might wish to try in their Astro project.

Astro releases a blog post for every minor release, the contents of which are auto-generated from changesets to provide a "first draft" that is then manually edited. The first line of your changeset will generate an `<h2>` for the blog post, so choose something that is descriptive and to the point (e.g. Adds a new `flamethrow` view transitions animation). Then, leave a blank line before describing the feature.

:::tip[Don't hide the good stuff in the changeset!]
Changesets are typically read once, when someone is upgrading to the latest version of a package. Documentation is a constant reference that will be revisited and consulted frequently.

Make sure that the helpful explanations and examples in both your changeset and your PR description are captured in the actual feature documentation, too!
:::