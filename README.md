# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, commercial-product-first list of systems where AI does part of the research and a named human is still answerable for it, organized by who decides what enters the research record.

Twenty-three systems a researcher can use today, in seven kinds. The kinds are not workflow stages. They are cut by **what the human still rules on**, because that is what actually differs between two products that both claim to help with the literature. If you want the tests behind the boundaries, they are in [METHOD.md](METHOD.md).

## At a glance

| Kind | What the human still rules on | |
| --- | --- | --- |
| [Commissioned Deliverables](#commissioned-deliverables) | Keep, revise, or discard the finished artifact. Nothing records which parts you actually examined. | 8 |
| [Sourced Findings, Human Conclusions](#sourced-findings-human-conclusions) | Every sentence you write. The machine's verdict on each paper stands until you open the source and reverse it. | 7 |
| [Item-by-Item Adjudication](#item-by-item-adjudication) | Every record, one at a time, under your name. Nothing advances until you rule. | 4 |
| [Critique Returned to the Researcher](#critique-returned-to-the-researcher) | Whether a single word changes. Nothing the AI writes has a path into your file. | 1 |
| [Retrieval Without a Verdict](#retrieval-without-a-verdict) | Everything about the evidence. The system offers no opinion on any item. | 1 |
| [Proposals Settled at the Bench](#proposals-settled-at-the-bench) | Whether to spend material and instrument time. An instrument, not a reader, settles who was right. | 1 |
| [Components Without a Locus](#components-without-a-locus) | Everything, because you pick the host, the permissions, and the checkpoints. | 1 |

**Reading the tables.** *Decision record* is what leaves the platform as evidence of how the decisions were reached, which is what a journal asks for in a systematic review. *Writes into your draft* is whether AI-authored text can reach your document, and on what terms. Those two columns are where products that look alike stop looking alike: Elicit and Covidence both screen records against criteria you state, and they differ in both.

---

## Commissioned Deliverables

You write the brief, the system hands back something that already looks finished, and your name goes on it.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [ClawsGO Science](https://clawsgo.ai/) | The question, then keep / revise / discard the whole study | Compiled LaTeX manuscript, figures, meta-analysis | Screening log, recording the model's own inclusion calls rather than a reviewer's | It *is* the draft |
| [FutureHouse Platform](https://www.futurehouse.org/tools) | The question, then keep / revise / discard the report | Finished cited report | None documented | It is the draft |
| [Question First](https://www.questionfirst.org/) | The brief and target format, then the filled-in plan | Manuscript, grant, or preregistration draft | None | It is the draft |
| [Review-it](https://review-it.ai/) | Which manuscript and which tier, then the returned document | Section scores, weakness flags, fabricated-citation flags, journal fit, corrected document on the paid tier | None | Yes, in bulk |
| [Granted AI](https://grantedai.com/) | Which RFP and which funder, then the exported file | Letters of inquiry, drafted proposal sections | None | Yes, in bulk: one click applies its own review findings |
| [Labguru Assistant](https://www.labguru.com/labguru-assistant) | Whether the entry is saved to the notebook | Protocol parameters, anomaly flags, recommended next step | None; the vendor documents no review checkpoint | It becomes your notebook record |
| [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) | The idea, or merely a set of reference papers, plus runtime config | Full paper and a code workspace | None | It is the draft |
| [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) | The topic, and one approval of the search plan before the run | APA 7th `.docx` with DOI verification | Only that single plan approval | It is the draft |

## Sourced Findings, Human Conclusions

The AI fetches, labels, and arranges work other people did, and stops before the conclusion. Its verdict on each item is provisionally accepted; dislodging it takes a human act.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [Elicit](https://elicit.com/) | The criteria — and each label only if you open the paper and reverse it | Ranked results, per-record include/exclude labels with reasons and quotes, extraction tables | Overrides are logged for PRISMA reconstruction, but the model's label is the default | No |
| [Consensus](https://consensus.app/) | Whether a tally is actually decisive, and every citing sentence | Ranked papers over ~220M, per-study snapshot fields, yes/no claim tally with quotes | No | No |
| [Undermind](https://www.undermind.ai/) | What the material means and which papers get cited | Ranked table with match scores, stated inclusion reasons, and a coverage estimate for the run | No | No |
| [Ai2 Asta](https://asta.allen.ai/) | Which relevance tier to trust, and every sentence you write | Per-paper relevance tiers with stated criteria; reports whose uncited passages are labelled model-generated | No | No, export only |
| [OpenScholar](https://github.com/AkariAsai/OpenScholar) | What the evidence means | Citation-attributed synthesized answers; released weights, reranker, and a 45M-paper index you run yourself | No | No |
| [scite](https://scite.ai/) | Which references survive the flags | Citation statements classified supporting / contrasting / mentioning; retraction and contested-reference audit of an uploaded bibliography | No | No |
| [SciSpace](https://scispace.com/) | Whether an extracted cell reflects what the paper reports | Filterable extraction table, each cell linked to the source it was read from | No | No |

## Item-by-Item Adjudication

AI screens and ranks, a named human decides, and the audit trail is publishable. The only kind here that leaves an account of who decided what.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [Covidence](https://www.covidence.org/) | Every reference, twice over, plus every conflict and every AI-suggested extraction value | Screened evidence base | PRISMA 2020 diagram and inter-rater reliability export | No |
| [Rayyan](https://www.rayyan.ai/) | Every ruling, one record at a time, under a reviewer identity the trail carries; nothing resolves by majority | Screened set, and the trail itself | Auto-generated PRISMA flow diagram and team audit log | No |
| [Silvi](https://silvi.ai/) | Whether each study enters, how blinded conflicts resolve, whether each extracted value is right | Screened set and extractions | Decision log and PRISMA flow chart | No |
| [DistillerSR](https://www.distillersr.com/) | Each reference and each extracted element, attributed to you by name | Screened evidence base built for regulated work | Audit trail traceable to the individual reviewer, plus PRISMA flow | No |

> DistillerSR also sells a fully automated batch mode in which AI screening decisions are checked by a second AI rather than by a person. The row above describes the human-in-the-loop workflow it is filed on.

## Critique Returned to the Researcher

The AI reads your work and tells you what it thinks, with no way to put any of it into the record without you ruling on that specific item.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [ai-peer-review](https://github.com/poldrack/ai-peer-review) | Whether any concern is valid, and whether a single word changes | Six independent LLM reviews, a synthesized meta-review, a concerns table | Which model raised which concern | No; the manuscript is untouched and every revision is made by hand |

## Retrieval Without a Verdict

The system decides what reaches your attention and in what order, and attaches no judgment to any of it.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [Semantic Scholar](https://www.semanticscholar.org/) | Everything the evidence is used for | Ranked search over 200M+ papers, citation graph, TLDRs and passage labels that describe a paper rather than rate it | No | No |

## Proposals Settled at the Bench

The AI proposes the next experiment, you spend the material and instrument time, and a measurement rather than a reader settles who was right.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) | Whether to commit material and instrument time to the proposed condition | The next experiment to run, from a Bayesian explore-exploit search over your parameter space | The measurement, fed back for re-optimization by hand or through an optional robot link | No |

## Components Without a Locus

Real and usable, but they fix no decision locus of their own: whatever runs them sets one.

| System | The human rules on | You get | Decision record | Writes into your draft |
| --- | --- | --- | --- | --- |
| [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) | Which skills to install, which host runs them, and therefore every checkpoint | 165+ installable scientific skills: database access, cheminformatics, omics, literature retrieval | Whatever the host agent keeps | Whatever the host agent permits |

---

## Deliberately Not Listed

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
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
| Individual papers and preprints | Out of scope; see [Related Awesome Lists](#related-awesome-lists). |

The rules that produce these exclusions are in [CONTRIBUTING.md](CONTRIBUTING.md). If a system here becomes generally available, or ships the module that would change where it sits, open a PR.

## Related Awesome Lists

For the academic-survey side of this space, which changes fast and is better served by lists dedicated to tracking papers:

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) — Closest to HAIRS in spirit; also covers human-in/out-of-the-loop collaboration modes.
- [awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science) — 400+ open-source projects, code only, no commercial products.
- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — EMNLP 2025 survey-companion paper list.

Overlapping less directly: [Awesome-Agent-Scientists](https://github.com/AgenticScience/Awesome-Agent-Scientists), [Awesome-LLM-Agents-Scientific-Discovery](https://github.com/zjlrock777/Awesome-LLM-Agents-Scientific-Discovery) (biomedical), [awesome-deep-research-agent](https://github.com/WuizaKaseiyo/awesome-deep-research-agent) (general-purpose), [awesome-HAI](https://github.com/bwang514/awesome-HAI) (Human-AI *Interaction* papers).

None of them curate live commercial products as the primary focus, and none organize by who decides what enters the research record.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what belongs here and how entries are placed, and [METHOD.md](METHOD.md) for the reasoning behind the seven kinds. One entry per PR; a PR that re-tests an existing entry is as welcome as one adding a tool.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
