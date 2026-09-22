# How this list is built

The [README](README.md) is the answer. This file is the working. It exists so the list can be argued with: every boundary here is a test someone can apply to a product's public pages and get the same answer I did.

One qualification, because the web made it necessary. Some vendors publish a load-bearing fact without displaying it: the wording sits in page source, a schema.org block, or a JavaScript bundle the browser executes but never shows. That is published and freely retrievable, and it is not something a reader will find by looking. Those claims are used, and the README marks each one **†** so nobody goes hunting for a sentence that is not on the page. The alternative was to drop true statements for being awkwardly located, which would have made the list less accurate in the name of being checkable.

## The axis

**The categories are cut by decision locus, not by workflow stage.** Where a tool sits in the pipeline says almost nothing about the collaboration: two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what enters the research record, and what standing the researcher keeps in it.

So each category answers two questions — what does the human decide, and what does the AI decide — and every boundary is settled from the product's own public pages rather than from how it feels to use. A boundary that cannot be checked that way is not a boundary, it is a vibe, and it was rejected during design for that reason.

## The facets

Earlier drafts of this file claimed the categories were a ranked sequence on a single quantity, with the rest sitting outside it. That claim did not survive its own text: on the stated quantity, several categories scored zero, and the axis separated exactly one adjacent pair. It was also the wrong shape of claim. Categories are values; only axes can be orthogonal, and asking sibling labels to be orthogonal to each other is asking them to stop being a partition.

What the five actually are is the occupied cells of a small grid. Five facets separate them.

| Facet | What it asks | Values | Separates, in this list |
| --- | --- | --- | --- |
| **Scope** | what the AI attaches a verdict to | individual items / the whole artifact | Undermind from ClawsGO |
| **Standing** | what that verdict is worth absent a human act | it is the record until reversed / it waits on a logged ruling / it can never be the record | Undermind from Covidence |
| **Record** | what leaves the platform as evidence of who decided | none / model-attributed / reviewer-attributed export | ClawsGO from Rayyan: both ship a log, one attributes to the model and one to a named reviewer |
| **Target** | what the verdict is about | work other people did / the researcher's own work / work not yet done | Elicit from SciScore |
| **Arbiter** | what settles whether the AI was right | a reader / a run | Atinary from Labguru Assistant |

The last column names, for each facet, a pair it separates. State the claim carefully, because an earlier draft overstated it: those pairs differ on other facets too, so no single pair proves a facet indispensable. What the column shows is that every facet is doing work somewhere rather than sitting decorative. The stronger claim — that dropping any one facet would merge two entries nothing else separates — is not one this list can currently make.

**Span is not a facet, and the distinction matters.** How much of the research a system reaches — one step, one sub-workflow, or a question in and a submittable artifact out — is real and useful, and the README prints it as its own table. But it changes no placement: Question First helps you sharpen a research question and ClawsGO returns a finished manuscript, and both sit in Delegation because you rule on each the same way, once, at the end. [CONTRIBUTING.md](CONTRIBUTING.md) requires a new facet to change at least one existing placement or be declined as decoration, and span fails that test honestly. It is a description axis running alongside the classification rather than inside it, which is also the cleanest evidence that the facets are doing real work: a genuinely independent dimension can be added without disturbing a single row.

Target does the least work inside the list and the most at its edge. All three of its values are judgments about research. A fourth value, a claim about nature, is what puts domain models such as AlphaFold and MatterGen outside the list entirely rather than in an eighth category: their output is checked against nature, not against anyone's standards for the work.

The five categories are then positions in that grid:

| Category | Scope | Standing | Record | Target | Arbiter |
| --- | --- | --- | --- | --- | --- |
| **Delegation** | the whole artifact | it is the record | none, or model-attributed | the brief, or material the researcher owns | reader |
| **Standing Verdicts** | individual items | stands until reversed | none | work other people did | reader |
| **Human Approval** | individual items | waits on a logged ruling | reviewer-attributed export | work other people did | reader |
| **Critique** | individual items | can never be the record | none | the researcher's own work | reader |
| **Bench** | a proposed condition | waits on a commitment of resources | none | work not yet done | run |

One combination is inadmissible rather than merely unoccupied: a reviewer-attributed Record presupposes that Standing waits on a logged ruling. Five near-independent facets with one declared gate is what orthogonality honestly amounts to here. That is the claim; nothing stronger is true.

**Bench is the one category outside the ranked four, and it is not an exception.** It is the *run* value of Arbiter: everywhere else a reader settles whether the AI was right, and there a measurement does. Two earlier categories, Retrieval and Components, were also filed as facet values this way, and both were later deleted for a better reason: their definitions contradicted the list's own premise. A system that attaches no verdict to anything has taken over no judgment, and a project that ships no runtime is not a standalone system. A facet value is not a licence to keep a category the definition excludes.

Reading the sections in their printed order, the researcher's standing broadly rises. That is a reading order, not a measurement.

## The placement rules

**1. Classify by the module that carries research judgment**, not the one the homepage leads with. This picks *which part of a product you evaluate*. It settles Review-it and Question First.

It does not license rescuing a product whose excluded module is the one users actually buy: a tool whose review module would qualify while the business's principal offering is something this list excludes is excluded, not filed on its best module. A side line in an excluded category does not trigger this; a centre of gravity in one does.

**2. Then test Bench first, and only afterwards walk Delegation, Standing Verdicts, Human Approval and Critique in order, stopping at the first match.** This picks *which category that module lands in*. Bench's test is narrow and self-evidencing — a proposal, a run, and a documented approval before the run — so checking it first stops a general test from catching something it was never written for. Within the other four the earlier category wins, because it describes the weaker human position and the list should not flatter a tool.

**3. Membership is release-mobile.** A vendor shipping a reviewer log or a checkpoint UI moves an entry. Existing entries need periodic re-testing, not just new PRs.

Rule 2 decides which section an entry is printed in. It is a filing procedure, not the structure of the space: a product's description is its facet values, and the order only settles where the row appears.

## Three words the tests depend on

These carried several boundaries while going undefined, which is how a screening platform could satisfy the test of the category above it on a reading nobody intended.

- **Item** — the unit the product itself invites you to accept or reject. A record in a screening set, a row in an extraction table, a citation statement, a proposed experimental condition. A passage inside a document the vendor never asks you to rule on is not an item.
- **Verdict** — an assertion about an item's fitness, its relevance to criteria the researcher stated, or a value read out of it. A description of what an item says is not a verdict, and neither is rank order. Semantic Scholar's passage labels describe; Elicit's include/exclude labels assert.
- **Standing** — what a verdict is worth before anyone acts on it. A verdict *stands* when it becomes the operative record of that decision unless a human intervenes. Undermind's per-paper labels are the screening record until reversed. Covidence's suggested extraction value records nothing until a reviewer accepts it, so it does not stand.

## The tests

### Delegation

Trace the shortest input-to-output path the vendor or repo documents. It belongs here when a researcher supplies a question or source materials, the next documented human action is reviewing a complete deliverable that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced. A documented flow that halts for rulings recorded against an exportable log belongs in Human Approval instead.

### Standing Verdicts

Three clauses. First, the system attaches a judgment to individual items — a screening label, a relevance tier, a support/contrast classification, an extracted value. Second, that judgment **stands**: it is the operative record of that decision unless a human intervenes, rather than a suggestion that records nothing until someone accepts it. A platform where nothing advances until a named person rules belongs in Human Approval. A system that attaches no judgment to any item has taken over no judgment at all, and is out of scope rather than filed elsewhere. Third, provenance: every assertion must resolve to an identifiable source a reader can open, or be explicitly marked in the output as model-authored rather than sourced. And the largest thing leaving the session must be structured working material or less; a document submitted under the researcher's own name belongs in Delegation.

### Human Approval

Two clauses, both required. First, the platform holds a per-record ruling attributable to a named person, and that attribution rather than the model's label is what stands against the decision. Second, the decision flow leaves the platform as evidence: a PRISMA flow diagram, a conflict log, an agreement report. The export need not itself carry names, since Covidence's screening-stage PRISMA does not and its per-reviewer export arrives one stage later, but a flow a reader cannot reconstruct at all is not a decision record. A platform whose labels stand before anyone rules on them belongs one category up, in Standing Verdicts.

### Critique

No mechanism may put AI-authored text into the researcher's document or dataset without a per-item human action. A bulk apply-all-fixes control disqualifies; a tracked change the author accepts or rejects one at a time does not, because that leaves an attributable record of exactly what was taken. Second and independent: the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.


### Bench

Three clauses, all required.

**A proposal, not a prediction.** The system must return a specific configuration to run next — an experimental condition, a set of parameter values, a synthesis route, a machine setting — rather than an estimate of what running it would produce. A system that reports the expected outcome is a domain model and is out of scope entirely.

**A run, and the result feeds the next proposal.** The proposal must be executed and produce a number, and that number must drive what is proposed next. The arbiter may be an instrument or a computation; what it may not be is the system's own estimate. A system that proposes once and stops does not qualify, and neither does one whose feedback is a reader's opinion of the proposal.

**The loop cannot advance without a human act.** Between one proposal and the next, something must require a researcher to do something: commit the material, run the thing, return the measurement. It need not be an approval control inside the software, and the earlier wording demanded one, which no listed system actually ships. A default mode where the optimizer stalls until a person feeds a result back is a gate. A study that iterates to termination once launched is not, and neither is a configuration where a robot or a script closes the loop unattended. Where a vendor ships both, the entry is filed on the default and re-tested when the default changes.

An earlier version excluded software-only output outright. That clause is dropped, because it excluded for the wrong reason: what distinguishes this category is that a run rather than a reader settles who was right, and a simulation the researcher pays for settles that as firmly as an assay. The approval clause, not the physicality of the arbiter, is what stops this test from catching unattended code-running agents on the way past Delegation under [rule 2](#the-placement-rules) — which is the job the software-only clause was silently doing.

*Applied:* Labguru Assistant fails the second clause; it recommends next steps, and no measured result feeds back into a new proposal. **Dakota** (Sandia) passes the first two clauses and fails the third: once the input deck is launched nothing waits on anyone. **Atinary** passes on its default mode, where the researcher runs the condition and returns the measurement, and a [trace of its API](WORKFLOWS.md) shows the gate is a data dependency rather than a control: 95 paths, no accept or approve operation, no approval state in the status enum. Its optional robot integration closes the loop unattended and would fail this clause, which is what rule 3 exists for. Dropping the earlier software-only exclusion opened a computational cell that is still empty as of this revision.


## Where the axis coincides with the old one, and why

Two categories come close to reproducing a section of the stage-based taxonomy this list used to have. **Human Approval** holds exactly the membership that "systematic review" held, and **Standing Verdicts** holds most of what "literature search" held.

That is not the axis failing to bite; in both cases it is a finding with a cause. PRISMA asks authors to report how many reviewers screened each record and whether they worked independently, and the evidence standards journals enforce make an attributable trail practically necessary, so every serious screening platform converged on the same decision locus. Literature tools converged on default-accept labelling for a weaker reason, competitive pressure to put a score on everything returned, and there the test did move entries: Elicit up to Human Approval once it shipped dual review, and Semantic Scholar into Standing Verdicts once its influential-citation classifier was read as the per-item verdict it is.

Elsewhere the axis cuts hard across the old stages. Grant drafting sits beside unattended manuscript agents. Peer-review tools split by whether the tool can write into your file, and every one that survived the other rules writes, so they all sit in Delegation and Critique is empty. Review-it is the closest call: its corrected document is an upgrade above an already-paid floor, and whether the fixes apply in bulk or one at a time is not documented anywhere public, so even that placement rests on a fact a reader cannot check. The old lab section is split between a proposer whose verdict comes from an instrument and one whose output is prose.

## Known weak points

- **Delegation is the widest category**, running from a grant-letter drafter to an unattended manuscript agent. A finer split is available if it grows: whether the human's single ruling falls on a brief they wrote or on material they already owned, which separates ClawsGO and the Edison Platform from Review-it and Labguru Assistant.
- **Bench holds one entry and its computational cell is empty.** Dropping the software-only exclusion was right on the reasoning and has so far admitted nobody: every computational loop found either has no approval gate (Dakota, ShinkaEvolve) or is a library rather than a system (BoTorch, Ax, Xopt). Since the audience for this list includes people building scientist-assistant platforms, that emptiness is worth watching rather than shrugging at.
- **Critique was empty until this revision, and the claim made about it was wrong.** The README said no maintained product reviews without writing. The real situation was narrower and less flattering to the search: read-only review exists where the deliverable is a verification report, and the product that critiques the argument itself crosses into proposing new experiments, which is what q.e.d Science does.
- **Two categories were deleted for the same error, and it is worth naming.** Retrieval required that a system attach no verdict to anything, and Components that it ship no runtime. Both were written as facet values and both contradicted the list's own premise: a system that takes over no judgment is not a HAIRS, and a library with no runtime is not a standalone system. A facet value is not a reason to keep a category the definition excludes.
- **Labguru Assistant satisfies no category's written test** and is filed in the widest one by elimination. Its facet values are legible enough, but that combination is a cell no category currently claims. It is the one entry whose placement rests on residue rather than on a test.

## The strongest objection to all of this

A reader arrives with a task, not with a question about their own epistemic standing. Someone who needs to screen four thousand abstracts can scan stage headings and land on the right shelf in seconds, whereas decision-locus headings require a paragraph of theory before the boundaries are legible, and "Human Approval" is not a term anyone searches for. The cut also separates direct substitutes: Undermind and Covidence both rank literature against criteria the researcher states, and they sit one category apart, so a reader comparing screening tools sees part of the market and may not know it.

The counter is that the separation is the point. Undermind's label stands unless you open the paper; Covidence's does not advance until two named people rule. A reader who treats those as substitutes because both "do screening" is exactly the reader this list is trying to reach. The README's tables carry the distinction in their own columns for that reason.

## What the tests excluded

Recording what was cut, and why, is part of keeping the bar honest. The rules these apply — the language-service exclusion, the detection-evasion exclusion, and the activity rule — are in [CONTRIBUTING.md](CONTRIBUTING.md), because they are what a contributor needs before opening a PR.

| System | Why not |
| --- | --- |
| [Paperpal](https://paperpal.com/), [Writefull](https://writefull.com/) | Language services at their centre of gravity. Paperpal now also retrieves and proposes sources, but a citation finder bolted onto an editor does not make the editor a research system. |
| [ScholarsReview](https://scholarsreview.com/) | The same business sells an AI humanizer advertising a 100% human score against Turnitin and GPTZero. |
| [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) | Last pushed April 2025, API-dependent, no frozen release; and a conversational terminal is a front end, not a differentiating feature. |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester and Preview access only. The linked post announces the research; availability is gated elsewhere in Google Cloud documentation rather than on this page. |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | Waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program, not a research system. Now waitlisted. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly; listing them adds no signal. |
| AI humanizers and detection-evasion tools | The advertised job is defeating a check on authorship. |
| [SciSpace](https://scispace.com/) | Its AI Writer page advertises output that will "pass as human" and a Rewriter that humanizes AI prose, flagged by a built-in AI detector. Same criterion that excluded ScholarsReview, and the module rule does not rescue a bundled detection-evasion capability. |
| [ai-peer-review](https://github.com/poldrack/ai-peer-review) | Single-maintainer repository from a Stanford lab: 8 of 9 commits by one author, 154 stars, and its README states the code was AI-generated. Held the only Critique slot; removed under the same stability rule rather than kept because the category would otherwise be empty. |
| [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) | A single-maintainer side project: 23 of 24 commits by one author, no lab, company or publication behind it. Good work, but a curated list should not point a researcher at software whose maintenance depends on one person's continued interest. |
| [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) | A skill library with no runtime of its own. Whatever agent loads it sets the permissions and the checkpoints, so it is not a standalone research system. Excluded by scope, not by quality: 45,000+ stars and sixteen contributors. |
| [Semantic Scholar](https://www.semanticscholar.org/) *(now listed)* | Was filed under a Retrieval category defined as attaching no verdict. Its highly-influential-citation classifier is a per-item machine judgment, so it moved into Standing Verdicts and the category that had held it was deleted. Recorded here because the reasoning is the same one that excludes Google Scholar, PubMed and Scopus, which attach no per-item verdict and are therefore out. |
| [q.e.d Science](https://qedscience.com/) | No write path at all, and still fails Critique: it sells experimental proposals, and commentary telling you what to run next is not commentary on work already recorded. The only entry so far rejected by that clause alone. |
| [Dakota](https://dakota.sandia.gov/) | The textbook computational loop, and no gate: once the input deck is launched it iterates to termination with nothing waiting on a researcher. Excluded on the approval clause, not on the arbiter. |
| [statcheck](http://statcheck.io/) | Recomputes reported statistics and flags inconsistencies, with no write path, which is exactly the Critique shape. Excluded because it is deterministic parsing and arithmetic with no model in it, and this list describes itself from its first paragraph in model terms. |
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
