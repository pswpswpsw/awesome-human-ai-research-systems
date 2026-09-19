# Contributing to Awesome Human-AI Research Systems

Thanks for considering a contribution! This list follows the general conventions of the [awesome list](https://github.com/sindresorhus/awesome/blob/main/awesome.md) format, with two twists: **it's commercial-product-first, it stays small on purpose, and it is organized by decision locus rather than by workflow stage.**

## What belongs here

**Primary focus — live, real, commercial products** where AI meaningfully assists a step of the research process.

Every entry must pass two tests:

1. **Usable today.** No waitlists, trusted-tester programs, private previews, or "contact your account team." An impressive lab demo is not a product.
2. **A research system.** Purpose-built for a step of the research workflow — not a general-purpose assistant, not an access/discount program, not a prompt template on a landing page.

Systems that fail these tests but are worth knowing about can go in [Deliberately Not Listed](README.md#deliberately-not-listed) with a one-line reason. If one of those later opens to the public, a PR promoting it into the main list is very welcome.

**The language-service exclusion.** If every advertised feature changes only how something is said and never what is claimed, selected, or cited — so that the same product could ship to a lawyer or a marketer by swapping the style guide — it is a language service rather than a research system. Grammar checkers, paraphrasers, and humanizers fall here even when they are marketed at academics.

**Not a good fit:**

- Individual academic papers with no working product/demo — link a survey list under [Related Awesome Lists](README.md#related-awesome-lists) instead. This list deliberately does not track papers one by one.
- General-purpose chatbots or assistants (ChatGPT, Claude, Gemini, Perplexity, NotebookLM).
- Access, credit, or discount programs dressed up as products.
- Language services, per the exclusion above.
- Reference managers with no AI component.
- Vaporware, waitlist-only or invite-only products, or projects that no longer work. **Activity means the release still runs, not just recent commits:** a frozen release whose code, weights, and data remain publicly downloadable stays eligible, while link collections, dead hosted services, and broken installs do not. A link collection's entire value is freshness, so staleness disqualifies one even though it would not disqualify a frozen model release.

## Which section does it go in?

Sections are **not** research stages. Two tools that both "help with the literature" belong in different sections if one hands you a finished review to sign and the other refuses to write a sentence for you. Ask instead: **who decides what enters the research record, and what standing does the researcher keep in it?**

Work down this list and stop at the first match. Each section in [README.md](README.md) carries its own full test; these are the short forms.

1. **[Commissioned Deliverables](README.md#commissioned-deliverables)** — the next documented human action after the brief is reviewing a complete artifact that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced.
2. **[Proposals Settled at the Bench](README.md#proposals-settled-at-the-bench)** — the documented output terminates in a physical action, *and* measured results feed back for re-optimization. Both halves required.
3. **[Item-by-Item Adjudication](README.md#item-by-item-adjudication)** — the decision record is itself an export (PRISMA flow, conflict log, audit trail), *and* it attributes rulings to named reviewers rather than to the model. Both halves required.
4. **[Sourced Findings, Human Conclusions](README.md#sourced-findings-human-conclusions)** — the largest downloadable object is structured working material rather than a submittable document, and every assertion resolves to an identifiable source.
5. **[Critique Returned to the Researcher](README.md#critique-returned-to-the-researcher)** — no affordance exists to put the AI's output into the human's document, and the AI comments on material the researcher supplied.
6. **[Components Without a Locus](README.md#components-without-a-locus)** — ships no runtime, no hosted service, and no entry point that returns a deliverable, so the host deployment sets the division of labor.

**Two rules that cut across sections:**

- **Classify by the module that carries research judgment,** not the one the homepage leads with. A product with a review module and a drafting module is filed by whichever one decides what gets asserted.
- **Membership is release-mobile.** Shipping a reviewer log, a checkpoint UI, or an apply-the-fix button moves an entry. Existing entries need periodic re-testing, not just new PRs — a PR that re-tests an existing entry against its section's stated test is as welcome as one adding a tool.

If you genuinely cannot place a tool, say so in the PR and quote the vendor page that confuses you. A boundary that cannot decide a real case is a bug in the taxonomy, and that is worth an issue.

## How to add an entry

1. Fork the repo and create a branch.
2. Add your entry to the section its decision locus puts it in, in this format:
   ```markdown
   - [Name](https://example.com) — One clear, neutral sentence describing what it does.
   ```
3. **Write the sentence around the decision, not the feature list.** Say what the system decides and what it leaves to the researcher. "Screens each record and attaches a label that stands unless a reviewer reverses it" is useful; "AI-powered screening for systematic reviews" is not.
4. Cite the vendor page you used. A classification that cannot be checked from public pages cannot be reviewed.
5. Keep descriptions factual and vendor-neutral — no marketing language, no superlatives you can't back up.
6. One tool per pull request makes review faster, but small batches are fine.
7. Run a spell-check and make sure links resolve before opening the PR.

Proposing a **new section** is the exception, not the norm. A new section needs a decision locus the existing six cannot express, plus a test a contributor can apply from a product's public pages. Sections that are really workflow stages in disguise will be declined.

## Staying small

This list exists because bigger lists in this space either sprawl until no one can maintain them, or become a paper bibliography that goes stale within a year. To avoid that:

- We favor quality/relevance over completeness. Not every AI-for-research tool needs to be here.
- If a section grows past ~10–12 entries, that's a signal to prune the weakest ones, or to split the section along a finer decision boundary. *Commissioned Deliverables* and *Sourced Findings* are the two closest to that line today.
- A section holding one entry is fine if the arrangement it describes is real. Thin sections are informative: they show where this kind of collaboration barely exists yet.
- Duplicates of a well-established category leader need a genuinely differentiating feature. Self-hostable weights and data versus a hosted service counts; a different front end does not.

## Removing entries

If a product is abandoned, shut down, or archived, please open an issue or PR noting why, rather than silently leaving stale links. Re-testing an entry against its section and finding it has moved is also a valid PR.

## Code of conduct

Be respectful and constructive. Disagreements about categorization are fine; personal attacks are not.
