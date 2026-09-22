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
- **Domain models that predict nature.** A system whose output is a claim about the world — a protein structure, a material property, a weather field, a reaction yield — substitutes for a measurement, not for a research judgment. It performs a piece of the science rather than helping you decide how the work should go. AlphaFold, Boltz, MatterGen and the ML weather emulators are real, usable and important, and all out of scope. **The test:** is the output checked against nature, or against your standards for the work? Atinary is listed because what it returns is which experiment to run next, a decision about your research; a model returning what that experiment would have found would not be.
- **Single-maintainer projects with nothing behind them.** One substantive contributor is fine when the project has an institution, a company, a citable publication, or adoption wide enough that a break would be noticed. With none of those, a curated list should not point a researcher at software that depends on one person's continued interest. This is a maintenance-risk judgment, not a quality one, and it is **separate from the activity rule above**: a project can run perfectly today and still fail this.
- **Pure retrieval tools.** A system that returns items and attaches no judgment to any of them has taken over no research judgment, which is what this list is about. Google Scholar, PubMed, Scopus and Web of Science are all out on this. Semantic Scholar is in because its highly-influential-citation classifier is a per-item machine judgment; ranking alone would not have been enough.
- **Duplicates without a differentiating feature.** Self-hostable weights and data versus a hosted service counts. A different front end does not.
- Individual papers and preprints with no working product — link a survey list under [Related lists](METHOD.md#related-lists) instead.
- General-purpose assistants, access or discount programs, reference managers with no AI component.

## Which category does it go in?

Apply two rules in this order. Both are argued in full in [METHOD.md](METHOD.md).

1. **Classify by the module that carries research judgment,** not the one the homepage leads with. This picks *which part of a product you evaluate*.
2. **Then test category 5 first, and only afterwards walk 1–4 in order, stopping at the first match.** Bench's test is narrow and self-evidencing, so checking it first stops a general test from catching something it was never written for. Within 1–4 the earlier category wins, because it describes the weaker human position and the list should not flatter a tool.

Short forms; [METHOD.md](METHOD.md) has the authoritative versions.

1. **[Delegation](README.md#delegation)** — the next documented human action after the brief is reviewing a complete artifact that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced.
2. **[Standing Verdicts](README.md#standing-verdicts)** — the system attaches a judgment to individual items; that judgment stands, meaning it is the operative record unless a human intervenes; every assertion resolves to an openable source or is explicitly marked model-authored; and the largest thing leaving the session is structured working material or less.
3. **[Human Approval](README.md#human-approval)** — the platform holds a per-record ruling attributable to a named person, *and* the decision flow leaves the platform as evidence. Nothing stands until a named person rules. Both halves required; the export itself need not carry names.
4. **[Critique](README.md#critique)** — no mechanism puts AI-authored text into the record without a per-item human action, and the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.
5. **[Bench](README.md#bench)** — the system proposes a specific configuration to run, the run produces a number that drives the next proposal, *and* the loop cannot advance without a human act. All three required. A study that iterates to termination once launched fails the third, and so does a configuration where a robot closes the loop unattended.

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
2. **Read the page, do not let a tool summarize it for you.** Two independent fact-checking passes on this repo caught a summarizing fetch tool inventing quoted material: once a corpus size that was not on the page, once a set of human-checkpoint steps that do not exist. Use raw retrieval and read the text yourself. A fabricated quotation in a public list is worse than a gap.
3. **Cite the vendor page you used**, in the PR description. A classification that cannot be checked from public pages cannot be reviewed. If the fact your placement turns on is not documented anywhere public, say so in the row rather than asserting it.
4. **Mark source-only evidence with †.** If the sentence backing a cell is in page source, a schema.org block or a JavaScript bundle rather than in text the browser displays, append † to that cell and quote the string plus where you found it in the PR. Do not quietly upgrade it to ordinary evidence, and do not drop a true claim for being awkwardly located. Many research products are client-rendered apps, so this comes up more than it should.
5. Keep cells short enough to scan. A table stops being a table when a cell runs to three lines.
6. Factual and vendor-neutral. No marketing language, no superlatives you cannot back up.
7. If a product ships two paths with different loci, name the one the placement rests on.
8. One tool per pull request makes review faster; small batches are fine.
9. Check the links resolve before opening the PR.

Proposing a **new category** is the exception. It needs a decision locus the existing five cannot express, plus a test a contributor can apply from a product's public pages. Categories that are really workflow stages in disguise will be declined.

Proposing a **new facet** (see [METHOD.md](METHOD.md#the-facets)) is held to that bar and one more: it must change at least one existing placement, or it is declined as decoration.

## Staying small

This list exists because bigger lists in this space either sprawl until nobody can maintain them, or become a paper bibliography that goes stale within a year.

- Quality and relevance over completeness. Not every AI-for-research tool needs to be here.
- If a category grows past ~10–12 entries, prune the weakest or split it along a finer decision boundary. *Delegation*, at seven, is the closest to that line today.
- A category holding one entry is fine if the arrangement it describes is real. Thin categories are informative: they show where this sort of collaboration barely exists yet.

## Removing entries

If a product is abandoned, shut down, or archived, open an issue or PR saying why rather than silently leaving a stale link. Confirming that a stale-looking project still runs is also a valid PR.

## Code of conduct

Be respectful and constructive. Disagreements about categorization are fine; personal attacks are not.
