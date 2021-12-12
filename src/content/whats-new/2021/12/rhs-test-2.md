---
title: 'title-here' (for example, 'Get instant observability with New Relic I/O')
summary: 'summary-here' (for example, 'Leverage 400+ open source quickstarts to get started monitoring your stack')
releaseDate: 'yyyy-mm-dd' (for example, '2021-10-13')
learnMoreLink: 'https://example.com' (for example, 'https://newrelic.com/blog/nerdlog/instant-observability-quickstarts') (Link to docs or blog)
getStartedLink: 'https://example.com' (for example, 'https://onenr.io/0X8woDWyJRx') (Link to the GitHub repo, NR1 in-product UI, or instructions from docs or blog)
---
## Front matter tips 

The front matter is the group of lines at the top of the post that appear between lines containing three dashes. Here's what you must include in the front matter:

* The starting and ending lines containing three dashes.
* Title, summary, and releaseDate. 

Don't forget to remove the following from the front matter:

* The lines you don't use.
* The parentheses with examples.

## Word wrap

If you're using VS Code and want to turn on text wrapping:

* Windows: Ctrl + Shift + press the key `P`. Now on the command line, type Toggle Word Wrap and press Enter.
* Mac: Command + Shift + press the key `P`. Now in the command line, type Toggle Word Wrap and press Enter.

## Heading format 

A heading is preceded by two hash symbols and a space. Use sentence case, which means only one capital letter at the beginning.

Typically, you use headings in pairs. So, if you don't have two sections in your post, you can skip headings.

## Body format

Format for the body (150-400 words):

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu diam nibh. Vestibulum pellentesque finibus metus at hendrerit. Maecenas fermentum odio lorem, vel vulputate mauris tempor vel. Phasellus tincidunt odio eu magna ultricies, in porttitor justo blandit. 

## Links

[Lorem ipsum](https://example.com)-You can have spaces between words in square brackets but not in the link inside parentheses.

NOTE: Remember to use absolute URLs in links (for example, always include the protocol followed by the domain: "https://whatever_domain/path-to-doc").

## Videos

Use embed code. The example below is an embedded YouTube video. You would replace the value for src with your link:

<iframe width="560" height="315" src="https://www.youtube.com/embed/04JP0ky_hjI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Images

![Insert some alternative text here describing the image](./images/INSERT_IMAGE_FILE_NAME "Repeat the alternative text here as the title of the image")

Example: !["Screenshot showing automap feature"](./images/automap.png "Screenshot showing automap feature")

Remember to add your image(s) to "images" folder in the Github pull request. 

## Bold format

Use double asterisks to bold words for UI labels or simply for emphasis: **bold**

## Lists

Use this format to create an ordered list (used for sequential steps):
1. Step one
2. Step two
3. Step three

Use this format to create bullet lists (used for non-sequential information):
* Important detail
* Important detail
* Important detail

## Miscellaneous

Link to instructions: https://docs.newrelic.com/docs/style-guide/writing-docs/article-templates/whats-new-pr-steps

Markdown cheat sheet: https://www.markdownguide.org/cheat-sheet/