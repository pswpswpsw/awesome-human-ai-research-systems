# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, commercial-product-first list of systems where AI does part of the research and a named human is still answerable for it, organized by who decides what enters the research record.

**This list is deliberately narrow, and deliberately small.** Most "awesome AI for science" lists fail in one of two ways: they try to be exhaustive and eventually rot because nobody has the bandwidth to maintain 400+ entries, or they're really just a bibliography of papers — most of which stop mattering the moment the grad student who wrote them graduates.

Every entry here has to pass two tests:

1. **Can a researcher actually use it today?** No waitlists, no trusted-tester programs, no private previews, no "contact your account team."
2. **Is it a research *system*?** Purpose-built for a step of the research workflow — not a general-purpose chatbot, not a discount/access program, not a prompt template.

## How this list is organized

**Sections are cut by decision locus, not by workflow stage.** Where a tool sits in the pipeline says almost nothing about the collaboration: two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what enters the research record, and what standing the researcher keeps in it.

So each section answers two questions — **what does the human decide**, and **what does the AI decide** — and every boundary is settled from the product's own public pages rather than from how it feels to use.

**Four of the seven sections form a ranked sequence**, measuring how much of the AI's judgment reaches the research record without a human ruling on that specific item. In [Commissioned Deliverables](#commissioned-deliverables) all of it does: the output *is* the record and your only lever is to keep or discard the whole thing. In [Sourced Findings](#sourced-findings-human-conclusions) the machine attaches a verdict to each item and that verdict stands until you open the source and reverse it. In [Item-by-Item Adjudication](#item-by-item-adjudication) none of it advances until a named person enters a ruling that the log carries. In [Critique Returned to the Researcher](#critique-returned-to-the-researcher) there is no path into the record at all, even with a ruling. Read in that order, the AI's default authority falls and the researcher's standing rises.

**Three sections sit outside that scale, each for a stated reason.** [Retrieval Without a Verdict](#retrieval-without-a-verdict) holds systems that attach no judgment to any item, so there is nothing to rank; what they decide is what you ever see. [Proposals Settled at the Bench](#proposals-settled-at-the-bench) produces a measurement rather than an assertion, so no model-authored judgment enters the record to be scaled. [Components Without a Locus](#components-without-a-locus) fixes no locus at all, because the host deployment sets one.

Three rules travel with the sections rather than living under any one heading:

- **Classify by the module that carries research judgment**, not the one the homepage leads with. This picks *which part of a product you evaluate*. It settles SciSpace, ScholarsReview, and Review-it.
- **Then match the three off-scale sections first, and only then walk the ranked four in order, stopping at the first match.** This picks *which section that module lands in*. The off-scale tests are narrow and self-evidencing — a physical instrument run, no verdict on any item, no runtime at all — so checking them first stops a general test from catching something it was never written for. Within the ranked four the earlier section wins, because it describes the weaker human position and the list should not flatter a tool.
- **Membership is release-mobile.** A vendor shipping a reviewer log or a checkpoint UI moves an entry. Existing entries need periodic re-testing, not just new PRs.

**An honest limitation.** [Item-by-Item Adjudication](#item-by-item-adjudication) holds exactly the membership that "systematic review" held under the old stage-based cut. That is not the axis failing to bite; it is a finding with a documented cause. PRISMA and the evidence standards journals enforce require reviewer-attributed audit trails, so in that one corner of the market every serious product converged on the same decision locus, and stage and locus coincide. Elsewhere the axis cuts across the old stages: grant drafting now sits beside unattended manuscript agents, peer-review tools are split by whether they can write into your file, and the old literature section is split in two by whether the system attaches a verdict to what it returns.

Things that failed the inclusion tests are listed in [Deliberately Not Listed](#deliberately-not-listed), with reasons.

Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

**The ranked sequence:**

- [Commissioned Deliverables](#commissioned-deliverables)
- [Sourced Findings, Human Conclusions](#sourced-findings-human-conclusions)
- [Item-by-Item Adjudication](#item-by-item-adjudication)
- [Critique Returned to the Researcher](#critique-returned-to-the-researcher)

**Off the scale:**

- [Retrieval Without a Verdict](#retrieval-without-a-verdict)
- [Proposals Settled at the Bench](#proposals-settled-at-the-bench)
- [Components Without a Locus](#components-without-a-locus)

**Everything else:**

- [Deliberately Not Listed](#deliberately-not-listed)
- [Related Awesome Lists](#related-awesome-lists)
- [Contributing](#contributing)
- [License](#license)

---

## Commissioned Deliverables

> **The human decides** the brief, and afterwards whether the finished artifact is kept, revised, or discarded. Nothing external records which parts were judged and which were waved through.
>
> **The AI decides** everything in between: what to retrieve, what to try, what to assert, and how the deliverable is structured.

You write the brief, the system hands back something that already looks finished, and your name goes on it. The distinguishing feature is not autonomy or run time, it is the missing audit trail: nothing survives showing which parts you actually examined.

**How to test a candidate:** trace the shortest input-to-output path the vendor or repo documents. It belongs here when a researcher supplies a question or source materials, the next documented human action is reviewing a complete deliverable that would be submitted under the researcher's own name, and no attributable per-unit decision record is produced. A documented flow that halts for rulings recorded against an exportable log belongs in [Item-by-Item Adjudication](#item-by-item-adjudication) instead.

- [ClawsGO Science](https://clawsgo.ai/) — Answers one natural-language question with a multi-hour unattended run returning a compiled LaTeX manuscript, figures, and analyses, alongside a screening log recording the model's own inclusion calls rather than any reviewer's.
- [FutureHouse Platform](https://www.futurehouse.org/tools) — Hosted research agents that take a question and return a finished cited report, deciding without further input which literature to read, what analysis to run, and which conclusions to assert.
- [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* — Auto-fills the question, gap, hypothesis and methodology, retrieves its own citations, and exports a manuscript, grant, or preregistration draft submitted under the researcher's name; a separate per-item proposal path exists, but the auto-fill route is the one that produces a document with no record of what was examined.
- [Review-it](https://review-it.ai/) — Scores an uploaded manuscript section by section, flags methodology weaknesses and fabricated citations, ranks candidate journals by fit, and on a paid tier returns an automatically corrected document rather than a list of suggestions to weigh individually.
- [ScholarsReview](https://scholarsreview.com/) — Takes an uploaded manuscript and returns a pre-submission review report, journal recommendations, and a "fix identified weaknesses" path that rewrites flagged passages; the vendor does not document whether those rewrites apply in bulk or one at a time, so the tie goes to the earlier section by rule.
- [Granted AI](https://grantedai.com/) — Drafts letters of inquiry and proposal sections from an uploaded RFP, exporting a DOCX the applicant reviews as a finished document; on a single click it applies its own review findings to the draft without per-item approval.
- [Labguru Assistant](https://www.labguru.com/labguru-assistant) — Chatbot inside an electronic lab notebook that authors protocol parameters, flags anomalies, and names the next step without attaching an openable source to any of it; its output becomes the scientist's own notebook record, and the vendor documents no review checkpoint.
- [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) — Self-hosted pipeline that accepts a described idea or only a set of reference papers, then fixes the research direction, algorithm design, implementation, experiments, and manuscript claims on its own, returning a full paper and a code workspace at which point the researcher's judgment first applies.
- [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) — Halts once for the researcher to approve its search plan, then runs unattended through retrieval, extraction, drafting, DOI verification and internal peer review, returning a finished APA 7th `.docx`.

> **Note:** the largest section and the widest internal spread, running from a grant-letter drafter to an unattended manuscript agent. A finer split is available if it grows: whether the human's single ruling falls on a brief they wrote or on material they already owned, which separates ClawsGO and FutureHouse from Review-it and ScholarsReview.
>
> **Also note:** ScholarsReview separately sells an "AI humanizer" advertising a "100% human score" against Turnitin and GPTZero. Detection evasion is named as excluded in [CONTRIBUTING.md](CONTRIBUTING.md), and the entry survives only under the classify-by-the-judgment-carrying-module rule. It is a live question whether that rule should be allowed to rescue it.

## Sourced Findings, Human Conclusions

> **The human decides** what the returned material means for the argument, which of it is worth citing, and every sentence that leaves the desk.
>
> **The AI decides** what to surface, how to rank it, and what verdict to attach to each item — and that verdict stands until the researcher opens the source and overrides it.

The AI fetches, labels, and arranges work that other people did, and stops before the conclusion. What puts a product here rather than one section down is the default: the machine's judgment is provisionally accepted, and it takes a human act to dislodge it.

**How to test a candidate:** three clauses. First, the system attaches a judgment to individual items — a screening label, a relevance tier, a support/contrast classification, an extracted value. Second, that judgment is usable the moment it is produced: nothing halts for an entered ruling before the researcher can act on the output. A platform where nothing advances until a named person rules belongs in [Item-by-Item Adjudication](#item-by-item-adjudication); a system that attaches no judgment at all belongs in [Retrieval Without a Verdict](#retrieval-without-a-verdict). Third, provenance: every assertion must resolve to an identifiable source a reader can open, or be explicitly marked in the output as model-authored rather than sourced. And the largest thing leaving the session must be structured working material or less; a document submitted under the researcher's own name belongs in [Commissioned Deliverables](#commissioned-deliverables).

- [Elicit](https://elicit.com/) — Screens each record against user-supplied criteria, attaching an include or exclude label with a reason and supporting quote that stands unless a researcher opens the paper and reverses it; extraction cells carry sentence-level citations, but nothing writes into the researcher's own draft.
- [Consensus](https://consensus.app/) — Decides what surfaces from a corpus of roughly 220 million papers and how each study is labelled, ranked, and tallied on a yes/no claim, with every assertion pinned to a paper the reader can open and the supporting quote visible.
- [Undermind](https://www.undermind.ai/) — Runs an agentic, iterative search and returns a ranked table in which each paper carries a match score, a stated reason for inclusion, and an estimate of how much of the relevant work the run found; the model's per-paper labels stand unless the researcher overrides them.
- [Ai2 Asta](https://asta.allen.ai/) — Returns per-paper relevance tiers with stated criteria over a Semantic Scholar-derived corpus, and reports in which every uncited passage is explicitly labelled model-generated rather than presented as sourced, with everything leaving as an export rather than writing into the researcher's manuscript.
- [OpenScholar](https://github.com/AkariAsai/OpenScholar) — Self-hosted retrieval-augmented pipeline (Ai2 + UW, [published in *Nature*](https://www.nature.com/articles/s41586-025-10072-4)) that decides what to retrieve, how to rank it, and which passage supports each sentence, leaving what the evidence means to the researcher; ships released weights, reranker, and a 45M-paper index you run yourself, with the hosted demo now redirecting to Asta.
- [scite](https://scite.ai/) — Classifies each citation statement it extracts as supporting, contrasting, or mentioning, and audits an uploaded bibliography for retractions and references carrying mostly contrasting citations; what the flagged evidence means is left to the researcher.
- [SciSpace](https://scispace.com/) — Searches a large paper corpus and returns extracted data as a filterable table in which each cell is the model's reading of what a paper reports, standing until the researcher opens the source it links to and checks it.

## Item-by-Item Adjudication

> **The human decides** each record, one at a time, under a name the log carries. Nothing the model scored advances until that ruling is entered.
>
> **The AI decides** the order records are seen in and what each one probably is. It never decides inclusion.

The most mature division of labor in research, and the only one on this list that leaves behind an auditable account of who decided what. Nothing here is default-accept: the machine's label is a suggestion until a named person rules on it.

**How to test a candidate:** two clauses, both required. The decision record must itself be an export — a PRISMA flow diagram, a dual-reviewer conflict log, a screening audit trail that leaves the platform as evidence of how the decisions were reached. And that record must attribute rulings to named reviewers rather than to the model. A platform whose labels are usable before anyone rules on them belongs one section up, in [Sourced Findings](#sourced-findings-human-conclusions).

- [Covidence](https://www.covidence.org/) — No reference advances without two independent human votes and disagreements route to a conflict-resolution queue, while machine learning only reorders the screening backlog and proposes extraction values a reviewer accepts or rejects individually; the decision flow exports as a PRISMA 2020 diagram and inter-rater reliability report.
- [Rayyan](https://www.rayyan.ai/) — Rulings are entered one record at a time and nothing resolves by majority, so a disagreement stays in the conflict queue until the reviewers align; what leaves the platform is the decision trail itself, an auto-generated PRISMA flow diagram and team audit log, rather than only the surviving reference set.
- [Silvi](https://silvi.ai/) — The model suggests labels against criteria the reviewer states up front and each include/exclude ruling is entered by the assigned reviewer, with blinding, conflict resolution, a decision log, and a PRISMA flow chart exported as the record of how the decisions were reached.
- [DistillerSR](https://www.distillersr.com/) — Filed on its human-in-the-loop workflow, where an identified reviewer enters each ruling and the audit trail records who decided and when; the vendor also sells a fully automated batch mode in which AI screening decisions are checked by a second AI rather than by a person, which on its own would fall a section above.

## Critique Returned to the Researcher

> **The human decides** whether a single word changes, and every change is made by hand or accepted one item at a time. Authorship and accountability sit exactly where they did before the tool was opened.
>
> **The AI decides** what to question, flag, score, or recommend in material the human wrote, and none of it reaches the record unexamined.

The AI reads your work and tells you what it thinks, and it has no way to put any of it into the record without you ruling on that specific item.

**How to test a candidate:** no mechanism may put AI-authored text into the researcher's document or dataset without a per-item human action. A bulk apply-all-fixes control disqualifies; a tracked change the author accepts or rejects one at a time does not, because that leaves an attributable record of exactly what was taken. Second and independent: the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.

- [ai-peer-review](https://github.com/poldrack/ai-peer-review) — Takes a manuscript PDF and returns independent reviews from six LLMs, a synthesized meta-review, and a table of which model raised which concern, leaving the manuscript itself untouched so every resulting revision is made by the author's own hand.

> **Note:** thin, and the thinness is the finding. Several products advertise a review module that would land here on that module alone, then ship a bulk apply-the-fixes control beside it, which moves them to [Commissioned Deliverables](#commissioned-deliverables). A reviewer that genuinely cannot write is rarer than the marketing suggests.

---

## Retrieval Without a Verdict

> **The human decides** everything about the evidence, because the system offers no opinion on any individual item. Judgment is untouched by anything except what never surfaced.
>
> **The AI decides** what reaches your attention and in what order, and attaches no verdict to any of it.

Off the ranked scale, because there is no model-authored judgment entering the record to measure. That does not make these neutral. Deciding what a researcher never sees is real influence, and it is the one kind that leaves nothing to override, which is why it sits in its own section rather than at the bottom of the scale.

**How to test a candidate:** the system returns retrieved items to the researcher and attaches no judgment to any of them. Ranking and relevance ordering do not count as a verdict; a screening label, a support/contrast classification, an extracted value, or a per-item score does, and moves the entry to [Sourced Findings](#sourced-findings-human-conclusions). Generated per-paper summaries are the hard case: a summary describing what a paper says stays here, while one rating the paper against the researcher's criteria, or asserting a value read out of it, does not.

- [Semantic Scholar](https://www.semanticscholar.org/) — Free, nonprofit search across over 200 million papers with a citation graph; ranks results and attaches TLDRs, passage labels, and cited-passage answers, each describing a single paper the reader can open rather than rating it.
- [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) — Interactive multi-agent terminal session from Arcadia Science that searches arXiv and bioRxiv and reads local PDFs, then discusses them with the researcher in conversation, producing no document or export at all.

> **Note:** the thinnest section, and deliberately so. Retrieval that offers no opinion is getting rarer: the commercial pressure runs toward attaching a score, a label, or an extracted value to everything returned, which moves a product one section up. SciSpace sat here in an earlier draft and was moved for exactly that reason.
>
> **Re-test flag:** `agent-literature-review` was last pushed April 2025 and depends on external APIs, so it has no frozen release to fall back on. Under the current activity rule it survives only if it still runs; someone should confirm that before the next release of this list.

## Proposals Settled at the Bench

> **The human decides** whether to spend material and instrument time on what was proposed, and records the outcome under their own name.
>
> **The AI decides** which experiment is worth running next, and it is the measured result rather than a reviewer that settles whether the proposal was right.

Off the ranked scale, because what enters the record is a measurement rather than a model-authored assertion. The only arrangement on this list where the verdict comes from an instrument instead of a reader. One entry, and it is here because the arrangement is real rather than because the shelf needed filling.

**How to test a candidate:** two halves, both required. The documented output must terminate in a physical action — an experiment, a synthesis, an assay, an instrument run — and measured results must feed back for re-optimization. Software-only output never qualifies however autonomous the system looks.

- [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) — Proposes the next experiment from stated objectives, constraints, and prior data using Bayesian explore-exploit search, then re-optimizes on the measured results the researcher returns to it, whether entered by hand or fed back automatically through an optional link to lab robots and liquid handlers.

> **Note:** publicly usable closed-loop platforms are still scarce, so PRs are wanted here. Labguru Assistant was tested against this section and does not qualify: it recommends next steps, but no measured result feeds back into a new proposal.

## Components Without a Locus

> **The human decides** everything the axis cares about, because the installer picks the host, the permissions, and the checkpoints. Standing is set by the deployment rather than by the project.
>
> **The AI decides** nothing until someone wires it into a system that runs. The project ships capability, not a decision.

An annex, not a rank. These are real and usable, but they fix no decision locus of their own, so filing them in a section above would mean borrowing one they do not have.

**How to test a candidate:** ask whether the project produces research output by itself. If it ships no runtime, no hosted service, and no entry point that returns a deliverable, it belongs here.

- [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) — A library of 165+ installable scientific skills (database access, cheminformatics, omics, literature retrieval) that decides nothing on its own: whichever agent loads it sets the permissions, the checkpoints, and who signs off on what reaches the research record.

---

## Deliberately Not Listed

Recording what was cut, and why, is part of keeping the bar honest:

| System | Why not |
| --- | --- |
| [Paperpal](https://paperpal.com/), [Writefull](https://writefull.com/) | Language services rather than research systems: the centre of gravity is changing how something is said, not what is claimed, selected, or cited, and the same product would ship to a lawyer or a marketer by swapping the style guide. Paperpal is the closer call, since it also retrieves and proposes sources, but a citation finder bolted onto an editor does not make the editor a research system. |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester / Preview only — Gemini Enterprise docs say "access to these agents is restricted; contact your Google account team." Impressive, but not something you can go use. |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | "Register your interest" waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program (free seats, training, credits at selected institutions), not a research system. Now waitlisted for new applicants. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly, but they're not research systems, and listing them adds no signal. |
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
| AI humanizers and detection-evasion tools | Sold as academic aids, but the advertised job is defeating a check on authorship, which is the opposite of the accountability this list is organized around. |
| Individual papers and preprints | Out of scope — see [Related Awesome Lists](#related-awesome-lists). |

If a system here becomes generally available, or ships the module that would change where it sits, open a PR — that's exactly the kind of contribution this list wants.

## Related Awesome Lists

For the academic-survey side of this space — which changes fast and is better served by lists dedicated to tracking papers — see:

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) — Closest existing list to HAIRS in spirit; survey-companion list that also covers human-in/out-of-the-loop collaboration modes.
- [awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science) — 400+ open-source projects for AI-automated scientific research (code only, no commercial products).
- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — EMNLP 2025 survey-companion paper list.

Others in this space that overlap less directly: [Awesome-Agent-Scientists](https://github.com/AgenticScience/Awesome-Agent-Scientists), [Awesome-LLM-Agents-Scientific-Discovery](https://github.com/zjlrock777/Awesome-LLM-Agents-Scientific-Discovery) (biomedical-specific), [awesome-deep-research-agent](https://github.com/WuizaKaseiyo/awesome-deep-research-agent) (general-purpose, not research-specific), [awesome-HAI](https://github.com/bwang514/awesome-HAI) (Human-AI *Interaction*/HCI papers).

**Why a separate list instead of contributing to one of these?** None of the above curate live, usable commercial products as the primary focus, and none organize by who decides what enters the research record. This list stays commercial-first and intentionally small; if it starts sprawling into a 400-entry paper bibliography, that's a bug, not a feature — open an issue.

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first. Short version: it must be usable today, purpose-built for research, and filed by what the human decides rather than by workflow stage; one entry per PR; no papers (link a survey list instead); and if a section gets bloated, we prune rather than let it grow forever.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
