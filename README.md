# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Systems where AI does part of the research and a named human is still answerable for it.

**Human-AI research systems (HAIRS)** take over part of the judgment a researcher would otherwise make. Which papers are relevant. What a study reports. Whether a claim holds up. What to try next. What the paper should say. The work comes back with the researcher's name on it.

The judgment moves. Who answers for it does not. A screening label the model got wrong is still your screening label, and a citation it invented is still your citation. That gap between who did the work and who answers for it is what separates these tools from a general-purpose assistant, and it is why the useful question about any of them is not what it can do. It is what it leaves you answerable for.

These are tools for *doing* research, not tools that do the science for you. A model that predicts a protein structure or a material property is replacing a measurement, not replacing a judgment about how the work should go, so it is not on this list.

This list is cut on that question. Twenty-one systems a researcher can use today, in five categories: **delegation, standing verdicts, human approval, critique, bench**. The tests behind the boundaries are in [METHOD.md](METHOD.md).

A few words recur below, so here they are once. A **systematic review** is a study of other studies: you search for everything published on a question, throw out what does not qualify, and summarise what is left. **Screening** is the throwing-out part, done in two stages, first on titles and abstracts and then on the full papers. A **PRISMA flow diagram** is the standard picture that accompanies such a review, showing how many records came in at each step and how many survived. Two reviewers work **blinded** when neither can see the other's calls, **adjudication** is how their disagreements get settled, and **inter-rater reliability** is how often they agreed.

## At a glance

| Category | What the human still rules on | Entries |
| --- | --- | --- |
| [Delegation](#delegation) | Keep it, fix it, or throw it away. Nothing records which parts you actually checked. | 7 |
| [Standing Verdicts](#standing-verdicts) | Every sentence you write. The machine's call on each paper is the record unless you open the source and reverse it. | 6 |
| [Human Approval](#human-approval) | Every record, one at a time, with your name on it. Nothing moves until you say so. | 5 |
| [Critique](#critique) | Whether a single word changes. Nothing the AI writes reaches your file unless you act on that specific item. | 2 |
| [Bench](#bench) | Whether to spend the materials and the machine time. A measurement, not a reader, decides who was right. | 1 |

These five are not a ranking. They are the filled-in squares of a small grid, and [METHOD.md](METHOD.md#the-facets) lays out the five questions that produce them. Across the first four, two things change: what the AI passes a verdict on, and what that verdict is worth before you rule on it. A verdict can be the record outright, the record until you reverse it, something that waits for your named ruling, or something that can never be the record. Bench sits apart because there a run rather than a reader settles who was right. The sections run in an order where the researcher's say broadly rises as you read down, which is a reading order and not a score.

### How much of the work it touches

The categories above tell you what you still decide. They say nothing about how big a bite each tool takes, and that varies far more than the category names suggest. A tool that helps you sharpen a research question and an agent that hands back a finished paper end up in the same category, because you judge both the same way: once, at the end.

| Span | What it covers | Systems |
| --- | --- | --- |
| **End to end** | a question goes in, something you could submit comes out | ClawsGO Science, Edison Platform, AI-Researcher |
| **One workflow** | a complete sub-workflow: screening through PRISMA, a literature sweep, an optimization loop | Elicit, Covidence, Rayyan, Silvi, DistillerSR, Ai2 Asta, Atinary SDLabs |
| **One step** | a single move inside the work | Question First, Review-it, Granted AI, Labguru Assistant, Consensus, Undermind, OpenScholar, scite, Semantic Scholar, SciScore, Reviewer3 |

How much a tool takes on, its **span**, is independent of which category it lands in, which is why it gets its own table instead of another column. All three end-to-end agents sit in Delegation next to four one-step tools. The systematic-review platforms each cover a whole workflow and all sit in Human Approval, while the other whole-workflow entries land in Standing Verdicts and Bench. Read both tables together: one tells you how much a tool is trying to do, the other tells you what it leaves you answerable for. A small tool can take more from you than a big one.

### If you came here with a task

The categories are not stages of research, so one task usually reaches across more than one. That is the point. Two tools you would have compared side by side often differ in what they leave you responsible for.

| If your task is | Look in | What separates the options |
| --- | --- | --- |
| Finding papers on a question | [Standing Verdicts](#standing-verdicts) | Every system here attaches a judgment to individual items rather than only ranking them. A search engine that attaches none is not on this list at all |
| Screening records for a systematic review | [Standing Verdicts](#standing-verdicts), [Human Approval](#human-approval) | Whether a label counts by default or waits for your named decision. Only the second holds a ruling on each record that traces back to a named reviewer, and leaves a decision flow a reader can rebuild |
| Extracting data from papers | [Standing Verdicts](#standing-verdicts), [Human Approval](#human-approval) | Same split: Undermind's labels on each paper count until you check them, Covidence's extracted values have to be accepted one at a time |
| Getting a draft written | [Delegation](#delegation) | Six of the seven entries there return one. What varies is what you supply: a question, a funding call, or only a pile of reference papers |
| Getting a manuscript checked before submission | [Critique](#critique), [Delegation](#delegation) | Whether the tool can put text into your file. The reviewers in Delegation can; Critique tools cannot unless you act on that specific item |
| Deciding what to run next at the bench | [Bench](#bench), [Delegation](#delegation) | Whether a measured result feeds back into the next suggestion, or the advice just lands in your notebook |

Three of the column headings below need a word of explanation. *Decision record* means what leaves the platform as evidence of how the decisions were reached, and who it puts them on. *Access* says how you get at it. `hosted` is a service you log into. `self-host` is code you run yourself. `install into a host` is a library some other program runs. `open weights` means you can download the model too. And `free` marks a service the company documents as free outright, rather than a tier that may change.

*The human rules on* is the one column that is our reading rather than a quotation. No company writes about its product in these terms, so each cell is worked out from what the documentation does and does not require. [WORKFLOWS.md](WORKFLOWS.md) follows four systems through a real task, which is where that reading gets shown instead of asserted. The other five columns you can check against a page directly.

**†** marks something the company published but does not show you. The wording sits in the page source, in a schema.org block (a hidden chunk of structured data describing the page), or in a JavaScript file the browser runs but never displays, so someone checking in a normal browser will not find it without developer tools. The mark is about where the evidence lives. It says the company published that wording, which is not the same as the feature being switched on for you: a string in a bundle proves it was distributed, not that you can use it. The mark also tells you something in its own right, because a product whose load-bearing facts live only in compiled code has revealed something about itself.

---

## Delegation

You write the brief, the system hands back something that already looks finished, and your name goes on it.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [ClawsGO Science](https://clawsgo.ai/) | The question, then keep / revise / discard the whole study | Manuscript compiled from LaTeX, a typesetting system used for science papers, plus figures and analyses | Screening log, which records the model's own inclusion calls rather than any reviewer's; shown only in a sample run on the homepage, not in the documentation | It *is* the draft | hosted |
| [Edison Platform](https://platform.edisonscientific.com/) *(the commercial spinout of FutureHouse)* | The question, then keep / revise / discard the report | Cited report from Kosmos or one of four narrower agents, with each conclusion traceable back to the code or the passage that produced it | No | It is the draft | hosted |
| [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* | The brief and target format, then the filled-in plan | Manuscript, grant, or preregistration draft (a study plan filed before the work starts), with citations it went and found itself | No | It is the draft | hosted, free † |
| [Review-it](https://review-it.ai/) | Which manuscript to upload, then the returned document | Section scores, weakness flags, fabricated-citation flags, journal fit, and on an upgrade tier a corrected document | No | Yes, on the upgrade tier †; whether the fixes apply all at once or one at a time is not documented publicly, and the placement rests on that | hosted |
| [Granted AI](https://grantedai.com/) | Which funding call to pursue, then the exported file | Letters of inquiry, drafted proposal sections | No | Yes, all at once: one click applies its own review findings | hosted |
| [Labguru Assistant](https://www.labguru.com/labguru-assistant) | No gating checkpoint; the help centre suggests reviewing the response, but nothing waits on it | Protocol parameters, anomaly flags, recommended next step, with links to related Labguru items but no citation behind any claim | No | Its output is saved into your notebook | hosted |
| [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) | The idea, or merely a set of reference papers | Full paper and a code workspace | No | It is the draft | self-host |

> **Question First** has two paths, and the human rules on different things in each. One offers you suggestions one at a time. The other, the one above, fills the whole plan in. It is filed on the fill-it-in path, because that is the path that produces a document with no record of what anyone examined.

## Standing Verdicts

The AI goes and gets work other people did, labels it, and arranges it, then stops short of the conclusion. Its verdict on each item counts as the record unless a human steps in. Overturning it takes a human act.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Semantic Scholar](https://www.semanticscholar.org/) | Everything the evidence is used for | Ranked search over 200M+ papers, citation graph, TLDRs, passage labels and cited-passage answers that describe a paper rather than rate it | No | No | hosted, free |
| [Consensus](https://consensus.app/) | Whether a tally really settles anything, and every sentence you cite in | Ranked papers over ~220M, a snapshot of each study, yes/no claim tally with quotes | No | No | hosted |
| [Undermind](https://www.undermind.ai/) | What the material means and which papers get cited | Ranked table with match scores, stated inclusion reasons, and a coverage estimate for the run | No | No | hosted |
| [Ai2 Asta](https://asta.allen.ai/) | Which relevance tier to trust, and every sentence you write | Per-paper relevance tiers with stated criteria †; reports where anything it wrote without a citation is labelled as model-generated † | No | No, export only | hosted |
| [OpenScholar](https://github.com/AkariAsai/OpenScholar) | What the evidence means | Answers whose claims are attributed to sources; released weights, reranker, and a 45M-paper index. [Published in *Nature*](https://www.nature.com/articles/s41586-025-10072-4); the hosted demo now redirects to Asta | No | No | self-host, open weights |
| [scite](https://scite.ai/) | Which references survive the flags | Each citation statement sorted into supporting, contrasting or mentioning; a check of an uploaded bibliography for retractions and contested references | No | No | hosted |

> **Ai2 Asta** also has a report path, which returns prose rather than a structured set of results. It is filed on the search and ranking path, because that is the one that puts a judgment on each paper. On the report path alone it would sit closer to Delegation.

## Human Approval

The AI screens and ranks, a named person decides, and the trail it leaves is good enough to publish. This is the only category here that ends up with a record of who decided what.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Elicit](https://elicit.com/) | Every disagreement between two independent reviewers; on the single-reviewer path, only the labels you open a paper to overturn | Ranked results, an include or exclude label on each record with a reason and a quote, extraction tables with sentence-level citations | Audit trail logging every decision, override and adjudication for PRISMA reconstruction, plus agreement statistics and an exported PRISMA flow diagram | No | hosted |
| [Covidence](https://www.covidence.org/) | Every reference, twice over, plus every disagreement and every value the AI suggests pulling out | Screened evidence base and the extractions | PRISMA 2020 flow diagram and an inter-rater reliability report; the screening exports show how often named pairs of reviewers agreed rather than how either of them ruled on any record, and the per-reviewer export arrives at the extraction stage | No | hosted |
| [Rayyan](https://www.rayyan.ai/) | Every decision, one record at a time, under a reviewer identity the trail keeps; nothing is settled by majority | Screened set, and the trail itself | Auto-generated PRISMA flow diagram and team audit log | No | hosted |
| [Silvi](https://silvi.ai/) | How a disagreement between two blinded reviewers gets settled; individual study entry can be committed in bulk from the AI's suggestions | Screened set, with the model's labels suggested against criteria the reviewer sets out first | Decision log and PRISMA flow chart | No | hosted |
| [DistillerSR](https://www.distillersr.com/) | Each reference and each extracted element, recorded against your name | Screened evidence base built for regulated work | Audit trail traceable to the individual reviewer, plus PRISMA flow | No | hosted |

> **Elicit** has two paths that differ in who decides. Dual review, where two reviewers rule independently and disagreements come back for someone to settle, is an Enterprise feature, and the tier at which the PRISMA export becomes available is not documented. On the default single-reviewer path the model's label stands until you reverse it, which is [Standing Verdicts](#standing-verdicts) behaviour. It is filed here on the dual-review path, so a single-reviewer user is holding something closer to the category above.
>
> **DistillerSR** also sells a fully automatic mode where a second AI checks the first one's screening decisions instead of a person. That mode on its own would fall into the category above. The row describes the workflow with a human in it, which is the one it is filed on.

## Critique

The AI reads your work and tells you what it thinks. It has no way to get any of that into the record unless you act on that specific item.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [SciScore](https://sciscore.com/) | Each missing rigour element, and every edit: it names the gap, you write the sentence | Rigor, key-resources and statistics tables, with RRIDs (research resource identifiers) checked against a registry, plus a reporting score | No | No | hosted |
| [Reviewer3](https://reviewer3.com/) | Every finding, one at a time, and every word of the revision | Claim-by-claim report: each claim checked against the evidence reported, references verified, plus retraction, self-citation and AI-text flags | No | No | hosted |

> **SciScore** is sold to publishers as well as to authors, and the same reports run inside submission systems. It is filed on the author path, where you sign up yourself and the report comes back to whoever wrote the manuscript.
>
> **Reviewer3** has three paths, and the human rules on different things in each. The editor path is first-pass screening at scale. The reviewer path offers to help write a report on a manuscript someone else wrote, which would move it to [Delegation](#delegation). It is filed on the author path, and the company states the property that placement rests on in its own words: "We Verify. We Don't Generate." One caution: the site names no founders, no lab and no publication, and its pricing page is built by code in the browser, so the self-serve tier is published but a plain reader will not see it.
>
> **The closest thing this category rejects** is q.e.d Science. It cannot write into your file at all and still fails, because it sells suggestions for experiments, and telling you what to run next is not commenting on work you have already written or recorded. The test's second clause asks that the AI comment on work you have already written or recorded. Here that clause does the work by itself, which had not happened before.

## Bench

The AI suggests the next experiment, you spend the materials and the machine time, and a measurement rather than a reader settles who was right.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) | Whether to spend materials and machine time on the condition it suggests | The next experiment to run, from a Bayesian explore-exploit search † over your parameter space, which balances trying new settings against refining good ones, re-tuned on results you feed back by hand or through an optional robot link | No | No | hosted |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what belongs here and how entries are placed. See [METHOD.md](METHOD.md) for the reasoning behind the five categories and [what was considered and cut](METHOD.md#what-the-tests-excluded). See [WORKFLOWS.md](WORKFLOWS.md) for four systems traced through a real task, which is where the rows stop being compressed. One entry per PR; a PR that re-tests an existing entry is as welcome as one adding a tool.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
