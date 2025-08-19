---
title: GitHub Issues
description: How to file an issue or work on existing issues in the Astro Docs repository.
---
You can [**file a new issue**](https://github.com/withastro/docs/issues/new/choose) to let us know of outdated or incorrect documentation without attempting to fix anything. You can also let us know of any problems you encounter on the site itself.

You can also choose to [**work on an existing issue that has been triaged and has the "help wanted" label**](https://github.com/withastro/docs/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22help+wanted%22).

These issues are separate from Astro core issues and are only read and managed by Docs Maintainers. Issues must be about problems or suggestions **for the documentation site only** and not feature requests, feedback about Astro itself, or requests for support.

We decide to add new content and rework existing content in response to [GitHub Discussions](#starting-with-GitHub-Discussions), so participating in a discussion is usually the first step to having an Issue created by maintainers and making a change. After a discussion topic has been considered by the community, maintainers may choose to create a GitHub issue and add the `help wanted` label to indicate that community contributions are welcome.

Maintainers will often reach out directly to community members who were involved in the discussion to encourage them to submit PRs, so participating in these discussions is a great way to be visible to the project and the community!

[Larger contributions](/first-time/larger-contributions/) to the docs are appropriate only after participating in GitHub Discussions that result in a GitHub issue. Please be aware that unsolicited material may not fit into our existing plans.

## Examples of Helpful GitHub New Issues

- a code example is wrong (with or without a proposed fix)
- accessibility (a11y) issues discovered
- instructions do not work as shown (perhaps because a third-party changed their service)

## Writing an Issue

Helpful issues usually include:
- Clear descriptive titles
- Links to relevant pages/files
- Explanations as to why (or _for whom_) this is a problem
- A working reproduction of an error when following the docs as written
- Optional: proposed solutions

## How to file an issue

1. Visit the [new issue page](https://github.com/withastro/docs/issues/new/choose) and choose the appropriate kind of issue you want to file.

2. Fill out the template, providing all the requested information.

3. Wait! 😅 A maintainer will "triage" your issue by assigning it a label. They may or may not leave a comment at this time. This doesn't mean anything is wrong. It probably means that a maintainer does not have time to consider your issue at this time, and is only checking for the kind of issue you submitted, or determining which maintainer will be responsible for the issue.

4. A maintainer may also "assign" an issue to themselves or another maintainer. Assigning an issue means choosing which maintainer is ultimately responsible for overseeing the issue, guiding the discussion, and making the final decision about whether or not to ask for a community contribution or whether to close it. It does not mean that they are working on a solution themselves.

5. Feel free to ask other members of the community (in Discord, on social media, etc.) to comment on your issue. Commenting on issues helps us understand the nature of the problem, how many people are experiencing or feel the same, and gives us more perspectives as we consider the issue. (While you are waiting for comments on your issue, consider commenting on other issues, too!)

6. If you indicated that you were willing to make a PR with a solution to the issue, wait for approval from a maintainer. Then, create a pull request by [editing a single page](/first-time/edit-single-page/) for a smaller contribution or by using one of the methods suggested for [making a larger contributions](/first-time/larger-contributions/).

## How to help with existing issues

Docs issues will be triaged by a maintainer who will add one or more labels to an issue. These labels will indicate the type of issue (e.g. new content, site infrastructure) and may also include labels to describe the issue in other ways (e.g. priority, difficulty, community invovlement wanted).

### Triaged issues with the "help wanted" label

**tl/dr: If you see "help wanted", go right ahead!**

If an issue has been triaged and a maintainer has added the ["help wanted" label](https://github.com/withastro/docs/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22help+wanted%22) then it has been **acknowledged as an issue we'd like help fixing**! We would love it if you would work on these issues, implementing a solution as described in the issue!

**You do not require permission to work on a "help wanted" issue.** If you would like to work on one of these issues, please leave a comment saying that you are working on it to let other community contributors know. 

**We do not assign issues to community contributors.** In some cases, issues may be assigned to a maintainer to let the community know which maintainer they should ask for any help or clarification on this issue, not to indicate who is actually working on it.

### Issues not labeled "help wanted"

**tl/dr: Comment and discuss, but do not work on these!**

These have not yet been approved by a maintainer. Our maintainers may have not yet decided whether this is a valid issue. Or, maintainers may already know that an issue will be fixed by some upcoming planned work. It is not appropriate to start working on a solution to this issue. But it **is helpful to comment** on this issue, letting maintainers know if this is an issue you also have or agree with.

If you see an issue that interests you and that you could fix, but it is not labeled "help wanted", then you are welcome to commment in the issue! Tell us that you think you have a way to address it, and that you'd be willing to work on it! The maintainers will provide feedback in the issue, and will let you know whether they'd like you to work on a solution.

You are always welcome and encouraged to comment on any existing issue to help the maintainers evaluate it, and provide any extra context or information you have!

Note: authors may add labels to their own issues, but this does not mean the issue has been triaged by a maintainer. Just because an issue has a label does not mean the issue is approved for working on it. 


## Starting with GitHub Discussions

**tl/dr: Most issues begin as discussions!**

Astro docs uses GitHub Issues as an inbox of approved work to be done. We prefer to evaluate potential tasks in GitHub Discussions, and only create a GitHub Issue once we have decided that there is a problem to be solved, and ideally, with an idea of how to solve it so we can give guidance to community contributors and they will know how to proceed!

GitHub Discussions are a great place to test your suggestions with the Astro community, and allow for upvoting of popular ideas. This helps the Astro Docs team prioritize and allocate resources to ideas that are likely to bring the greatest improvements for the largest number of people. Participating in GitHub Discussions helps us get several perspectives, and test and validate ideas before we create an issue and ask for a specific implementation or solution.

If you are unsure whether your comment should be an Issue or a Discussion, then it probably should be a discussion!

### Examples of Helpful GitHub Discussions

- a particular explanation is confusing (with explanation of what is confusing or could make the documentation better)
- a request for an example of how to implement a specific feature (e.g. responsive nav bar)
- missing content that you would like to see added
- design or feature ideas for the documentation website