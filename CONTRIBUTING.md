# Contributing to Awesome Human-AI Research Systems

Thanks for considering a contribution! This list follows the general conventions of the [awesome list](https://github.com/sindresorhus/awesome/blob/main/awesome.md) format, with one twist: **it's commercial-product-first, and it stays small on purpose.**

## What belongs here

**Primary focus — live, real, commercial products** where AI meaningfully assists a step of the research process: question formulation, literature search/review, experiment design, writing, peer review, or grant writing.

Every entry must pass two tests:

1. **Usable today.** No waitlists, trusted-tester programs, private previews, or "contact your account team" gating. An impressive lab demo is not a product.
2. **A research system.** Purpose-built for a step of the research workflow — not a general-purpose assistant, not an access/discount program, not a prompt template on a landing page.

Systems that fail these tests but are worth knowing about can go in [Deliberately Not Listed](README.md#deliberately-not-listed) with a one-line reason. If one of those later opens to the public, a PR promoting it into the main list is very welcome.

**Secondary — [Academic & Open-Source HAIRS](README.md#academic--open-source-hairs)** is a small, hand-picked section for open-source/lab systems that are genuinely usable (real code, real users), not just an implementation attached to a paper.

**Good fit:** a literature-review AI, an autonomous research agent, a hypothesis generator, a lab-notebook AI assistant, a usable open-source agent framework for science.

**Not a good fit:**
- Individual academic papers with no working product/demo — link a survey list under [Related Awesome Lists](README.md#related-awesome-lists) instead. This list deliberately does not track papers one by one; papers (and the grad students behind them) tend to stop being maintained.
- General-purpose chatbots or assistants (ChatGPT, Claude, Gemini, Perplexity, NotebookLM). Researchers use them daily; listing them adds no signal.
- Access, credit, or discount programs dressed up as products.
- Prompt templates and single-shot "generators" bolted onto a general writing tool.
- Reference managers with no AI component.
- Vaporware, waitlist-only or invite-only products, or projects with no activity in 12+ months.

## How to add an entry

1. Fork the repo and create a branch.
2. Add your entry to the most appropriate section, alphabetically where practical, in this format:
   ```markdown
   - [Name](https://example.com) — One clear, neutral sentence describing what it does.
   ```
3. If it doesn't fit an existing section but represents a real, distinct category, propose a new `##` section in your PR description — but note that adding sections is the exception, not the norm (see "Staying small" below).
4. Keep descriptions factual and vendor-neutral — no marketing language, no superlatives you can't back up.
5. One tool per pull request makes review faster, but small batches are fine.
6. Run a spell-check and make sure links resolve before opening the PR.

## Staying small

This list exists because bigger lists in this space either sprawl until no one can maintain them, or become a paper bibliography that goes stale within a year. To avoid that:

- We favor quality/relevance over completeness. Not every AI-for-research tool needs to be here.
- If a section grows past ~10–12 entries, that's a signal to prune the weakest ones, not just keep appending.
- Duplicates of a well-established category leader ("yet another literature-search wrapper around GPT") need a genuinely differentiating feature to be added.

## Removing entries

If a product is abandoned, shut down, or archived, please open an issue or PR noting why, rather than silently leaving stale links.

## Code of conduct

Be respectful and constructive. Disagreements about categorization are fine; personal attacks are not.
