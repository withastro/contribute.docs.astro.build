---
title: New feature docs
description: A guide to writing docs for your new Astro feature.
---

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

## What should NOT be documented

Generally, you do not need to document implementation details. You may choose to additionally include details that will help people **make decisions as they build their own projects**: choosing when to set a value other than a default, understanding the pros and cons or caveats of certain design decisions, etc. But, implementation details should never be provided **instead** of usage details and real-world examples.

For example, if a reader must choose between setting a value to `include` or `exclude`, describe different situations or goals for which each option is best. Do not instead explain the underlying code logic that powers each option. 

Ultimately, our goal is to document **how to build with Astro** and not **how Astro is built**.


## Where do we document X?

The source content for Astro's documentation lives within two different repositories:

All content for the English Configuration Reference page in docs is written in JSDoc in this file: https://github.com/withastro/astro/blob/main/packages/astro/src/%40types/astro.ts 

English `README.md` files for all official Astro integrations to create the integration guides are found within each individual package here: https://github.com/withastro/astro/tree/main/packages/integrations

A full list of all the English error messages is found here: https://github.com/withastro/astro/blob/main/packages/astro/src/core/errors/errors-data.ts

All other content, including all non-English lanaguage content, is found within the Astro docs repo itself: https://github.com/withastro/docs 
