---
title: Reviewing translations as a non-native speaker
description: How to review translation PRs as a non-native language speaker.
---

Although we always prefer that our translations are reviewed by native speakers of the PRs language, sometimes we need to do "good enough" reviews in order to merge PRs before their content becomes stale and outdated.

**Any community member can help** by following our checklist and leaving a review comment on a PR telling us that you have done these steps!

## Astro Docs Reviewer Checklist

1. Go into the "Files Changed" section if needed to find which page has been changed. NOTE: If the pages are for part of the tutorial, we need to let Chris/Yan know because the tutorial must be PR'd in one big PR. They will create a branch for that language and help get translators started working on this like a big project.

2. Check the Netlify Deploy preview for a visual inspection:
    - Scroll through the entire page and make sure all code blocks/notes and other visual elements are rendered properly
    - Check the page both in the translated language (to look for errant English that shouldn't be there) AND in English, to get a sense of the text

3. Use a browser translation tool (e.g. Google Translate in Chrome) to translate the page to English. Scan the page for words or phrases that look out of place 

4. Check the "files changed" section of the PR if there is a failing CI link check to see which links need to be updated. Common problems are: 
    - using the FULL URL (https://) instead of just starting with the language prefix (e.g. `/es/`)
    - missing leading or trailing slashes
    - not using the proper language prefix (i.e. NOT `/en/`). All links should keep a reader within their own language version of the site.
    - broken language fragments: the URL fragments should be in the native language, if they exist. (Even though the main page slug should be in English)
    
5. Check for existing reviews with suggested improvements that have NOT yet been addressed -- this means problems have been identified, but have NOT yet been fixed. We'll need to ping the author to fix. Do not merge!

6. For the tutorial pages - test the interactive bits! Multiple Choice questions, check boxes etc. For example, checking off the bottom of the page should update the tutorial tracker status.

7. Leave a review comment with a clear LGTM (looks good to me!) to tell a maintainer that you have **followed these steps** to provide a review (not given a full language review), and they can skip all these steps themselves and just merge!

<blockquote style="font-style:italic;"> "As a non-native speaker, I reviewed this PR using the Docs Translation Review Checklist and LGTM!"</blockquote>


## For Maintainers
(with extra repo permissions)

Once a translation PR has a clear "LGTM" comment and you are preparing to merge:

1. Check to see whether there have been any changes to the original English source document since the PR was made. This translation may be correct and mergeable for an *older* version of the page!
    - Check the file's "history" on GitHub and compare to the date of the filed PR and the date of the PR review.
    - If in fact there ARE newer changes to the file, then change the title of the PR to include `[i18nIgnore]` so that the Translation Tracker will NOT show this file as completely updated, because it will in fact still "need updating"

2. Update branch before merging, but you do not typically need to check the preview again. If there were conflicts, you'd see a notification to resolve them.

3. FOR HACKTOBERFEST ONLY - add the `hacktoberfest-accepted` label.

4. Enter the PRs GitHub URL into https://coauthor.kevinzc.com/ to ensure that every reviewer and commenter will receive coauthor credit on this PR.

5. Check to see whether this is a first-time contributor, because you know that means... 

6. Wait for checks to pass before merging.
