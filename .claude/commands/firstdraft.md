# First Draft Documentation Workflow - Claude Code

## STEP 1: GATHER BASIC INFORMATION
Ask user for information **one by one** (not all at once):

1. **Feature/Topic Name**: "What is the name of the feature or topic you want to document?"
2. **JIRA Ticket**: "Please provide the JIRA ticket number/URL"
3. **Documentation Type**: New feature documentation or Update existing documentation
4. **Target Audience**: Always set to "end users" (don't ask)

---

## STEP 2: ANALYSIS PHASE

1. Use MCP Atlassian integration: `mcp__atlassian-mcp__jira_get_issue` to get main ticket details
2. Analyze JIRA ticket and all associated/linked tickets thoroughly
3. **CRITICAL**: Request ALL resources mentioned in JIRA tickets:
   - Product briefs
   - Kick-off call recordings
   - Any other zoom links (DO NOT SKIP)
   - Figma designs
4. **Search for feature flags** in JIRA:
   - If found: Provide flag link to user
   - If not found: Report "Feature flags: Not found in JIRA analysis"

---

## STEP 3: RESOURCE COLLECTION (SEQUENTIAL)

Ask for resources **one by one** with specific links:

1. Product Brief: "Please provide content from Product Brief: Link: [specific URL from JIRA]"
2. Kick-off call recording: "Please provide content from kick-off call: Link: [specific URL from JIRA]"
3. Any other recording: "Please provide content from this recording: Link: [specific URL from JIRA]"
4. Figma designs: "Please provide content from Figma designs: Link: [specific URL from JIRA]"

**Wait for each resource before requesting the next one**

---

## STEP 4: CONTENT CREATION

### 4.1 Opening Structure (Required)

As a New Relic user, you may [describe pain point/repetitive task]. [Provide specific scenario if helpful]. This [manual process/approach] is [time-consuming/problematic] and [explain impact].

[Feature name] solves this problem by [solution]. You can [key benefit], so you'll [outcome without manual effort].

---

### 4.2 Style Guide Requirements (Mandatory)

**General Principles:**
- Follow American English conventions
- Tone: honest, empowering, and ingenious
- Address the user as "you"
- Use contractions
- Start sentences with user concerns
- Be explicit, don't imply
- Avoid ableist and derogatory language

**Capitalization:**
- Capitalize the first word of a sentence
- Capitalize proper nouns, acronyms and abbreviations
- Title of article in titlecase
- Headings in sentence case
- Do not use gerunds in title
- Do not use interrogative headings
- For UI elements and commands, follow in-product capitalization

**Punctuation & Grammar:**
- Don't use & to mean "and"
- Don't use apostrophes to make acronyms plural
- Don't use apostrophes to abbreviate years; always write years in 4 digit form
- Use apostrophes when making contractions
- Never use a colon after a sentence fragment

**Colon Usage:**
- **In running text**: Capitalize the first word after the colon if the word begins a complete sentence. Otherwise, do not capitalize the first word after a colon.
- **In headings**: Capitalize the first word after the colon, regardless of its part of speech, unless the word is a product name that begins with a lowercase letter or, in developer materials, is a computer literal that begins with a lowercase letter.
- **In bullet list items with lead-ins**: Where there's an introductory word or phrase (often bolded), capitalize the first word in the text that follows—even if it's not a complete sentence.

**Other Rules:**
- In general, avoid semicolons
- For list of items, use the Oxford comma

---

### 4.3 Component Usage Guidelines

**MANDATORY Pre-Writing Analysis:**
- ✅ Complex multi-step procedures with substantial content per step? → Use `<Steps>`
- ✅ Different ways to achieve the same result? → Use `<Tabs>`
- ✅ Related documentation links? → Use `<DocTiles>`
- ✅ Final section must be "Related topics" (NOT "What's next")

**Component Usage Rules:**
- `<Steps>` - ONLY for complex multi-step procedures with substantial content per step
- Numbered lists - For simple, direct steps
- `<Tabs>` - For alternative approaches to achieve the same outcome
- `<CollapserGroup>` - For optional/expandable content
- `<DocTiles>` - For related documentation links (NOT bullet points)
- `<Icon name="fe-more-horizontal"/>` - For three-dot menu references

---

### 4.4 Component Syntax Examples

**Complex multi-step procedures:**
```jsx
<Steps>
<Step>
[Complex step with detailed instructions, multiple sub-actions, or explanations]
</Step>
<Step>
[Another complex step with substantial content]
</Step>
</Steps>
```

**Simple direct steps:**
1. Go to **[one.newrelic.com](https://one.newrelic.com)**.
2. Click **Create alert**.
3. Configure your settings.

**Alternative approaches:**
```jsx
<Tabs>
<TabsBar>
  <TabsBarItem id="method1">Method 1</TabsBarItem>
  <TabsBarItem id="method2">Method 2</TabsBarItem>
</TabsBar>
<TabsPages>
  <TabsPageItem id="method1">
  [Instructions for method 1]
  </TabsPageItem>
  <TabsPageItem id="method2">
  [Instructions for method 2]
  </TabsPageItem>
</TabsPages>
</Tabs>
```

**Related documentation:**
```jsx
## Related topics

<DocTiles>
  <DocTile title="Title 1" path="/docs/link1">
    Description of related topic 1.
  </DocTile>
  <DocTile title="Title 2" path="/docs/link2">
    Description of related topic 2.
  </DocTile>
</DocTiles>
```

**Expandable content:**
```jsx
<CollapserGroup>
<Collapser id="unique-id" title="Section title">
[Content that can be collapsed]
</Collapser>
</CollapserGroup>
```

**Tables:**
```jsx
<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>**Header**</th>
      <th>**Description**</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item</td>
      <td>Description</td>
    </tr>
  </tbody>
</table>
```

**Callouts:**
```jsx
<Callout variant="tip">Content</Callout>
<Callout variant="important">Content</Callout>
<Callout variant="caution">Content</Callout>
```

---

### 4.5 Metadata Requirements

```yaml
title: [Descriptive title without gerunds/interrogatives]
tags:
  - [Primary category]
  - [Secondary category]
  - [Feature-specific tag 1]
  - [Feature-specific tag 2]
  - [Feature-specific tag 3]
  - [Feature-specific tag 4]
metaDescription: "[User-focused description]"
freshnessValidatedDate: never
```

---

### 4.6 Content Sections Structure

**Required Sections (in order):**

1. Opening (pain point → solution format)
2. Preview Callout (if feature is in preview):
```jsx
<Callout title="preview">
  We're still working on this feature, but we'd love for you to try it out!
  This feature is currently provided as part of a preview program pursuant to our [pre-release policies](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>
```
3. What you can do (features/capabilities)
4. Pricing (see workflow below)
5. Prerequisites
6. Access/Navigation instructions
7. Main procedure sections
8. Related topics (MANDATORY final section with `<DocTiles>`)

**Conditional Sections Only:**
- Include ONLY if explicitly provided in source materials: Troubleshooting, Security, Limitations, Best practices

---

### 4.7 Pricing Section Workflow

**Placement**: After "What you can do" and before "Prerequisites"

1. Search source materials for: "pricing", "billing", "cost", "CCU", "charge", "fee", "subscription"
2. If found: Add pricing information from source materials
3. If NOT found: Ask user "I didn't find specific pricing information in the source materials. Would you like me to add a pricing section to the documentation?"
   - If NO: Skip pricing section
   - If YES: Use template below

**Template:**
```jsx
## Pricing

The <DNT>[Feature name]</DNT> is an Advanced Compute Product feature offered as an [add-on](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/add-on-billing) or as a part of the Compute pricing model. Advanced [CCUs](/docs/licenses/license-information/product-definitions/new-relic-one-pricing-definitions/#compute-capacity-unit) are consumed when [describe when CCUs are used for this specific feature].
```

---

## STEP 5: GIT WORKFLOW

1. Check current branch
2. Switch to develop: `git checkout develop`
3. Pull latest: `git pull origin develop`
4. Create feature branch: `git checkout -b [JIRA-TICKET-NUMBER]-[feature-name-kebab-case]`
5. Create documentation files
6. Update navigation files (don't add periods to .yml entries)
7. Open files in VS code for user reference

---

## STEP 6: QUALITY VERIFICATION (PRE-PR) - MANDATORY

**Use TodoWrite tool throughout to track progress**

### 6.1 MDX Verification

```bash
yarn verify-mdx
```
Wait for user confirmation before proceeding

### 6.2 Local Build Test

```bash
yarn start
```

**Port conflict handling:**
- Check: `lsof -ti:8000`
- Kill: `kill -9 [PID]`
- Try next port: `yarn start --port 8001`

**Provide local links based on actual port:**
- Main site: `http://localhost:[port]/`
- New page: `http://localhost:[port]/docs/[path-to-new-page]`

**Ask user to confirm:**
- Build completes successfully
- Page loads correctly
- Navigation links work
- Components render properly
- No console errors

**CRITICAL**: Only proceed to PR after BOTH steps pass

---

## STEP 7: COMMIT AND PR

**Commit Message:**
```
[Descriptive commit message without jargon]

- Bullet point of key changes
- Another key change
- Technical implementation details
```

**PR Title:** `[feat]: [Brief description]`

**PR Body:**
```markdown
## Key Changes
- New documentation: `[file path]`
- Navigation update: [location]
- [Key feature 1]
- [Key feature 2]
- [Key feature 3]
```

---

## STEP 8: FINAL STEPS

1. Open files in VS Code: `open -a "Visual Studio Code" [files]`
2. Reference recent .mdx files created after January 2025 for current patterns
3. Final review and recommendations

---

## CRITICAL RULES

**NEVER GUESS OR INVENT CONTENT**

Only use information from:
- JIRA tickets and linked resources
- Product briefs and specifications
- Figma designs and workflows
- Call transcripts and recordings
- User-provided materials

**When in doubt: Ask for clarification**

**Process Rules:**
- Ask for information one by one
- Include specific URLs when requesting resources
- NEVER skip zoom recording links
- Use numbered lists for simple steps, `<Steps>` for complex procedures
- Always verify MDX and local build before creating PR
- Never create troubleshooting sections without source material
- Use collapsers for third-level headings
- Use TodoWrite tool throughout process

---

## FINAL VERIFICATION BEFORE SUBMIT

- ✅ `<Steps>` used for all complex multi-step procedures
- ✅ `<Tabs>` used for all alternative approaches
- ✅ `<DocTiles>` used for related topics
- ✅ "Related topics" heading (not "What's next")
- ✅ All components properly formatted
