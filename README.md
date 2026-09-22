# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Systems where AI does part of the research and a named human is still answerable for it.

**Human-AI research systems (HAIRS)** take over part of the judgment a researcher would otherwise exercise: which papers are relevant, what a study reports, whether a claim holds up, what to run next, what the manuscript should assert. The result comes back under the researcher's name.

The judgment moves. The accountability does not. A screening label the model got wrong is still your screening label, and a citation it invented is still your citation. That asymmetry is what separates a research system from a general-purpose assistant, and it is why the useful question about any of them is not what it can do, but what it leaves you answerable for.

These are systems for doing research, not for doing science. A model that predicts a protein structure or a material property substitutes for a measurement, not for a judgment about how the work should go, and is out of scope here.

This list is cut on that question. Twenty-one systems a researcher can use today, in seven categories: **delegation, triage, adjudication, critique, retrieval, bench, components**. The tests behind the boundaries are in [METHOD.md](METHOD.md).

## At a glance

| Category | What the human still rules on | Entries |
| --- | --- | --- |
| [Delegation](#delegation) | Keep, revise, or discard the finished artifact. Nothing records which parts you actually examined. | 7 |
| [Triage](#triage) | Every sentence you write. The machine's verdict on each paper stands until you open the source and reverse it. | 5 |
| [Adjudication](#adjudication) | Every record, one at a time, under your name. Nothing advances until you rule. | 5 |
| [Critique](#critique) | Whether a single word changes. Nothing the AI writes has a path into your file. | 1 |
| [Retrieval](#retrieval) | Everything about the evidence. The system offers no opinion on any item. | 1 |
| [Bench](#bench) | Whether to spend material and instrument time. An instrument, not a reader, settles who was right. | 1 |
| [Components](#components) | Everything, because you pick the host, the permissions, and the checkpoints. | 1 |

These are not a scale but the occupied cells of a small grid, set out in [METHOD.md](METHOD.md#the-facets). What varies across the first four is what the AI attaches a verdict to and what that verdict is worth before you rule on it. Retrieval is where no verdict is attached at all, Bench where an instrument rather than a reader settles it, and Components where the software ships no runtime and the host decides everything. The sections are ordered so your standing broadly rises as you read down, which is a reading order rather than a measurement.

### If you came here with a task

The categories are not stages, so a task usually spans more than one. That is the point: the tools you would have compared side by side often differ in what they leave you responsible for.

| If your task is | Look in | What separates the options |
| --- | --- | --- |
| Finding papers on a question | [Retrieval](#retrieval), [Triage](#triage) | Whether the system attaches a verdict to each paper or just hands it to you |
| Screening records for a systematic review | [Triage](#triage), [Adjudication](#adjudication) | Whether a label stands by default or waits for your named ruling. Only the second leaves a trail a journal will accept |
| Extracting data from papers | [Triage](#triage), [Adjudication](#adjudication) | The same split: Undermind's per-paper labels stand until you check them, Covidence's extraction values need accepting one at a time |
| Getting a draft written | [Delegation](#delegation) | Six of the seven entries there return one. What varies is what you supply: a question, an RFP, or only a set of reference papers |
| Getting a manuscript critiqued | [Delegation](#delegation), [Critique](#critique) | Whether the tool can apply its own fixes in bulk, or cannot write at all |
| Deciding what to run next at the bench | [Bench](#bench), [Delegation](#delegation) | Whether a measurement feeds back into the next proposal, or the advice just lands in your notebook |
| Building your own system on top | [Components](#components), and the `self-host` rows throughout | Whether it ships a runtime, or expects your agent to supply one |

*Decision record* below means what leaves the platform as evidence of how the decisions were reached, and who it attributes them to. *Access*: `hosted` is a service you log into, `self-host` is code you run, `install into a host` is a library something else runs, `open weights` means the model is downloadable too, and `free` marks a service documented as free rather than a tier that may change.

---

## Delegation

You write the brief, the system hands back something that already looks finished, and your name goes on it.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [ClawsGO Science](https://clawsgo.ai/) | The question, then keep / revise / discard the whole study | Compiled LaTeX manuscript, figures, analyses | Screening log, recording the model's own inclusion calls rather than a reviewer's | It *is* the draft | hosted |
| [Edison Platform](https://platform.edisonscientific.com/) *(the commercial spinout of FutureHouse)* | The question, then keep / revise / discard the report | Cited report from Kosmos or one of four narrower agents, each conclusion traceable to the code or literature passage that produced it | No | It is the draft | hosted |
| [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* | The brief and target format, then the filled-in plan | Manuscript, grant, or preregistration draft, with citations it retrieved itself | No | It is the draft | hosted, free |
| [Review-it](https://review-it.ai/) | Which manuscript to upload, then the returned document | Section scores, weakness flags, fabricated-citation flags, journal fit, and on an upgrade tier a corrected document | No | Yes, on the upgrade tier; whether the fixes apply in bulk or one at a time is not documented publicly, and the placement rests on that | hosted |
| [Granted AI](https://grantedai.com/) | Which RFP to pursue, then the exported file | Letters of inquiry, drafted proposal sections | No | Yes, in bulk: one click applies its own review findings | hosted |
| [Labguru Assistant](https://www.labguru.com/labguru-assistant) | No gating checkpoint; the help centre advises reviewing the response, but nothing waits on it | Protocol parameters, anomaly flags, recommended next step, with links to related Labguru items but no citation attached to an assertion | No | Its output is saved into your notebook | hosted |
| [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) | The idea, or merely a set of reference papers | Full paper and a code workspace | No | It is the draft | self-host |

> **Question First** ships two paths with different loci: a separate per-item proposal path, and the auto-fill path above. It is filed on auto-fill, which is the path that produces a document with no record of what was examined.

## Triage

The AI fetches, labels, and arranges work other people did, and stops before the conclusion. Its verdict on each item is provisionally accepted; dislodging it takes a human act.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Consensus](https://consensus.app/) | Whether a tally is actually decisive, and every citing sentence | Ranked papers over ~220M, per-study snapshot fields, yes/no claim tally with quotes | No | No | hosted |
| [Undermind](https://www.undermind.ai/) | What the material means and which papers get cited | Ranked table with match scores, stated inclusion reasons, and a coverage estimate for the run | No | No | hosted |
| [Ai2 Asta](https://asta.allen.ai/) | Which relevance tier to trust, and every sentence you write | Per-paper relevance tiers with stated criteria; reports whose uncited passages are labelled model-generated | No | No, export only | hosted |
| [OpenScholar](https://github.com/AkariAsai/OpenScholar) | What the evidence means | Citation-attributed synthesized answers; released weights, reranker, and a 45M-paper index. [Published in *Nature*](https://www.nature.com/articles/s41586-025-10072-4); the hosted demo now redirects to Asta | No | No | self-host, open weights |
| [scite](https://scite.ai/) | Which references survive the flags | Citation statements classified supporting / contrasting / mentioning; retraction and contested-reference audit of an uploaded bibliography | No | No | hosted |

> **Ai2 Asta** also ships a report path whose output is prose rather than structured working material. It is filed on the retrieval and ranking path, which is the one carrying the per-item verdict; on the report path alone it would sit closer to Delegation.

## Adjudication

AI screens and ranks, a named human decides, and the audit trail is publishable. The only category here that leaves an account of who decided what.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Elicit](https://elicit.com/) | Every conflict between two independent reviewers; on the single-reviewer path, only the labels you open a paper to reverse | Ranked results, per-record include/exclude labels with reasons and quotes, extraction tables with sentence-level citations | Audit trail logging every decision, override and adjudication for PRISMA reconstruction, plus agreement statistics and an exported PRISMA flow diagram | No | hosted |
| [Covidence](https://www.covidence.org/) | Every reference, twice over, plus every conflict and every AI-suggested extraction value | Screened evidence base and the extractions | PRISMA 2020 diagram and inter-rater reliability export, attributed to each reviewer | No | hosted |
| [Rayyan](https://www.rayyan.ai/) | Every ruling, one record at a time, under a reviewer identity the trail carries; nothing resolves by majority | Screened set, and the trail itself | Auto-generated PRISMA flow diagram and team audit log | No | hosted |
| [Silvi](https://silvi.ai/) | How a conflict between two blinded reviewers resolves; individual study entry can be committed in bulk from the AI's suggestions | Screened set, with the model's labels suggested against criteria the reviewer states up front | Decision log and PRISMA flow chart | No | hosted |
| [DistillerSR](https://www.distillersr.com/) | Each reference and each extracted element, attributed to you by name | Screened evidence base built for regulated work | Audit trail traceable to the individual reviewer, plus PRISMA flow | No | hosted |

> **Elicit** ships two paths with different loci. Dual review, where two reviewers rule independently and conflicts surface for resolution, is an Enterprise feature; the PRISMA export ships from the Pro tier. On the default single-reviewer path the model's label stands until you reverse it, which is [Triage](#triage) behaviour. It is filed here on the dual-review path, and a single-reviewer user is holding something closer to Triage.
>
> **DistillerSR** also sells a fully automated batch mode in which AI screening decisions are checked by a second AI rather than by a person; that mode on its own would fall a category above. The row describes the human-in-the-loop workflow it is filed on.

## Critique

The AI reads your work and tells you what it thinks, with no way to put any of it into the record without you ruling on that specific item.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [ai-peer-review](https://github.com/poldrack/ai-peer-review) | Whether any concern is valid, and whether a single word changes | Six independent LLM reviews, a synthesized meta-review, and a table of which model raised which concern | No | No; the manuscript is untouched and every revision is made by hand | self-host |

## Retrieval

The system decides what reaches your attention and in what order, and attaches no judgment to any of it.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Semantic Scholar](https://www.semanticscholar.org/) | Everything the evidence is used for | Ranked search over 200M+ papers, citation graph, TLDRs, passage labels and cited-passage answers that describe a paper rather than rate it | No | No | hosted, free |

## Bench

The AI proposes the next experiment, you spend the material and instrument time, and a measurement rather than a reader settles who was right.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) | Whether to commit material and instrument time to the proposed condition | The next experiment to run, from a Bayesian explore-exploit search over your parameter space, re-optimized on results you return by hand or through an optional robot link | No; the instrument is the record | No | hosted |

## Components

Real and usable, but they fix no decision locus of their own: whatever runs them sets one.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) | Which skills to install, which host runs them, and therefore every checkpoint | 165+ installable scientific skills: database access, cheminformatics, omics, literature search | Whatever the host agent keeps | Whatever the host agent permits | install into a host |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what belongs here and how entries are placed, and [METHOD.md](METHOD.md) for the reasoning behind the seven categories, including [what was considered and cut](METHOD.md#what-the-tests-excluded). One entry per PR; a PR that re-tests an existing entry is as welcome as one adding a tool.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
