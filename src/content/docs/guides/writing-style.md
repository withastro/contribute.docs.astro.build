---
title: Writing and Style Guide
description: The general writing and style guide for Astro docs.
---

Please use the following as a general guideline, and thank you in advance for understanding that contributions may be edited to match existing style, tone, conventions and structure.

We have intentionally kept this page more about our conventions (e.g. the heading levels we use) than detailled writing advice beyond a few bullet points with general helpful tips for readability. Many of our community contributors in open-source are not writers, and are not interested in detailed grammar lessons. That's what we have PR reviewers and editors for! 

:::tip
If you'd like to see in more detail [how your submission will be reviewed](/reviewers/1-reviewing-prs/), or you're interested in contributing by reviewing existing PRs, you can find more information in our Reviewers section of this site. Here you'll find where the magic really happens at Astro Docs, including the common grammar, formatting and sentence structures we are on the lookout to improve to give our readers the best experience we can.
:::

## Readability

All readers can benefit from clear, straightforward writing, but this can be particularly important for people who:

- are reading documentation in a non-native language
- are frustrated, tired, or in a hurry
- have cognitive, learning, or attention difficulties
- come from a non-traditional development background
- are translating our documentation into other languages

We aim for **clear** and **helpful** documentation that serves the reader above all else!

Usually this means choosing:

- shorter sentences and paragraphs
- simpler vocabulary and phrases
- less jargon
- fewer assumptions about what the reader already knows
- writing out abbreviations and acronyms in full
- bullet points and section headings to break up chunks of text

You can check your writing by pasting it into [Hemingway App](https://hemingwayapp.com/). It will show you if (it thinks) a sentence is too long and will encourage you to use active voice, which is generally shorter and easier to read.

### Voice

Please try to use the following language conventions when contributing to the docs:

- When addressing the reader, do so in the present tense and do not include yourself. You can use *you*, but do not use *we*, *we'll*, *us*, *let's* etc. (You are not with the reader at this exact moment.) Instead, use phrases like, "You can now safely delete this line of code." Or simply, "Delete this line of code. It is no longer needed." **Never use I**. Astro docs is not about what you can do!  

- It's OK to use exclamation points every now and then, but please try to do so only when emphasizing something that is truly exciting, surprising, or encouraging/reassuring. If you are not sure, use a period instead. Exclamation points can send "positive vibes" to the reader. But, if a reader is frustrated, confused, or in a serious state of mind, then exclamation points can seem insensitive or juvenile. Do not use too many.

### Tone

As a general guide for writing tone, you can follow the [Google Developers Guide](https://developers.google.com/style/tone):

>In your documents, aim for a voice and tone that's conversational, friendly, and respectful without being overly colloquial or frivolous; a voice that's casual and natural and approachable, not pedantic or pushy. Try to sound like a knowledgeable friend who understands what the developer wants to do.
>
>Don't try to write exactly the way you speak; you probably speak more colloquially and verbosely than you should write, at least for developer documentation. But aim for a conversational tone rather than a formal one.
>
>Don't try to be super-entertaining, but also don't aim for super-dry. Be human, let your personality show, and be memorable. But remember that the primary purpose of the document is to provide information to someone who's looking for it and may be in a hurry.
>
>Remember that many readers aren't fluent English speakers, many of them come from cultures different from yours, and your document might be translated into other languages. For more information, see Writing for a global audience.

Also see tips on how to [write inclusive documentation](https://developers.google.com/style/inclusive-documentation) and [write accessible documentation](https://developers.google.com/style/accessibility)

## Lists vs. Headings

Both lists and headings are used in our docs for readability. We will often start by using `<ul>` to list related items.

But, when individual line items become large, span multiple paragraphs, or contain too many `<code>` terms affecting readability, then we will change to section headings.

Use unordered (bulleted) lists when the order of the items is not important.

Use ordered (numbered) lists when giving steps or instructions to be followed in sequence.

## Headings

New sections should be at the `<h2>` level. The page title is an `<h1>` element.

Please keep headings short. `<h2>` and `<h3>` headings will appear in the right sidebar / "On this page" menu, so please check previews and consider shortening headings if the sidebar entry looks too long.

Headings should not end in punctuation (e.g. ":") but should format `<code>` when appropriate.

Do use headings to break up text into organized sections! Many readers prefer to skim, and your headings will show up in the sidebar / table of contents menu to help your readers navigate, and let them know they are on the correct page.

## Examples (e.g. examples)

Current practice is to use the words "for example" in full within the text of a sentence, but (e.g. Netlify, Vercel) inside a parenthetical so as to not take the reader out of the flow the sentence.

> For example, when passing props . . .

> If you store your Astro project in an online Git provider (e.g. GitHub, GitLab), you can . . .

## Recipe Writing

Here are some tips and examples to match Astro Docs' style for instructional content, like a recipe:

### Imperative (instruction, command) tense

Whenever possible, give the reader a direct instruction:

e.g. Type the command...

Do not use *"Let's..."* or *"Next, we will..."*. You are not sitting there with your reader! (This also means you will never need the words *we*, *us*, and *our*. If you see them, rephrase!)

If you must address the reader, it is OK to use "you" and "your". Especially for emphasis in very important steps where something could go wrong:

e.g. Before continuing, you must check your... or else...

### Avoid "storytelling"

Recipes should be a set of instructions to follow, as concisely and directly as possible. Do not tell a story around what is happening, but do provide context or clarity if needed as a brief goal/benefit/reason.

Here is an example edit we made to one of our own recipes to illustrate the difference:

**Example:** Introduce a set of instructions with a "Big Step" (e.g. overall goal) + reason before listing specific steps to follow

**Before: narrative style**
> As well as needing your content in different languages, you will often need to translate labels for UI elements around your site. We can do this by creating dictionaries of terms instead of hard-coding text in one language in our templates.
>
> 1.
> 2. ...

**After: imperative style**
> Create dictionaries of terms to translate the labels for UI elements around your site. This allows your visitors to experience your site fully in their language.
>
> 1.
> 2. ...

### Opinionated Instructions

Sometimes you will need to give an instruction where the reader has options. You want to illustrate the example with the specific choice you made, but you also want to make it clear that other decisions are acceptable.

In this case, try to separate the instruction from the opinion. First, give the action to take with a more general description. Then state the opinionated choice that your example uses. Your reader will be able to first process what you are doing and then will see the choice you have made. They can still follow your instruction, making a choice that works for their own project.

This can be easier to follow (and perhaps more reassuring!) than a statement that gives multiple options. This is also usually easier to write since you do not have to remind the reader that this file is from *your* example, and may not appear in their project.

**Example:** An instruction to add a component where the component *could* go in multiple files/places and still achieve the goal.

**Before: vague initial instruction**

> Add the `LanguagePicker` component to your site. A good place might be in a navigation component or a footer shown on every page.

**After: add necessary context to the instruction, followed by opinionated usage**
> Add the `LanguagePicker` component to your site in a component that is shown on every page. The example below adds this to the page footer: