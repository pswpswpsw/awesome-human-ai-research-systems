# Contributing to Awesome Human-AI Research Systems

Thanks for considering a contribution! This list follows the general conventions of the [awesome list](https://github.com/sindresorhus/awesome/blob/main/awesome.md) format, with three twists: **it's commercial-product-first, it stays small on purpose, and it is organized by decision locus rather than by workflow stage.**

## What belongs here

**Primary focus — live, real, commercial products** where AI meaningfully assists a step of the research process.

Every entry must pass two tests:

1. **Usable today.** No waitlists, trusted-tester programs, private previews, or "contact your account team." An impressive lab demo is not a product.
2. **A research system.** Purpose-built for a step of the research workflow — not a general-purpose assistant, not an access/discount program, not a prompt template on a landing page.

Systems that fail these tests but are worth knowing about can go in [Deliberately Not Listed](README.md#deliberately-not-listed) with a one-line reason. If one of those later opens to the public, a PR promoting it into the main list is very welcome.

**The language-service exclusion.** If a product's centre of gravity is changing how something is said rather than what is claimed, selected, or cited — so that the same product could ship to a lawyer or a marketer by swapping the style guide — it is a language service rather than a research system. Grammar checkers, paraphrasers, and humanizers fall here even when they are marketed at academics, and a citation finder bolted onto an editor does not convert the editor into a research system.

**Not a good fit:**

- Individual academic papers with no working product/demo — link a survey list under [Related Awesome Lists](README.md#related-awesome-lists) instead. This list deliberately does not track papers one by one.
- General-purpose chatbots or assistants (ChatGPT, Claude, Gemini, Perplexity, NotebookLM).
- Access, credit, or discount programs dressed up as products.
- Language services, per the exclusion above.
- **AI humanizers and detection-evasion tools.** The advertised job is defeating a check on authorship, which is the opposite of the accountability this list is organized around. A product that bundles one is, at minimum, worth an issue.
- Reference managers with no AI component.
- Vaporware, waitlist-only or invite-only products, or projects that no longer work. **Activity means the release still runs, not just recent commits:** a frozen release whose code, weights, and data remain publicly downloadable stays eligible, while link collections, dead hosted services, and broken installs do not. Note the asymmetry this creates: a project with no frozen artifact, depending on external APIs, has nothing to fall back on, so staleness there is evidence of breakage in a way it is not for a released model plus index.

## Which section does it go in?

Sections are **not** research stages. Two tools that both "help with the literature" belong in different sections if one hands you a finished review to sign and the other refuses to write a sentence for you. Ask instead: **who decides what enters the research record, and what standing does the researcher keep in it?**

The order is not arbitrary. It runs from most to least of the AI's judgment reaching the record by default. **Work down this list and stop at the first match** — several products satisfy more than one test, and the earlier section wins, because it describes the weaker human position and the list should not flatter a tool.

Each section in [README.md](README.md) carries its own full test; these are the short forms.

1. **[Commissioned Deliverables](README.md#commissioned-deliverables)** — the next documented human action after the brief is reviewing a complete artifact that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced.
2. **[Proposals Settled at the Bench](README.md#proposals-settled-at-the-bench)** — the documented output terminates in a physical action, *and* measured results feed back for re-optimization. Both halves required.
3. **[Sourced Findings, Human Conclusions](README.md#sourced-findings-human-conclusions)** — the largest thing leaving the session is structured working material or less, and every assertion either resolves to an openable source or is explicitly marked model-authored. The machine's labels stand until a human overrides them.
4. **[Item-by-Item Adjudication](README.md#item-by-item-adjudication)** — the decision record is itself an export (PRISMA flow, conflict log, audit trail), *and* it attributes rulings to named reviewers rather than to the model. Nothing is default-accept. Both halves required.
5. **[Critique Returned to the Researcher](README.md#critique-returned-to-the-researcher)** — no mechanism puts AI-authored text into the record without a per-item human action, and the AI comments on material the researcher supplied. A bulk apply-all control disqualifies; a tracked change accepted one at a time does not.
6. **[Components Without a Locus](README.md#components-without-a-locus)** — ships no runtime, no hosted service, and no entry point that returns a deliverable, so the host deployment sets the division of labor.

**Two rules that cut across sections:**

- **Classify by the module that carries research judgment,** not the one the homepage leads with. A product with a review module and a drafting module is filed by whichever one decides what gets asserted. This rule is load-bearing and also the most abused: it should not be used to rescue a product whose excluded module is the one users actually buy.
- **Membership is release-mobile.** Shipping a reviewer log, a checkpoint UI, or a bulk apply-the-fixes button moves an entry. Existing entries need periodic re-testing, not just new PRs — a PR that re-tests an existing entry against its section's stated test is as welcome as one adding a tool.

If you genuinely cannot place a tool, say so in the PR and quote the vendor page that confuses you. A boundary that cannot decide a real case is a bug in the taxonomy, and that is worth an issue.

## How to add an entry

1. Fork the repo and create a branch.
2. Add your entry to the section its decision locus puts it in, in this format:
   ```markdown
   - [Name](https://example.com) — One clear, neutral sentence describing what it does.
   ```
3. **Write the sentence around the decision, not the feature list.** Say what the system decides and what it leaves to the researcher. "Screens each record and attaches a label that stands unless a reviewer reverses it" is useful; "AI-powered screening for systematic reviews" is not.
4. **Do not adopt the vendor's own framing.** If the product calls itself a mentor, a co-scientist, or a copilot, describe what it does instead.
5. Cite the vendor page you used. A classification that cannot be checked from public pages cannot be reviewed.
6. Keep descriptions factual and vendor-neutral, one sentence, no superlatives you can't back up. If a product ships two paths with different loci, name both and say which one the placement rests on.
7. One tool per pull request makes review faster, but small batches are fine.
8. Run a spell-check and make sure links resolve before opening the PR.

Proposing a **new section** is the exception, not the norm. A new section needs a decision locus the existing six cannot express, plus a test a contributor can apply from a product's public pages. Sections that are really workflow stages in disguise will be declined.

## Staying small

This list exists because bigger lists in this space either sprawl until no one can maintain them, or become a paper bibliography that goes stale within a year. To avoid that:

- We favor quality/relevance over completeness. Not every AI-for-research tool needs to be here.
- If a section grows past ~10–12 entries, that's a signal to prune the weakest ones, or to split the section along a finer decision boundary. *Commissioned Deliverables* and *Sourced Findings* are tied at nine today and are the two to watch.
- A section holding one entry is fine if the arrangement it describes is real. Thin sections are informative: they show where this kind of collaboration barely exists yet.
- Duplicates of a well-established category leader need a genuinely differentiating feature. Self-hostable weights and data versus a hosted service counts; a different front end does not.

## Removing entries

If a product is abandoned, shut down, or archived, please open an issue or PR noting why, rather than silently leaving stale links. Re-testing an entry against its section and finding it has moved is also a valid PR, as is confirming that a stale-looking project still runs.

## Code of conduct

Be respectful and constructive. Disagreements about categorization are fine; personal attacks are not.
