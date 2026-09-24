# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Systems where AI does part of the research and a named human is still answerable for it.

**Human-AI research systems (HAIRS)** do a piece of the thinking a researcher would otherwise do alone. Which papers are worth reading. What a study actually found. Whether a claim holds up. What to try next. What the paper should say. The work comes back with the researcher's name on it.

The thinking moves. The blame does not. If the model marks a paper as relevant and it is not, that is now your mistake. If it invents a citation, you are the one who published it. That gap between who did the work and who answers for it is what separates these tools from a general chatbot, and it is why the useful question about any of them is not what it can do. It is what it leaves you on the hook for.

These are tools for *doing* research, not tools that do the science for you. A model that predicts what a protein looks like is replacing a measurement, not replacing a decision about how your work should go, so it is not on this list.

This list is sorted by that question. Twenty-one systems a researcher can use today, in five groups: **delegation, standing verdicts, human approval, critique, bench**. The tests behind the boundaries are in [METHOD.md](METHOD.md).

## At a glance

| Category | What the human still rules on | Entries |
| --- | --- | --- |
| [Delegation](#delegation) | Keep it, fix it, or throw it away. Nothing records which parts you actually checked. | 7 |
| [Standing Verdicts](#standing-verdicts) | Every sentence you write. The machine's call on each paper counts as the answer unless you open that paper and say otherwise. | 6 |
| [Human Approval](#human-approval) | Every record, one at a time, with your name on it. Nothing moves until you say so. | 5 |
| [Critique](#critique) | Whether a single word changes. Nothing the AI writes can reach your file on its own. | 2 |
| [Bench](#bench) | Whether to spend the materials and the machine time. A measurement, not a reader, decides who was right. | 1 |

These five are not a ranking. They are the combinations that actually exist, out of the ones the tests allow, and [METHOD.md](METHOD.md#the-facets) lays out the questions that produce them. Across the first four, what changes is how much of the machine's opinion counts before you have looked at it: all of it, most of it, none of it, or none of it ever. Bench sits apart because there a measurement settles the argument instead of a person. The sections run in an order where you hold more and more say as you read down, which is a reading order and not a score.

### How much of the work it touches

The groups above tell you what you still decide. They say nothing about how big a bite each tool takes, and that varies more than the group names suggest. A tool that helps you sharpen a research question and an agent that hands back a finished paper end up in the same group, because you judge both the same way: once, at the end.

| Span | What it covers | Systems |
| --- | --- | --- |
| **End to end** | a question goes in, something you could submit comes out | ClawsGO Science, Edison Platform, AI-Researcher |
| **One workflow** | a complete sub-workflow: screening through PRISMA, a literature sweep, an optimization loop | Elicit, Covidence, Rayyan, Silvi, DistillerSR, Ai2 Asta, Atinary SDLabs |
| **One step** | a single move inside the work | Question First, Review-it, Granted AI, Labguru Assistant, Consensus, Undermind, OpenScholar, scite, Semantic Scholar, SciScore, Reviewer3 |

Size and say are separate questions, which is why size gets its own table instead of another column. All three end-to-end agents sit in Delegation next to four one-step tools. The systematic-review platforms each cover a whole workflow and are split across two groups. Read both tables together: one tells you how much a tool is trying to do, the other tells you what it leaves you answerable for. A small tool can take more from you than a big one.

### If you came here with a task

The groups are not stages of research, so one task usually reaches across several. That is the point. Two tools you would have compared side by side often differ in what they leave you responsible for.

| If your task is | Look in | What separates the options |
| --- | --- | --- |
| Finding papers on a question | [Standing Verdicts](#standing-verdicts) | Every system here attaches a judgment to each paper it hands back. A search engine that attaches none is not on this list at all |
| Screening records for a systematic review | [Standing Verdicts](#standing-verdicts), [Human Approval](#human-approval) | Whether a label counts by default or waits for your named decision. Only the second leaves a trail with names on it, which is what the rules for reporting a systematic review expect you to be able to describe |
| Extracting data from papers | [Standing Verdicts](#standing-verdicts), [Human Approval](#human-approval) | Same split: Undermind's labels on each paper count until you check them, Covidence's extracted values have to be accepted one at a time |
| Getting a draft written | [Delegation](#delegation) | Six of the seven entries there return one. What varies is what you supply: a question, a funding call, or only a pile of reference papers |
| Getting a manuscript checked before submission | [Critique](#critique), [Delegation](#delegation) | Whether the tool can put text into your file at all. Critique tools cannot; the reviewers in Delegation can |
| Deciding what to run next at the bench | [Bench](#bench), [Delegation](#delegation) | Whether a measured result feeds back into the next suggestion, or the advice just lands in your notebook |

Two of the column headings below need a word of explanation. *Decision record* means what you can take out of the tool afterwards to show how the decisions got made, and whose decisions they were. *Access* says how you get at it: `hosted` is a service you log into, `self-host` is code you run yourself, `install into a host` is a library some other program runs, `open weights` means you can download the model too, and `free` marks a service the company documents as free outright, rather than a free tier that may not last.

*The human rules on* is the one column that is our reading rather than a quotation. No company writes about its product in these terms, so each cell is worked out from what the documentation does and does not require. [WORKFLOWS.md](WORKFLOWS.md) follows four systems through a real task, which is where that reading gets shown instead of asserted. The other five columns you can check against a page directly.

**†** marks something the company published but does not show you. The wording sits in the page source, in a block meant for search engines, or inside the compressed code the browser runs, so someone checking in a normal browser will never see it. The mark is about where the evidence lives. It says the company wrote that sentence, which is not the same as the feature being switched on for you: a string buried in code proves it was shipped, not that you can use it. The mark also tells you something in its own right, because a product whose important facts live only in compiled code has revealed something about itself.

---

## Delegation

You write the brief, the system hands back something that already looks finished, and your name goes on it.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [ClawsGO Science](https://clawsgo.ai/) | The question, then keep / revise / discard the whole study | Compiled LaTeX manuscript, figures, analyses | Screening log, which records the model's own include and exclude calls rather than any reviewer's; shown only in a sample run on the homepage, not in the documentation | It *is* the draft | hosted |
| [Edison Platform](https://platform.edisonscientific.com/) *(the commercial spinout of FutureHouse)* | The question, then keep / revise / discard the report | Cited report from Kosmos or one of four narrower agents, with each conclusion traceable back to the code or the passage that produced it | No | It is the draft | hosted |
| [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* | The brief and target format, then the filled-in plan | Manuscript, grant, or preregistration draft, with citations it went and found itself | No | It is the draft | hosted, free † |
| [Review-it](https://review-it.ai/) | Which manuscript to upload, then the returned document | Section scores, weakness flags, fabricated-citation flags, journal fit, and on an upgrade tier a corrected document | No | Yes, on the upgrade tier †; whether the fixes apply all at once or one at a time is not documented publicly, and the placement rests on that | hosted |
| [Granted AI](https://grantedai.com/) | Which funding call to pursue, then the exported file | Letters of inquiry, drafted proposal sections | No | Yes, all at once: one click applies its own review findings | hosted |
| [Labguru Assistant](https://www.labguru.com/labguru-assistant) | Nothing that gates the work; the help centre suggests reviewing the response, but nothing waits for you to | Protocol parameters, anomaly flags, recommended next step, with links to related Labguru items but no citation behind any claim | No | Its output is saved into your notebook | hosted |
| [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) | The idea, or merely a set of reference papers | Full paper and a code workspace | No | It is the draft | self-host |

> **Question First** has two paths that differ in who decides. One offers you suggestions one at a time. The other, the one above, fills the whole plan in. It is filed on the fill-it-in path, because that is the path that produces a document with no record of what anyone examined.

## Standing Verdicts

The AI goes and gets work other people did, labels it, and arranges it, then stops short of the conclusion. Its call on each item counts for now. Changing it takes a deliberate act from you.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Semantic Scholar](https://www.semanticscholar.org/) | Everything the evidence is used for | Ranked search over 200M+ papers, citation graph, TLDRs, passage labels and cited-passage answers that describe a paper rather than rate it | No | No | hosted, free |
| [Consensus](https://consensus.app/) | Whether a tally really settles anything, and every sentence you cite in | Ranked papers over ~220M, a snapshot of each study, yes/no claim tally with quotes | No | No | hosted |
| [Undermind](https://www.undermind.ai/) | What the material means and which papers get cited | Ranked table with match scores, a stated reason for each inclusion, and an estimate of how much of the field the run covered | No | No | hosted |
| [Ai2 Asta](https://asta.allen.ai/) | Which relevance tier to trust, and every sentence you write | Per-paper relevance tiers with stated criteria †; reports where anything it wrote without a citation is labelled as model-generated † | No | No, export only | hosted |
| [OpenScholar](https://github.com/AkariAsai/OpenScholar) | What the evidence means | Answers where every claim points back to a source; released weights, reranker, and a 45M-paper index. [Published in *Nature*](https://www.nature.com/articles/s41586-025-10072-4); the hosted demo now redirects to Asta | No | No | self-host, open weights |
| [scite](https://scite.ai/) | Which references survive the flags | Each citation sorted into supporting, contrasting or mentioning; a check of an uploaded bibliography for retractions and contested references | No | No | hosted |

> **Ai2 Asta** also has a report path, which returns prose rather than a structured set of results. It is filed on the search and ranking path, because that is the one that puts a judgment on each paper. On the report path alone it would sit closer to Delegation.

## Human Approval

The AI sorts and ranks, a named person decides, and the trail it leaves is good enough to publish. This is the only group here that ends up with a record of who decided what.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Elicit](https://elicit.com/) | Every disagreement between two independent reviewers; on the single-reviewer path, only the labels you open a paper to overturn | Ranked results, an include or exclude label on each record with a reason and a quote, extraction tables where each cell cites a sentence | Audit trail logging every decision, override and adjudication for PRISMA reconstruction, plus agreement statistics and an exported PRISMA flow diagram | No | hosted |
| [Covidence](https://www.covidence.org/) | Every reference, twice over, plus every disagreement and every value the AI suggests pulling out | Screened evidence base and the extractions | PRISMA 2020 flow diagram and an inter-rater reliability report; the screening exports show how often pairs of reviewers agreed rather than who they were, and the per-reviewer export arrives at the extraction stage | No | hosted |
| [Rayyan](https://www.rayyan.ai/) | Every decision, one record at a time, under a reviewer identity the trail keeps; nothing is settled by majority | Screened set, and the trail itself | Auto-generated PRISMA flow diagram and team audit log | No | hosted |
| [Silvi](https://silvi.ai/) | How a disagreement between two blinded reviewers gets settled; individual studies can be committed in bulk from the AI's suggestions | Screened set, with the model's labels suggested against criteria the reviewer sets out first | Decision log and PRISMA flow chart | No | hosted |
| [DistillerSR](https://www.distillersr.com/) | Each reference and each extracted element, recorded against your name | Screened evidence base built for regulated work | Audit trail traceable to the individual reviewer, plus PRISMA flow | No | hosted |

> **Elicit** has two paths that differ in who decides. Dual review, where two reviewers rule independently and disagreements come back for someone to settle, is an Enterprise feature, and the PRISMA export starts at the Pro tier. On the default single-reviewer path the model's label counts until you overturn it, which is [Standing Verdicts](#standing-verdicts) behaviour. It is filed here on the dual-review path, so a single-reviewer user is holding something closer to the group above.
>
> **DistillerSR** also sells a fully automatic mode where a second AI checks the first one's screening decisions instead of a person. That mode on its own would fall into the group above. The row describes the workflow with a human in it, which is the one it is filed on.

## Critique

The AI reads your work and tells you what it thinks. It has no way to get any of that into the record unless you act on that specific point yourself.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [SciScore](https://sciscore.com/) | Each missing rigour element, and every edit: it names the gap, you write the sentence | Rigor, key-resources and statistics tables, with RRIDs checked against a registry, plus a reporting score | No | No | hosted |
| [Reviewer3](https://reviewer3.com/) | Every finding, one at a time, and every word of the revision | Claim-by-claim report: each claim checked against the evidence you reported, references verified, plus retraction, self-citation and AI-text flags | No | No | hosted |

> **SciScore** is sold to publishers as well as to authors, and the same reports run inside submission systems. It is filed on the author path, where you sign up yourself and the report comes back to whoever wrote the manuscript.
>
> **Reviewer3** has three paths that differ in who decides. The editor path is fast first-pass screening at scale. The reviewer path offers to help write a report on a manuscript someone else wrote, which would move it to [Delegation](#delegation). It is filed on the author path, and the company states the property that placement rests on in its own words: "We Verify. We Don't Generate." One caution: the site names no founders, no lab and no publication, and its pricing page is built by code in the browser, so the self-serve tier is published but a plain reader will not see it.
>
> **The closest thing this group rejects** is q.e.d Science. It cannot write into your file at all and still fails, because it sells suggestions for experiments, and telling you what to run next is not commenting on work you have already done. That is the second half of the test doing the work by itself, which had not happened before.

## Bench

The AI suggests the next experiment, you spend the materials and the machine time, and a measurement rather than a reader settles who was right.

| System | The human rules on | You get | Decision record | Writes into your draft | Access |
| --- | --- | --- | --- | --- | --- |
| [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) | Whether to spend materials and machine time on the condition it suggests | The next experiment to run, from a search † that balances trying new settings against refining good ones, re-tuned each time you feed a result back by hand or through an optional robot link | No | No | hosted |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what belongs here and how entries are placed, [METHOD.md](METHOD.md) for the reasoning behind the five categories and [what was considered and cut](METHOD.md#what-the-tests-excluded), and [WORKFLOWS.md](WORKFLOWS.md) for four systems traced through a real task, which is where the rows stop being compressed. One entry per PR; a PR that re-tests an existing entry is as welcome as one adding a tool.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
