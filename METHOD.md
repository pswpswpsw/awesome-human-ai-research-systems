# How this list is built

The [README](README.md) is the answer. This file is the working. It exists so the list can be argued with: every boundary here is a test someone can apply to a product's public pages and get the same answer I did.

## The axis

**The kinds are cut by decision locus, not by workflow stage.** Where a tool sits in the pipeline says almost nothing about the collaboration: two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what enters the research record, and what standing the researcher keeps in it.

So each kind answers two questions — what does the human decide, and what does the AI decide — and every boundary is settled from the product's own public pages rather than from how it feels to use. A boundary that cannot be checked that way is not a boundary, it is a vibe, and it was rejected during design for that reason.

## The ordering

**Four of the seven kinds form a ranked sequence**, measuring how much of the AI's judgment reaches the research record without a human ruling on that specific item.

1. **Commissioned Deliverables** — all of it does. The output *is* the record, and the only lever is to keep or discard the whole thing.
2. **Sourced Findings, Human Conclusions** — the machine attaches a verdict to each item, and that verdict stands until the researcher opens the source and reverses it.
3. **Item-by-Item Adjudication** — none of it advances until a named person enters a ruling the log carries.
4. **Critique Returned to the Researcher** — there is no path into the record at all, even with a ruling.

Read in that order, the AI's default authority falls and the researcher's standing rises.

**Three kinds sit outside that scale, each for a stated reason.**

- **Retrieval Without a Verdict** attaches no judgment to any item, so there is nothing to rank. What it decides is what you ever see.
- **Proposals Settled at the Bench** produces a measurement rather than an assertion, so no model-authored judgment enters the record to be scaled.
- **Components Without a Locus** fixes no locus at all, because the host deployment sets one.

## The placement rules

**1. Classify by the module that carries research judgment**, not the one the homepage leads with. This picks *which part of a product you evaluate*. It settles SciSpace and Review-it.

It does not license rescuing a product whose excluded module is the one users actually buy: a tool whose review module would qualify while the business's principal offering is something this list excludes is excluded, not filed on its best module. A side line in an excluded category does not trigger this; a centre of gravity in one does.

**2. Then test the three off-scale kinds first, and only afterwards walk the ranked four in order, stopping at the first match.** This picks *which kind that module lands in*. The off-scale tests are narrow and self-evidencing — a physical instrument run, no verdict on any item, no runtime at all — so checking them first stops a general test from catching something it was never written for. Within the ranked four the earlier kind wins, because it describes the weaker human position and the list should not flatter a tool.

**3. Membership is release-mobile.** A vendor shipping a reviewer log or a checkpoint UI moves an entry. Existing entries need periodic re-testing, not just new PRs.

## The tests

### Commissioned Deliverables

Trace the shortest input-to-output path the vendor or repo documents. It belongs here when a researcher supplies a question or source materials, the next documented human action is reviewing a complete deliverable that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced. A documented flow that halts for rulings recorded against an exportable log belongs in Item-by-Item Adjudication instead.

### Sourced Findings, Human Conclusions

Three clauses. First, the system attaches a judgment to individual items — a screening label, a relevance tier, a support/contrast classification, an extracted value. Second, that judgment is usable the moment it is produced: nothing halts for an entered ruling before the researcher can act on the output. A platform where nothing advances until a named person rules belongs in Item-by-Item Adjudication; a system that attaches no judgment at all belongs in Retrieval Without a Verdict. Third, provenance: every assertion must resolve to an identifiable source a reader can open, or be explicitly marked in the output as model-authored rather than sourced. And the largest thing leaving the session must be structured working material or less; a document submitted under the researcher's own name belongs in Commissioned Deliverables.

### Item-by-Item Adjudication

Two clauses, both required. The decision record must itself be an export — a PRISMA flow diagram, a dual-reviewer conflict log, a screening audit trail that leaves the platform as evidence of how the decisions were reached. And that record must attribute rulings to named reviewers rather than to the model. A platform whose labels are usable before anyone rules on them belongs one kind up, in Sourced Findings.

### Critique Returned to the Researcher

No mechanism may put AI-authored text into the researcher's document or dataset without a per-item human action. A bulk apply-all-fixes control disqualifies; a tracked change the author accepts or rejects one at a time does not, because that leaves an attributable record of exactly what was taken. Second and independent: the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.

### Retrieval Without a Verdict

The system returns retrieved items to the researcher and attaches no judgment to any of them. Ranking and relevance ordering do not count as a verdict; a screening label, a support/contrast classification, an extracted value, or a per-item score does, and moves the entry to Sourced Findings. Generated per-paper summaries are the hard case: a summary describing what a paper says stays here, while one rating the paper against the researcher's criteria, or asserting a value read out of it, does not.

### Proposals Settled at the Bench

Two halves, both required. The documented output must terminate in a physical action — an experiment, a synthesis, an assay, an instrument run — and measured results must feed back for re-optimization. Software-only output never qualifies however autonomous the system looks.

*Applied:* Labguru Assistant was tested against this kind and does not qualify. It recommends next steps that a scientist then performs at a bench, satisfying the first half, but no measured result feeds back into a new proposal, so the second half fails and it sits in Commissioned Deliverables instead. Publicly usable closed-loop platforms remain scarce, so PRs here are wanted.

### Components Without a Locus

Ask whether the project produces research output by itself. If it ships no runtime, no hosted service, and no entry point that returns a deliverable, it belongs here.

## Where the axis coincides with the old one, and why

Two kinds come close to reproducing a section of the stage-based taxonomy this list used to have. **Item-by-Item Adjudication** holds exactly the membership that "systematic review" held, and **Sourced Findings** holds most of what "literature search" held.

That is not the axis failing to bite; in both cases it is a finding with a cause. PRISMA and the evidence standards journals enforce require reviewer-attributed audit trails, so every serious screening platform converged on the same decision locus. Literature tools converged on default-accept labelling for a weaker reason, competitive pressure to put a score on everything returned, and there the test did move entries: Semantic Scholar out to Retrieval Without a Verdict, SciSpace back in on the strength of what an extracted cell asserts.

Elsewhere the axis cuts hard across the old stages. Grant drafting sits beside unattended manuscript agents. Peer-review tools are split by whether the tool can write into your file, which puts Review-it in the first kind and ai-peer-review in the fourth. The old lab section is split between a proposer whose verdict comes from an instrument and one whose output is prose.

## Known weak points

- **Commissioned Deliverables is the widest kind**, running from a grant-letter drafter to an unattended manuscript agent. A finer split is available if it grows: whether the human's single ruling falls on a brief they wrote or on material they already owned, which separates ClawsGO and FutureHouse from Review-it and Labguru Assistant.
- **Critique Returned to the Researcher is thin, and the thinness is the finding.** Several products advertise a review module that would land there on that module alone, then ship a bulk apply-the-fixes control beside it, which moves them to Commissioned Deliverables. A reviewer that genuinely cannot write is rarer than the marketing suggests.
- **Retrieval Without a Verdict holds one entry**, which says more about the market than about the boundary. Retrieval that offers no opinion is close to extinct as a product category: the commercial pressure runs toward attaching a score, a label, or an extracted value to everything returned, which moves a product one kind up. SciSpace sat there in an earlier draft and was moved for exactly that reason.
- **Four of seven kinds hold a single entry.** Each is defensible on its own, and one of them is a ranked kind rather than an annex, so the shape is not three annexes and a list. It is worth watching.

## The strongest objection to all of this

A reader arrives with a task, not with a question about their own epistemic standing. Someone who needs to screen four thousand abstracts can scan stage headings and land on the right shelf in seconds, whereas decision-locus headings require reading a paragraph of theory before anything is findable, and "Item-by-Item Adjudication" is not a term anyone searches for. The cut also separates direct substitutes: Elicit and Covidence both screen records against user-stated criteria, and they sit two kinds apart, so a reader comparing screening tools sees half the market and may not know it.

The counter is that the separation is the point. Elicit's label stands unless you open the paper; Covidence's does not advance until two named people rule. A reader who treats those as substitutes because both "do screening" is exactly the reader this list is trying to reach. The README's tables carry the distinction in their own columns for that reason.

## What gets excluded, and by which rule

The rules that generate [Deliberately Not Listed](README.md#deliberately-not-listed) — the language-service exclusion, the detection-evasion exclusion, and the activity rule — live in [CONTRIBUTING.md](CONTRIBUTING.md), because they are what a contributor needs before opening a PR.
