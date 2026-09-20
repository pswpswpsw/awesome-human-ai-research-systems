# Contributing to Awesome Human-AI Research Systems

Thanks for considering a contribution. This list is commercial-product-first, it stays small on purpose, and it is organized by **what the human still rules on** rather than by workflow stage. The reasoning behind that axis is in [METHOD.md](METHOD.md); this file is what you need before opening a PR.

## What belongs here

**Live, real products a researcher can use today.** Every entry must pass two tests:

1. **Usable today.** No waitlists, trusted-tester programs, private previews, or "contact your account team." An impressive lab demo is not a product.
2. **A research system.** Purpose-built for a step of the research workflow, not a general-purpose assistant, an access program, or a prompt template on a landing page.

Systems that fail these but are worth knowing about are recorded in [METHOD.md](METHOD.md#what-the-tests-excluded) with a one-clause reason. If one later opens to the public, a PR promoting it into the list is very welcome.

## What does not

- **Language services.** If a product's centre of gravity is changing how something is said rather than what is claimed, selected, or cited — so that the same product would ship to a lawyer or a marketer by swapping the style guide — it is a language service. Grammar checkers, paraphrasers and humanizers fall here even when marketed at academics, and a citation finder bolted onto an editor does not convert the editor into a research system.
- **AI humanizers and detection-evasion tools.** The advertised job is defeating a check on authorship, which is the opposite of the accountability this list is organized around. This extends to a product that bundles one alongside a module that would otherwise qualify: the module rule decides which part of a product you evaluate, not whether a business can be filed on its most respectable component.
- **Dead or broken projects.** Activity means **the release still runs, not that commits are recent.** A frozen release whose code, weights and data remain publicly downloadable stays eligible; link collections, dead hosted services and broken installs do not. Note the asymmetry: a project with no frozen artifact, depending on external APIs, has nothing to fall back on, so staleness there is evidence of breakage in a way it is not for a released model plus index.
- **Duplicates without a differentiating feature.** Self-hostable weights and data versus a hosted service counts. A different front end does not.
- Individual papers and preprints with no working product — link a survey list under [Related lists](METHOD.md#related-lists) instead.
- General-purpose assistants, access or discount programs, reference managers with no AI component.

## Which category does it go in?

Apply two rules in this order. Both are argued in full in [METHOD.md](METHOD.md).

1. **Classify by the module that carries research judgment,** not the one the homepage leads with. This picks *which part of a product you evaluate*.
2. **Then test the three off-scale categories first (5–7 below), and only afterwards walk 1–4 in order, stopping at the first match.** The off-scale tests are narrow and self-evidencing, so checking them first stops a general test from catching something it was never written for. Within 1–4 the earlier category wins, because it describes the weaker human position and the list should not flatter a tool.

Short forms; [METHOD.md](METHOD.md) has the authoritative versions.

1. **[Delegation](README.md#delegation)** — the next documented human action after the brief is reviewing a complete artifact that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced.
2. **[Triage](README.md#triage)** — the system attaches a judgment to individual items; that judgment is usable the moment it is produced rather than waiting on an entered ruling; every assertion resolves to an openable source or is explicitly marked model-authored; and the largest thing leaving the session is structured working material or less.
3. **[Adjudication](README.md#adjudication)** — the decision record is itself an export, *and* it attributes rulings to named reviewers rather than to the model. Nothing is usable until a named person rules. Both halves required.
4. **[Critique](README.md#critique)** — no mechanism puts AI-authored text into the record without a per-item human action, and the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.
5. **[Retrieval](README.md#retrieval)** — the system returns retrieved items and attaches no judgment to any of them. Ranking is not a verdict; a screening label, a classification, an extracted value or a per-item score is, and sends the entry to category 2.
6. **[Bench](README.md#bench)** — the documented output terminates in a physical action, *and* measured results feed back for re-optimization. Both halves required.
7. **[Components](README.md#components)** — ships no runtime, no hosted service and no entry point that returns a deliverable, so the host deployment sets the division of labor.

**Membership is release-mobile.** Shipping a reviewer log, a checkpoint UI, or a bulk apply-the-fixes button moves an entry. A PR that re-tests an existing entry against its category is as welcome as one adding a tool.

If you genuinely cannot place a tool, say so in the PR and quote the vendor page that confuses you. A boundary that cannot decide a real case is a bug in the taxonomy, and that is worth an issue.

## How to add an entry

Entries are table rows, not bullets. Add a row to the table for the category your tool lands in:

```markdown
| [Name](https://example.com) | what the human rules on | what you get | decision record | writes into your draft | access |
```

Fill each column as follows.

- **The human rules on** — the researcher's actual decision point and its granularity. "Every reference, twice over" and "keep or discard the finished report" are both answers; "reviewing the output" is not. If the vendor documents no human checkpoint at all, say that, because it is the most informative answer the column can carry. This is the column the list exists for, so make it specific.
- **You get** — the artifact the product returns. Name it concretely: an extraction table, a ranked set with match scores, a compiled manuscript, the next experiment to run. Where the placement turns on a property of that artifact — no openable source, uncited passages flagged, citations it retrieved itself — put it here rather than leaving it implicit.
- **Decision record** — what leaves the platform as evidence of how the decisions were reached, and who it attributes them to. `No` is a legitimate and informative answer, and the commonest correct one. A log whose default entry is the model's own label is not the same as one attributing rulings to named reviewers, and the cell should say which it is. Do not put the product's output here: a concerns table or a returned measurement is what you get, not a record of who decided.
- **Writes into your draft** — whether AI-authored text can reach the researcher's file, and on what terms. `No` for most entries; otherwise say whether it applies in bulk, per item, or whether the returned artifact simply *is* the draft.
- **Access** — how you get at it: `hosted` (a service you log into), `self-host` (code you run), `install into a host` (a library with no runtime of its own), and the compound `self-host, open weights` where the model is downloadable too. **No prices and no tiers.** They churn faster than this file is maintained, and a wrong "free" is the error a reader catches first. The one exception is `free`, which marks a service the vendor documents as free outright rather than a free tier of a paid product — Semantic Scholar qualifies, a product with a free plan alongside paid plans does not. If you cannot find that documented on a page you can link, leave it off.

Rules for the prose in those cells:

1. **Do not adopt the vendor's own framing.** If the product calls itself a mentor, a co-scientist, or a copilot, describe what it does instead.
2. **Cite the vendor page you used**, in the PR description. A classification that cannot be checked from public pages cannot be reviewed. If the fact your placement turns on is not documented anywhere public, say so in the row rather than asserting it.
3. Keep cells short enough to scan. A table stops being a table when a cell runs to three lines.
4. Factual and vendor-neutral. No marketing language, no superlatives you cannot back up.
5. If a product ships two paths with different loci, name the one the placement rests on.
6. One tool per pull request makes review faster; small batches are fine.
7. Check the links resolve before opening the PR.

Proposing a **new category** is the exception. It needs a decision locus the existing seven cannot express, plus a test a contributor can apply from a product's public pages. Categories that are really workflow stages in disguise will be declined.

## Staying small

This list exists because bigger lists in this space either sprawl until nobody can maintain them, or become a paper bibliography that goes stale within a year.

- Quality and relevance over completeness. Not every AI-for-research tool needs to be here.
- If a category grows past ~10–12 entries, prune the weakest or split it along a finer decision boundary. *Delegation*, at eight, is the closest to that line today.
- A category holding one entry is fine if the arrangement it describes is real. Thin categories are informative: they show where this sort of collaboration barely exists yet.

## Removing entries

If a product is abandoned, shut down, or archived, open an issue or PR saying why rather than silently leaving a stale link. Confirming that a stale-looking project still runs is also a valid PR.

## Code of conduct

Be respectful and constructive. Disagreements about categorization are fine; personal attacks are not.
