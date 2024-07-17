---
title: Tips for Astro Maintainers
description: How to maintain the Astro docs repo.
---

Welcome, Maintainers!

Just like the core Astro code base, and other code repositories within the Astro organization, you also have extra permissions within the Docs repo, too.

When you do find yourself wanting or needing to get involved in the Docs, here is some handy guidance for helping to maintain this repository.

**"How can I help, if I have some time today?"**

This is a recurring theme in the #docs Discord channel. Maintainers regularly post messages to `@team-docs` answering _everyone's obvious burning question_, with specific or general prompts and nudges.

The following is the answer to that question **for Astro Maintainers**, so that you can all feel comfortable jumping in and helping out.


## Triaging Issues and PRs

Astro's Docs community, and repository, is _extremely active_. 

It is a complex project handling Issues and PRs coming from all directions. In order to accept the greatest number of contributions from the greatest number of community members, with the fewest number of merge conflicts possible... many PRs will be created that are intended to be simply stepping stones to a desired end result. 

**NWTWWHB!** (_Not worse than what we had before!_) is a phrase you may see frequently around the Docs project, as we try to move fast and *not* break things.

One of the most helpful things an Astro maintainer can do is **help our community members get their PRs merged**!

Providing friendly, helpful, timely feedback is important to maintaining our community. It shows respect and appreciation for their time and contribution.

As a maintainer, here are some helpful things you can do:

- Leave a "Thank you for this!" message, or a simple emoji reaction, in an Issue or a PR if it hasn't had any activity yet. Similarly, "Just checking in!" or "We haven't forgotten about this, but are waiting on..." messages are also friendly and helpful!

- Ask any obvious clarifying questions, even if you do not intend to follow up with or take responsibility for the PR itself. Anticipate what further information might be useful to include, or address any weaknesses or points of confusion.

- Give general feedback or opinions, even if you do not intend to follow up with or take responsibility for the PR itself. Comments such as "I can reproduce this problem!" or "I agree, this code example isn't working as written," can save others time when they are trying to evaluate PRs.

- Leave the message **LGTM** (_Looks good to me_, _Let's get that money_, _Let's get to merging_...) on a PR you sign off on... but don't feel comfortable merging yourself. For example, a proposed new section or explanation looks good to you, but you suspect that other maintainers will also want the opportunity to review it. If your approval concerns only a specific aspect of the PR (e.g. you have verified a code sample is correct; you agree with the intention, if not the exact wording etc.) then please be specific about *what* looks good to you. This is to help the maintainer who will assume responsibility for merging the PR know which aspects have been reviewed, and also to not give the PR author "false hope" that the entire PR is ready to merge!

- Mention a particular maintainer or community member whose guidance or inclusion you know would be helpful. Different maintainers work on different parts of Astro, and if you know who the right person to seek extra clarification or approval from is, ping them!

- [Merge a PR yourself](#merging-community-submitted-prs), even without any consultation or discussion, if it's an obvious fix like a typo or broken link.

### Labels

Docs uses a [label system in GitHub](https://github.com/withastro/docs/labels) to categorize Issues and PRs **according to general topic area** and also to help us organize when to merge.

The docs site involves not only content (writing and technical content), but also everything involved in managing an Astro site: site UI, architecture, accessibility (a11y) issues, internationalization (i18n) with multiple languages in active translation and various automation processes surrounding PRs, page generation and translation status. It's A. LOT.

When you see PRs that have not yet been labelled, you can help by adding one or more labels. Our common labels include:

- `i18n` includes page translations and other efforts to keep the translators organized, including GitHub actions, automation, and site UI relevant to supporting multiple languages. This label will be automatically applied to any PR changing a non-`/en/` page file.

- `add new content` is used for something previously undocumented on the website. (i.e. We haven't thought in detail about how to write about this topic before.) This tag is useful because it reminds us that we should make sure we really understand this new thing, and any implications elsewhere in the Docs, while documenting it. (Does it replace an existing feature that we need to deprecate? Does this change an instruction or recommendation documented elsewhere? If a brand new feature, does it require a technical documentation in Reference and also a more user-friendly mention somewhere in Learn? Should other existing pages link to this?)

- `improve existing documentation` is used for smaller, but non-trivial documentation improvements to items that are currently documented. This distinction is helpful because we have already considered this feature as part of the entire Docs site, and the change might be small enough to be localized. For example, improving the wording of an explanation or adding an extra example to illustrate a particular nuance of a topic that we have already documented.

- `site improvement` is a broad category, but is used to label site issues and maintenance tasks as opposed to content and writing tasks. This distinction is helpful to allow community members and maintainers to easily filter tasks to either focus on or ignore content writing Issues and PRs. This allows community members (and maintainers!) to more easily contribute according to their own skills and interests.

- `merge on release` is used for PRs with accompanying Astro feature PRs that should **not** be merged until the feature has been released (even if the PR also has the `Merge Queue` label). These PRs should link to an implementation PR from another repo in their description (e.g. `withastro/astro/`, `withastro/adapters`). Hovering on this link should visually indicate whether that PR has been merged. Checking the #announcements channel in Discord, or the respository's changelog to know whether that merged feature has actually been released.

- `Merge Queue` is used when a PR has been approved and is ready to be merged by any maintainer who is "merging" at any appropriate time. **Note: `merge on release` PRs must still always wait for the feature to be released.** If you see both `Merge Queue` and `merge on release`, that means the PR is approved and ready to be merged as soon as the feature is released. 

### Types of PRs

#### Content

For PRs related to text content, including formatting of content for ease of readability as well as organizing and structuring content:

- Consult our [writing guide](/guides/writing-style/) when evaluating new or revised text content to the docs.
- Proofread, edit, make suggestions and leave "LGTM" (and/or "NWTWWHB") as appropriate.
- For most non-trivial PRs, the Docs Lead will likely want to do a final review themselves before the PR is merged.

#### Site UI/Architecture

For PRs related to the Astro Docs website itself, including accessibility (a11y) issues, UI elements and project structure:

- Test the proposed changes at a variety of screen sizes, and on a variety of devices.
- Check both light and dark theme modes.
- Navigate to several pages, including following anchor links, to test behaviour.
- Conduct any a11y checks or tests you have access to: screen reader behaviour, colour contrast ratios, etc.
- For most non-trivial PRs, the Docs Infrastructure Lead will likely want to do a final review themselves before the PR is merged.

#### Accessibility

We encourage our maintainers to audit and improve the accessibility of our code base as we strive for inclusion. We have selected a few trusted sources to help you out in your accessibility efforts when reviewing or making your own PRs:

- The WAI (Web Accessibility Initiative) has a great [introduction to accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/), as well as a list of [recommended resources for developers](https://www.w3.org/WAI/roles/developers/).
- WAI's APG (ARIA Authoring Practices Guide) is great for learning [accessible component patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).
- The A11yProject's [extensive list of resources](https://www.a11yproject.com/resources/) contains articles about accessibility testing, free developer tools, podcasts, and more. Also, it's worth looking at their blog posts and checklist for more insights!
- MDN (Mozilla Developers Network) has interesting, easy-to-follow [accessibility tutorials, guides, and documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility).

#### Language Translations

For PRs that are translations to existing Docs content, including new page additions as well as smaller updates and corrections:

- Consult the [Internationalization Guide](/guides/i18n/) to familiarize yourself with the translators' process.
- If you see "LGTM" in a message within the PR, that means at least one other native speaker has approved the translation, and the PR can be immediately merged! 🥳
- If you speak the language natively, check the content for accuracy. Note: some languages have created their own glossaries and/or language guides located in their language folder within `/src/i18n/`.
- If you do not speak the language natively, and the PR has not had any recent activity, you can use our [guide to reviewing translation PRs for non-native speakers](/reviewers/reviewing-translations/) and perform some manual checks that ensure a PR is "good enough" to publish. While we always prefer to have a review from a native speaker of the language, merging translations with some language errors is preferable to PRs that sit and get out of date as the docs continue to update. Following our guide for non-native speakers typically ensures that we can get updated, correct *content* in the docs more quickly and we can tolerate spelling mistakes or typos that can be corrected at a later date.

## Merging community-submitted PRs

Every Astro maintainer has the authority to merge PRs in the docs repo. We do have some particular workflows that we ask you to follow to help keep us organized and make sure the appropriate people know what's happening:

1. No PR can merge without the approval (can be in the form of a comment e.g. "LGTM!") from someone else. 

    Tiny corrections and typo fixes may be merged with a "LGTM!" or approving comment from any community member. A maintainer's approval is not required for small, obvious corrections.

2. Anything that is not a fix/correction, including small sentence changes, must wait for an approval from a Team DX/Astro Docs maintainer.

    Even the smallest change to text can have a big change in meaning, or can have a ripple effect on other sections of the docs! It's important that one of our regular Docs maintainers be aware of these changes.

3. Check the changes in the Netlify deploy preview. This is the easiest way to catch small formatting mistakes that are often overlooked when just viewing the files changed.

4. When you are satisfied that a PR can be merged into docs, add the label `Merge Queue`.

    This ensures that anyone else looking at the PRs knows at a glance which PRs have been fully-approved, and helps when PRs take several minutes to merge one-at-a-time. It is also fine to leave a PR in this state with this label for someone else to merge.

5. Always `update branch` before merging a PR and wait for all checks to pass. 

    The Netlify deploy build will probably take the longest, and if you are confident that this PR will not cause a build failure and the previous deploy preview looked fine, you do not have to wait for the new deploy build to finish before merging.

6. If there have been participants active in the comments who have not made their own commit and you would like them to receive credit for helping, visit [Kevin's Co-author Message Generator](https://coauthor.kevinzunigacuellar.com/) and paste in the GitHub link to the PR. Or, use the GitHub action and leave a comment directly in the PR with only the message `!coauthor` and "Kevin" (the GitHub-actions bot) will respond with another comment.

    This will provide a message you can copy directly into (overwrite) the squash and merge commit and will give co-author credit to every account involved with this PR. We encourage this! Participants do not need to have a commit to have been helpful!


### First-time Contributors

Always check to see whether a PR has been submitted by a `first-time contributor`! The PR author's status should be visible at the top of the PR description. Normally, it will read `contributor`.

For a first-time contributor, follow the above process but additionally:

1. Make sure the checks run! You can do this by either authorizing the workflow manually or updating branch.
2. Include a friendly final comment or review message thanking them, and welcoming them to Team Docs.
3. Reply to the DocsBot congratulations message in the `#docs` channel with the following message:

```
:rotating_light:  **FIRST-TIME CONTRIBUTOR ALERT** :rotating_light: 
Welcome to Team Docs, [name]! {pun mentioning some word in the PR title} [emoji]
```


## Submitting your own PRs

This section is much shorter now that we are protecting the `main` branch of the Astro repos! 😅

If your PR depends on a core PR being merged first, please **label your PR as `merge on release`** so that it does not get merged first. Please also link to the other PR so that we can easily check on its status when we are doing PR reviews.

If your PR includes content for the Docs site to be translated and reflected in all languages, please **only submit your content in English**. This includes any related updates to the navigation sidebar etc. We have a robust system in place for updating the status of affected pages and all related site infrastructure in our other languages, and often our translators are in the best position to notice the "ripple effects" of your changes in their specific pages.

If your PR includes content changes that should *not* be reflected in other languages (e.g. an English typo fix), please add the phrase `[i18nIgnore]` to the title, and our system will *not* flag this page as needing a translation update. (This can alternatively be added in the "Squash and Merge" text field.)

Use the `/ptal` command in the `#docs-ptal` channel to ask for a review.

Maintainers who submit PRs that can be merged live into docs immediately are expected to **merge their own PRs**, but only **after receiving an LGTM**. Typically, this will be an approval from another maintainer, often the Docs Lead or Docs Infrastructure Lead. But, in the case of minor PRs (e.g. typo fixes, broken links, etc.), any second LGTM is acceptable.

### PRs for any minor/major release of `withastro/astro`

The Docs Lead merges all PRs for a minor or major release in coordination with the Platform team, as these also involve blog posts, social media announcements as well as re-indexing Algolia so that new content is discoverable via search.

### PRs for patch releases, or minor/major releases of other packages or repositories

If you know that your feature was just merged, please come and merge your (approved) docs PR! The Docs Lead acts as a backup, checking every post in #announcements for every `withastro` release, and looking for any corresponding docs PRs that should be merged. These releases do not follow the same regular schedule/process as minor releases, and you might know your feature has merged before Docs does.

## Note on Dependencies

Currently there are dependencies installed that are not directly used, but should not be removed:

- `canvaskit-wasm`: Dependency of `astro-og-canvas` which doesn't bundle well as it uses `__dirname` that doesn't exist in ESM. Install as direct dependency so it can be imported by Astro's intermediary SSR build process.
