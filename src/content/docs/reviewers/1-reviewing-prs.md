---
title: Intro to reviewing PRs
description: How to review PRs for Astro documentation.
---

## Reviews as Communication

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

Writing and style guides document our existing writing conventions and preferences (e.g. use sentence case for headings). 

However, **reviewing a PR often involves interpreting a writing or style guide**, noticing potential improvements which may not be explicitly stated in a guide, and making judgment calls.

A writing guide documents our existing writing conventions and preferences. A reviewing guide documents our existing **reviewing** conventions and preferences. 

It provides further guidance on identifying, interpreting and occasionally deviating from or improving our preferred style, as well as on how to work with a PR contributor to improve their submission.

## Why do we need a reviewing guide?

Reviewing is hard! Existing writing anchors you, and it is very easy to get stuck in the weeds of fixing individual words and sentences in front of you and not notice larger issues such as context or flow.

Submissions may "pass" a style guide checklist, but still not be *helpful*... yet!

## General Considerations

### Goals

**We have two, sometimes seemingly conflicting, goals** when we edit a PR:

- Edit the content to maintain a level of quality for Docs
- Edit the PR author to maintain a level of involved, willing, quality contributors to docs! 😄

Our first responsibility is to produce something that is accurate, clear, and helpful. Docs are never done, and constant improvement is the name of the game! This is where we can comfortably rely on #NWTWWHB (Not worse than what we had before) and strive to get better over time!

## Editing with appreciation

Part of "technical editing" when it comes to open source and community contributions is making community members feel valued for their contribution. Just that fact that they too the time and effort to submit something is worthy of acknowledgment, thanks, and validation. It would be very easy to notice a typo and just move on.

Often, these little goodwill gestures of acknowledgement actually help us in the editing process: it can put the PR author more at ease, and that makes it easier to have a back-and-forth with when it comes to editing their work and asking questions. We never want our clarifying questions (so that we understand the idea they're trying to share) to come across as judgy, or our precise grammar corrections to come off as too nitpicky. Taking the time to establish some trust is helpful in putting the contributor in a position to best help us edit!

Or, it buys us time until we can actually get around to their PR... I mean, it almost never hurts! 😄

### Is better, significantly better?

This is someone else's work, that they may (or may not) feel attachment to. Yes, it could probably be better. Does it have to be best? Does it have to be perfect right now? Or can we accept enough of their original content/wording/structure to allow them to continue to feel ownership/pride while... not sucking. (We can always go back later once it's published and revise!)

### Will they see the value of the edits?

Will they see your edits as nitpicking (beyond obvious catching REAL nits that we can't publish like typos and grammar mistakes)? Do your edits "show up" or embarrass the original author? Can they... not? Are you editing in such a way that makes the author feel you've read their mind vs. yanked control of it?

These are just some externalities that we have to face when editing. While we *want* the tightest, cleanest version in docs, it's OK for several reasons if we don't get there right away.

Remember authors may be anxious because:

- They are uncomfortable about the quality of their writing.
- They might not be native English speakers, and are hesitant to contribute in their second (or third, or fourth...) language.
- Despite all the guidance we have tried to give, they might *still* be confused or overwhelmed by the entire process, or just very worried about getting something wrong.

Since quality is *not* our only goal, we also have to balance the secondary goal of community-building. Happy, confident contributors are users of, contributors to, and ambassadors for Astro.

### Time constraints

We gots stuff to do, peeps! There are a WHACK of these PRs to edit. How long has this one been sitting? Can we give the original author a speedy conclusion? Can we just omg get something good enough merged now so this doesn't drag on!

## General format

### Structure

- **Acknowledge**
- **Use the Review comment to set expectations**

### Procedure

- When you make your first edit/suggestion, click start a review. This will allow you to make all your edits as "pending" (in secret!) and is helpful so you can go back and change things. This allows you to make sure you're completely happy with ALL your suggestions, and that they are all consistent, before any of them are visible.
- When you've made all your suggestions, hit the big "Finish Your Review" button in the upper right and there will be a text box to leave a comment. **Always begin with a friendly acknowledgment**, including mentioning their GitHub username. e.g.:
    > Thanks for this contribution, @sarah11918! I know so many people are going to be helped by this!/It's going to be great to have some content for this subject in the docs! etc.  🥳  / 🙌 

- Set realistic expectations in that comment, including:

    - the type of edit you've made. ("I've just done an editing pass for typos and grammar." or "I scanned the deploy preview for formatting and a visual inspection.")
    - there may be more reviewers to come! ("Normally a few people from docs would take a look over new submissions...")
    - the number of suggestions you might have made. ("This might look like a lot, but most of these are tiny corrections" / "Don't be scared by what looks like huge edit! It was easier for me to select a large chunk so I could reorganize/move things around.")

- Only click "approve" if you are entirely satisfied and you want to show one of the core docs maintainers that it passes your standards. When doing so, always leave a comment to make sure you are not conveying to the author that their PR is "done and ready to go!" (Because another maintainer may likely have at least some comment for it.)
        
    > "I'm approving an initial grammar/typo read for Team Docs!  🥳  Others will be along to check for other things!"

- Never click "request changes" when submitting your review! It's well-intentioned, but it's often more trouble than it's worth and we wish it didn't exist. Let your comment speak for you.

- Usually, you will submit this review neither approving nor requesting changes, but rather simply leaving a "comment." This is expected, and is usually the most helpful for the core docs maintainers. We expect that your comment will tell us how and what you reviewed, and your assessment. Comments like "I followed the steps and the instructions work!  ✅ " or "Code sample is correct!" are very helpful to let a maintainer know that they can trust the content, but still gives them the freedom to edit the specific text or flow of the contribution without "stepping on" your review.

##  How to triage various PRs

### Smaller or minor edits

For PRs that seem fairly minor in nature (a typo fix or something similarly easy to judge the quality of), never hesitate to leave a review comment. The comment can either be a suggested correction/improvement or an acknowledgement and thank you to the contributor. It is important to validate a contributor for their helpful contribution and it is helpful to maintainers when you thank them for waiting while we deal with any backlog. (And, we *always* have a backlog, so this is always an appropriate comment!)

It is also important, though, not to give someone false hope that their PR will be merged quickly. If you are at all in doubt whether another reviewer might do significant editing later, then do not make it sound like you are giving a rubber stamp approval. Instead, simply thank and assure the author that contributing to docs is appreciated. Validate their contribution in a way that lets other reviewers know you approve, but doesn't make the author think there's no chance of further editing.

### Larger content contributions

For larger PR contributions, such as CMS guides, feel free to take a pass and suggest edits for clarity, conciseness, and helpfulness even if you will not be the final editor. The two major considerations you can address in a first pass to help subsequent reviewers are:

- Are the steps actually linear in nature? You'd be surprised how many times people write, "Before doing that, you needed to..." The most helpful thing you can do for a reader is keep them in a flow, moving forward following instructions. The most helpful thing you can do for your core docs maintainers is to help the PR author address this fundamental requirement before they review for more close edits!

- Are they over-documenting the *non-Astro* parts of the process, like how to use the CMS itself or navigate its own dashboard? Ideally, we stick to documenting what we have control over, and what can't change without us knowing about it. It's a huge maintenance burden if another service changes how *they* work and we have documented specific instructions about using their product or service.

## Editing Strategies

### Edit as part of the whole

It is often not enough to just edit the content in front of you. You must also consider the place and context of new information added to a page.

When someone submits something to you, it automatically anchors your brain. You tend to gravitate towards fixing the words, or even sentences in place, forgetting that you can make this say any darn thing you want! The only requirement is to provide the reader with the information they need to know, in a helpful way.

It is very common for an author to just stick new information at the bottom of section or page. The job of the reviewer is to consider where this new information logically fits into the flow of the surrounding content, and to consider its relation to other information around it. Consider not only the section, and not only the page, but the entire docs **as a whole** when evaluating new content.

Sometimes, when we allow ourselves to consider the sum total of the info on the page, we even discover that we can get away with letting the words already there do some of the work for us! Often "new" content is not as "brand new" as it may appear.

Other times, added content brings a new perspective to existing content. Editing new and old together can often lead to a better overall explanation.

### Detailed Editing Suggestions

(Bullet form; to be expanded upon!)

- **split longer paragraphs** if they contain too many, or too different ideas.
- **remove extraneous info mercilessly** like "special handling is required for x."... We can just say what to do for x!
- **"But" is a "2nd thought/think twice" word** that isn't always necessary when just describing a straightforward process. I tend to use only when calling attention to a true contrast is needed/helpful.
- **you can (similar to the worse offender, "you could")** - imo, is only to be used in situations where a true choice is presented, or you are stressing that something is allowed/they are able to do it. If this is recommended (or required!) guidance, don't soften your language here: tell them to do it! If it is a choice, make it clear. Handy rule, maybe: compare the sentence to both the same sentence with "you can/could" deleted, AND "you can optionally/you can choose to" and choose the one that fits the situation better, or rewrite accordingly. This forces you to face the multiple meanings of "can/could"
- **"same as"** just usually sounds terrible  :sweat_smile:
- **commands to be run -- separate code block** (use inline for variables, properties etc.) 
- **notes/asides: Less is more!** Before writing one, ask yourself whether you can restructure your text to negate the need for it. Notes should ideally be for tangential/important things to call out as remember these will be noticed when skimmed. General procedure (For multiple variables, create another file..) maybe doesn't rise to that occasion? Do we want someone skimming this section to ONLY notice multple variables for example? Absolutely no to a note that catches someone's eye that just says "These don't go in .env!" when there's no other context. "Wait, WHAT doesn't go in?" (Especially when this is only true when you have multiple variables and make that new file, not in the case of just one.)
- **We only use blockquotes ( > ) when we are.... quoting someone!** If it's a note, it should be one of our :::note  or :::tip etc.
- **Annotating after the fact with hypotheticals/keeping linear flow.** ("You could have done this...") That's not always wrong. (Very little is always wrong!) But, it's rarely something to like and we have to make sure it really works when we use it. This breaks the linear flow because it makes someone read backwards. They have to go back and replay the step, in an alternate universe.
- Make sure there are neutral descriptions of, and links to, any 3rd-party services in the introduction. No marketing speak! Sometimes people will just grab whatever's on the CMS's home page, which probably is more markety than neutral. Reviewers may have to dig into the docs to find some neutral phrases that state what the service is/does in plain, factual language- No `[here](https://)` undescriptive link text! Make sure link text accurately describes the what (and often the where!) of the link. Remember that link text is both used by assistive devices to help people navigate AND makes things rank higher for SEO. If a screen reader were to read out the list of links on the page, "here" is not helpful. Knowing the link will take you OUT of Astro Docs is helpful. At the same time, it would be exhausting to hear an entire sentence read out, so make a judgement, and don't be afraid to rewrite the sentence so that you do get a nice phrase that works well as link text!
- ALWAYS CHECK THE DEPLOY PREVIEW: I personally like to do my initial read from the preview so that I can fully see what the guide is looking like. I happen to find that easier for me to know when to break up paragraphs etc.

## Editing Considerations

### How much can we change? 

I strive to stay close to what I perceive to be the author's intended message as possible. They wanted to share something: how a feature works, define & explain a config option... so I probably approach it from that angle: this is what they wanted to say, and maybe their message isn't entirely clear, helpful or grammatically accurate. Can I give them the words they couldn't find in the moment, in such a way that makes them think, "Yes! That's what I meant!" ?

So, I don't really worry when phrases or structure deviates a little if I think I get what they're trying to say.

*We* probably have a lot more experience writing this stuff. We have words and phrases we naturally spew out on command to explain this stuff that they don't. That's where we can often help them. So I think it's fine to use our experience to say, "Is something like this an accurate way to put it?"

Often they are not writers, so they are not super attached to their words the way we are...and project on to them! 😄
If I trust the person, I'll often say my suggestions are "for your consideration"

### How much is too much? Too Little? 

Helpful docs avoid these common "too much" and "too little" criticisms:

**Too much:**
- too much information
- too many sentences in a paragraph
- too many words in a sentence
- too many paragraphs
- too much text in a section
- too much jargon
- too many acronyms
- too many assumptions of specific domain knowledge

**Too little:**
- not enough perspective (meaning seeing things from only one type of POV)
- too little/missing information
- too little "why"
- too few examples
- too few headers (not scannable)
- too little structure
- too few basics just because theyre "documented elsewhere" or "everyone knows that"

But, I think what I most often see boils down to "too much" writing and "too little" content: 

it takes strong writing chops to use few words efficiently. People tend to use more words than they need: "There are files. Within these files there are variables..." vs "files containing variables."

Explanations/instructions written by those with too much context in their head run the risk of being, "Step 1, draw two eyes; Step 2, draw the rest of the owl.

Similarly, we when we review and edit with too much context in our head, we run the risk of a simplistic "editing = cutting" mindset. This can result in cutting the steps/ideas that seem obvious to us vs cutting the extraneous words that bog down the sentences and tire a reader out. 😅

We need to remember that **typical editing advice to "cut mercilessly" refers to words and phrases, not ideas and context**. Often, we actually want to *add* those, which can seem counterintuitive to "editing." But, when we edit well, even when we add context, it *feels* shorter.

## External Resources

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
