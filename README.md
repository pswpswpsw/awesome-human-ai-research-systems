# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, commercial-product-first list of systems where AI does part of the research and a named human is still answerable for it, organized by who decides what enters the research record.

**This list is deliberately narrow, and deliberately small.** Most "awesome AI for science" lists fail in one of two ways: they try to be exhaustive and eventually rot because nobody has the bandwidth to maintain 400+ entries, or they're really just a bibliography of papers — most of which stop mattering the moment the grad student who wrote them graduates.

Every entry here has to pass two tests:

1. **Can a researcher actually use it today?** No waitlists, no trusted-tester programs, no private previews, no "contact your account team."
2. **Is it a research *system*?** Purpose-built for a step of the research workflow — not a general-purpose chatbot, not a discount/access program, not a prompt template.

## How this list is organized

**Sections are cut by decision locus, not by workflow stage.** Where a tool sits in the pipeline says almost nothing about the collaboration: two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what enters the research record, and what standing the researcher keeps in it.

So each section answers two questions — **what does the human decide**, and **what does the AI decide** — and every boundary is settled from the product's own public pages rather than from how it feels to use. The sections run in order of how fine-grained and how attributable the human's recorded ruling is. At the top the researcher signs for work they never watched being made. At the bottom they own every word. Reading down, their standing rises.

Two rules travel with the sections rather than living under any one heading:

- **Where a product has several modules, classify by the module that carries research judgment**, not the one the homepage leads with. This is what settles SciSpace, ScholarsReview, Review-it, and Granted AI.
- **Membership is release-mobile.** A vendor shipping a reviewer log or a checkpoint UI moves an entry. Existing entries need periodic re-testing, not just new PRs.

Things that failed the inclusion tests are listed in [Deliberately Not Listed](#deliberately-not-listed), with reasons.

Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

- [Commissioned Deliverables](#commissioned-deliverables)
- [Proposals Settled at the Bench](#proposals-settled-at-the-bench)
- [Item-by-Item Adjudication](#item-by-item-adjudication)
- [Sourced Findings, Human Conclusions](#sourced-findings-human-conclusions)
- [Critique Returned to the Researcher](#critique-returned-to-the-researcher)
- [Components Without a Locus](#components-without-a-locus)
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

- [ClawsGO Science](https://clawsgo.ai/) — Answers one natural-language question with a multi-hour unattended run returning a compiled LaTeX manuscript, figures, and analyses, alongside a screening log recording the model's own inclusion calls rather than any reviewer's; the researcher's first recorded decision comes only after the draft exists.
- [FutureHouse Platform](https://www.futurehouse.org/tools) — Hosted research agents that take a question and return a finished cited report, deciding without further input which literature to read, what analysis to run, and which conclusions to assert.
- [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* — Free AI research mentor: the researcher picks a target format (paper, NIH/NSF/ERC grant, Heilmeier pitch), and the system fills in the question, gap, hypothesis and methodology, retrieves its own citations, and generates an exportable draft the researcher submits under their own name.
- [Review-it](https://review-it.ai/) — Scores an uploaded manuscript section by section, flags methodology weaknesses and fabricated citations, ranks candidate journals by fit, and returns an automatically corrected document, with no record of which fixes were examined and which were accepted untouched.
- [ScholarsReview](https://scholarsreview.com/) — Takes a topic or an uploaded manuscript and returns a complete sectioned document, with the system choosing what is retrieved, asserted and cited and the human deciding only whether to keep the result.
- [Granted AI](https://grantedai.com/) — Drafts letters of inquiry and proposal sections from an uploaded RFP, exporting a DOCX the applicant reviews as a finished document; on a single click it applies its own review findings to the draft without per-item approval.
- [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) — Self-hosted pipeline that accepts a described idea or only a set of reference papers, then fixes the research direction, algorithm design, implementation, experiments, and manuscript claims on its own, returning a full paper and a code workspace at which point the researcher's judgment first applies.
- [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) — Halts once for the researcher to approve its search plan, then runs unattended through retrieval, extraction, drafting, DOI verification and internal peer review, returning a finished APA 7th `.docx`.

> **Note:** this is the largest section and the widest internal spread. If the list grows, it is the first that should be split.

## Proposals Settled at the Bench

> **The human decides** whether to spend material and instrument time on what was proposed, and records the outcome under their own name.
>
> **The AI decides** which experiment is worth running next, and it is the measured result rather than a reviewer that settles whether the proposal was right.

The only arrangement on this list where the verdict comes from a measurement instead of a reader. One entry, and it is here because the arrangement is real rather than because the shelf needed filling.

**How to test a candidate:** two halves, both required. The documented output must terminate in a physical action — an experiment, a synthesis, an assay, an instrument run — and measured results must feed back for re-optimization. Software-only output never qualifies however autonomous the system looks.

- [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) — Proposes the next experiment from stated objectives, constraints, and prior data using Bayesian explore-exploit search; the researcher decides whether to commit material and instrument time, and an optional link to lab robots and liquid handlers feeds measured results back for automatic re-optimization.

> **Note:** publicly usable closed-loop platforms are still scarce, so PRs are wanted here. Labguru Assistant was tested against this section and does not qualify: it recommends next steps, but no measured result feeds back into a new proposal.

## Item-by-Item Adjudication

> **The human decides** each record, one at a time, under a name the log carries. Nothing the model scored advances until that ruling is entered.
>
> **The AI decides** the order records are seen in and what each one probably is. It never decides inclusion.

The most mature division of labor in research, and the only one that leaves behind something a journal will accept: AI screens and ranks, a named human decides, and the audit trail is publishable.

**How to test a candidate:** two clauses, both required. The decision record must itself be an export — a PRISMA flow diagram, a dual-reviewer conflict log, a screening audit trail that leaves the platform as evidence of how the decisions were reached. And that record must attribute rulings to named reviewers rather than to the model. A platform whose only export is the surviving record set belongs in [Sourced Findings](#sourced-findings-human-conclusions).

- [Covidence](https://www.covidence.org/) — No reference advances without two independent human votes and disagreements route to a conflict-resolution queue, while machine learning only reorders the screening backlog and proposes extraction values a reviewer accepts or rejects individually; the decision flow exports as a PRISMA 2020 diagram and inter-rater reliability report.
- [Rayyan](https://www.rayyan.ai/) — Rulings are entered one record at a time and nothing resolves by majority, so a disagreement stays in the conflict queue until the reviewers align; the optional AI reviewer screens as a team member under the same blinding and conflict handling rather than as an oracle whose label stands by default.
- [Silvi](https://silvi.ai/) — The model suggests labels against criteria the reviewer states up front and each include/exclude ruling is entered by the assigned reviewer, with blinding, conflict resolution, a decision log, and a PRISMA flow chart exported as the record of how the decisions were reached.
- [DistillerSR](https://www.distillersr.com/) — Each reference is included or excluded by an identified reviewer and each ruling is written to an audit trail traceable to that individual, while the AI orders the queue, proposes labels, and links suggested extractions to their source passage; note that a fully automated batch mode is also sold, in which AI screening decisions are checked by a second AI rather than by a person.

## Sourced Findings, Human Conclusions

> **The human decides** what the returned material means for the argument, which of it is worth citing, and every sentence that leaves the desk.
>
> **The AI decides** what to surface, how to rank it, and what label to attach, with every item tied to a source outside the model that a reader can open.

The AI fetches, ranks, labels, and arranges work that other people did, and stops before the conclusion.

**How to test a candidate:** ask what the largest downloadable thing is. Structured working material belongs here — an extraction table, a ranked result set, citation classifications, a notebook record. A document the researcher would submit under their own name belongs in [Commissioned Deliverables](#commissioned-deliverables). Then check provenance: every assertion in the output, including tallies and consensus meters, must resolve to an identifiable source rather than being authored by the system on its own behalf.

- [Elicit](https://elicit.com/) — Screens each record against user-supplied criteria, attaching an include or exclude label with a reason and supporting quote that stands unless a researcher opens the paper and reverses it; extraction cells carry sentence-level citations, but nothing writes into the researcher's own draft.
- [Consensus](https://consensus.app/) — Decides what surfaces from a corpus of roughly 220 million papers and how each study is labelled, ranked, and tallied on a yes/no claim, with every assertion pinned to a paper the reader can open and the supporting quote visible.
- [Undermind](https://www.undermind.ai/) — Runs an agentic, iterative search and returns a ranked table in which each paper carries a match score, a stated reason for inclusion, and an estimate of how much of the relevant work the run found; the model's per-paper labels stand unless the researcher overrides them.
- [Ai2 Asta](https://asta.allen.ai/) — Searches and ranks a Semantic Scholar-derived corpus, returning per-paper relevance tiers with stated criteria and reports whose uncited passages are explicitly flagged as model-generated; everything leaves as an export rather than being written into the researcher's manuscript. Now also where the retired OpenScholar demo redirects.
- [OpenScholar](https://github.com/AkariAsai/OpenScholar) — Self-hosted retrieval-augmented pipeline (Ai2 + UW, [published in *Nature*](https://www.nature.com/articles/s41586-025-10072-4)) that decides what to retrieve, how to rank it, and which passage supports each sentence, leaving what the evidence means to the researcher; ships released weights, reranker, and a 45M-paper index you run yourself.
- [Semantic Scholar](https://www.semanticscholar.org/) — Free, nonprofit search across over 200 million papers with a citation graph; ranks results and attaches TLDRs, passage labels, and cited-passage answers, each scoped to a single paper the reader can open.
- [scite](https://scite.ai/) — Classifies each citation statement it extracts as supporting, contrasting, or mentioning, and audits an uploaded bibliography for retractions and references carrying mostly contrasting citations; what the flagged evidence means is left to the researcher.
- [SciSpace](https://scispace.com/) — Searches a large paper corpus and returns ranked results with extracted data as a filterable, exportable table in which every cell traces back to an openable source.
- [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) — Interactive multi-agent terminal session from Arcadia Science that searches arXiv and bioRxiv and reads local PDFs, then discusses them with the researcher in conversation, producing no document or export at all.
- [Labguru Assistant](https://www.labguru.com/labguru-assistant) — Chatbot embedded in an electronic lab notebook that suggests protocol parameters, flags anomalies, and recommends next steps; its output becomes the scientist's own notebook record, and the vendor documents no review checkpoint, so nothing distinguishes a parameter that was checked from one accepted as it came.

> **Note:** the widest section in the list, and the first that needs splitting. Nobody has yet written a test that separates an index from a synthesizer and survives contact with generated per-paper summaries. Labguru Assistant is the weakest member, since its material comes from the lab's own notebook rather than from the literature.

## Critique Returned to the Researcher

> **The human decides** whether a single word changes, and every change is made by hand. Authorship and accountability sit exactly where they did before the tool was opened.
>
> **The AI decides** what to question, flag, score, or recommend in material the human wrote, and nothing it produces reaches the record as text.

The AI reads your work and tells you what it thinks, and it has no mechanism to act on any of it.

**How to test a candidate:** look for any affordance that puts the AI's output into the human's document — an insert button, an apply-suggestion control, track changes, an exported draft. If one exists the entry belongs elsewhere. Second and independent: the AI comments on material the researcher supplied rather than fetching someone else's.

- [ai-peer-review](https://github.com/poldrack/ai-peer-review) — Takes a manuscript PDF and returns independent reviews from six LLMs, a synthesized meta-review, and a table of which model raised which concern, leaving the manuscript itself untouched so every resulting revision is made by the author's own hand.

> **Note:** this section is thinner than it should be. Several products advertise a review module and would land here on that module alone, but ship an apply-the-fix button beside it, which moves them to [Commissioned Deliverables](#commissioned-deliverables). A genuinely read-only reviewer is rarer than the marketing suggests.

## Components Without a Locus

> **The human decides** everything the axis cares about, because the installer picks the host, the permissions, and the checkpoints. Standing is set by the deployment rather than by the project.
>
> **The AI decides** nothing until someone wires it into a system that runs. The project ships capability, not a decision.

An annex, not a rank. These are real and usable, but they fix no decision locus of their own, so filing them in a section above would mean borrowing one they do not have.

**How to test a candidate:** ask whether the project produces research output by itself. If it ships no runtime, no hosted service, and no entry point that returns a deliverable, it belongs here.

- [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) — A library of 166 installable scientific skills (database access, cheminformatics, omics, literature retrieval) that decides nothing on its own: whichever agent loads it sets the permissions, the checkpoints, and who signs off on what reaches the research record.

---

## Deliberately Not Listed

Recording what was cut, and why, is part of keeping the bar honest:

| System | Why not |
| --- | --- |
| [Paperpal](https://paperpal.com/), [Writefull](https://writefull.com/) | Language services rather than research systems. The AI changes how something is said, not what is claimed, selected, or cited, and the same product would ship to a lawyer or a marketer by swapping the style guide. Paperpal is the closer call: its Research module retrieves and proposes sources, so it is excluded on the balance of what it is for rather than on a clean application of the rule. |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester / Preview only — Gemini Enterprise docs say "access to these agents is restricted; contact your Google account team." Impressive, but not something you can go use. |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | "Register your interest" waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program (free seats, training, credits at selected institutions), not a research system. Now waitlisted for new applicants. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly, but they're not research systems, and listing them adds no signal. |
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
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
