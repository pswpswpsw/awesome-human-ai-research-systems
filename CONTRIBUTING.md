# Contributing to Awesome Human-AI Research Systems

Thanks for considering a contribution. Three things shape this list. It is commercial-product-first, so shipped products come first and research code is the exception. It stays small on purpose. And it is organized by **what the human still rules on**, not by where a tool sits in a workflow. The reasoning behind that choice is in [METHOD.md](METHOD.md). This file is what you need before opening a pull request (PR).

## What belongs here

**Live, real products a researcher can use today.** Every entry must pass two tests:

1. **Usable today.** No gate stands between you and the product. No waitlists, no trusted-tester programs, no private previews, no "contact your account team." An impressive lab demo is not a product.
2. **A research system.** It was built for a particular step of research work. A general-purpose assistant is not one. Neither is an access program, nor a prompt template sitting on a landing page.

Systems that fail these tests but are worth knowing about get recorded in [METHOD.md](METHOD.md#what-the-tests-excluded), each with a one-clause reason. If one of them later opens to the public, a PR promoting it into the list is very welcome.

## What does not

- **Language services.** Their main job is changing how something is said rather than what is claimed, selected, or cited. Put another way, the same product would ship to a lawyer or a marketer by swapping the style guide. Grammar checkers, paraphrasers and humanizers land here even when the marketing points at academics. Bolting a citation finder onto an editor does not turn the editor into a research system.
- **AI humanizers and detection-evasion tools.** What these sell is defeating a check on who wrote something. This list is organized around being answerable for work that carries your name, which is the opposite job. The rule also covers a product that bundles one of these next to a module that would otherwise qualify, a module being one working piece of a product. The module rule below decides which part of a product you evaluate. It does not let a business be filed under its most respectable part.
- **Dead or broken projects.** Activity here means **the release still runs, not that the code was updated recently.** A frozen release, one nobody is updating any more, stays eligible as long as its code, its trained model weights and its data are still publicly downloadable. Link collections, dead hosted services and broken installs do not. Note the asymmetry. A project that ships nothing downloadable of its own, and leans on outside services it calls over the network, has nothing to fall back on, so going quiet is evidence that it has broken. For a released model plus an index, going quiet is not.
- **Domain models that predict nature.** If the output is a claim about the world, such as a protein structure, a material property, a weather field or a reaction yield, it takes the place of a measurement rather than of a research judgment. It performs a piece of the science instead of helping you decide how the work should go. AlphaFold, Boltz, MatterGen and the ML weather emulators are real, usable and important, and all out of scope. **The test:** is the output checked against nature, or against your standards for the work? Atinary is listed because what it returns is which experiment to run next, a decision about your research. A model returning what that experiment would have found would not be.
- **Single-maintainer projects with nothing behind them.** One substantive contributor is fine when the project has backing: an institution, a company, a citable publication, or enough users that a break would be noticed. With none of those, a curated list should not point a researcher at software that depends on one person staying interested. This is a judgment about maintenance risk, not about quality. It is also **separate from the activity rule above**: a project can run perfectly today and still fail this one.
- **Pure retrieval tools.** A system that returns items and attaches no judgment to any of them has taken over no research judgment, and research judgment is what this list is about. Google Scholar, PubMed, Scopus and Web of Science are all out on this. Semantic Scholar is in because its highly-influential-citation classifier is a machine judgment made about each individual item. Ranking alone would not have been enough.
- **Duplicates without a differentiating feature.** Weights and data you can host yourself, set against a hosted service, counts as a difference. A different front end does not.
- **Papers and preprints with no working product.** Link a survey list under [Related lists](METHOD.md#related-lists) instead.
- **General-purpose assistants, access or discount programs, reference managers with no AI component.**

## Which category does it go in?

Apply two rules in this order. [METHOD.md](METHOD.md) argues both in full.

1. **The module rule: classify by the part of the product that carries research judgment,** not the part the homepage leads with. A module is one working piece of a product, such as the screening tool inside a review platform. This rule picks *which part of a product you evaluate*.
2. **Test category 5 first. Then walk 1–4 in order and stop at the first match.** Bench's test is narrow and easy to confirm, so running it first stops a broader test from catching something it was never written for. Within 1–4 the earlier category wins, because the earlier one describes the weaker position for the human, and the list should not flatter a tool.

What follows are short forms. [METHOD.md](METHOD.md) holds the authoritative versions.

1. **[Delegation](README.md#delegation)**. You write the brief. The next human action the vendor documents is reviewing a finished piece of work, the kind that would be submitted under the researcher's own name. And nothing is produced that ties each separate decision to a named person.
2. **[Standing Verdicts](README.md#standing-verdicts)**. The system attaches a judgment (a verdict) to individual items. That judgment **stands**, meaning it is the record that counts unless a human steps in: if you never open that paper, the machine's answer is the one on the record. Every assertion either points to a source you can open, or is clearly marked as written by the model. And the biggest thing leaving the session is structured working material or less, such as a table of labelled papers rather than a finished document you would submit.
3. **[Human Approval](README.md#human-approval)**. Two halves, both required. The platform holds a ruling on each record, one paper or entry in the set, and that ruling is tied to a named person. And the trail of how the decisions were reached leaves the platform as evidence. Nothing stands until a named person rules. The exported trail itself does not have to carry the names.
4. **[Critique](README.md#critique)**. Nothing the AI writes can reach the record unless a human acts on that specific item. And the AI comments on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.
5. **[Bench](README.md#bench)**. Three conditions, all required. The system proposes a specific configuration to run, meaning the actual settings for the next experiment. The run produces a number, and that number drives the next proposal. And the loop cannot advance unless a human does something. A study that runs itself to the end once launched fails the third condition, and so does a setup where a robot closes the loop without anyone having to do anything.

**Membership is release-mobile**, meaning an entry can move to another category when a release changes how the product works. Add a reviewer log, a checkpoint screen, or a button that applies all the fixes at once, and the entry moves. A PR that re-tests an existing entry against its category is as welcome as one adding a tool.

If you genuinely cannot place a tool, say so in the PR and quote the vendor page that confuses you. A boundary that cannot decide a real case is a bug in the category scheme, and that is worth an issue.

## How to add an entry

Entries are table rows, not bullets. Add a row to the table for the category your tool lands in:

```markdown
| [Name](https://example.com) | what the human rules on | what you get | decision record | writes into your draft | access |
```

Fill each column as follows.

- **The human rules on.** Name the researcher's actual decision point, and how fine-grained it is. "Every reference, twice over" and "keep or discard the finished report" are both answers. A cell saying "reviewing the output" is not. If the vendor documents no human checkpoint at all, say that, because it is the most informative answer the column can carry. This is the column the list exists for, so make it specific.
- **You get.** Name what the product hands back, and name it concretely: an extraction table, a ranked set with match scores, a compiled manuscript, the next experiment to run. Sometimes the placement turns on a property of that output, such as no openable source, uncited passages flagged, or citations it retrieved itself. Put that here rather than leaving it implicit.
- **Decision record.** What leaves the platform as evidence of how the decisions were reached, and who it attributes them to. `No` is a legitimate and informative answer, and the commonest correct one. A log whose default entry is the model's own label is not the same as one attributing rulings to named reviewers, and the cell should say which it is. Do not put the product's output here. A concerns table or a returned measurement is what you get, not a record of who decided.
- **Writes into your draft.** Whether AI-authored text can reach the researcher's file, and on what terms. `No` for most entries. Otherwise say whether it applies in bulk, one item at a time, or whether what you get simply *is* the draft.
- **Access.** How you get at it: `hosted` (a service you log into), `self-host` (code you run), `install into a host` (a library with no runtime of its own, so something else has to run it), and the compound `self-host, open weights` where the model is downloadable too. **No prices and no tiers.** Prices and tiers change faster than this file gets updated, and a wrong "free" is the error a reader catches first. The one exception is `free`, which marks a service the vendor documents as free outright rather than a free tier of a paid product. Semantic Scholar qualifies. A product with a free plan alongside paid plans does not. If you cannot find that documented on a page you can link, leave it off.

Rules for the prose in those cells:

1. **Do not adopt the vendor's own framing.** If the product calls itself a mentor, a co-scientist, or a copilot, describe what it does instead.
2. **Read the page yourself. Do not let a tool summarize it for you.** Two independent fact-checking passes on this repo caught a summarizing fetch tool inventing quoted material. Once it invented a corpus size the page never gave. Once it invented a set of human-checkpoint steps that do not exist. Fetch the raw page and read the text yourself. A fabricated quotation in a public list is worse than a gap.
3. **Cite the vendor page you used**, in the PR description. A classification nobody can check against public pages cannot be reviewed. If the fact your placement turns on is not documented anywhere public, say so in the row rather than asserting it.
4. **Mark source-only evidence with †.** Sometimes the sentence backing a cell is not in the text the browser displays. It sits in the page source, in a schema.org block (structured data a site embeds for search engines), or in a JavaScript bundle. When that happens, append † to that cell, and in the PR quote the string and say where you found it. Do not quietly upgrade it to ordinary evidence, and do not drop a true claim for being awkwardly located. Many research products build their pages in the browser, so this comes up more than it should.
5. Keep cells short enough to scan. A table stops being a table when a cell runs to three lines.
6. Stay factual and vendor-neutral. No marketing language, no superlatives you cannot back up.
7. If a product ships two paths, and the human rules on different things in each, name the path your placement rests on.
8. One tool per pull request makes review faster. Small batches are fine.
9. Check the links resolve before opening the PR.

Proposing a **new category** is the exception. It needs a decision point the existing five cannot express, meaning a genuinely different answer to the question of what the human still rules on. It also needs a test a contributor can apply from a product's public pages. Categories that are really workflow stages in disguise will be declined.

Proposing a **new facet** (see [METHOD.md](METHOD.md#the-facets)) must clear that bar and one more. A facet is one of the questions the categories are cut on, such as what the AI attaches a judgment to. A new one must change where at least one existing entry sits, or it is declined as decoration.

## Staying small

This list exists because bigger lists in this space either sprawl until nobody can maintain them, or turn into a paper bibliography that goes stale within a year.

- Quality and relevance beat completeness. Not every AI-for-research tool needs to be here.
- If a category grows past ~10–12 entries, prune the weakest or split it along a finer decision boundary. *Delegation*, at seven, is the closest to that line today.
- A category holding one entry is fine if the arrangement it describes is real. Thin categories are informative: they show where this sort of collaboration barely exists yet.

## Removing entries

If a product is abandoned, shut down, or archived, open an issue or PR saying why rather than silently leaving a stale link. Confirming that a stale-looking project still runs is also a valid PR.

## Code of conduct

Be respectful and constructive. Disagreements about categorization are fine; personal attacks are not.