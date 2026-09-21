# How this list is built

The [README](README.md) is the answer. This file is the working. It exists so the list can be argued with: every boundary here is a test someone can apply to a product's public pages and get the same answer I did.

## The axis

**The categories are cut by decision locus, not by workflow stage.** Where a tool sits in the pipeline says almost nothing about the collaboration: two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what enters the research record, and what standing the researcher keeps in it.

So each category answers two questions — what does the human decide, and what does the AI decide — and every boundary is settled from the product's own public pages rather than from how it feels to use. A boundary that cannot be checked that way is not a boundary, it is a vibe, and it was rejected during design for that reason.

## The facets

Earlier drafts of this file claimed the first four categories were a ranked sequence on a single quantity, with the other three sitting outside it. That claim does not survive its own text: on the stated quantity, Adjudication and Critique both score zero, and so do Retrieval and Bench. Five of seven sat at one point, and the axis separated exactly one adjacent pair. It was also the wrong shape of claim. Categories are values; only axes can be orthogonal, and asking seven sibling labels to be orthogonal to each other is asking them to stop being a partition.

What the seven actually are is the occupied cells of a small grid. Six facets separate them, and each earns its place by separating a pair of listed entries that no other facet separates.

| Facet | What it asks | Values |
| --- | --- | --- |
| **Scope** | what the AI attaches a verdict to | nothing / individual items / the whole artifact |
| **Standing** | what that verdict is worth absent a human act | it is the record until reversed / it waits on a logged ruling / it can never be the record |
| **Record** | what leaves the platform as evidence of who decided | none / model-attributed / reviewer-attributed export |
| **Target** | what the verdict is about | work other people did / the researcher's own work / work not yet done |
| **Arbiter** | what settles whether the AI was right | a reader / an instrument |
| **Packaging** | how the software reaches you | hosted / self-host / library with no runtime |

Target does the least work inside the list and the most at its edge. All three of its values are judgments about research. A fourth value, a claim about nature, is what puts domain models such as AlphaFold and MatterGen outside the list entirely rather than in an eighth category: their output is checked against nature, not against anyone's standards for the work.

The seven categories are then positions in that grid:

| Category | Scope | Standing | Record | Target | Arbiter |
| --- | --- | --- | --- | --- | --- |
| **Delegation** | the whole artifact | it is the record | none, or model-attributed | the brief, or material the researcher owns | reader |
| **Triage** | individual items | stands until reversed | none | work other people did | reader |
| **Adjudication** | individual items | waits on a logged ruling | reviewer-attributed export | work other people did | reader |
| **Critique** | individual items | can never be the record | none | the researcher's own work | reader |
| **Retrieval** | nothing | not applicable | none | work other people did | reader |
| **Bench** | a proposed condition | waits on a commitment of material | none | work not yet done | instrument |
| **Components** | unbound | unbound | unbound | unbound | unbound |

Two combinations are inadmissible rather than merely unoccupied: Standing is undefined when Scope is nothing, and a reviewer-attributed Record presupposes that Standing waits on a logged ruling. Six near-independent facets with two declared gates is what orthogonality honestly amounts to here. That is the claim; nothing stronger is true.

**The three categories previously described as sitting outside the scale are not exceptions.** Retrieval is the zero of Scope. Bench is the instrument value of Arbiter. Components is the no-runtime value of Packaging. Calling them annexes was reading a facet value as an exception, and it is also why the seven names do not share a part of speech: they are answers to three different questions.

Reading the sections in their printed order, the researcher's standing broadly rises. That is a reading order, not a measurement.

## The placement rules

**1. Classify by the module that carries research judgment**, not the one the homepage leads with. This picks *which part of a product you evaluate*. It settles SciSpace and Review-it.

It does not license rescuing a product whose excluded module is the one users actually buy: a tool whose review module would qualify while the business's principal offering is something this list excludes is excluded, not filed on its best module. A side line in an excluded category does not trigger this; a centre of gravity in one does.

**2. Then test the three off-scale categories first, and only afterwards walk the ranked four in order, stopping at the first match.** This picks *which category that module lands in*. The off-scale tests are narrow and self-evidencing — a physical instrument run, no verdict on any item, no runtime at all — so checking them first stops a general test from catching something it was never written for. Within the ranked four the earlier category wins, because it describes the weaker human position and the list should not flatter a tool.

**3. Membership is release-mobile.** A vendor shipping a reviewer log or a checkpoint UI moves an entry. Existing entries need periodic re-testing, not just new PRs.

Rule 2 decides which section an entry is printed in. It is a filing procedure, not the structure of the space: a product's description is its facet values, and the order only settles where the row appears.

## Three words the tests depend on

These carried several boundaries while going undefined, which is how a screening platform could satisfy the test of the category above it on a reading nobody intended.

- **Item** — the unit the product itself invites you to accept or reject. A record in a screening set, a row in an extraction table, a citation statement, a proposed experimental condition. A passage inside a document the vendor never asks you to rule on is not an item.
- **Verdict** — an assertion about an item's fitness, its relevance to criteria the researcher stated, or a value read out of it. A description of what an item says is not a verdict, and neither is rank order. Semantic Scholar's passage labels describe; Elicit's include/exclude labels assert.
- **Standing** — what a verdict is worth before anyone acts on it. A verdict *stands* when it becomes the operative record of that decision unless a human intervenes. Elicit's include/exclude set is the screening record until reversed. Covidence's suggested extraction value records nothing until a reviewer accepts it, so it does not stand.

## The tests

### Delegation

Trace the shortest input-to-output path the vendor or repo documents. It belongs here when a researcher supplies a question or source materials, the next documented human action is reviewing a complete deliverable that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced. A documented flow that halts for rulings recorded against an exportable log belongs in Adjudication instead.

### Triage

Three clauses. First, the system attaches a judgment to individual items — a screening label, a relevance tier, a support/contrast classification, an extracted value. Second, that judgment **stands**: it is the operative record of that decision unless a human intervenes, rather than a suggestion that records nothing until someone accepts it. A platform where nothing advances until a named person rules belongs in Adjudication; a system that attaches no judgment at all belongs in Retrieval. Third, provenance: every assertion must resolve to an identifiable source a reader can open, or be explicitly marked in the output as model-authored rather than sourced. And the largest thing leaving the session must be structured working material or less; a document submitted under the researcher's own name belongs in Delegation.

### Adjudication

Two clauses, both required. The decision record must itself be an export — a PRISMA flow diagram, a dual-reviewer conflict log, a screening audit trail that leaves the platform as evidence of how the decisions were reached. And that record must attribute rulings to named reviewers rather than to the model. A platform whose labels stand before anyone rules on them belongs one category up, in Triage.

### Critique

No mechanism may put AI-authored text into the researcher's document or dataset without a per-item human action. A bulk apply-all-fixes control disqualifies; a tracked change the author accepts or rejects one at a time does not, because that leaves an attributable record of exactly what was taken. Second and independent: the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.

### Retrieval

The system returns retrieved items to the researcher and attaches no judgment to any of them. Ranking and relevance ordering do not count as a verdict; a screening label, a support/contrast classification, an extracted value, or a per-item score does, and moves the entry to Triage. Generated per-paper summaries are the hard case: a summary describing what a paper says stays here, while one rating the paper against the researcher's criteria, or asserting a value read out of it, does not.

### Bench

Two halves, both required. The documented output must terminate in a physical action — an experiment, a synthesis, an assay, an instrument run — and measured results must feed back for re-optimization. Software-only output never qualifies however autonomous the system looks.

*Applied:* Labguru Assistant was tested against this category and does not qualify: it recommends next steps, but no measured result feeds back into a new proposal. It sits in Delegation instead. Publicly usable closed-loop platforms remain scarce, so PRs here are wanted.

### Components

Ask whether the project produces research output by itself. If it ships no runtime, no hosted service, and no entry point that returns a deliverable, it belongs here.

## Where the axis coincides with the old one, and why

Two categories come close to reproducing a section of the stage-based taxonomy this list used to have. **Adjudication** holds exactly the membership that "systematic review" held, and **Triage** holds most of what "literature search" held.

That is not the axis failing to bite; in both cases it is a finding with a cause. PRISMA and the evidence standards journals enforce require reviewer-attributed audit trails, so every serious screening platform converged on the same decision locus. Literature tools converged on default-accept labelling for a weaker reason, competitive pressure to put a score on everything returned, and there the test did move entries: Semantic Scholar out to Retrieval, SciSpace back in on the strength of what an extracted cell asserts.

Elsewhere the axis cuts hard across the old stages. Grant drafting sits beside unattended manuscript agents. Peer-review tools are split by whether the tool can write into your file, which puts Review-it in the first category and ai-peer-review in the fourth. That split is narrower than it looks: Review-it's corrected document is a paid-tier feature, so the placement rests on the paid path, and a free-tier user is holding something much closer to Critique. The old lab section is split between a proposer whose verdict comes from an instrument and one whose output is prose.

## Known weak points

- **Delegation is the widest category**, running from a grant-letter drafter to an unattended manuscript agent. A finer split is available if it grows: whether the human's single ruling falls on a brief they wrote or on material they already owned, which separates ClawsGO and FutureHouse from Review-it and Labguru Assistant.
- **Critique is thin, and the thinness is the finding.** Several products advertise a review module that would land there on that module alone, then ship a bulk apply-the-fixes control beside it, which moves them to Delegation. A reviewer that genuinely cannot write is rarer than the marketing suggests.
- **Retrieval holds one entry**, which says more about the market than about the boundary. Search that offers no opinion is close to extinct as a product category: the commercial pressure runs toward attaching a score, a label, or an extracted value to everything returned, which moves a product one category up. SciSpace sat there in an earlier draft and was moved for exactly that reason.
- **Four of seven categories hold a single entry**, and the grid is sparse. Under the old ranked-sequence framing that looked like a defect. Under the facets it is the normal condition of a classification laid over a real market: most cells of a product space are empty most of the time, and the empty ones are predictions about what has not been built. The sparseness is worth watching for a different reason than it used to be, namely that a facet nobody occupies is a facet that may not be earning its place.
- **Labguru Assistant satisfies no category's written test** and is filed in the widest one by elimination. Its facet values are legible enough — per-item verdict, stands as the record, no resolvable source — but that combination is a cell no category currently claims. It is the one entry whose placement rests on residue rather than on a test, and the honest reading is that the grid has a gap there rather than that the entry is awkward.

## The strongest objection to all of this

A reader arrives with a task, not with a question about their own epistemic standing. Someone who needs to screen four thousand abstracts can scan stage headings and land on the right shelf in seconds, whereas decision-locus headings require a paragraph of theory before the boundaries are legible, and "Adjudication" is not a term anyone searches for. The cut also separates direct substitutes: Elicit and Covidence both screen records against user-stated criteria, and they sit two categories apart, so a reader comparing screening tools sees half the market and may not know it.

The counter is that the separation is the point. Elicit's label stands unless you open the paper; Covidence's does not advance until two named people rule. A reader who treats those as substitutes because both "do screening" is exactly the reader this list is trying to reach. The README's tables carry the distinction in their own columns for that reason.

## What the tests excluded

Recording what was cut, and why, is part of keeping the bar honest. The rules these apply — the language-service exclusion, the detection-evasion exclusion, and the activity rule — are in [CONTRIBUTING.md](CONTRIBUTING.md), because they are what a contributor needs before opening a PR.

| System | Why not |
| --- | --- |
| [Paperpal](https://paperpal.com/), [Writefull](https://writefull.com/) | Language services: the centre of gravity is how something is said, not what is claimed or cited. |
| [ScholarsReview](https://scholarsreview.com/) | The same business sells an AI humanizer advertising a 100% human score against Turnitin and GPTZero. |
| [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) | Last pushed April 2025, API-dependent, no frozen release; and a conversational terminal is a front end, not a differentiating feature. |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester / Preview only: "contact your Google account team." |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | Waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program, not a research system. Now waitlisted. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly; listing them adds no signal. |
| AI humanizers and detection-evasion tools | The advertised job is defeating a check on authorship. |
| Domain models: [AlphaFold](https://alphafoldserver.com/), [Boltz](https://github.com/jwohlwend/boltz), [MatterGen](https://github.com/microsoft/mattergen), ML weather emulators | Their output is a claim about nature, checked against nature. They substitute for a measurement rather than for a judgment about how the research should go. Excluded by scope, not by quality: several are among the most consequential scientific software ever released. |
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
| Individual papers and preprints | Out of scope; see [Related lists](#related-lists) below. |

If a system here becomes generally available, or ships the module that would change where it sits, open a PR.

## Related lists

For the academic-survey side of this space, which changes fast and is better served by lists dedicated to tracking papers:

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) — Closest to HAIRS in spirit; also covers human-in/out-of-the-loop collaboration modes.
- [awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science) — 400+ open-source projects, code only, no commercial products.
- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — EMNLP 2025 survey-companion paper list.

Overlapping less directly: [Awesome-Agent-Scientists](https://github.com/AgenticScience/Awesome-Agent-Scientists), [Awesome-LLM-Agents-Scientific-Discovery](https://github.com/zjlrock777/Awesome-LLM-Agents-Scientific-Discovery) (biomedical), [awesome-deep-research-agent](https://github.com/WuizaKaseiyo/awesome-deep-research-agent) (general-purpose), [awesome-HAI](https://github.com/bwang514/awesome-HAI) (Human-AI *Interaction* papers).

None of them curate live commercial products as the primary focus, and none organize by who decides what enters the research record.
