---
title: Reviewing Translations
description: How to review translation PRs as a non-native language speaker.
---

1. Go into the "Files Changed" section if needed to find which page has been changed. NOTE: If the pages are for part of the tutorial, we need to let Chris/Yan know because the tutorial must be PR'd in one big PR. They will create a branch for that language and help get translators started working on this like a big project.
2. Check the Netlify Deploy preview for a visual inspection:
    - Scroll through the entire page and make sure all code blocks/notes and other visual elements are rendered properly
    - Check the page both in the translated language (to look for errant English that shouldn't be there) AND in English, to get a sense of the text
1. Use a browser translation tool (e.g. Google Translate in Chrome) to translate the page to English. Scan the page for words or phrases that look out of place 
1. Check the "files changed" section of the PR if there is a failing CI link check to see which links need to be updated. Common problems are: 
    - using the FULL URL (https://) instead of just starting with the language prefix (e.g. `/es/`)
    - missing leading or trailing slashes
    - not using the proper language prefix (i.e. NOT `/en/`). All links should keep a reader within their own language version of the site.
    - broken language fragments: the URL fragments should be in the native language, if they exist. (Even though the main page slug should be in English)
1. Check for existing reviews with suggested improvements that have NOT yet been addressed -- this means problems have been identified, but have NOT yet been fixed. We'll need to ping the author to fix. Do not merge!
2. For the tutorial pages - test the interactive bits! Multiple Choice questions, check boxes etc. For example, checking off the bottom of the page should update the tutorial tracker status.
