---
title: Intro to reviewing PRs
description: How to review PRs for Astro documentation.
---

-- DRAFT --

When we review a PR, we are communicating:
- to the person who made the PR
- to (other) maintainers who are relying on our assessments
- to the future! Capturing decisions as a historical record

Because we are **communicating to people**, reviewing a PR is not just applying a style guide to a proposed piece of text.

PR Reviews:
- improve the objective quality of a PR submission
- encourage, support and develop the skills of a PR contributor
- establish and enforce our documentation's conventions
- enhance and grow our project's community

## "Reviewing" guide vs writing/style guide?

Writing and style guides document our existing writing conventions and preferences (e.g. use sentence case for headings). However, *reviewing a PR to* these guides often involves interpreting the style guide, noticing potential improvements which may not be explicitly stated in a guide, and making judgment calls.

A reviewing guide documents our existing *reviewing* conventions and preferences. 

It provides further guidance on identifying and improving deviations from our preferred style, as well as addressing how to work with a PR contributor to improve their submission.

## Why do we need a reviewing guide?

Reviewing is hard! Existing writing anchors you, and it is very easy to get stuck in the weeds of fixing individual words and sentences of what's in front of you and not notice larger issues such as context or flow.

Submissions may "pass" a style guide checklist, but still not be *helpful*... yet!

## General Considerations

I would argue that **we have two, sometimes seemingly conflicting, goals** when we edit a PR:

- Edit the content to maintain a level of quality for Docs
- Edit the PR author to maintain a level of involved, willing, quality contributors to docs! 😄

Our first responsibility is to produce something that is accurate, clear, and helpful. Docs are never done, and constant improvement is the name of the game! This is where we can comfortably rely on :notworsethanwhatwehadbefore: (Not worse than what we had before) and strive to get better over time!

**Is better, significantly better?**
This is someone else's work, that they may (or may not) feel attachment to. Yes, it could probably be better. Does it have to be best? Does it have to be perfect right now? Or can we accept enough of their original content/wording/structure to allow them to continue to feel ownership/pride while... not sucking. (We can always go back later once it's published and revise!)

**Time constraints**
We gots stuff to do, peeps! There are a WHACK of these PRs to edit. How long has this one been sitting? Can we give the original author a speedy conclusion? Can we just omg get something good enough merged now so this doesn't drag on!

**Will they see the value of the edits?**
Related to the first point, will they see your edits as nitpicking (beyond obvious catching REAL nits that we can't publish like typos and grammar mistakes). Do your edits "show up" the original author? Can they... not? Are you editing in such a way that makes the author feel you've read their mind vs. yanked control of it?

These are just some externalities that we have to face when editing that mean that while we WANT the tightest, cleanest version in docs, it's OK for several reasons if we don't get there right away.

------

## General format


**Basically:**
- **Acknowledge**
- **Use the Review comment to set expectations**

**Procedure:**

- When you make your first edit/suggestion, click start a review. This will allow you to make all your edits as "pending" (in secret!) and is totally helpful so you can go back and change things, make sure you're completely happy with ALL your suggestions before any of them are visible.
- When you've made all your suggestions, hit the big "Finish Your Review" in the upper right and there will be a text box to leave a comment. ALWAYS START OUT WITH A FRIENDLY ACKNOWLEDGEMENT, including mentioning their GitHub username. e.g.:
    > Thanks for this contribution, username! I know so many people are going to be helped by this!/It's going to be great to have some content for this subject in the docs! etc.  🥳  / 🙌 

- Set expectations in that comment, including:
-- the type of edit you've made. (I've just done an editing pass for typos and grammar)
-- there may be more reviewers to come! (Normally a few people from docs would take a look over new submissions...)
-- the number of suggestions you might have made. (This might look like a lot, but most of these are tiny corrections / Don't be scared by what looks like  huge edit! It was easier for me to select a large chunk so I could edit multiple lines at once, but really, I just needed to reorganize/move things around)

- Only click approve if you are entirely satisfied and you want to show ME (or Yan, or Chris) that it passes your standards, but leave a comment and make sure it doesn't sound like to THEM their PR is "done and ready to go!" (Because one of us will likely have at least some comment for it.) "I'm approving an initial grammar/typo read for Team Docs!  🥳  Others will be along to check for other things!"

------


##  How to triage/handle various PRs

PRs that seem fairly minor in nature (a typo fix or something similarly easy to judge the quality of) and leave a review comment (even if you're not in a position to merge yourself. I know some of you here do have merge permissions, and some don't). The comment can either be a suggested correction/improvement or also actually very helpful, an acknowledgement and thank you to the contributor, validating their helpful contribution and thanking them for hanging in while we deal with the merge backlog!  (Important Don't, though, give someone false hope. If you are AT ALL in doubt that I might come in and really go to town on their PR, don't make it sound like a rubber stamp approval. Instead, simply thank, assure it's helpful and validate in a way that lets ME know you approve of the contribution but doesn't make THEM think there's absolutely no chance of further editing.)
 
larger PR contributions, like CMS guides we keep getting, and suggest edits for clarity, conciseness, and helpfulness. Two big considerations here are:
Are the steps actually linear in nature? You'd be surprised how many times people refer back to other steps, even just to confirm "if you did this step right.. [link]..." and that is NOT actually helpful to keeping a reader in flow and moving forward following instructions!
Are they over-documenting the NON-ASTRO parts, like how to use the CMS itself or work in its dashboard, for example? Ideally, we stick to what we have control over, and what we can know when it changes. It's a huge maintenance burden if another service changes how THEY work and that requires updating to OUR instructions.
 
You can even make stuff up if you think it will "help the cause"! lol I don't mind pings saying, "Sorry, I know no one has responded to this yet, but we're working through a backlog!"

Part of "technical editing" when it comes to open source and community contributions is making them feel valued for their contribution. Just that fact alone is worthy of acknowledgment, thanks, and validation.
sarah11918 (she/her) — 06/28/2023 3:46 PM
Often, these little goodwill gestures can help us in the editing process: it can put the PR author more at ease, and that makes it easier to have a back-and-forth with when it comes to editing their work and asking questions. We never want our clarifying questions (so that we understand the idea they're trying to share) to come across as judgy or our precise grammar corrections to come off as too nitpicky, and so taking the time to establish some trust is very helpful in putting them in a position to best help us edit! 
Or, it buys us time until we can actually get around to their PR... I mean, it almost never hurts!  😄

If you look at when I leave comments on other PRs, like Starlight features or Astro features and all I'm doing is reviewing the docs, I'm very specific about "Docs look good!" I don't try to claim to "approve the entirety of the PR"  😄

Similarly, comments like: "I followed the steps and the instructions work!  ✅ " or "Code sample is correct!" are VERY helpful to me when so I know I can trust the content, but still gives me the freedom to edit the text!

------

## Editing a Recipe Stub

Here are just some quick things to check for in a stub:
- No marketing speak in the intro sentence! Sometimes people will just grab whatever's on the CMS's home page, which probably is more markety than neutral. I will often have to dig into the docs to find some neutral phrases.
- No making up your own wacky headings! Admittedly we don't have a strict template to follow, but we have enough live examples to sample for you to get a sense of what kinds of headings are helpful/useful.
- No [here](https://) undescriptive link text! Stubs usually are low on text, high on links. Make sure link text accurately describes the what (and often the where!) of the link. Remember that link text is both used by assistive devices to help people navigate AND makes things rank higher for SEO. If a screen reader were to read out the list of links on the page, "here" is not helpful. I'd also argue that knowing the link would take you OUT of Astro Docs would be helpful. At the same time, it would be exhausting to hear the entire sentence read out, so make a judgement, and don't be afraid to rewrite the sentence so that you do get a nice phrase that works well as link text!
- ALWAYS CHECK THE NETLIFY PREVIEW: CMS guides require a logo submitted, so checking the preview to see both the "face pile" of CMS logos, clicking through to make sure no errant syntax has borked the page etc. is also important. I personally like to do my initial read from the preview so that I can fully see what the guide is looking like. I happen to find that easier for me to know when to break up paragraphs etc.

![](https://hackmd.io/_uploads/Sk50Sg3o3.png)

______


## How much can we change? 

I strive to stay close to what I perceive to be the author's intended message as possible. They wanted to share something: how a feature works, define & explain a config option... so I probably approach it from that angle: this is what they wanted to say, and maybe their message isn't entirely clear, helpful or grammatically accurate. Can I give them the words they couldn't find in the moment, in such a way that makes them think, "Yes! That's what I meant!" ?

So, I don't really worry when phrases or structure deviates a little if I think I get what they're trying to say.

*We* probably have a lot more experience writing this stuff. We have words and phrases we naturally spew out on command to explain this stuff that they don't. That's where we can often help them. So I think it's fine to use our experience to say, "Is something like this an accurate way to put it?"

Often they are not writers, so they are not super attached to their words the way we are...and project on to them! 😄
If I trust the person, I'll often say my suggestions are "for your consideration"



______

## How much is too much? Too Little? 

One of the top comments was something that I feel like covers a huge umbrella of things:

Too much:
too much information
too many sentences in a paragraph
too many words in a sentence
too many paragraphs
too much text in a section (this makes it hard to scan / can get dry for those (me) with little attention span)
too much jargon / acronyms (being someone coming from another jargon-filled background, its incredibly confusing when people talk about frameworks, libraries, etcetc because they have dual meaning to me already)

Too little:
not enough perspective (meaning seeing things from only one type of POV)
too little information
too little "why"
too few examples
too few headers (not scannable)
too little structure

In addition to a few of my favourites:
assuming domain specific knowledge is a no-no (again, acronyms / jargon can make learning even more difficult especially when specific to what you're reading especially when never covered)
avoiding the basics just because theyre "documented elsewhere"

This is a great example of trying to find the "Goldilocks Zone" of not too much, not too little!

I think what I most often see boils down to "too much" writing and "too little" content: 

it takes strong writing chops to use few words efficiently. People just tend to use more words than they need: "There are files. Within these files there are variables..." vs "files containing variables."

explanations/instructions written by those with too much context in their head run the risk of being, "Step 1, draw two eyes; Step 2, draw the rest of the owl." Moreover, we run the risk of simplistic "editing = cutting" advice resulting in them cutting the steps/ideas that seem obvious to them vs cutting the extraneous words they are using that bog down the sentences and tire a reader out. 😅

We need to remember that typical editing advice to "cut mercilessly" refers to words and phrases, not ideas and context. Often, we want to add those, which can seem counterintuitive to "editing." But, when we edit well, even when we add context, it feels shorter.

------
## Detailed Editing Suggestions

- **split longer paragraphs** if they contain too many, or too different ideas.
- **remove extraneous info mercilessly** like "special handling is required for x."... We can just say what to do for x!
- **"But" is a "2nd thought/think twice" word** that isn't always necessary when just describing a straightforward process. I tend to use only when calling attention to a true contrast is needed/helpful.
- **you can (similar to the worse offender, "you could")** - imo, is only to be used in situations where a true choice is presented, or you are stressing that something is allowed/they are able to do it. If this is recommended (or required!) guidance, don't soften your language here: tell them to do it! If it is a choice, make it clear. Handy rule, maybe: compare the sentence to both the same sentence with "you can/could" deleted, AND "you can optionally/you can choose to" and choose the one that fits the situation better, or rewrite accordingly. This forces you to face the multiple meanings of "can/could"
- **"same as"** just usually sounds terrible  :sweat_smile:
- **commands to be run -- separate code block** (use inline for variables, properties etc.) 
- **notes/asides: Less is more!** Before writing one, ask yourself whether you can restructure your text to negate the need for it. Notes should ideally be for tangential/important things to call out as remember these will be noticed when skimmed. General procedure (For multiple variables, create another file..) maybe doesn't rise to that occasion? Do we want someone skimming this section to ONLY notice multple variables for example? Absolutely no to a note that catches someone's eye that just says "These don't go in .env!" when there's no other context. "Wait, WHAT doesn't go in?" (Especially when this is only true when you have multiple variables and make that new file, not in the case of just one.)
- **We only use blockquotes ( > ) when we are.... quoting someone!** If it's a note, it should be one of our :::note  or :::tip etc.
- **Annotating after the fact with hypotheticals/keeping linear flow.** ("You could have done this...") That's not always wrong. (Very little is always wrong!) But, it's rarely something to like and we have to make sure it really works when we use it. This breaks the linear flow because it makes someone read backwards. They have to go back and replay the step, in an alternate universe.

--------

## Topic: "... like so:"

Topic of the Day time! Here's how we've been handling those sentences that introduce code snippets lately: instead of "Do this thing, like so:", my choice has been:

>The following example shows...


Many recipes/guide steps are illustrative, based on the working example in the context. Your own site may look different, use different variable names etc. If we can say, "Add the following line to your config file" (e.g. adding an experimental flag or setting a config option), then the "like so" part isn't necessary. Just say "Add X to Y" and show an example with a file diff.

"The following example shows a slide animation attribute added to a header component" is very explicit about what you intend the code snippet to illustrate. vs "Add slide animation, like so:" You are priming the reader for what to look for, as well as introducing proper vocabulary and phrases that will help reinforce how to talk about and describe building with Astro
By spelling out exactly what the code in the snippet is doing, you can better create a "MadLibs" type fill-in-the-blank pattern for someone who doesn't want to add a slide animation to a header... but a fade animation to a footer! They now have a very concrete way of describing what they are doing in a way that matches what they'll read (or search for) in docs, or ask for help with in support.

------

## Topic: explaining through multiple code blocks

The trickiness when multiple code snippets work together to explain a concept. (e.g. An astro component, being rendered on an astro page, with some maybe .ts file pulling in data or a config setting).

- Telling a story with multiple files can be tricky. If you just plop 3 code samples together in a "Say you have these files..." then people's eyes glaze over, THEN you write something that kind of explains a way in which they work together, and people have to SCROLL BACK UP to see what you mean. It's very un-flowy!

- The "The following code sample shows..." pattern (of course doesn't always have to be exactly those words! just the idea that you're telling the reader what to look for before you show them code) helps in this situation, because it forces you to call out what's important in each snippet, as you go. THEN, when the reader has had some very specific things all pointed out to them, you can connect some dots and ascribe meaning.

Summary (very rough writing, for illustrative purposes only! 😅 ):
**Less helpful: **

- "Pretend you had the following three files"
- 3 code samples
- all the text explaining what's happening.

**More helpful: **

- "The following example shows draft:true configured in astro.mjs, which will prevent blog posts with the draft property from being built."
- Code sample of the config
- "The following .md page includes the draft property in the YAML frontmatter...
- Code sample of the Markdown file
- The function below to query and return data from all your blog posts will produce an array of objects you can filter on the draft property before rendering the list of posts to your Blog Index page.

------

## Topic: fighting the anchoring (broader context of page)

Remembering to not just edit content, but also consider the place and context of new information added to a page!

**Fighting the anchoring:** whenever anyone submits something to you, it automatically anchors your brain. You tend to gravitate towards fixing the words, or even sentences in place and forgetting that... you can make this say any darn thing you want! The only requirement is to provide the reader with the information they need to know, in a helpful way.

**Ways this PR anchors us:**
- It's a new thing, so it's been tacked on to the bottom of the page. (Instead of thinking of where this new information logically fits into the flow, or based on importance/relation to other info around it.)

- It's self-contained. (Even though it introduces a new "transition directive" and we have an entire section up top for listing out/introducing the transition directives, which are then explained in detail.)

- Because it's self-contained, it re-explains how matched element pairs work re: naming. If we allow ourselves to consider the sum total of the info on the page, maybe we can get away with letting the words already explaining this do that extra work for us!


-------

## Links to grab comments from:


(Done, have screenshots) https://github.com/withastro/docs/pull/3610#pullrequestreview-1512832850

------

## Resources

https://nebulab.com/blog/a-guide-to-effective-pull-request-reviews

>  Pull request reviews are hard because:
>
> - you need to be polite and forgiving;
> - it happens remotely 99% of the times;
> - you need to think like someone else;
> - everyone has their own coding style and it should be respected;
> - code written in 10 hours is often reviewed in under 10 minutes;
> - praise and criticism happens publicly;
> - you are going to write stupid things and completely fail;
