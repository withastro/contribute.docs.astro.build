---
title: Upgrade guides
description: A guide to preparing major version upgrade guide for Astro Docs.
---

Astro prepares an [upgrade guide](https://docs.astro.build/en/upgrade-astro/#upgrade-guides) and new version of docs for every [major release](https://docs.astro.build/en/upgrade-astro/#major-changes) of Astro.

### Content

The purpose of this guide is to inform readers of **changes they may need to make to their project as a result of upgrading**. This is meant to be a comprehensive list of breaking changes that may interfere with a smooth upgrade experience.

It should not contain any more than is absolutely required for someone to have a functioning project after upgrading. For example, this guide does not document new features introduced in the major release; making new options available will not stand in the way of someone upgrading an existing project without those options.

### Structure

These guides follow a standard structure:

- Upgrade instructions (using `@astrojs/upgrade` and manual instructions)
- A note that after upgrading, things might "just work"! But if they don't, check below
- A link to the CHANGELOG for full rease notes
- Experimental flags removed
- Astro dependencies upgraded (e.g. Node.js, Vite etc.) in case these affect a project
- Breaking changes
- Deprecated features
- Previously deprecated features now completely removed
- Community resources
- Known issues

See the [Astro v4 upgrade guide](https://docs.astro.build/en/guides/upgrade-to/v4/) for an example.

### Submitting docs

If you are [contributing a breaking change](/upgrade-guides/breaking-changes/) to Astro, then please consult the appropriate instructions for adding documentation to the upgrade guide.