# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Systems where AI does part of the research and a named human is still answerable for it.

**Human-AI research systems (HAIRS)** take over part of the judgment a researcher would otherwise exercise: which papers are relevant, what a study reports, whether a claim holds up, what to run next, what the manuscript should assert. The result comes back under the researcher's name.

The judgment moves. The accountability does not. A screening label the model got wrong is still your screening label, and a citation it invented is still your citation. That asymmetry is what separates a research system from a general-purpose assistant, and it is why the useful question about any of them is not what it can do, but what it leaves you answerable for.

These are systems for doing research, not for doing science. A model that predicts a protein structure or a material property substitutes for a measurement, not for a judgment about how the work should go, and is out of scope here.

This list is cut on that question. Twenty-one systems a researcher can use today, in five categories: **delegation, standing verdicts, human approval, critique, bench**. The tests behind the boundaries are in [METHOD.md](METHOD.md).

## At a glance

| Category | What the human still rules on | Entries |
| --- | --- | --- |
| [Delegation](#delegation) | Keep, revise, or discard the finished artifact. Nothing records which parts you actually examined. | 7 |
| [Standing Verdicts](#standing-verdicts) | Every sentence you write. The machine's verdict on each paper stands until you open the source and reverse it. | 6 |
| [Human Approval](#human-approval) | Every record, one at a time, under your name. Nothing advances until you rule. | 5 |
| [Critique](#critique) | Whether a single word changes. Nothing the AI writes has a path into your file. | 2 |
| [Bench](#bench) | Whether to spend material and instrument time. A run, not a reader, settles who was right. | 1 |

These are not a scale but the occupied cells of a small grid, set out in [METHOD.md](METHOD.md#the-facets). What varies across the first four is what the AI attaches a verdict to and what that verdict is worth before you rule on it: everything, by default, on your named ruling, or never. Bench sits outside that, because there a run rather than a reader settles who was right. The sections are ordered so your standing broadly rises as you read down, which is a reading order rather than a measurement.

### How much of the work it touches

The categories say what you still rule on. They say nothing about how much of the research a system reaches, and that varies far more than the category names suggest: a tool that helps you sharpen a research question and an agent that returns a finished manuscript sit in the same category, because you rule on both the same way, once, at the end.

| Span | What it covers | Systems |
| --- | --- | --- |
| **End to end** | a question goes in, something you could submit comes out | ClawsGO Science, Edison Platform, AI-Researcher |
| **One workflow** | a complete sub-workflow: screening through PRISMA, a literature sweep, an optimization loop | Elicit, Covidence, Rayyan, Silvi, DistillerSR, Ai2 Asta, Atinary SDLabs |
| **One step** | a single move inside the work | Question First, Review-it, Granted AI, Labguru Assistant, Consensus, Undermind, OpenScholar, scite, Semantic Scholar, SciScore, Reviewer3 |

Span is independent of category, which is why it gets its own table rather than a column. All three end-to-end agents sit in Delegation, alongside four one-step tools; the systematic-review platforms each span a whole workflow and are spread across two categories. Read the two tables together: span tells you how much a tool is trying to do, the category tells you what it leaves you answerable for, and a small tool can take more from you than a large one.

### If you came here with a task

The categories are not stages, so a task usually spans more than one. That is the point: the tools you would have compared side by side often differ in what they leave you responsible for.

| If your task is | Look in | What separates the options |
| --- | --- | --- |
| Finding papers on a question | [Standing Verdicts](#standing-verdicts) | Every system here attaches a verdict to each paper it returns. A search engine that attaches none is not in this list at all |
| Screening records for a systematic review | [Standing Verdicts](#standing-verdicts), [Human Approval](#human-approval) | Whether a label stands by default or waits for your named ruling. Only the second produces the reviewer-attributed trail that evidence-synthesis reporting expects you to be able to describe |
| Extracting data from papers | [Standing Verdicts](#standing-verdicts), [Human Approval](#human-approval) | The same split: Undermind's per-paper labels stand until you check them, Covidence's extraction values need accepting one at a time |
| Getting a draft written | [Delegation](#delegation) | Six of the seven entries there return one. What varies is what you supply: a question, an RFP, or only a set of reference papers |
| Getting a manuscript checked before submission | [Critique](#critique), [Delegation](#delegation) | Whether the tool can put text into your file at all. Critique cannot; Delegation's reviewers can |
| Deciding what to run next at the bench | [Bench](#bench), [Delegation](#delegation) | Whether a measured result feeds back into the next proposal, or the advice just lands in your notebook |

*Decision record* below means what leaves the platform as evidence of how the decisions were reached, and who it attributes them to. *Access*: `hosted` is a service you log into, `self-host` is code you run, `install into a host` is a library something else runs, `open weights` means the model is downloadable too, and `free` marks a service documented as free rather than a tier that may change.

**†** marks a claim the vendor publishes but does not display: the wording is in the page source, a schema.org block, or a JavaScript bundle, and a reader checking it in a browser will not find it without developer tools. The mark is about where the evidence is. It says the vendor published that wording, which is not the same as the feature being live for you: a string in a bundle proves distribution, not availability. It is also information in its own right, since a product whose load-bearing facts live only in compiled code has told you something about itself.

---

## Delegation

You write the brief, the system hands back something that already looks finished, and your name goes on it.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [ClawsGO Science](https://clawsgo.ai/) | The question, then keep / revise / discard the whole study | Compiled LaTeX manuscript, figures, analyses | Screening log, recording the model's own inclusion calls rather than a reviewer's; documented only in an illustrative demo run on the homepage | It *is* the draft | hosted |
| [Edison Platform](https://platform.edisonscientific.com/) *(the commercial spinout of FutureHouse)* | The question, then keep / revise / discard the report | Cited report from Kosmos or one of four narrower agents, each conclusion traceable to the code or literature passage that produced it | No | It is the draft | hosted |
| [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* | The brief and target format, then the filled-in plan | Manuscript, grant, or preregistration draft, with citations it retrieved itself | No | It is the draft | hosted, free † |
| [Review-it](https://review-it.ai/) | Which manuscript to upload, then the returned document | Section scores, weakness flags, fabricated-citation flags, journal fit, and on an upgrade tier a corrected document | No | Yes, on the upgrade tier †; whether the fixes apply in bulk or one at a time is not documented publicly, and the placement rests on that | hosted |
| [Granted AI](https://grantedai.com/) | Which RFP to pursue, then the exported file | Letters of inquiry, drafted proposal sections | No | Yes, in bulk: one click applies its own review findings | hosted |
| [Labguru Assistant](https://www.labguru.com/labguru-assistant) | No gating checkpoint; the help centre advises reviewing the response, but nothing waits on it | Protocol parameters, anomaly flags, recommended next step, with links to related Labguru items but no citation attached to an assertion | No | Its output is saved into your notebook | hosted |
| [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) | The idea, or merely a set of reference papers | Full paper and a code workspace | No | It is the draft | self-host |

> **Question First** ships two paths with different loci: a separate per-item proposal path, and the auto-fill path above. It is filed on auto-fill, which is the path that produces a document with no record of what was examined.

## Standing Verdicts

The AI fetches, labels, and arranges work other people did, and stops before the conclusion. Its verdict on each item is provisionally accepted; dislodging it takes a human act.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Semantic Scholar](https://www.semanticscholar.org/) | Everything the evidence is used for | Ranked search over 200M+ papers, citation graph, TLDRs, passage labels and cited-passage answers that describe a paper rather than rate it | No | No | hosted, free |
| [Consensus](https://consensus.app/) | Whether a tally is actually decisive, and every citing sentence | Ranked papers over ~220M, per-study snapshot fields, yes/no claim tally with quotes | No | No | hosted |
| [Undermind](https://www.undermind.ai/) | What the material means and which papers get cited | Ranked table with match scores, stated inclusion reasons, and a coverage estimate for the run | No | No | hosted |
| [Ai2 Asta](https://asta.allen.ai/) | Which relevance tier to trust, and every sentence you write | Per-paper relevance tiers with stated criteria †; reports whose uncited passages are labelled model-generated † | No | No, export only | hosted |
| [OpenScholar](https://github.com/AkariAsai/OpenScholar) | What the evidence means | Citation-attributed synthesized answers; released weights, reranker, and a 45M-paper index. [Published in *Nature*](https://www.nature.com/articles/s41586-025-10072-4); the hosted demo now redirects to Asta | No | No | self-host, open weights |
| [scite](https://scite.ai/) | Which references survive the flags | Citation statements classified supporting / contrasting / mentioning; retraction and contested-reference audit of an uploaded bibliography | No | No | hosted |

> **Ai2 Asta** also ships a report path whose output is prose rather than structured working material. It is filed on the retrieval and ranking path, which is the one carrying the per-item verdict; on the report path alone it would sit closer to Delegation.

## Human Approval

AI screens and ranks, a named human decides, and the audit trail is publishable. The only category here that leaves an account of who decided what.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Elicit](https://elicit.com/) | Every conflict between two independent reviewers; on the single-reviewer path, only the labels you open a paper to reverse | Ranked results, per-record include/exclude labels with reasons and quotes, extraction tables with sentence-level citations | Audit trail logging every decision, override and adjudication for PRISMA reconstruction, plus agreement statistics and an exported PRISMA flow diagram | No | hosted |
| [Covidence](https://www.covidence.org/) | Every reference, twice over, plus every conflict and every AI-suggested extraction value | Screened evidence base and the extractions | PRISMA 2020 diagram and inter-rater reliability export, attributed to each reviewer | No | hosted |
| [Rayyan](https://www.rayyan.ai/) | Every ruling, one record at a time, under a reviewer identity the trail carries; nothing resolves by majority | Screened set, and the trail itself | Auto-generated PRISMA flow diagram and team audit log | No | hosted |
| [Silvi](https://silvi.ai/) | How a conflict between two blinded reviewers resolves; individual study entry can be committed in bulk from the AI's suggestions | Screened set, with the model's labels suggested against criteria the reviewer states up front | Decision log and PRISMA flow chart | No | hosted |
| [DistillerSR](https://www.distillersr.com/) | Each reference and each extracted element, attributed to you by name | Screened evidence base built for regulated work | Audit trail traceable to the individual reviewer, plus PRISMA flow | No | hosted |

> **Elicit** ships two paths with different loci. Dual review, where two reviewers rule independently and conflicts surface for resolution, is an Enterprise feature; the PRISMA export ships from the Pro tier. On the default single-reviewer path the model's label stands until you reverse it, which is [Standing Verdicts](#standing-verdicts) behaviour. It is filed here on the dual-review path, and a single-reviewer user is holding something closer to the category above.
>
> **DistillerSR** also sells a fully automated batch mode in which AI screening decisions are checked by a second AI rather than by a person; that mode on its own would fall a category above. The row describes the human-in-the-loop workflow it is filed on.

## Critique

The AI reads your work and tells you what it thinks, with no way to put any of it into the record without you ruling on that specific item.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [SciScore](https://sciscore.com/) | Each missing rigour element, and every edit: it names the gap, you write the sentence | Rigor, key-resources and statistics tables, with RRIDs validated against a registry, plus a reporting score | No | No | hosted |
| [Reviewer3](https://reviewer3.com/) | Every finding, one at a time, and every word of the revision | Claim-by-claim report: each claim checked against the evidence reported, references verified, plus retraction, self-citation and AI-text flags | No | No | hosted |

> **SciScore** is sold to publishers as well as authors, and the same reports run inside submission pipelines. It is filed on the author path, which is self-serve and returns the report to the person who wrote the manuscript.
>
> **Reviewer3** ships three paths with different loci. The editor path is first-pass screening at scale; the reviewer path offers to help write a report on a manuscript someone else wrote, which would move it to [Delegation](#delegation). It is filed on the author path, and the vendor states the property the placement rests on in its own words: "We Verify. We Don't Generate." Note the thin provenance: the site names no founders, lab or publication, and its pricing page is client-rendered, so the self-serve tier is published but not visible to a plain reader.
>
> **The closest thing this category rejects** is q.e.d Science, which has no write path at all and still fails: it sells experimental proposals, and commentary that tells you what to run next is not commentary on work already recorded. That is the second clause of the test doing work on its own, which had not happened before.

## Bench

The AI proposes the next experiment, you spend the material and instrument time, and a measurement rather than a reader settles who was right.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) | Whether to commit material and instrument time to the proposed condition | The next experiment to run, from a Bayesian explore-exploit search † over your parameter space, re-optimized on results you return by hand or through an optional robot link | No | No | hosted |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what belongs here and how entries are placed, and [METHOD.md](METHOD.md) for the reasoning behind the seven categories, including [what was considered and cut](METHOD.md#what-the-tests-excluded). One entry per PR; a PR that re-tests an existing entry is as welcome as one adding a tool.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
