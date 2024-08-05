---
title: Writing and Style Guide
description: The general writing and style guide for Astro docs.
---

Please use the following as a general guideline, and thank you in advance for understanding that contributions may be edited to match existing style, tone, conventions and structure.

We have intentionally kept this page more about our conventions (e.g. the heading levels we use) with only a few general pieces of writing advice. Many of our community contributors in open-source are not writers, and are not interested in detailed grammar lessons. That's what we have PR reviewers and editors for! 

:::tip
You can find information about [what our reviewers will be looking for](/reviewers/1-reviewing-prs/) if you're interested in learning more about what makes a great Docs submission. You can see the common grammar, formatting, and sentence structures we are on the lookout to improve to give our readers the best experience we can.

If this interests you, consider contributing as a PR reviewer! No invitation necessary: read the PR reviewing guide, find an open Docs PR, and join us! 
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

Also see tips on how to [write inclusive documentation](https://developers.google.com/style/inclusive-documentation) and [write accessible documentation](https://developers.google.com/style/accessibility).

## Writing Style

Please use the following conventions when contributing to the docs:

✏️ Write in neutral, factual sentences.

  - State facts directly. Do not try to be funny or whimsical. 
    
    > ✅ Scripts can be used to add event listeners, send analytics data, play animations, and everything else JavaScript can do on the web.
    > 
    > ❌ Scripts are like magical fairy godmothers that bring your static page to life with a wave of their wand!
    
    These "colourful" statements may be fun to read for some people (in some moods), but they are less useful for conveying helpful information to the reader. They may not be universally-understood references, and can cause confusion. For every reader, these statements introduce additional mental effort to pick out the important information from the "fluff."
    
  - Astro docs does not incorporate any characters as guides, or try to "tell a story" throughout docs. Each piece of content is standalone.
  - Use a neutral tone that is calm, friendly, respectful and assuring, but not overly casual. Do not talk down to the reader, and do not make assumptions about what they already know. Remember, they are reading the docs to learn!

✏️ Only document how Astro works.

  - It is not our role to document how React, Tailwind, or JavaScript works. It **is** our role to document how to use a UI framework component **in Astro**, or how to configure the `@astrojs/react` integration so that a reader can use React **in Astro**.
  - Link to external sources when information about, or about using, other technologies may be helpful. For example:
    > [Markdown](https://daringfireball.net/projects/markdown/) is commonly used to author text-heavy content like blog posts and documentation. Astro includes built-in support for standard Markdown files that can also include [frontmatter YAML](https://dev.to/paulasantamaria/introduction-to-yaml-125f) to define custom metadata such as a title, description, and tags.

✏️ When addressing the reader, use the present tense and do not include yourself. 
    
  - Use phrases like, "You can now safely delete this line of code." Or simply, "Delete this line of code. It is no longer needed."
  - Do not use *we*, *we'll*, *us*, *let's* etc. (You are not with the reader.)
  - **Never use I**. Astro docs is not about what you can do!  

✏️ It's OK to use exclamation points every now and then, but please try to do so only when emphasizing something that is truly exciting, surprising, or encouraging and reassuring. If you are not sure, use a period instead. 

  - Exclamation points can send "positive vibes" to the reader. But, if a reader is frustrated, confused, or in a serious state of mind, then exclamation points can seem insensitive or childish. Do not use too many.

## Headings

Do use headings to break up text into organized sections. Headings are the foundation of page organization! Many readers prefer to skim, and your headings will show up in the sidebar / table of contents menu to help your readers navigate, and let them know they are on the correct page.

#️⃣ New sections start at the `<h2>` level. The page title is an `<h1>` element.

#️⃣ Please keep headings short. 

  - `<h2>` and `<h3>` headings will appear in the right sidebar / "On this page" menu
  - Preview the sidebar in the browser and rephrase to shorten headings if the sidebar entry looks too long.

#️⃣ Do not end headings with punctuation (e.g. ":")

#️⃣ Do format text as `<code>` that would normally be formatted in regular paragraphs.

## Lists

Both lists and headings are used in our docs for readability.

📑 Use lists for a group of related items, such as a complete set of configuration options or object properties.

  - But, when individual line items become large, span multiple paragraphs, or contain too many `<code>` terms affecting readability, then we will often change to section headings.

📑 Use unordered (bulleted) lists when the order of the items is not important.

📑 Use ordered (numbered) lists when giving steps or instructions to be followed in sequence.

## Examples (e.g. examples)

🫴 Use the words "for example" in full when writing a clause to introduce a single example situation or hypothetical.

  > For example, when passing props . . .

🫴 Give lists of examples (e.g. frameworks, attributes) separated by commas inside parentheses. Use "e.g." as the abbreviation for "example".

  > If you store your Astro project in an online Git provider (e.g. GitHub, GitLab), you can . . .

:::note
Examples are **some** (but not all) possible options. If your list of examples contains **every possibility**, it is no longer a list of "examples"!

To provide a complete list, use parentheses without "e.g."

> Include the required image properties (`src`, `alt`) and any additional optional properties...
:::

## Giving Instructions

Here are some tips and examples to match Astro Docs' style for instructional content (e.g. recipes).

### Imperative (command) tense

🗣️ Whenever possible, give the reader a direct instruction:

  > Run the following command ...

  - Do not use *"Let's..."* or *"Next, we will..."*. You are not sitting there with your reader! (This also means you will never need the words *we*, *us*, and *our*. If you see them, rephrase!)

  - If you must address the reader, it is OK to use "you" and "your". In particular, you can use this for emphasis in very important steps where something could go wrong:

    > Before continuing, you must check your... or else...

 🗣️ Avoid words that cause doubt or confusion. 

  Certain words and phrases are problematic in instructions for two reasons:

  1. **Most** of the time, they are used in a way that is **not** helpful to the reader. They *almost always* result in a poor reader experience.

  2. There can be **very specific situations** where they are appropriate, so you can't *forbid* them... even though we really want to, because it's advanced practice to get this right! 

  - **You should...** (Do I have to? What happens if I don't? How bad is that?)

    Avoid this phrase most of the time. You *can* use this phrase in situations where you are describing what the reader should be experiencing (e.g. in the case of a successful installation). But even then, it is almost always possible to rephrase to avoid "should."

    > If the installation was successful, you should see a prompt to continue.
    > 
    > After a successful installation, there will be a prompt to continue.


  - **You can...** (I *can* do a lot of things. Should I? Are you telling me to?) 
  
    Use this phrase **only to give permission or state that an option exists**. (This was just used above!) Do not use this in general instructions that you expect the reader to follow.

### Avoid "storytelling"

🗣️ Recipes are a set of instructions to follow, stated as concisely and directly as possible.

  - Do not tell a story about what is happening.
  
  - If you feel it is needed, provide brief context or clarity in the form of a goal, benefit, or reason.


**Example Edit:** Instead of "telling a story" to introduce your instructions, start with a "Big Step" (e.g. overall goal) + reason.

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

When an instruction can be completed in a variety of ways (e.g. install the UI framework integration of your choice), you will need to provide a usage example without knowing which option your reader has chosen. Astro docs uses **opinionated instructions** in these situations, choosing a single option to document as an example of the concept.

⚖️ Separate the instruction from the opinion. 

  1. Give the action to take with the reason, goal or criteria. 
  2. State the opinionated choice that your example uses. 
  
Your reader will be able to first process what you are doing and then will see the choice you have made. They can still follow your instructions, making a choice that works for their own project.

This can be easier for a reader to follow than a statement that gives multiple options and forces them to consider several possibilities. This is also easier for you to write because it allows you to proceed with certain assumptions that, even if not true in the reader's project, have been made clear for the purposes of the example.

**Example Edit:** Instead of listing possible choices that work, provide the underlying criteria so the reader can make an appropriate choice for their situation. Then, tell the reader which choice you have made and show it in an example.

**Before: vague initial instruction**

> Add the `LanguagePicker` component to your site. A good place might be in a navigation component or a footer shown on every page.

**After: add necessary context to the instruction, followed by opinionated usage**
> Add the `LanguagePicker` component to your site in a component that is shown on every page. The example below adds this to the page footer:

Read more about [explaining your code samples](/reference/code-samples/#explaining-code-samples) in the Reference section.
