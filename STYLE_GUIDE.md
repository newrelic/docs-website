# Style Guide

# Table of Contents

- [Style Guide](#style-guide)
- [Table of Contents](#table-of-contents)
  - [Welcome](#welcome)
  - [GitHub & Gatsby](#github--gatsby)
  - [What can I contribute?](#what-can-i-contribute)
    - [Product content pages](#product-content-pages)
    - [New Relic other pages](#new-relic-other-pages)
  - [The writing process](#the-writing-process)
    - [Think of your audience](#think-of-your-audience)
    - [Audience for product content](#audience-for-product-content)
    - [Audience for other pages](#audience-for-other-pages)
  - [Prepare to write](#prepare-to-write)
    - [Relics](#relics)
    - [Non-Relics](#non-relics)
  - [Write drafts and get feedback](#write-drafts-and-get-feedback)
  - [Word Choice](#word-choice)
    - [Use you as the pronoun](#use-you-as-the-pronoun)
    - [Avoid Gender specific pronouns](#avoid-gender-specific-pronouns)
    - [Avoid "easy" and "simple"](#avoid-easy-and-simple)
    - [Avoid emojis, slang, and metaphors](#avoid-emojis-slang-and-metaphors)
    - [Define jargon](#define-jargon)
  - [Writing Style](#writing-style)
    - [Be explicit and opinionated](#be-explicit-and-opinionated)
    - [Make it easy to scan](#make-it-easy-to-scan)
    - [Write concisely](#write-concisely)
    - [Use clear hyperlinks](#use-clear-hyperlinks)
    - [Don't over link content references](#dont-over-link-content-references)
    - [Use relative hyperlinks for local links](#use-relative-hyperlinks-for-local-links)
    - [Mark localhost URLs as code strings](#mark-localhost-urls-as-code-strings)
    - [Indicate when something is optional](#indicate-when-something-is-optional)
    - [Abbreviate terms](#abbreviate-terms)
    - [Use SEO optimized titles and descriptions](#use-seo-optimized-titles-and-descriptions)
  - [Updating table of contents](#updating-table-of-contents)
  - [Using Gatsby templates](#using-gatsby-templates)
  - [Using linters](#using-linters)
  - [Using Frontmatter](#using-frontmatter)
  - [Reusable components](#reusable-components)
  - [Grammar and formatting](#grammar-and-formatting)
    - [Format titles](#format-titles)
    - [Format headers](#format-headers)
    - [Format code blocks, inline code, videos, and images](#format-code-blocks-inline-code-videos-and-images)
    - [Inline code and code blocks](#inline-code-and-code-blocks)
    - [Adding images](#adding-images)
    - [Adding videos](#adding-videos)
    - [Code Formatting: Type Tab](#code-formatting-type-tab)
  - [Capitalize proper nouns](#capitalize-proper-nouns)
  - [Use active voice](#use-active-voice)
  - [Make lists clear with the Oxford Comma](#make-lists-clear-with-the-oxford-comma)
  - [Prefer US English](#prefer-us-english)
  - [References](#references)

## Welcome

The New Relic Docs Site is an open source documentation repository where we encourage contributions from everyone, not just employees of New Relic.

If you’d like to contribute by creating new content or updating existing content review this **Style Guide** and our [Contributors Guide](CONTRIBUTING.md) before getting started.

## GitHub & Gatsby

The New Relic Documentation Team and Developer Experience Team uses [Github](https://github.com/) and [Gatsby.JS](https://www.gatsbyjs.org/) to:

- accurately maintain our technical reference docs and guides
- iterate and publish quickly
- encourage collaboration
- support the open source community
- maintain version control
- gather feedback quickly

## What can I contribute?

### Product content pages

Product content pages are detailed technical specifications of the New Relic One platform and it's components.

### New Relic other pages

@TODO to be completed.

## The writing process

### Think of your audience

Before you begin writing, answer these questions.

### Audience for product content

@TODO to be completed.

### Audience for other pages

@TODO to be completed.

## Prepare to write

Once you answer those questions, create an outline of the topic and think about
any coding examples you’ll use (if applicable). This helps to organize your thoughts and make the writing process easier.

### Relics

If you need videos or code samples or clarification from other teams within New Relic start to consider
who can assist you and reach out to them.

### Non-Relics

If you need videos or code samples or clarification from other teams within New Relic file a [Github issue](https://github.com/newrelic/developer-website/issues/new/choose) so The Developer Experience team can assist you.

## Write drafts and get feedback

Get your outline or draft in front someone to get early feedback often as
it's much easier to adjust earlier in the writing process.

## Word Choice

### Use you as the pronoun

Use the second person `you` to provide a conversational tone in your documentation. always address the user directly, as `you`. This approach is inclusive and immediate and the text and instructions seem to speak directly to the person reading it. Avoid using the first person (“I”, “we”, “let’s”, and “us”).

### Avoid Gender specific pronouns

Use `they / them` in place of `he / him` or `she / her`.

### Avoid "easy" and "simple"

Avoid using words like “easy”, “simple” and “basic”. Avoid any language that
assumes a reader's experience level.

### Avoid emojis, slang, and metaphors

Avoid using emojis or emoticons and idiomatic expressions / slang, or metaphors.

### Define jargon

Content should avoid the use of jargon.

```md
Jargon: (n.) special words or expressions that are used by a particular profession or group and are difficult for others to understand.
```

All jargon should be expressed in plain English. In other words, pretend like your readers have novice coding experience and have little knowledge of New Relic products and services.

## Writing Style

### Be explicit and opinionated

Don't leave readers guessing, or having to decide between multiple choices. Often they need to solve a problem. As the subject matter expert, you're in a position to help. Provide the best way to do a thing, and why. If there are four different ways, choose the most efficient way. You can explain the choice if necessary. You can also describe other options, but we recommend that you hold that until the end.

### Make it easy to scan

Users should be able to scan a page, learn what it covers, and find the info they're looking for in seconds. Improve scannability by adding headings and bulleted lists, and by including step numbers on procedures.

### Write concisely

Concise writing communicates the bare minimum without redundancy. Strive to make your writing as short as possible. Keep the content readable and manageable by focusing on just the information needed for each area.

### Use clear hyperlinks

Hyperlinks should contain the clearest words to indicate where the link will lead you.
The use of the title attribute on hyperlinks should be avoided for accessibility reasons.

```md
<!-- Good -->

[New Relic Open Source](https://www.opensource.newrelic.com/)

<!-- Bad -->

[here](https://www.opensource.newrelic.com/ 'New Relic Open Source')
```

### Don't over link content references

In guides that are meant for beginners, use less hyperlinks to
minimize distractions. In technical references, you may include as many hyperlinks as
necessary to provide relevant and interesting information and resources.

### Use relative hyperlinks for local links

When referencing another page within the New Relic Developer Site hyperlinks should use relative paths
(not include the full domain). This guarantees that all links function when running locally or in preview.

```md
<!-- Good -->

[README](/README.md)

<!-- Bad -->

[README](https://www.developers.newrelic.com/README.md)
```

### Mark localhost URLs as code strings

Unless you’re running `gatsby develop` or `gatsby build` locally,
localhost links will not work. Therefore it’s recommended to list these URL
references as code blocks so there aren’t invalid links throughout the docs.
`

```md
<!-- Good -->

open your site with `http://localhost:8000/`

<!-- Bad -->

open your site with [http://localhost:8000/](http://localhost:8000/)
```

### Indicate when something is optional

When a paragraph or sentence offers an optional path, the beginning of the first sentence should indicate that it’s optional. For example, “if you’d like to learn more about xyz, see our reference guide” is clearer than “Go to the reference guide if you’d like to learn more about xyz.”

This method allows people who would not like to learn more about xyz to stop reading the sentence as early as possible. This method also allows people who would like to learn more about xyz to recognize the opportunity to learn quicker instead of accidentally skipping over the paragraph.

### Abbreviate terms

If you want to abbreviate a term, write it out fully first, then
put the abbreviation in parentheses. you then can use the abbreviation going for the rest of the article.
For example, “In computer science, an abstract syntax tree (AST) is …”

### Use SEO optimized titles and descriptions

When defining your titles and descriptions for your pages focus on Search Engine Optimization (SEO) best practices.

However if you need to make a choice between SEO and clarity, always go with a clear title and description over trying to "squeeze" in SEO terms that aren't relevant to the content of the page.

## Updating table of contents

When updating markdown pages that contain a table of contents be sure to update the TOC accordingly as you
add new sections in the markdown file. You can use an automated tool such as [Markdown-TOC](https://github.com/jonschlinkert/markdown-toc)
or update the TOC manually.

## Using Gatsby templates

When creating pages you can use a predefined Gatsby template for your .md or .mdx files. Based on the type of page you want to create be sure to select the correct template and apply that to the Frontmatter slug key value pair for `template`.

## Using linters

Linting is the process of running a program that will analyse code for potential errors.
The New Relic Developer Site currently has linting configurations that will assist you in creating content.

- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
- [markdownlint](https://github.com/DavidAnson/markdownlint)

## Using Frontmatter

When you create a Markdown file, you can include a set of key value pairs that can be used to
provide additional data relevant to specific pages in the GraphQL data layer.
This data is called [Frontmatter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) and is denoted by the triple dashes at the start and end of the block.

This block will be parsed by gatsby-transformer-remark as Frontmatter.
The GraphQL API will provide the key value pairs as data in your React components.
The value that is assigned to the key slug is used in order to navigate to your post.

## Reusable components

In order to drive simplicity and ease of use New Relic has provided a set of reusable components you can leverage
when creating documentation. Refer to our [Component Guide](COMPONENT_GUIDE.md) for more information.

## Grammar and formatting

### Format titles

All titles and descriptions should be sentence case.

Titles should aim be brief and still convey a comprehensive meaning of the page.
Because titles show up throughout the docs in navigation elements (like breadcrumbs, and sidebar navigation) use shorter names to mitigate visual clutter.

### Format headers

Avoid using `H1` header; that is reserved for the title of each page.

All headers should be sentence case. When using `H2`, `H3` and `H4` ensure that you follow a logical hierarchy and properly use sub headers through out your pages.

### Format code blocks, inline code, videos, and images

Use the [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) as reference when creating and editing Markdown files.

### Inline code and code blocks

Refer to the [formatting inline code and code blocks section](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) in the Markdown cheat sheet to learn how to format code in Markdown.

### Adding images

When adding images to a content page refer to the [images section](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images) in the Markdown cheat sheet to learn how to use images in your Markdown.

Images are stored in the [images directory](src/images) and organized by navigation section name. For example, the images for the [Build an App Guide](src/markdown-pages/build-apps/build-hello-world-app.mdx) are located in the [build-an-app directory](src/images/build-an-app).

### Adding videos

When adding videos to a content page refer to the [videos section](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#youtube-videos) in the Markdown cheat sheet to learn how use videos in your Markdown.

Videos are not stored within the site source code. All videos should be stored and reference from a video hosting site.

### Code Formatting: Type Tab

Each code snippet can include a tab indicating the language type the snippet contains.
For example, the following YAML snippet will display a “YAML” tab.

````md
```yaml
- id: Joe Doe
  bio: Thinks documentation is the coolest.
```
````

```yaml
- id: Joe Doe
  bio: Thinks documentation is the coolest.
```

Use the following language keywords where appropriate:

- javascript or js
- jsx
- graphql
- html
- css
- shell
- yaml
- markdown
- diff
- flow

If a language keyword is omitted, the type will show as TEXT (as shown above)

## Capitalize proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in pages.

- New Relic One
- GraphQL
- NerdGraph
- Nerdpack
- Nerdlet
- NerdStorage
- NRQL
- CLI
- JavaScript (capital letters in “J” and “S” and no abbreviations)
- Markdown
- Node.js

## Use active voice

Use active voice instead of passive voice as it’s a more concise and straightforward way to
communicate a subject

**passive**: _The for loop in JavaScript is used by programmers to…_

**active**: _Programmers use the for loop in JavaScript to…_

## Make lists clear with the Oxford Comma

Use the Oxford Comma except in titles. It is a comma used after the penultimate item in a
list of three or more items, before ‘and’ or ‘or’ e.g.

For Example:

_The Jamstack is: JavaScript, APIs, and Markdown._

## Prefer US English

For words that have multiple spellings, prefer the US English word over British or Canadian English.

For example:

color over colour

behavior over behaviour

## References

This style guide was based on the [Gatsby Style Guide](https://www.gatsbyjs.org/contributing/gatsby-style-guide/#writing-process).
