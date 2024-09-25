---
title: Code samples
description: How to write and annotate code samples for Astro documentation.
---
Code samples are key to any software documentation site!

Astro docs takes great care not only in the visual representation of our code samples, but also in [thoughtfully crafting the text around them](#explaining-code-samples).

Don't worry: we'll help you out in a PR if your code authoring needs some adjustment before merging. But, you can make use of all our features below and preview them locally to make sure your code looks the way you want.

Here is an example of what our code snippets look like written in Markdown/MDX, just so you can see what it looks like in action. Syntax explanations follow.

- Use the file name as a title
- highlight rows 9 and 10
- apply "+ diff" styling (green backround) to any occurrence of `<Button />`

``````markdown
```astro title="src/pages/nested-components.astro" {9-10} ins="<Button />"
``````

## Syntax

The code snippets in Astro docs are powered by [`astro-expressive-code`](https://github.com/expressive-code/). Most of Astro docs is written directly in the Astro docs repository and can make full use of [Expressive Code's syntax highlighting and text marking features](https://github.com/expressive-code/expressive-code/blob/main/packages/astro-expressive-code/README.md#usage-in-markdown--mdx-documents).


However, code examples written in the `withastro/astro/` core repo should use [these specific Expressive Code annotations](https://github.com/expressive-code/expressive-code/blob/main/packages/@expressive-code/plugin-text-markers/README.md) to ensure compatibility in plain Markdown format. These code blocks must also be legible in less "expressive" environments such as directly on GitHub repositories as READMEs.

### Example - docs repo

The following code block will be highlighted as JavaScript,
wrapped in a code editor frame with the file name "example.js",
and lines 2 and 3 will be marked as "diff" line (no need to type `+` or `-` yourself!):

``````
```js title="example.js" ins={3} del={2}
  function thisIsJavaScript() {
    console.log('Old code to be removed')
    console.log('New and shiny code!')
  }
```
``````

### Example - Astro core repo

The following code block will be highlighted as JavaScript,
wrapped in a code editor frame with the file name "example.js",
and the line range 2-4 will be marked:

``````
```diff lang="js"
// example.js
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```
``````

## Commmon Annotations

Following are the annotations you'll use most frequently in Astro docs. For a complete reference, please see [the Expressive Code documentation](https://github.com/expressive-code/expressive-code/blob/main/packages/astro-expressive-code/README.md).

### File Name as Title

Most code should include a sample file name so that we give the reader not only copy-pastable code, but also provide the file into which that code should be pasted.

For code in the Astro docs repo, include a title attribute with quotation marks around the filename:

`title="src/pages/index.astro"`

Alternatively, (required for code in the Astro core repo) write the file name as a code comment in a separate line. Write the file name of `.astro` files immediately after the opening `---`

``````markdown title=""
 ```astro
 ---
 // src/pages/index.astro
 ---
```
``````

``````markdown
 ```jsx
 // src/components/MyReactComponent.jsx
``````

### Line Highlighting

Use Curly braces to highlight (default), or show "diff" style (+/-) "inserted" or "deleted" lines.

- {4-7, 10} - Highlights lines 4, 5, 6, 7 and 10
- del={2} - Shows "diff" style including (-) at line 2
- ins={7-9} - Shows "diff" style including (+) lines 7-9

### Text Highlighting

Use quotation marks to highlight (default), or assign red/green "diff" style background colors for individual words and phrases. (Note: these apply for the words/text only, and do not affect the entire line.)

Regular expressions are supported within slashes `/ /`. See a handy [tool for converting between natural English and Regex](https://www.autoregex.xyz/)!

- "{item}" - All instances of `{item}` are highlighted

- del="My blog title" - All instances of "My blog title" have a red background color

- ins="Astro.props" - All instances of "Astro.props" have a green background color

:::note
- `del="<p class=\"hi\">"` - Use `\` to escape quotation marks and other special characters in the search string

- `del='\<p class="hi">'` - Use single quotes to make it easier to match double quotes
:::

## Explaining code samples

The text explaining your code sample is just as important as the code itself! By following some basic guidelines, you can help your reader understand what your code samples are supposed to illustrate.

We always strive to:

- Include a sample file name, so that it's obvious to the reader where they will add this code. Readers may be scanning for code snippets only, and your helpful explanation of what this code is for and where it should be used is may go unnoticed.


- Demonstrate a real, actual use case with correct, working code. No `foo`/ `bar`. No showing all possible values for a config setting. (Your reader will always only have one option configured!) Pick a real, working code example that matches something they might have in their own project.


- Introduce code samples with a full, standalone sentence on a new line starting with a phrase such as, "The following example shows..." ([Docs does not use the phrase "like so"](#topic--like-so) at the end of a sentence.)

    The following examples show introducing a code sample with a sentence that starts with the phrase, "The following example..."
    
    - "The following example shows configuring your base to always use a trailing slash."
    - "The following example shows importing and using a Card component with an author's name passed as props." 
    

This helps us
    
- ensure that the code samples in fact illustrate something someone might actually do.
- reduce the chances that you are relying on the reader to interpret what you mean by "do it like this."
- prep the reader so that they already know what the code *does* and only need to figure out *how* that result is achieved.

### Topic: "... like so:"

When we clearly say, "Add the following line to your config file" with a code sample showing diff notation for the added line, "like so" isn't necessary.

In slightly more complicated examples, "like so" is often a substitue for explaining what to do. It leaves too much to the reader's interpretation, and forces them to guess the pattern you intend to show.

"The following example shows a slide animation attribute added to a header component" is very explicit about what you intend the code snippet to illustrate. Compare this with "Add slide animation, like so:" The more explicit instruction primes the reader for what to look for, instead of forcing them to find and interpret the relevant code. At the same time, this kind of instruction introduces vocabulary and phrases that will help reinforce how to talk about and describe building with Astro.

By spelling out exactly what the code in the snippet is doing, you can better create a "MadLibs" type fill-in-the-blank pattern for someone who doesn't want to add a slide animation to a header... but instead wants to add a fade animation to a footer! They now have a very concrete way of describing what they are doing in a way that matches what they'll read (or search for) in docs, or ask for help with in support.

### Multiple code samples

**Telling a story with multiple files can be tricky.** If you just drop multiple code samples together on your reader with an introduction such as, "Say you have these files..." and then after you write a single explanation of the way in which they work together, people have to scroll back up to the code samples again (that they probably skipped the first time) in order to see what you mean. It's very un-flowy!

Our "The following code sample shows..." pattern before each individual code block helps you write clearly, especially when multiple code samples are involved. **It forces you to call out what's important in each snippet** as you go. Then, when you have pointed out the important part of each individual code sample, you can connect some dots and create meaning for the reader.

The following example shows how to improve upon and clearly annotate a situation involving multiple code snippets by introducing each code sample individually:

**Less helpful structure :**
- "Pretend you had the following three files:"
- *3 code samples in a row*
- all the text explaining what's happening.

**More helpful structure:**
- "The following example shows `draft:true` configured in `astro.mjs`, which will prevent blog posts with the draft property from being built."
- ` // Code sample of the config`
- "The following `.md` page includes the `draft` property in the YAML frontmatter to indicate that this page is not ready to be published.
- ` // Code sample of the Markdown file`
- The following example below shows a function to query and return data from all your blog posts that will produce an array of objects you can filter based on the `draft` property before rendering the list of posts on your Blog Index page.
- ` // Code sample of the function`


## Tips

- Look at other similar entries on the page for an idea of structure, style etc. If they are wrong, then *we* are wrong, and we'll fix it all!
 
- Please make sure to preview your updated code sample! It is easy for a typo to affect the display of a code snippet, and we appreciate you checking first before submitting your PR.
