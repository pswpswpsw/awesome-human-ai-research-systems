# How this list is built

The [README](README.md) is the answer, and this file shows the working. Every boundary drawn here is a test you can run yourself: look at a product's public pages, apply the test, and you should land where I landed.

Some of that evidence sits below the visible page. A vendor sometimes publishes an important fact without putting it on the screen: the wording is in the raw HTML, in a schema.org block (a hidden chunk of structured data describing the page), or in a JavaScript file the browser runs but never displays. Anyone can retrieve that text, though no reader will come across it by reading the page. The list uses those claims, and the README marks each one with a **†** so a reader knows to look in the source.

## The axis

**The categories are cut by who decides, not by where a tool sits in the workflow.** Knowing that a tool gets used early or late tells you almost nothing about the working relationship. Two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what goes into the research record, and how much say the researcher keeps over it. That single question is the axis this list is cut on.

So each category answers two questions. What does the human decide? What does the AI decide? I settle both from the product's own public pages rather than from how the thing feels to use, so each boundary is written as a test a reader can run against those pages.

## The facets

The five categories are the filled-in squares of a small grid. The grid is built from five questions you can ask about any tool, and those five questions are what separate the categories from each other. Each question is what I call a facet. One word comes up in most of them: a **verdict** is the AI's call on something, such as this paper meets the criteria you set, or this is the number the study reports. Describing what a paper says is not a verdict, and neither is just putting things in order. Independence is a property questions can have, so it applies to the facets, which are close to independent. The categories are answers, a set of shelves where every tool goes on exactly one.

| Facet | What it asks | Values | Separates, in this list |
| --- | --- | --- | --- |
| **Scope** | what the AI passes a verdict on | individual items / the whole finished piece of work | Undermind from ClawsGO |
| **Standing** | what that verdict is worth if no human does anything | it is the record until someone reverses it / it waits for a person's ruling, which gets recorded / it can never be the record | Undermind from Reviewer3 |
| **Record** | what leaves the platform as evidence of who decided | nothing / a log that puts the decision on the model / an export of the decision flow, built on rulings the platform ties to named reviewers | ClawsGO from Elicit: one's only log is the model's own and is viewable rather than exportable, so nothing leaves; the other exports an audit trail of every decision, override and adjudication |
| **Target** | what the verdict is about | work other people did / the researcher's own work / work not yet done | Elicit from SciScore |
| **Arbiter** | who or what settles whether the AI was right (the referee) | a reader / a run | Atinary from Labguru Assistant |

The last column gives, for each facet, one pair of systems that facet tells apart, which shows that every facet does work somewhere in the list. Because each pair also differs on other facets, the list leaves open whether any single facet is indispensable.

**Span describes the systems without sorting them.** Span means how much of the research a system reaches: one step, one sub-workflow, or a question in and something you could hand in coming out. It is real and useful as a description, and it moves no entry. Question First helps you sharpen a research question, ClawsGO hands back a finished manuscript, and both sit in Delegation, because in each you rule on the whole document and never item by item: Question First shows you an outline before the full text, ClawsGO only the finished manuscript. [CONTRIBUTING.md](CONTRIBUTING.md) requires a new facet to change at least one existing placement or be turned down as decoration, and span fails that test. That result is also the cleanest evidence that the facets are doing real work: a genuinely separate dimension can be added without moving a single row.

Target does the least work inside the list and the most at its edge. All three of its values are judgments about research. There is a fourth answer, a claim about nature itself, and that fourth answer is why domain models such as AlphaFold and MatterGen fall outside the list entirely instead of into a sixth category. Their output gets checked against nature, not against anyone's standards for how the work should go.

The five categories are then positions in that grid:

| Category | Scope | Standing | Record | Target | Arbiter |
| --- | --- | --- | --- | --- | --- |
| **Delegation** | the whole finished piece of work | it is the record | nothing, or a log that puts the decision on the model | the brief, or material the researcher owns | a reader |
| **Standing Verdicts** | individual items | it stands until someone reverses it | nothing | work other people did | a reader |
| **Human Approval** | individual items | it waits for a person's ruling, which gets recorded | an export of the decision flow, built on rulings tied to named reviewers | work other people did | a reader |
| **Critique** | individual items | it can never be the record | nothing | the researcher's own work | a reader |
| **Bench** | a proposed condition | it waits on a commitment of materials and machine time | nothing | work not yet done | a run |

One combination is impossible. A Record built on rulings tied to named reviewers only makes sense when Standing waits for a reviewer's ruling to begin with. The grid is therefore five facets that are close to independent, plus one stated rule tying two of them together.

**Bench sits outside the ranked four as the *run* answer to the Arbiter question.** Everywhere else a reader settles whether the AI was right, and at the bench a measurement does. A category needs more than a facet value to exist: its definition must also fit what this list is about. That requirement removed two former categories, each once justified as an answer to a facet. Retrieval held systems that pass a verdict on nothing, which have taken over no judgment, and Components held projects that ship no software you can run, which are not standalone systems.

Read the sections in the order they are printed and the researcher's say in the work broadly rises. The ordering is qualitative.

## The placement rules

**1. Classify by the module that carries research judgment**, not the one the homepage leads with. A module is one part of a product. This rule picks *which part of a product you evaluate*. It settles Review-it and Question First.

It cannot rescue a product whose excluded part is the one people actually buy. If the review module would qualify while the main thing the business sells is something this list excludes, the product is excluded rather than filed on its best module. A small side line in an excluded category does not trigger this exclusion. A centre of gravity in one does.

**2. Then test Bench first, and only afterwards walk Delegation, Standing Verdicts, Human Approval and Critique in order, stopping at the first match.** This picks *which category that module lands in*. The Bench test is narrow and self-evidencing, meaning a product's own pages settle it, since it wants a proposal, a run, and a human act between them. Checking it first stops one of the broader tests from catching a system it was never written for. Among the other four, the earlier category wins, because the earlier one describes the weaker position for the human, and the list should not flatter a tool.

**3. An entry can move whenever a product ships a new release.** A vendor that adds a reviewer log or a checkpoint screen moves an entry. Existing entries therefore need re-testing now and then, not just new pull requests.

Rule 2 decides which section an entry gets printed in. What describes a product is its five facet values, and the order of the tests only settles where the row appears.

## Three words the tests depend on

Several boundaries rest on these three words, so each is defined here with examples.

- **Item**: the unit the product itself invites you to accept or reject. A record in a screening set, a row in an extraction table, a citation statement, a proposed experimental condition. A passage inside a document the vendor never asks you to rule on is not an item.
- **Verdict**: a claim about an item. Whether it is fit for the purpose, how relevant it is to criteria the researcher stated, or what value can be read out of it. Describing what an item says is not a verdict, and neither is putting items in rank order. Semantic Scholar's passage labels describe. Elicit's include/exclude labels assert.
- **Standing**: what a verdict is worth before anyone acts on it. A verdict *stands* when it is the record that counts for that decision unless a human steps in. Undermind's label on each paper is the screening record until someone reverses it. Covidence's suggested extraction value records nothing until a reviewer accepts it, so it does not stand.

## The tests

### Delegation

Follow the shortest path from input to output that the vendor or the repository documents. A system belongs here when three things hold. The researcher supplies a question or some source material. The next human action in the documentation is looking over a finished piece of work that would be handed in under the researcher's own name. And nothing comes out that records who decided what, unit by unit. A documented flow that instead halts for rulings the platform records against a named person, and that lets the decision flow leave as evidence, belongs in Human Approval.

### Standing Verdicts

Three clauses.

1. The system attaches a judgment to individual items: a screening label, a relevance tier, a support/contrast classification, an extracted value. A system that attaches no judgment to any item has taken over no judgment at all, so it sits outside this list.
2. That judgment **stands**. It is the record that counts for that decision unless a human steps in, rather than a suggestion that records nothing until someone accepts it. A platform where nothing advances until a named person rules belongs in Human Approval.
3. Every assertion must point back to an identifiable source a reader can open, or be explicitly marked in the output as written by the model rather than taken from a source. And the largest thing leaving the session must be structured working material or less. A document submitted under the researcher's own name belongs in Delegation.

### Human Approval

Two clauses, both required. First, the platform holds a ruling on each record that traces back to a named person, and it is that ruling, attributed to a person rather than to the model, that stands. Second, the decision flow leaves the platform as evidence: a PRISMA flow diagram (PRISMA is a reporting guideline for systematic reviews), a conflict log, an agreement report. The export need not carry names itself, since Covidence's screening-stage PRISMA does not and its export naming each reviewer arrives one stage later. A flow a reader cannot rebuild at all does not count as a decision record. A platform whose labels stand before anyone rules on them belongs one category up, in Standing Verdicts.

### Critique

First, no mechanism may put AI-written text into the researcher's document or dataset unless the human acts on that specific item. A control that applies every fix at once disqualifies a tool. A tracked change the author accepts or rejects one at a time does not, because that leaves a record of exactly what was taken and who took it. Second, and separate from the first: the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.


### Bench

Three clauses, all required.

**A proposal, not a prediction.** The system must hand back a specific setup to run next: an experimental condition, a set of parameter values, a synthesis route, a machine setting. A system that hands back an estimate of what running that setup would produce, in place of the setup itself, is a domain model, and domain models fall outside this list altogether.

**A run, and the result feeds the next proposal.** The proposal has to be run and produce a number, and that number has to drive what gets proposed next. The arbiter may be an instrument or a computation, never the system's own estimate. A system that proposes once and stops fails this clause, as does one whose feedback is a reader's opinion of the proposal.

**The loop cannot advance without a human act.** Between one proposal and the next, the researcher has to be needed for something: committing the material, running the thing, bringing the measurement back. It need not be an approval control inside the software, and no listed system ships one. A default mode where the optimizer stalls until a person feeds a result back is a gate. A study that runs to the end by itself once launched is not, and neither is a setup where a robot or a script closes the loop without anyone having to do anything. Where a vendor ships both, the entry is filed on the default and re-tested when the default changes.

Software-only output is eligible. What marks this category off is that a run settles who was right, and a simulation the researcher pays for settles that as firmly as a lab assay does. The human-act clause is what keeps unattended code-running agents out of Bench, so that under [rule 2](#the-placement-rules) they go on to be tested against Delegation.

*Applied:* Labguru Assistant fails the second clause. It recommends next steps, and no measured result feeds back into a new proposal. **Dakota** (Sandia) passes the first two clauses and fails the third: once the input deck is launched (the input deck is its configuration file), nothing waits on anyone. **Atinary** passes on its default mode, where the researcher runs the condition and brings the measurement back, and a [trace of its API](WORKFLOWS.md) shows what the gate really is. The loop cannot go on until you send the result back, and the API has no approve step in it: 95 paths, no accept or approve operation, no approval state among the statuses the API can report. Its optional robot integration closes the loop without anyone having to do anything and would fail this clause, which is what rule 3 exists for. **NeuriCo** is the first computational loop to pass all three, and only on its HITL AutoResearch path: each proposal is one concrete change to an experiment, a sealed scorer scores the run, the scores choose where the next proposal starts, and a legal proposal "is presented to the human for approval or concrete feedback" before anything runs. Its default command runs a single pipeline with no loop, and its plain AutoResearch mode loops with nobody in it, so it is filed on the HITL path by name.


## Where the axis coincides with the old one, and why

Two categories come close to rebuilding a section of the old arrangement, the one that sorted tools by stage of work. **Human Approval** holds exactly the membership that "systematic review" held, and **Standing Verdicts** holds most of what "literature search" held.

In both cases there is a cause behind the overlap. PRISMA asks authors to report how many reviewers screened each record and whether they worked independently. The evidence standards that journals enforce make a trail back to named people practically necessary, so every serious screening platform converged on the same answer about who decides. Literature tools converged on labels that count unless you reverse them, and for a weaker reason: competitive pressure to put a score on everything returned. There the test did move entries. Elicit went up to Human Approval once it shipped dual review. Semantic Scholar went into Standing Verdicts once its influential-citation classifier was read as what it is, a verdict on each item.

Elsewhere the axis cuts hard across the old stages. Grant drafting sits beside unattended manuscript agents. Peer-review tools split by whether the tool can write into your file: the ones that write sit in Delegation, and the two that write none of your text sit in Critique. Review-it is the closest call. Its corrected document is an upgrade above a floor you already pay for, and whether the fixes apply in bulk or one at a time is not documented anywhere public, so its placement rests on a fact a reader cannot check. The old lab section splits in two: a proposer whose verdict comes from an instrument, and one whose output is prose.

## Known weak points

- **Delegation is the widest category**, running from a grant-letter drafter to an unattended manuscript agent. A finer split is available if it grows. Does the human's single ruling fall on a brief they wrote, or on material they already owned? That question separates ClawsGO and the Edison Platform from Review-it and Labguru Assistant.
- **Bench's computational cell rests on one path of one product.** Software-only output is eligible, and almost every computational loop I found either has no human act in the loop (Dakota, ShinkaEvolve) or is a library rather than a system you can run on its own (BoTorch, Ax, Xopt). NeuriCo fills the cell on its HITL path alone, and two things about it are weaker than Atinary's lab loop. The metric is written by one of its own agents before the loop starts, so the arbiter is a computation the system designed. And after each run it is the manager model, not the researcher, that keeps or rejects the result. If the HITL path stops asking for admission, the entry leaves Bench.
- **Critique covers verification only.** Its two entries return verification reports, and the product I found that critiques the argument itself, q.e.d Science, crosses over into proposing new experiments and fails the second clause.
- **Labguru Assistant satisfies no category's written test** and is filed in the widest one. Its facet values are clear enough on their own, and the combination lands in a cell no category currently claims, which makes it the one entry placed by elimination rather than by a test.

## Jobs and categories

A reader arrives with a job to do, such as checking whether the citations in a draft hold up, and nobody types "Human Approval" into a search box. The README therefore opens with the jobs. Each job lists every system that does it, with what each leaves you to rule on and the category it sits in, so tools that really are alternatives to each other appear side by side.

Within one job the categories still part company. scite and Reviewer3 both sit under checking citations. scite sorts each citation statement as supporting, contrasting or mentioning, and that label is the record unless you open the source and reverse it. Reviewer3 reports on each claim and reference, and nothing it writes reaches your manuscript unless you act on that finding. A reader who treats those two as interchangeable because both "check citations" is the reader this list is written for.

## Why particular entries sit where they do

Each of these is a placement that turned on one fact, recorded here so the README can stay a list.

### Delegation

**Question First** has two paths, and the human rules on different things in each. One offers you suggestions one at a time. The other, the one above, drafts an outline you can edit and then fills the whole plan in. It is filed on the fill-it-in path, because that is the path that produces a document with no record of what anyone examined.

**Polaris** answers the same question as AI-Researcher, a research idea in and a paper with code out on your own machine, and both are kept because of one difference a reader can check. Before Polaris hands the paper over, it rates every citation in its own draft for existence and for support, checks every number against the recorded runs, and refuses to pass a draft with a fabricated citation. AI-Researcher documents no check of its own output. Its approval gates on budget and goals are off unless you switch them on, so on the default path the next thing you rule on is the reviewed paper. They come from different labs, according to each GitHub organisation's own profile: REAL Lab at Zhejiang University, and the Data Intelligence Lab at HKU. Its recommended model setup runs Claude Code, Codex or Gemini CLI as the backend, which passes the standalone test because Polaris itself starts them; plain model APIs work too.

**OpenResearch** serves the reader Wisp Science serves, a researcher running an agent on their own code and machine with a model they choose, and is listed for a loop Wisp does not run. It works in a Git repository, preferably an existing implementation you import, puts each hypothesis on its own git branch, runs every branch under one fixed command, freezes a branch once a run answers it, and branches the next round from the measured winner. Wisp's explorations fork sibling workspaces from one checkpoint too, but the researcher starts each one and chooses which becomes the mainline. Polaris and NeuriCo iterate on measured runs as well, and both document starting from a research direction or an idea, while OpenResearch's instructions start from code and prefer an existing implementation to a blank repository. OpenResearch is filed on its default autonomy setting, Agentic. There its loop waits on a person between runs only when failed runs hit its repair cap, so it fails the Bench human-act clause as Dakota does. Permission prompts are a separate setting, and the source gives each coding agent its own default. It then matches Delegation: you supply the repository and a goal, and the next documented human act is reading the write-up the agent produces when it stops. NeuriCo sits in Bench on a path other than its default because that path is documented and its runtime holds each proposal until a human admits it. Neither of OpenResearch's opt-in settings does that. Copilot asks before each run, but through an instruction added to the agent's prompt, which the pull request that added it calls "guidance to the agent, not enforcement". Claude Code's plan mode, found only in source, holds launches until you approve a plan, once per plan rather than once per run. The entry rests on the desktop app and `orx up`, which start Claude Code, Codex, OpenCode, Cursor or Antigravity in each new chat with the user's saved settings and hand each session OpenResearch's own playbook, a step only the source shows. That form passes the standalone test. A second form, `orx install-skills`, only drops a skill into an agent you already run so that it can drive `orx`, and would fail that test on its own.

### Standing Verdicts

**Ai2 Asta** also has a report path, which returns prose rather than a structured set of results. It is filed on the search and ranking path, because that is the one that puts a judgment on each paper. On the report path alone it would sit closer to Delegation.

### Human Approval

**Elicit** has two paths that differ in who decides. Dual review, where two reviewers rule independently and disagreements come back for someone to settle, is an Enterprise feature, and the tier at which the PRISMA export becomes available is not documented. On the default single-reviewer path the model's label stands until you reverse it, which is [Standing Verdicts](#standing-verdicts) behaviour. It is filed here on the dual-review path, so a single-reviewer user is holding something closer to the category above.

### Critique

**SciScore** is sold to publishers as well as to authors, and the same reports run inside submission systems. It is filed on the author path, where you sign up yourself and the report comes back to whoever wrote the manuscript.

**Reviewer3** has three paths, and the human rules on different things in each. The editor path is first-pass screening at scale. The reviewer path offers to help write a report on a manuscript someone else wrote, which would move it to [Delegation](#delegation). It is filed on the author path, and the company states the property that placement rests on in its own words: "We Verify. We Don't Generate." One caution: the site names no founders, no lab and no publication.

**The closest thing this category rejects** is q.e.d Science. It cannot write into your file at all, and it still fails the second clause: it sells suggestions for experiments, and telling you what to run next is not commenting on work you have already written or recorded. It is the first rejection that clause makes on its own.

### Bench

**NeuriCo** has three ways to run, and the human rules on different things in each. The default runs once from idea to report with nothing waiting on anyone, which would be Delegation, where it would duplicate AI-Researcher. The plain AutoResearch loop runs with no human act, which is the Dakota case. It is filed on the HITL AutoResearch path, where every proposed experiment waits for the researcher to admit it. Its workers are Claude Code, Codex or Gemini CLI, which passes the standalone test only because NeuriCo starts them inside its own runtime.

## What the tests excluded

Each system below was left out, removed, or moved into the list, with the reason. The rules these cuts apply (the language-service exclusion, the detection-evasion exclusion, and the activity rule) live in [CONTRIBUTING.md](CONTRIBUTING.md), where a contributor reads them before opening a PR.

| System | Why not |
| --- | --- |
| [Paperpal](https://paperpal.com/), [Writefull](https://writefull.com/) | Language services at their centre of gravity. Paperpal now also retrieves and proposes sources, but a citation finder bolted onto an editor does not make the editor a research system. |
| [ScholarsReview](https://scholarsreview.com/) | The same business sells an AI humanizer advertising a 100% human score against Turnitin and GPTZero. |
| [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) | Last pushed April 2025, API-dependent, and no frozen release. A chat-style terminal is a front end, not a feature that sets a system apart. |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester and Preview access only. The linked post announces the research. Who can actually get in is stated elsewhere, in Google Cloud documentation, rather than on this page. |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | Waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program, not a research system. Now waitlisted. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| [ScientistTwo](https://scientist-two.github.io/) (Google Cloud AI Research) | Autonomous multi-agent generation of papers and runnable code, benchmarked against accepted ICLR, ICML and NeurIPS work, and the strongest demonstration in this table. Still no product: the project page's only outbound links are the preprint, the PDFs it generated, a demo video and its website template. Nothing to run and no access to request. Delegation in shape if it ever ships. |
| [OpenScience](https://github.com/synthetic-sciences/openscience), [OpenAI4S](https://github.com/PKU-YuanGroup/OpenAI4S) | The same reader and the same question as Wisp Science: a local research agent that works on your own files with a model you choose. Wisp is listed for its Evidence Capsule, which binds each manuscript claim to the run behind it and exports the binding as a package you can verify. Neither of these documents that. OpenScience has the most GitHub stars of the three and is still left out, because the rule turns on what a tool does that nothing listed does. OpenScience also documents an Autoresearch loop that hill-climbs one metric, one run per idea, recording each run as kept or reverted, and OpenResearch, listed since, runs a loop of that kind but fixes one run command for every variant and keeps each variant on its own git branch. Every OpenScience study has a budget agreed when it starts, which the agent asks for if the request names none, even under an autonomous setting, and OpenResearch documents no such step. |
| [TheAppliedScientist](https://github.com/TheAppliedScientist/TheAppliedScientist) | Not added, on the maintainer’s judgment. It runs new experiments against a paper’s reviews and revises the paper in rounds against its own AI reviewer, and it passes the written tests narrowly on two counts. Its backing rests on a preprint alone, with one substantive contributor and a repository a month old. And both of its agents are Claude Code, running inside its own containers: that passes the standalone test only because the project, rather than you, is the thing that starts them. |
| [Covidence](https://www.covidence.org/) | Removed in September 2026 on the maintainer’s judgment, like the three below. It stays in this file as a worked example, the way Dakota and q.e.d Science do, because the Standing definition and the second Human Approval clause were both written against what its exports actually do. [WORKFLOWS.md](WORKFLOWS.md) keeps the full trace. |
| [Rayyan](https://www.rayyan.ai/), [Silvi](https://silvi.ai/), [DistillerSR](https://www.distillersr.com/) | Listed in Human Approval until September 2026 and removed on the maintainer's judgment, not by any test in this file. All three passed the written tests when they were added, and nothing here is evidence against them. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly, and listing them adds no signal. |
| AI humanizers and detection-evasion tools | The advertised job is defeating a check on authorship. |
| [SciSpace](https://scispace.com/) | Its AI Writer page advertises output that will "pass as human", plus a Rewriter that humanizes AI prose and a built-in AI detector that flags it. Same criterion that excluded ScholarsReview, and the module rule does not rescue a product that bundles a way around detection. |
| [ai-peer-review](https://github.com/poldrack/ai-peer-review) | A one-maintainer repository from a Stanford lab: 8 of 9 commits by one author, 154 stars, and a README stating that the code was AI-generated. It held the only Critique slot, and it was removed under the same stability rule that applies to everything else. |
| [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) | A one-maintainer side project: 23 of 24 commits by one author, and no lab, company or publication behind it. Good work, but a curated list should not point a researcher at software whose upkeep depends on one person staying interested. |
| [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) | A library of skills with no software of its own to run them. Whatever agent loads it sets the permissions and the checkpoints, so it is not a standalone research system. The exclusion concerns what it is, not how good it is: it has 45,000+ stars and sixteen contributors. |
| [Semantic Scholar](https://www.semanticscholar.org/) *(now listed)* | Was filed under a Retrieval category defined as attaching no verdict. Its highly-influential-citation classifier is a machine judgment on each item, so it moved into Standing Verdicts and the category that had held it was deleted. The same reasoning excludes Google Scholar, PubMed and Scopus, which attach no verdict to the individual results. |
| [q.e.d Science](https://qedscience.com/) | No write path at all, and it still fails Critique. It sells experimental proposals, and commentary telling you what to run next is not commentary on work already recorded. The only entry so far rejected by that clause alone. |
| [Dakota](https://dakota.sandia.gov/) | The textbook computational loop, and no gate. Once the input deck is launched it runs to termination with nothing waiting on a researcher. Excluded on the human-act clause, not on the Arbiter facet. |
| [statcheck](http://statcheck.io/) | Recomputes the statistics a paper reports and flags the ones that do not add up, with no write path, which is exactly the Critique shape. Excluded because it is deterministic parsing and arithmetic, meaning the same paper always gives the same answer, with no model in it, and this list describes itself in model terms from its first paragraph on. |
| Domain models: [AlphaFold](https://alphafoldserver.com/), [Boltz](https://github.com/jwohlwend/boltz), [MatterGen](https://github.com/microsoft/mattergen), ML weather emulators | Their output is a claim about nature, checked against nature. They substitute for a measurement rather than for a judgment about how the research should go. Several are among the most consequential scientific software ever released, and the exclusion is one of scope alone. |
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
| Individual papers and preprints | Not in this list. See [Related lists](#related-lists) below. |

If a system here becomes generally available, or ships the module that would change where it sits, open a PR.

## Related lists

For the academic-survey side of this space, which changes fast and is better served by lists dedicated to tracking papers:

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists): closest to HAIRS in spirit, and it also covers modes where the human is in or out of the loop.
- [awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science): 400+ open-source projects, code only, no commercial products.
- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery): the paper list that accompanies an EMNLP 2025 survey.

Overlapping less directly: [Awesome-Agent-Scientists](https://github.com/AgenticScience/Awesome-Agent-Scientists), [Awesome-LLM-Agents-Scientific-Discovery](https://github.com/zjlrock777/Awesome-LLM-Agents-Scientific-Discovery) (biomedical), [awesome-deep-research-agent](https://github.com/WuizaKaseiyo/awesome-deep-research-agent) (general-purpose), [awesome-HAI](https://github.com/bwang514/awesome-HAI) (Human-AI *Interaction* papers).

This list differs from all of them in two ways: its primary focus is live commercial products, and it organizes its entries by who decides what enters the research record.
