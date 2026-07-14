# Authoring Guidelines — New Relic Docs IA (V1)

**Status:** V1, draft. Scope: onboarding pages (Introduction, Install & Configure). Refinements coming as we templatize more content types.

**Who this is for:** every contributor — internal writers, PMs, engineers, and external/community contributors — touching onboarding content under `/<onboarding>/`.

**Why this exists:** We're shifting docs to serve both humans and AI/API consumers from a single source, and pushing UI workflow content back into the product. These rules are the V1 contract that makes that work.

**What V1 looks like in practice:** V1 is **editorial** — conventions, templates, and review discipline. The platform automation that would let frontmatter drive rendered HTML, JSON-LD generation, and `.md` projections is on the future roadmap, not in V1. For now, consistency comes from writers following standardized templates by hand, not from tooling. Section 14 lists what's explicitly deferred. Where this guide mentions "auto-render" or "build-time," treat that as the future-state target — V1 work is the writing convention that makes the migration possible later.

---

## 1. Core principles

Seven load-bearing ideas. Everything else follows from these.

1. **UI is the docs for UI.** If a workflow can be done in the New Relic UI, the UI (via in-app assistance) is responsible for documenting it. Docs do NOT duplicate UI walkthroughs.

2. **Single source, multiple outputs.** Author once in MDX. The build emits HTML for humans, `.md` for machine consumers, and JSON-LD structured data for indexers — from the same source. Never hand-maintain a parallel "AI version."

3. **Atomic, self-contained topics.** Each page should be retrievable in isolation and make sense without the surrounding nav.

4. **Front-load compatibility.** What's supported, what's not, what's required — top of the page, not buried.

5. **Time-to-first-value (TTFV) is the metric.** For onboarding, every section earns its place by serving "user gets to first telemetry fast." If a section doesn't, cut it or move it.

6. **Explicit absence beats silent omission.** If we don't cover something, say so on the page. AI fills gaps with hallucination; humans waste time searching.

7. **Opinionated defaults beat configuration buffets.** One recommended path per page. Variations as inline notes, not parallel walkthroughs.

---

## 2. Onboarding page taxonomy

Onboarding consists of two pages per supported combination. Each maps to one user intent.

| Page | URL slug | User intent | Owns | Doesn't own |
|---|---|---|---|---|
| `onboarding-intro` | `intro` | "Is this for me?" | Overview of what the integration does, capabilities provided, install-path chooser (when there's more than one path), UI-alternative pointer, roundtrip TTFV, at-a-glance preview of the install-page tasks | Install steps, compatibility, requirements, verification |
| `onboarding-install` | `install-configure` | "Do it — and confirm it worked" | Compatibility & requirements (front-loaded), one recommended install path with inline failure modes, verification (concrete success signals + troubleshooting cross-reference), related-articles links to deeper topics | Re-explaining the integration, in-depth usage / analysis of captured data |

**URL pattern:** `/<onboarding>/<integration>/<combination>/{intro|install-configure}`

Example: `/<onboarding>/kubernetes/linux-helm/install-configure`

**Note on verification.** In an earlier draft, verification lived on a separate `view-data` page. As of the July 8 refinement, verification is absorbed into the Install page as the `#verify` section — it's the closure of onboarding, not a separate journey step. Deeper usage / analysis of the captured data is a distinct content type (reference / usage guide) that gets its own template outside V1's onboarding scope.

---

## 3. Page structure specifications

Each onboarding page has a canonical structure: which sections appear, in what order, with what heading text and what anchor ID. Writers follow this exactly — V1 consistency comes from every page having the same shape.

**Conventions:**
- ✓ = required section
- ◌ = optional (include when applicable)
- Anchor IDs are stable. Don't rename them when editing a page; AI/RAG citations depend on them surviving edits.

---

### Intro page (`onboarding-intro`)

**User intent:** "Is this for me?"

**Lede.** The Intro opens with a paragraph directly after the page title, *without* an H2 heading. This paragraph is what would traditionally be an "Overview" section; naming it explicitly is redundant, and dropping the heading avoids two headings stacking (page title + `## Overview`). 3–5 sentences, plain language, outcomes over features. The section table below covers what comes *after* the lede.

| # | Req | Heading | Anchor | Purpose |
|---|---|---|---|---|
| 1 | ✓ | Capabilities | `#capabilities` | Bullet list of what the integration or feature provides. For telemetry-producing integrations: telemetry types (metrics, events, logs, traces, entities). For non-telemetry capabilities (Change Tracking, Alerts, SRE Agent, NR Control, Lens, etc.): what the feature does. Outliers get worked out with writers case by case. |
| 2 | ◌ | Choose your install path | `#choose` | Bullet list of the supported install paths for this integration; mark the recommended one; one-line rationale per path (environment fit, upgrade model, tooling assumptions). Include only when the integration has multiple install paths. |
| 3 | ◌ | Guided installation | `#ui-install` | One-sentence pointer to the NR1 entry point; no walkthrough. The anchor stays `#ui-install` for stability; the heading text reflects how the flow is framed in NR1. |
| 4 | ◌ | Time to first data | `#ttfv` | One-line expectation, e.g., "Expect data within ~15 minutes." |
| 5 | ✓ | Installation at a glance | `#at-a-glance` | Numbered preview of the high-level tasks on the Install page. Each item corresponds 1:1 to an actionable H2 on Install (see "Correspondence rule" below the table). Not the actual instructions — a glimpse that sets reader expectations before they click through. |
| 6 | ✓ | Next: install and configure | `#next` | Link to the Install page in this flow |

**Example — *Intro lede*:**

> The New Relic Kubernetes integration monitors the health and performance of your cluster — collecting metrics from nodes, pods, and the control plane, and linking application traces to the Kubernetes entities running them so cluster events surface in application performance views.

**Example — *Capabilities* (telemetry-producing integration, e.g. Kubernetes):**

> - **Metrics** — node, pod, container, and cluster-level performance metrics
> - **Events** — Kubernetes events from kube-state-metrics
> - **Logs** — container logs via Fluent Bit (when log forwarding is enabled)
> - **Entities** — clusters, nodes, pods, deployments, namespaces

**Example — *Capabilities* (non-telemetry feature, e.g. Change Tracking):**

> - **Record changes** — deployments, feature flags, config updates, custom change types via CLI, GraphQL, or webhook
> - **Correlate impact** — automatic correlation of change events with entity performance metrics before and after the change
> - **Compare** — stack up to five recorded changes side-by-side for relative performance analysis
> - **Notify** — webhook out to your team's channels on change events

**Example — *Guided installation*:**

> Guided installation is available at **one.newrelic.com → Integrations & Agents → Guided install → Kubernetes**. The UI provides a guided end-to-end workflow.

**Example — *Installation at a glance*:**

> 1. Check compatibility and gather prerequisites
> 2. Run the installation
> 3. Apply the minimum configuration
> 4. Verify your install

**Correspondence rule — `Installation at a glance` must match Install's actionable H2s.**

Each item in the Intro's `Installation at a glance` corresponds **1:1** to an actionable H2 on the Install page, in the same order. This keeps the two pages feeling like a coherent flow rather than two disconnected documents — what a reader previews on Intro is what they'll actually encounter on Install.

**Actionable H2s** are the ones a reader does something with: `Compatibility and requirements`, `Install`, `Configure` (when present), and `Verify your install`.

**Non-actionable H2s** (`Related articles`) are page structure, not user actions — they never appear in the preview.

Phrasing can differ: preview items are action-oriented ("Check compatibility and gather prerequisites"); H2s are typically nominal ("Compatibility and requirements"). Same structure, different grammatical form.

Worked mapping for a typical K8s Install page:

| Intro's *Installation at a glance* item | ↔ | Install page's H2 |
|---|---|---|
| 1. Check compatibility and gather prerequisites | ↔ | `## Compatibility and requirements` |
| 2. Run the installation | ↔ | `## Install` |
| 3. Apply the minimum configuration | ↔ | `## Configure` *(optional; drop the preview item too if this H2 isn't included)* |
| 4. Verify your install | ↔ | `## Verify your install` |

**Sync discipline.** If a preview item exists without a matching H2 on Install — either add the H2 or drop the preview item. If an H2 exists on Install without a preview — either preview it or restructure the H2. Reviewers check this correspondence on any PR that touches either page.

---

### Install and configure page (`onboarding-install`)

**User intent:** "Do it — and confirm it worked"

**Lede.** Like the Intro, the Install page opens with a short lede between the page title and the first section — a 1–2 sentence orientation of the page's scope and desired outcome (install + minimum configuration + verified data). Include the TTFV if it applies. Do not restate what the integration is or does — that's the Intro's job. The section table below covers what comes *after* the lede.

| # | Req | Heading | Anchor | Purpose |
|---|---|---|---|---|
| 1 | ✓ | Compatibility and requirements | `#requirements` | Supported / Not supported / You need — see Section 8 template |
| 2 | ✓ | Install | `#install` | Numbered steps; one opinionated path; per-step anchors `#install-step-N`; inline failure-mode notes |
| 3 | ◌ | Configure | `#configure` | Minimum config for first telemetry; include only when the integration needs explicit config beyond install |
| 4 | ✓ | Verify your install | `#verify` | Concrete success signals (CLI output, NR1 entity, NRQL) time-bounded to the declared roundtrip TTFV; troubleshooting cross-reference. This is the closure of onboarding. |
| 5 | ✓ | Related articles | `#related-articles` | Affinity-based link set to deeper topics (using `<DocTiles>` or a bullet list) — advanced config, related integrations, usage/analysis references. Framed as related content, not sequential "next steps": onboarding was the sequential piece; from here on the content is a-temporal. `flow.next` is `null`. |

**Guided-installation callout (not a section).** Between the lede and Compatibility, include a `<Callout variant="tip" title="Guided installation">` pointing readers to the NR1 entry point if a UI install path exists. This is intentionally a callout (an aside) rather than an H2 section (a topic) — the content is a pointer for the search-first reader who missed the Intro, not a page-level subject. On the Intro the same content is a section (`#ui-install`) because the reader there is still orienting; on Install the reader has committed to CLI and only needs a bail-out option. Delete the callout when the integration has no UI install path.

**Notes:**
- Each numbered install step gets a stable anchor `[#install-step-N]` so AI/RAG consumers can cite a specific step.
- Inline failure-mode notes appear immediately after the step they apply to, set in italics: "*If you see X, [one-line fix or link].*"
- `Verify your install` is the closure of onboarding. Give concrete signals from whichever surfaces apply — CLI output (e.g., `kubectl -n newrelic get pods` returning expected pods), NR1 UI entity, NRQL query with expected return shape. "Data will appear shortly" is not acceptable.
- Deeper usage / analysis of the captured data does not belong here — that's a separate content type (reference / usage guide), out of scope for V1 onboarding.

**Example — failure-mode note inline with a step:**

> 4. Install:
>    ```shell
>    helm upgrade --install newrelic-bundle newrelic/nri-bundle \
>      --namespace newrelic --create-namespace \
>      -f values-newrelic.yaml
>    ```
>    *If you see `Error: failed to create namespace`, your account lacks cluster-admin permissions — see [Requirements](#requirements).*

**Example — *Verify your install* signals:**

> Within ~5 minutes of completing the install, you should see:
>
> - `newrelic-nrk8s-ksm` pod running (`kubectl -n newrelic get pods`)
> - `newrelic-nrk8s-kubelet` pod running on each Linux node
> - Your cluster entity at **one.newrelic.com → Infrastructure → Kubernetes**, with at least one node reporting
> - `FROM K8sClusterSample SELECT count(*) WHERE clusterName = 'YOUR_CLUSTER'` returns ≥ 1 row
>
> If you don't see data within ~5 minutes, see [Kubernetes troubleshooting](/docs/kubernetes/troubleshooting/not-seeing-data).

**Substantive prerequisites get their own H2 between Compatibility and Install.**

Some integrations require setup work before the install command can run — creating service accounts, applying Security Context Constraints, provisioning a namespace, setting up an ingest endpoint. When the setup involves multiple steps the reader has to *execute* (not just check), give it its own H2 between `## Compatibility and requirements` and `## Install`.

Signals a prerequisite deserves its own H2:

- The reader has to run commands, not just verify state
- It's a distinct sub-workflow with 2+ discrete steps
- Different combinations of the same integration have different setup shapes (e.g., OpenShift SCCs vs. plain K8s RBAC)
- The steps would be uncomfortable buried inside a single "You need" bullet

**Naming.** Verb-first H2: `## Set up permissions [#permissions]`, `## Create a service account [#service-account]`, `## Provision a namespace [#namespace]`, `## Set up an ingest endpoint [#ingest]`.

**Placement.** The new H2 slots between Compatibility and Install:

```
## Compatibility and requirements
## Set up permissions           ← added
## Install
## Configure                    (optional)
## Verify your install
```

**Correspondence rule follow-through.** Adding an actionable H2 on Install means adding a matching item in the Intro's `Installation at a glance`, in the same order (see the correspondence rule under the Intro table). Keeping the two in sync is the writer's responsibility during the same PR.

**Don't inflate simple prerequisites.** "Have `kubectl` installed," "have a license key," "K8s ≥ 1.24," "cluster-admin access" — these stay in the `You need` bullets under Compatibility. Not each their own H2. The trigger for splitting into an H2 is: the reader has multi-step work to *do*, not just a state to *have*.

---

### Why exact heading text and anchor IDs matter

Two reasons writers can't drift on this:

1. **AI/RAG citations.** When an AI cites your install page, it cites a specific section anchor. If anchors drift across pages, citations break across the corpus and previously-correct AI answers go stale.
2. **Pattern recognition for users.** A user who's onboarded one integration learns "the second section on Install is always the steps." Inconsistent headings burn that learning every time.

If a non-canonical heading feels tempting ("Steps" instead of "Install," or "Verify" instead of "What you should see"), don't — file feedback against this guide instead.

---

### Anti-patterns per page type

Common drift cases reviewers should reject:

**Intro page — DON'T include:**
- Install commands or step-by-step procedures (those live on Install)
- Compatibility tables, supported-version lists, or hard requirements (Install)
- Prerequisites like license keys, CLI tools, or permission grants (Install)
- Verification signals or "you should see X" content (Install's `#verify` section)
- UI walkthroughs in any form (lives in product UI, not docs)
- Screenshots of UI install or configuration wizards
- Marketing copy or product positioning ("Get unparalleled insights…")
- Exhaustive feature lists or capability matrices (that's reference, not onboarding)
- Deep conceptual context ("what is Kubernetes", "what is APM") — link out instead

**Install page — DON'T include:**
- Re-explaining what the integration does or its value (Intro owns the WHAT/WHY)
- A buffet of install options to choose from — one opinionated path only
- Decision trees for combinations (fork into separate flows; `<PlatformNote>` for inline variations only)
- Exhaustive configuration option tables (reference page, not onboarding)
- Failure modes collected at the bottom of the page — they go inline at the step they apply to
- UI alternative as a step-by-step ("If you prefer the UI: click X, then Y") — one-line pointer only
- Vague verification signals ("data will appear shortly", "you'll see metrics") — be specific: pod names, entity types, NRQL with expected return shape
- Usage / analysis of the captured data (how to use change details, comparison views, custom trend boards, etc.) — that's a separate content type, not onboarding
- UI walkthroughs of data-analysis features — same reason: usage content, not onboarding
- Exhaustive NRQL query catalogs — curate the `#verify` section to the 1–2 queries that prove install succeeded
- Long inline troubleshooting sections — cross-reference the troubleshooting topic instead

**Both pages — never:**
- UI screenshots
- `surface: ui_workflow` content
- `<CollapserGroup>` to hide the main reading path
- "Click here", "Read more", or "Learn more" as link text
- Marketing about what users can do now ("Now you can monitor everything!") — keep it functional

---

## 4. Combinations: when to fork vs. inline

Some integrations (K8s being the worst case) have multiple supported install paths. The rule:

- **Fork into a new combination flow** (its own two pages — Intro + Install-with-verify) when install steps differ end-to-end.
- **Inline a `<PlatformNote>`** when only specific steps or flags differ.

Example matrix for Kubernetes:

| Combination | Decision |
|---|---|
| Linux + Helm | Own flow (recommended, default) |
| Linux + Manifest | Own flow (different install command) |
| Windows + Manifest | Own flow (different pod names, OS requirements) |
| Linux + Helm + EKS | Inline `<PlatformNote>` within Linux+Helm |
| Linux + Helm + GKE Autopilot | Inline `<PlatformNote>` within Linux+Helm |
| Linux + Helm + EKS Fargate | Own flow (different install model) |
| Windows + Helm | `notCovered` at integration root (not supported) |

**Rule of thumb:** if a user following the recommended path has to *think* about which steps apply to them, fork. If they can follow the main steps and add a flag, inline.

If you find yourself writing more than three `<PlatformNote>` blocks in one page, that's a signal to fork.

---

## 5. The integration root is a selector, not a page

`/<onboarding>/<integration>/` is **not** a fourth onboarding page. It's a hub that:

- Renders the supported-combinations matrix (pickable by humans)
- Carries integration-level metadata via `_integration.yaml`
- Declares the recommended combo (default click-through)
- Declares unsupported combinations explicitly (`notCovered`)

Never write narrative content on the integration root. It's a selector.

---

## 6. Frontmatter (tiered)

We tier required fields by how much human effort each demands.

### Required (writer fills in)

```yaml
title: ...
contentType: onboarding-intro | onboarding-install
audience: [human, ai]                  # default for almost all content
surface: [cli] | [concept]             # NEVER [ui_workflow]
integration: <integration-slug>        # references _integration.yaml
flow:
  prev: <url> | [<url>, ...] | null
  next: <url> | [<url>, ...] | null
```

**Purpose per new field:**

- **`contentType`** — Declares the page template. Drives which sections are required (Section 3), reviewer expectations, and — when build automation lands — projection routing.
- **`audience`** — Reader populations this content targets. `[human, ai]` is the default; future audience filters can drop `human`-only content from AI projections or vice versa. Declarative in V1.
- **`surface`** — Modality of the interaction the content describes (`cli`, `concept`, later `api` / `troubleshooting` / etc.). Powers AI/RAG filtering (a CLI question retrieves CLI chunks, not conceptual paragraphs) and encodes the UI-as-docs rule (`ui_workflow` banned on `/<onboarding>/` pages — Section 7). Array-valued to support pages that legitimately mix modalities, e.g. `[cli, api]`.
- **`integration`** — Foreign key linking the page to its integration-wide metadata (canonical term, base compatibility, supported combinations in `_integration.yaml`). Enables consistency checks in review (V1) and cross-page merges when build automation lands.
- **`flow`** — Machine-readable prev/next navigation between pages. `prev` and `next` accept a single URL, an array of URLs, or an array of `{path, label}` objects when a page has multiple entry or exit points. Powers future auto-rendered nav and JSON-LD `isPartOf` cross-references. In V1 writers still hand-write "Next" links in prose; the frontmatter is the mirror.

Note: `slug` and `canonicalUrl` are derived by Gatsby from the file path — writers don't set them.

### Auto-fillable by CI / build (target state — V1 is honor-system)

```yaml
freshnessValidatedDate: <ISO date>     # existing NR field; writers set today, CI stamps in the future
```

`freshnessValidatedDate` is the existing NR freshness field — writers already know it. 

### Optional but encouraged

```yaml
roundtripTTFV: 15m           # Intro: target time from onboarding start to first telemetry
stepTTFV: 5m                 # Install: target time for this page's steps
notCovered: [...]
alternatives: [...]
relatedTerms: [...]
hardRequirements: [...]
```

**Purpose per new field:**

- **`roundtripTTFV` / `stepTTFV`** — Time-to-first-value targets. Sets reader expectation up front and disciplines writers — if a page can't deliver its declared TTFV, either fix the page or change the number.
- **`verifiedAgainst`** — Product version this page was verified against. Signals AI consumers to hedge answers if the product has moved on. Future: consumed by freshness scoring.
- **`notCovered`** — Structured metadata for adjacent topics this page deliberately doesn't cover (e.g. UI walkthroughs, alternative install paths, advanced configuration). Reserved for future automation: drives `FAQPage` JSON-LD generation so AI consumers get pre-answered "does this cover X?" refusals.
- **`alternatives`** — Related pages a reader might want (UI path, sibling combo, upstream doc). Future: powers "you might mean X" cross-references at retrieval.
- **`relatedTerms`** — Canonical-to-legacy term mapping (`incident → alert-event`, etc.). Future: expands AI retrieval so legacy queries still match current content. Section 10 covers usage.
- **`hardRequirements`** — Deal-breaker gates for the install (cluster-admin, security posture, specific network policy). Structured mirror of the "You need" bullets in Compatibility & requirements. Same V1 status as `notCovered`: hand-authored in both places.

### Shared metadata lives in `_integration.yaml`

Integration-wide fields (canonical term, aliases, base compatibility, supported-combinations matrix, term canonicalization) live in `_integration.yaml` at the integration root. **Do not duplicate these in page frontmatter.** CI fails the build if you do.

---

## 7. UI-as-docs rule

The single biggest behavioral change. Apply consistently.

### Do

- Point to the UI as an alternative when one exists:
  > "If you'd rather install through a UI, start at **one.newrelic.com → Integrations & Agents → Guided install → Kubernetes**. The UI walks you through the install end to end."
- Write the *just-in-time pointer* — what to look for, where to find it. Not the step-by-step.
- Reference UI element names that are stable across product changes.

### Don't

- Write "Click X, then click Y, then click Z" for a UI workflow.
- Include UI screenshots of install or configuration wizards.
- Mirror in-app assistance content in docs.
- Document UI workflows as a "fallback" when in-app assistance is weak. That's a product problem; flag it, don't bandaid it.

### Rejection language for PR reviews

> "This describes a UI workflow that the product itself handles. Move this content to in-app assistance or remove it. Docs cover what isn't in the UI."

CI will block any PR that sets `surface: ui_workflow` on a `/<onboarding>/` page.

---

## 8. Compatibility & requirements

**These live on the Install page, not the Intro.**

Compatibility and prerequisites are "what blocks me from doing this?" — part of the DO, not the WHAT or WHY. The Intro tells the user what the integration is and why they'd want it; the Install page tells them what they need before they start and what's supported.

Putting compatibility on the Intro creates two problems:
- **Out of sight, out of mind** by the time the user is on the Install page actually doing the thing.
- Compatibility often varies by combination (Linux+Helm vs. Windows+Manifest), so the Intro has no single right answer to anchor.

### Where it goes by default

Front-loaded on the Install page — first section after the page title, before any install steps.

### V1 implementation: hand-authored prose, fixed template

In V1, writers hand-author the compatibility & requirements section in the page body using the template below. **Don't reorder the sub-sections, don't rename the headings, don't merge them.** Consistency in V1 comes from every writer producing the same shape — tooling will enforce this later.

```markdown
## Compatibility & requirements [#requirements]

### Supported
- <Platform / version range, e.g. Kubernetes ≥ 1.24>
- <OS variants, e.g. Linux nodes (x86_64, arm64)>
- <Cloud variants if applicable>

### Not supported
- <Explicit item — include the alternative if one exists, e.g. "Windows nodes — use the [Windows manifest install](...) instead">
- <Item>

### You need
- A New Relic [license key](...)
- <Stack version requirement, e.g. Helm 3.x>
- <Hard gates: RBAC, namespace, security context, network policy, etc.>
```

If a sub-section has no items (rare — `Not supported` and `You need` should almost always have entries), write "_None._" rather than omitting the heading.

### Common vs. combination-specific requirements

Some requirements apply across all combinations of an integration (e.g., "you need a New Relic license key"). Others vary per combination (Helm vs. Manifest have different tooling requirements).

**In V1, writers hand-duplicate the common items on every Install page** for the integration. Gatsby doesn't support Jekyll-style file includes, and any content-reuse mechanism requires platform work that V1 doesn't budget for. So:

- Each Install page contains the **full** compatibility & requirements section, including common items. Don't drop common items thinking users will find them on a sibling page — a user retrieving one URL (human or AI) gets one page.
- Common items appear above combination-specific items in the "You need" sub-section.
- The **integration owner maintains a reference list** of common items in a location outside the docs source — Confluence page, internal wiki, or another shared doc the team already uses for cross-page conventions. When that list changes, the integration owner opens PRs to update every affected Install page. Reviewers check against the reference list during PR review.

Drift between pages is the **explicit V1 cost** we're accepting. Mitigations:
- Onboarding scope is small (a handful of integrations × a few combinations each), so the duplication surface is bounded.
- The reference list is the source of truth in disputes during review.
- When a content-reuse mechanism is validated and adopted by docs engineering, this guideline updates — duplicated content can be consolidated then without rewriting the prose.

### When to fork to a standalone topic

Forking is the edge case, not the default. Most integrations do NOT need a standalone Compatibility topic — the inline block on Install is sufficient.

**Fork ONLY when TWO OR MORE of these signals fire.** One signal alone is soft — it could go either way. Two or more is a strong signal.

| # | Signal | How to check |
|---|---|---|
| 1 | **Rendered length exceeds ~30 lines** | Source-time check: if the three-bucket block source (Supported + Not supported + You need combined) is more than **40 lines** including whitespace, it's likely rendering too long for an inline block. |
| 2 | **Content spans 4+ independent axes of variation** | Independent axes: OS × K8s version × cloud provider × security posture × network policy × logging framework, each with its own list. If the block is turning into a matrix, fork. |
| 3 | **The block needs internal H3 sub-headings** | If you're writing `### For OpenShift specifically` inside a Compatibility bullet, the block is growing internal structure — that's a signal it wants to be its own page. |
| 4 | **Content requires explanation beyond bullets** | E.g., "OpenShift Security Context Constraints" isn't a bullet — it's a concept that needs prose. If you're writing paragraphs inside Compatibility bullets, fork. |
| 5 | **The same content is needed on 2+ Install pages** | When multiple combos share compatibility content, fork it into a single-source standalone that both link to. Prevents drift. |

**Do NOT fork when:**

- The block is under 20 rendered lines
- The three-bucket shape (Supported / Not supported / You need) fits without contortion
- No H3 sub-headings are needed within any bucket
- Content is combo-specific and only used on one Install page
- Fewer than 3 axes of variation

**Fork target and URL:**

- `/<onboarding>/<integration>/compatibility` — for integration-wide compatibility content shared across combos (signal #5)
- `/<onboarding>/<integration>/<combination>/requirements` — for combo-specific deep dives (signals #1–4)

**Template.** The standalone topic uses `onboarding-compatibility.template_MASTER.mdx` in `src/<onboarding>/_templates/`. It has the same three top-level H2 buckets as the inline block (Supported / Not supported / You need) with room for H3 sub-headings, plus an optional `## Additional considerations` section for prose content that doesn't fit the bucket structure (compliance frameworks, security postures).

The forked topic gets its own URL, its own JSON-LD, and its own `.md` projection.

### Cross-referencing the forked topic — required

When the full block lives on a separate topic, the Install page **must** still surface a brief summary at the top, in the same position the full block would have occupied. A bare link is not acceptable:

```mdx
## Compatibility & requirements [#requirements]

**At a glance:**
- Linux only — Windows uses a [different install path](/<onboarding>/kubernetes/windows-manifest/install-configure)
- Requires Kubernetes ≥ 1.24, Helm 3.x
- Requires cluster-admin to apply Security Context Constraints

For the full compatibility matrix and detailed requirements, see [Compatibility & requirements](../compatibility).
```

The "at a glance" summary must include any **deal-breaker** constraints — anything that would cause a user to abandon the install if they discovered it mid-flow.

### Why the "at a glance" matters even when forked

The whole point of front-loading is to fail loud and early. A pure cross-reference link without a summary defeats this — users skip past it ("I'll check later") and hit the wall mid-install. The summary keeps the highest-impact gates visible at the moment of action.

### Why the Intro doesn't get a compatibility teaser

Tempting, but don't. Once compatibility hints start appearing on the Intro, they grow, drift from the Install page, and re-create the mismatch we're avoiding. Compatibility lives in one place: the Install page (or, when forked, the cross-referenced topic with a summary on the Install page).

**Narrow exception:** if a constraint is so fundamental that it changes what the integration *is* (e.g., "this integration only works for AWS workloads"), state it on the Intro as a fact about the integration in the "what this gets you" prose — not as a compatibility entry. The user should never read the Intro thinking the integration applies to them and then discover on the Install page that it never could have.

**Why declaring explicitly matters at all:** the most damaging POV losses came from users discovering incompatibility mid-install (Windows on K8s, GovCloud, Kyverno/PSA, Aquatic Informatics, Athena Health). Loud-and-early on the Install page is the docs-side mitigation; silent omission is the failure mode.

---

## 9. Explicit absence

**The principle.** Explicit absence declarations reduce AI hallucination on adjacent questions and help human navigation. If a reader would reasonably assume something is covered on a page and it isn't, name that assumption directly instead of letting silence create it.

**Where this applies in V1.** The Compatibility & requirements block's `### Not supported` sub-section (Section 8). That's the one place in V1 writer copies where explicit absence is authored inline. For adjacent topics that don't fit as a compatibility exclusion (UI walkthroughs, alternative install methods, advanced configuration), cross-reference them from body prose or from the `Related articles` section on Install.

**Forward-compatible frontmatter — the `notCovered` field.** Structured metadata for adjacent topics a page deliberately doesn't cover. Reserved for future automation — see Section 6. Example schema:

```yaml
notCovered:
  - UI walkthrough of guided install (lives in product UI)
  - EKS Fargate install (different model; see /<onboarding>/kubernetes/linux-helm-fargate)
  - Pixie eBPF auto-telemetry (separate integration)
  - Advanced configuration (link)
```

The rules below on *when* to include a negative declaration apply to Compatibility's `### Not supported` bullets in V1.

### When to list the negative side of a categorical split

Any "Supported / Not supported" style block sits inside a broader principle: **don't enumerate absence for its own sake, but do declare absence when omission would create a foreseeable false assumption.**

The default is: **list only the positive side.** Don't list every version, platform, or feature that isn't supported — the docs would be infinite, and it's noise.

Include a "Not supported" entry only when a reasonable user would assume the item *is* supported unless we say otherwise. That happens in four situations:

| Trigger | Example |
|---|---|
| **Adjacency** — the excluded item is close enough to a supported one that users conflate them | EKS is supported → users assume EKS Fargate is too. Call it out: "Not supported on EKS Fargate — different install model, see [link]" |
| **Recency** — the support status recently changed | Windows nodes were supported in v2.x, not in v3.x. Call it out to override user memory and older docs |
| **Competitor convention** — competing products support it, so users assume parity | If a comparable Datadog or Dynatrace integration supports X and NR's doesn't, call it out so users don't infer support and lose time trying |
| **AI-hallucination risk** — the model is likely to confabulate the exclusion | Class-of-thing support (e.g., "container orchestrators") invites LLM guesses about adjacent tech (Docker Swarm, Nomad, Mesos). Spell out the ones that AREN'T supported so grounded answers can refuse confidently |

**Decision heuristic for writers:** before including a "Not supported" item, ask *"would a reasonable user assume this is supported if we don't say otherwise?"* If yes, include it (with the alternative path if one exists). If no, skip it — the positive list is sufficient.

### When there's a real third category

Some categorical splits have a hidden **middle bucket** that gets swallowed if you only list the two extremes. When it exists, name the middle bucket explicitly instead of forcing items into one of the two extremes.

| Positive | Middle | Negative |
|---|---|---|
| Supported | Beta / experimental | Not supported |
| Supported | Deprecated (still functional) | Removed / end-of-life |
| Recommended | Acceptable but not preferred | Discouraged |
| Included (in package) | Add-on / optional | Not available |
| Public | Limited-access / beta | Private |
| Enabled by default | Conditionally enabled | Disabled by default |
| Automatic | Semi-automatic / user-triggered | Manual |
| Active | Legacy (maintained) | End-of-life |

**Failure mode this prevents:** a reader forced to choose between "supported" and "not supported" for an item that's actually in a middle state (say, `beta`) picks one of the two extremes — usually the wrong one — because the page didn't offer a home. Middle-bucket items rendered as "supported" over-promise; rendered as "not supported" they under-promise. Neither is right.

**Rule of thumb:** if you find yourself hesitating about which bucket an item goes in, that hesitation is often a signal the middle bucket exists. Name it.

### These rules generalize beyond compatibility

The same "list negatives only for foreseeable false assumptions + name the middle bucket if it exists" logic applies to any categorical split on a page — feature availability, permission levels, tier inclusion, framework support, region availability. Section 8's compatibility template is one application of the rule; this section is the general form.

---

## 10. Terminology discipline

When the product renames something (incidents → Alert Events, etc.):

1. Update the canonical term everywhere new content is being written.
2. Add the legacy term to `_integration.yaml` `relatedTerms` so retrieval still matches:

```yaml
relatedTerms:
  - canonical: alert-event
    legacy: [incident]
```

3. Do not write the legacy term in body prose for new content.
4. For existing pages, update on next edit pass. CI will eventually lint this; for now it's reviewer judgment.

---

## 11. Writing rules

### Sentence-level

- **Cut, don't pad.** Fewer sentences is the win. If a paragraph doesn't serve the page's user intent, remove it.
- **One idea per sentence.** Don't compound.
- **Active voice.** "The integration sends data to New Relic." Not "Data is sent."
- **Verbs over nominalizations.** "Run the command." Not "Execution of the command is needed."
- **No filler words.** Cut "simply," "just," "obviously," "easy" — usually wrong, always unhelpful.
- **No "we"/"our".** Refer to the product, the integration, or the user. Not the company.
- **Descriptive link text.** "See the [Helm install guide](...)" — not "[click here](...)" or "[more info](...)."

### Page-level

- **Numbered steps for install.** Each step gets a stable anchor `[#install-step-N]`. AI consumers cite by anchor.
- **One opinionated install command per step.** Not a buffet. Variations go in `<PlatformNote>`.
- **Inline failure-mode notes** at the step where the failure occurs. Not buried at the bottom.
- **Concrete verification.** "You should see the `newrelic-nrk8s-ksm` pod running" — not "data will arrive shortly."
- **TTFV is a contract.** If the page can't deliver its declared TTFV, fix the page or change the number. Don't ignore it.
- **Stable section anchors.** Every `##` heading gets `[#anchor-id]`. Anchors survive reorgs.

---

## 12. What NOT to do

- **No screenshots** of UI workflows. Screenshots belong with the in-app assistance, not docs.
- **No embedded videos** as load-bearing content. Link if useful; never make the page depend on one.
- **No `<CollapserGroup>` on the main install path.** Collapsers hide critical steps. Use them only for legitimately optional content (e.g., advanced flags).
- **No "all configuration options" exhaustive tables on onboarding pages.** Reference content goes on reference pages.
- **No conditional rendering / branching components on the main path.** Combinations fork into their own flows. We don't embed switches anymore.
- **No new UI walkthrough content.** Existing content gets migrated to in-app assistance as the product team catches up.
- **No marketing voice.** Onboarding is functional. Save the value-prop language for product pages.

---

## 13. PR process

### Templates

Use the matching PR template:
- `.github/PULL_REQUEST_TEMPLATE/onboarding-intro.md`
- `.github/PULL_REQUEST_TEMPLATE/onboarding-install.md`

Each pre-fills the required frontmatter and section skeleton. Copy-paste and edit.

### CI checks (V1 set)

The build will fail if:
- Frontmatter is missing required fields
- `surface: ui_workflow` appears on any `/<onboarding>/` page
- Integration-scoped fields in page frontmatter don't match `_integration.yaml`
- Required headings or anchors are missing for the declared `contentType`
- An internal link points to a path that doesn't exist

### Review focus

Reviewers check, in this order:
1. Does the page serve its declared user intent? (Intro = "is this for me," Install = "do it — and confirm it worked")
2. Is any content a UI walkthrough? (Reject; suggest in-app assistance.)
3. Is compatibility front-loaded and explicit (on Install)?
4. Is the install path opinionated (one path, not a buffet)?
5. Are verification signals concrete (specific pod names, entities, NRQL) — not vague ("data will appear")?
6. Is anything a reader would reasonably expect that isn't on the page and isn't cross-referenced elsewhere on the flow?
7. Does the page smuggle in usage/analysis content that belongs on a separate reference page?

---

## 14. What's deliberately not in V1 (and will be added later)

These are on the roadmap but **not** part of V1. Writers should not try to enforce them, and reviewers should not expect them.

### Platform / build automation (deferred)

V1 is editorial. The following needs work on the authoring platform / Gatsby build pipeline that isn't happening in this phase:

- **Auto-rendering of compatibility & requirements from frontmatter.** V1 writers hand-author the section using the Section 8 template.
- **Auto-rendering of `alternatives`, `notCovered`, and `relatedTerms` blocks from frontmatter.** V1 writers hand-author these as prose sections too.
- **JSON-LD generation from frontmatter.** Will happen at build time in the future; not in V1.
- **`.md` projection generation at build time.** Depends on either Gatsby pipeline work or convergence with the parallel stripped-down MD project.
- **CI frontmatter schema validation.** V1 is honor-system; reviewers catch issues manually.
- **Build-time merge of `_integration.yaml` into page frontmatter.** V1 uses duplicate + manual review; the manifest pattern lands later.
- **Term-as-code linter** (CI rule flagging non-canonical terms in body prose).
- **Automated UI-string verification** against product i18n bundles.
- **Auto-injection of `<link rel="alternate" type="text/markdown">`** and sitemap entries for `.md` projections.

### Content-type scope (deferred)

V1 covers onboarding only. The following content types use different templates and will be guided separately:

- Reference pages (advanced configuration, exhaustive options)
- Troubleshooting pages
- Conceptual / explanatory pages
- API / NerdGraph reference

### Other (deferred)

- Versioned terminology (which canonical term applied in which product version)
- Multi-language / i18n strategy
- MCP server / agentic tool surface (separate strategy track)

### What V1 writers actually do today

To be clear, V1 is implementable with existing tooling. The writer's job is:

1. Pick the right page type and use the corresponding PR template.
2. Fill in the required frontmatter fields (no automation depends on them yet — they're for future use and for reviewer reference).
3. Write the page body following the templates in this guide — including the compatibility & requirements section by hand on the Install page.
4. Push back on UI walkthrough content during review.
5. Cross-reference forked compatibility topics correctly.
6. Maintain consistency through discipline, not tooling.

Everything in this guide that says "auto-renders," "build emits," "CI validates," or "merged at build time" is target state. V1 work is the writing convention that lets the platform automation slot in cleanly when it arrives, without rewriting content.

---

## 15. Quick reference card

If you're writing a new onboarding page, this is the minimum:

1. **Pick the page type** — `intro` or `install-configure`.
2. **Use the PR template** for that type.
3. **Fill required frontmatter** (title, contentType, audience, surface, integration, flow) plus preserved existing NR fields (metaDescription, tags, freshnessValidatedDate, redirects).
4. **Write to the user intent** — don't sneak in content from the other page type.
5. **Compatibility and requirements front-loaded** (Install only — hand-author using the template in Section 8; fork to a standalone topic if the list is unwieldy, but keep an "at a glance" summary on Install with all deal-breaker constraints).
6. **One opinionated install path** (Install only).
7. **Concrete verification signals** on Install's `#verify` section — specific pod names, entity types, NRQL with expected return shape; never "data will appear shortly."
8. **Cross-reference anything a reader might reasonably expect but that isn't on this page** — via inline prose or the `Related articles` section on Install.
9. **Keep usage / analysis of captured data OFF the Install page** — that's a separate content type. Reference / usage guides get their own template later.
10. **Push back on UI workflow content** — never add it to docs.
11. **Run the eval set** before merge if you're touching content the V1 baseline question set covers.

---

## 16. Custom MDX components — writer's reference

The JSX components most relevant to onboarding pages. All are available in any MDX file without imports.

This section is a writer-facing quick reference — when to use each, when not to, and what onboarding-specific constraints apply. Full component documentation (props, accessibility, internal styling) lives in the design system docs; check there before relying on edge-case behavior.

---

### `<Callout>`

Highlight a note, requirement, or warning that interrupts the main reading flow.

**Variants confirmed in current docs:**

| `variant` | Use for |
|---|---|
| `important` | A constraint or requirement the reader must heed |
| `tip` | A non-blocking optimization or shortcut |

Additional variants (`caution`, `warning`, `note`, `info`) may exist — check the design system docs for the complete list before relying on them.

**Optional `title` prop** for a heading inside the callout.

**Example:**

```mdx
<Callout variant="important" title="Cluster-admin required">
  Applying Security Context Constraints requires `cluster-admin` privileges on your cluster.
</Callout>
```

**Use on onboarding pages for:**
- Hard caveats that didn't fit the Compatibility & requirements block
- Cost or credential warnings adjacent to install steps

**Don't use for:**
- The main install steps themselves — those are numbered (or `<Steps>`)
- Marketing or product-promotion language
- Filler "did you know" content

---

### `<Steps>` and `<Step>`

A numbered procedural sequence with rich content per step. Available as the canonical install-steps wrapper if writers prefer it over markdown numbered lists.

**Example:**

```mdx
<Steps>
  <Step>
    Add the New Relic Helm repo:

    ```shell
    helm repo add newrelic https://helm-charts.newrelic.com
    ```
  </Step>
  <Step>
    Create your `values-newrelic.yaml` file.

    *If you see `Error: account not found`, your license key is invalid — see [Requirements](#requirements).*
  </Step>
</Steps>
```

**Use on onboarding pages for:**
- The install steps under `## Install` (markdown numbered lists are also fine — pick one approach per page)

**Don't use for:**
- Conceptual prose on the Intro
- Verification signals in the Install page's `#verify` section (those are bullet lists, not steps)
- Decision trees between combos — those fork into separate flows

---

### `<Collapser>` and `<CollapserGroup>`

Collapsible disclosure sections.

**Use on onboarding pages for:**
- Genuinely optional advanced content (e.g., a per-cloud variation that most readers won't need)
- Long content the reader can skip without breaking the install (e.g., what each `nri-bundle` sub-chart does)

**Don't use for:**
- The main install path — collapsers hide critical steps and make the page look easier than it is
- Compatibility & requirements — those must be visible up front
- The `#verify` section — readers need to see the success criteria without clicking
- Most onboarding content. If you find yourself collapsing more than one or two things, you've put non-onboarding content on the page.

**Example:**

```mdx
<CollapserGroup>
  <Collapser title="GKE Autopilot — extra flags">
    Add these flags to your `helm install` command:

    ```yaml
    --set newrelic-infrastructure.controlPlane.enabled=false
    ```
  </Collapser>
</CollapserGroup>
```

---

### `<PlatformNote>` (proposed — not yet implemented)

A structured inline note for combination variations (Section 4). Captures both a human-readable callout and machine-readable platform metadata for JSON-LD/RAG consumers.

**Intended usage:**

```mdx
<PlatformNote platform="gke-autopilot">
  If you're on GKE Autopilot, add these flags to step 4:

  ```yaml
  --set newrelic-infrastructure.controlPlane.enabled=false
  ```
</PlatformNote>
```

**Status:** Pending docs engineering decision. Until implemented, writers can use `<Callout variant="important" title="GKE Autopilot">` as a stand-in — the human-readable rendering will be similar, but the `platform` attribute and the JSON-LD payload won't be present. When `<PlatformNote>` ships, writers swap the stand-in callouts for the real component.

---

### `<Tabs>` (and `<Tab>`)

Tabbed alternatives at the same point in a flow.

**Use on onboarding pages for:**
- Same command shown for two terminals (bash + PowerShell)
- Same config shown for two languages when both apply

**Don't use for:**
- Different install methods (Helm vs. Manifest) — those fork to separate flows
- Different cloud variants (EKS vs. AKS) — `<PlatformNote>` or fork
- Anything where the user reads only one tab — if they never look at the others, you've forked a flow into tabs; fork properly into separate combos instead

---

### Tables

Two ways to write tables in MDX:

- **Markdown tables** for simple data — most onboarding cases (compatibility matrices, expected pods, NRQL signals)
- **JSX `<table>` / `<Table>`** when cells need spans, multiple paragraphs, or JSX-only content

Reach for JSX only when markdown can't express the cell content. Default to markdown.

---

### `<InlineCode>`

Inline monospace span. Equivalent to backticks in most cases.

```mdx
Run `kubectl get pods` to check status.
Run <InlineCode>kubectl get pods</InlineCode> to check status.
```

Use backticks unless you need JSX inside the inline code (rare).

---

### `<DNT>` (Do Not Translate)

Wraps content that should not be translated by localization pipelines.

**Use for:**
- Product UI strings: `<DNT>**one.newrelic.com → Integrations & Agents**</DNT>`
- Code symbols, command names, file paths
- Proper nouns in some locales

**Example:**

```mdx
Go to <DNT>**[one.newrelic.com](https://one.newrelic.com) → Integrations & Agents**</DNT>.
```

Onboarding pages reference NR1 UI entry points frequently — wrap them in `<DNT>` every time.

---
<!-- PLANNING TO DEPRECATE INLINE POPOVERS -->

### `<InlinePopover>`

A hover-popover element with predefined types for common New Relic concepts.

---

### `<DocTile>` and `<DocTiles>`

Tile-card layout, used canonically for the Install page's `## Related articles` section — the affinity-based link set at the end of onboarding.

**Example:**

```mdx
<DocTiles>
  <DocTile title="Configure control plane monitoring" path="/docs/.../control-plane">
    Learn how to monitor your cluster's control plane components.
  </DocTile>
  <DocTile title="Explore your Kubernetes cluster" path="/docs/.../cluster-explorer">
    Interpret the data and navigate the curated Kubernetes UI.
  </DocTile>
</DocTiles>
```

**Use on onboarding pages for:**
- The `## Related articles` section on Install (this is the canonical place — the affinity-based link set at the end of onboarding)

**Don't use for:**
- The Intro's `## Next: install and configure` (single inline link, not a tile)

---

### Notes on this section

- Not exhaustive — this is the onboarding-relevant subset. Components used outside onboarding (e.g., `<TechTile>`, `<UserJourneyControls>`) aren't covered here yet.
- Not a stable contract — canonical names and props may shift as the design system evolves; treat this list as V1 best-effort and check the design system before depending on edge-case behavior.
- Open-source contributors who don't have access to the internal design system docs should default to the components and patterns shown here; reviewers will redirect if a component isn't appropriate for onboarding.

---

## 17. Feedback / iteration

This is V1. Things will be wrong, incomplete, or over-specified. File issues against the IA strategy tracker (or ping the docs IA channel) for:

- Rules that don't make sense in your context
- Cases the guide doesn't cover
- Tooling/CI gaps that block compliance
- Examples that would make the rules clearer

The guide refines on a rolling basis. We're not freezing it.
