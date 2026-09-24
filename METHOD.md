# How this list is built

The [README](README.md) is the answer. This file shows the working. It exists so that the list can be argued with. Every boundary drawn here is a test you can run yourself: look at a product's public pages, apply the test, and you should land where I landed.

One exception, which the web forced on me. Sometimes a vendor publishes an important fact without putting it on the screen. The wording sits in the page's underlying code: the raw HTML, a schema.org block (a hidden chunk of structured data describing the page), or a JavaScript file the browser runs but never displays. Anyone can retrieve that text, and no reader will stumble on it by reading the page. I use those claims, and the README puts a **†** beside each one so that nobody goes hunting for a sentence that is not on the page. The alternative was to throw away true statements for sitting in an awkward place, which would have made the list less accurate in exchange for being easier to check.

## The axis

**The categories are cut by who decides, not by where a tool sits in the workflow.** Knowing that a tool gets used early or late tells you almost nothing about the working relationship. Two products can both "help with the literature" while one hands you a finished review to sign and the other refuses to write a single sentence for you. What separates them is who decides what goes into the research record, and how much say the researcher keeps over it. That single question is the axis this list is cut on.

So each category answers two questions. What does the human decide? What does the AI decide? I settle both from the product's own public pages, rather than from how the thing feels to use. A boundary that cannot be checked that way is not a boundary, it is a vibe, and boundaries of that sort were thrown out while the list was being designed.

## The facets

Earlier drafts of this file said the categories were a ladder. One quantity rose as you climbed it, and anything that did not fit sat off to one side. The file's own text killed that idea. Several categories scored zero on the quantity the draft had named, and the ladder told apart exactly one neighbouring pair.

The shape of the claim was wrong as well. Two questions can be independent, meaning the answer to one tells you nothing about the answer to the other. Categories are not questions, they are answers, so independence is not a property they can have in the first place. Asking five sibling labels to be independent of each other is asking them to stop being what they are: a set of shelves where every tool goes on exactly one.

What the five actually are is the filled-in squares of a small grid. The grid is built from five questions you can ask about any tool. Five questions, and they are what separates the five categories from each other. Each question is what I call a facet. One word comes up in most of them: a **verdict** is the AI's call on something, such as this paper meets the criteria you set, or this is the number the study reports. Describing what a paper says is not a verdict, and neither is just putting things in order.

| Facet | What it asks | Values | Separates, in this list |
| --- | --- | --- | --- |
| **Scope** | what the AI passes a verdict on | individual items / the whole finished piece of work | Undermind from ClawsGO |
| **Standing** | what that verdict is worth if no human does anything | it is the record until someone reverses it / it waits for a person's ruling, which gets recorded / it can never be the record | Undermind from Covidence |
| **Record** | what leaves the platform as evidence of who decided | nothing / a log that puts the decision on the model / an export that names the reviewers who decided | ClawsGO from Rayyan: both ship a log, one puts the decision on the model and one on a named reviewer |
| **Target** | what the verdict is about | work other people did / the researcher's own work / work not yet done | Elicit from SciScore |
| **Arbiter** | who or what settles whether the AI was right (the referee) | a reader / a run | Atinary from Labguru Assistant |

The last column gives, for each facet, one pair of systems that facet tells apart. Be careful about what that proves, because an earlier draft claimed too much. Each of those pairs also differs on other facets, so no single pair shows that a facet could not be dropped. The column shows something weaker: every facet earns its keep somewhere rather than sitting there as decoration. The stronger claim would be that dropping any one facet would collapse two entries nothing else separates, and this list cannot currently make it.

**Span is not one of the five questions, and the difference matters.** Span means how much of the research a system reaches: one step, one sub-workflow, or a question in and something you could hand in coming out. It is real and useful, and the README gives it a table of its own. What it does not do is move anything. Question First helps you sharpen a research question, ClawsGO hands back a finished manuscript, and both sit in Delegation, because you rule on each the same way, once, at the end. [CONTRIBUTING.md](CONTRIBUTING.md) requires a new facet to change at least one existing placement or be turned down as decoration, and span fails that test honestly. It describes the systems from the side rather than sorting them, which is also the cleanest evidence that the facets are doing real work: you can add a genuinely separate dimension and not a single row moves.

Target does the least work inside the list and the most at its edge. All three of its values are judgments about research. There is a fourth answer, a claim about nature itself, and that fourth answer is why domain models such as AlphaFold and MatterGen fall outside the list entirely instead of into a sixth category. Their output gets checked against nature, not against anyone's standards for how the work should go.

The five categories are then positions in that grid:

| Category | Scope | Standing | Record | Target | Arbiter |
| --- | --- | --- | --- | --- | --- |
| **Delegation** | the whole finished piece of work | it is the record | nothing, or a log that puts the decision on the model | the brief, or material the researcher owns | a reader |
| **Standing Verdicts** | individual items | it stands until someone reverses it | nothing | work other people did | a reader |
| **Human Approval** | individual items | it waits for a person's ruling, which gets recorded | an export that names the reviewers who decided | work other people did | a reader |
| **Critique** | individual items | it can never be the record | nothing | the researcher's own work | a reader |
| **Bench** | a proposed condition | it waits on a commitment of materials and machine time | nothing | work not yet done | a run |

One combination is not merely empty, it is impossible. A Record that puts decisions on named reviewers only makes sense when Standing waits for a reviewer's ruling to begin with. So what the grid offers is five facets that are close to independent, plus one stated rule tying two of them together. That is the claim, and nothing stronger than it is true.

**Bench is the one category outside the ranked four, and it is not an exception.** It is the *run* answer to the Arbiter question. Everywhere else a reader settles whether the AI was right, and at the bench a measurement does. Two earlier categories, Retrieval and Components, were justified the same way, as answers to a facet. Both were later deleted for a better reason: their definitions contradicted what this list says it is about. A system that passes a verdict on nothing has taken over no judgment, and a project that ships no software you can run is not a standalone system. Being an answer to a facet does not entitle a category to stay when the definition rules it out.

Read the sections in the order they are printed and the researcher's say in the work broadly rises. That is a reading order, not a measurement.

## The placement rules

**1. Classify by the module that carries research judgment**, not the one the homepage leads with. A module is one part of a product. This rule picks *which part of a product you evaluate*. It settles Review-it and Question First.

It is not a way to rescue a product whose excluded part is the one people actually buy. If the review module would qualify while the main thing the business sells is something this list excludes, the product is excluded, not filed on its best module. A small side line in an excluded category does not trigger this. A centre of gravity in one does.

**2. Then test Bench first, and only afterwards walk Delegation, Standing Verdicts, Human Approval and Critique in order, stopping at the first match.** This picks *which category that module lands in*. The Bench test is narrow and self-evidencing, meaning a product's own pages settle it, since it wants a proposal, a run, and a human act between them. Checking it first stops one of the broader tests from catching a system it was never written for. Among the other four, the earlier category wins, because the earlier one describes the weaker position for the human, and the list should not flatter a tool.

**3. An entry can move whenever a product ships a new release.** A vendor that adds a reviewer log or a checkpoint screen moves an entry. Existing entries therefore need re-testing now and then, not just new pull requests.

Rule 2 decides which section an entry gets printed in. It is a filing procedure, not the shape of the space. What describes a product is its five facet values, and the order only settles where the row appears.

## Three words the tests depend on

Several boundaries rested on these three words while none of them was defined, which is how a screening platform could satisfy the test for the category above it on a reading nobody intended.

- **Item**: the unit the product itself invites you to accept or reject. A record in a screening set, a row in an extraction table, a citation statement, a proposed experimental condition. A passage inside a document the vendor never asks you to rule on is not an item.
- **Verdict**: a claim about an item. Whether it is fit for the purpose, whether it matches criteria the researcher stated, or what value can be read out of it. Describing what an item says is not a verdict, and neither is putting items in rank order. Semantic Scholar's passage labels describe. Elicit's include/exclude labels assert.
- **Standing**: what a verdict is worth before anyone acts on it. A verdict *stands* when it is the record that counts for that decision unless a human steps in. Undermind's label on each paper is the screening record until someone reverses it. Covidence's suggested extraction value records nothing until a reviewer accepts it, so it does not stand.

## The tests

### Delegation

Follow the shortest path from input to output that the vendor or the repository documents. A system belongs here when three things hold. The researcher supplies a question or some source material. The next human action in the documentation is looking over a finished piece of work that would be handed in under the researcher's own name. And nothing comes out that records who decided what, unit by unit. A documented flow that instead halts for rulings written into a log you can export belongs in Human Approval.

### Standing Verdicts

Three clauses. First, the system attaches a judgment to individual items: a screening label, a relevance tier, a support/contrast classification, an extracted value. Second, that judgment **stands**. It is the record that counts for that decision unless a human steps in, rather than a suggestion that records nothing until someone accepts it. A platform where nothing advances until a named person rules belongs in Human Approval. A system that attaches no judgment to any item has taken over no judgment at all, so it sits outside this list rather than being filed elsewhere inside it. Third, sourcing: every assertion must point back to an identifiable source a reader can open, or be explicitly marked in the output as written by the model rather than taken from a source. And the largest thing leaving the session must be structured working material or less. A document submitted under the researcher's own name belongs in Delegation.

### Human Approval

Two clauses, both required. First, the platform holds a ruling on each record that traces back to a named person, and it is that ruling, attributed to a person rather than to the model, that stands. Second, the decision flow leaves the platform as evidence: a PRISMA flow diagram (PRISMA is a reporting guideline for systematic reviews), a conflict log, an agreement report. The export need not carry names itself, since Covidence's screening-stage PRISMA does not and its export naming each reviewer arrives one stage later. But a flow a reader cannot rebuild at all is not a decision record. A platform whose labels stand before anyone rules on them belongs one category up, in Standing Verdicts.

### Critique

First, no mechanism may put AI-written text into the researcher's document or dataset unless the human acts on that specific item. A control that applies every fix at once disqualifies a tool. A tracked change the author accepts or rejects one at a time does not, because that leaves a record of exactly what was taken and who took it. Second, and separate from the first: the AI returns commentary on work the researcher has already written or recorded, rather than proposing new work or fetching someone else's.


### Bench

Three clauses, all required.

**A proposal, not a prediction.** The system must hand back a specific setup to run next: an experimental condition, a set of parameter values, a synthesis route, a machine setting. What it must not hand back instead is an estimate of what running that setup would produce. A system that reports the expected outcome is a domain model, and domain models fall outside this list altogether.

**A run, and the result feeds the next proposal.** The proposal has to be run and produce a number, and that number has to drive what gets proposed next. The arbiter may be an instrument or a computation. What it may not be is the system's own estimate. A system that proposes once and stops does not qualify, and neither does one whose feedback is a reader's opinion of the proposal.

**The loop cannot advance without a human act.** Between one proposal and the next, the researcher has to be needed for something: committing the material, running the thing, bringing the measurement back. It need not be an approval control inside the software. The earlier wording demanded one, and no listed system actually ships one. A default mode where the optimizer stalls until a person feeds a result back is a gate. A study that runs to the end by itself once launched is not, and neither is a setup where a robot or a script closes the loop without anyone having to do anything. Where a vendor ships both, the entry is filed on the default and re-tested when the default changes.

An earlier version excluded software-only output outright. That clause is dropped, because it excluded for the wrong reason. What marks this category off is that a run rather than a reader settles who was right, and a simulation the researcher pays for settles that as firmly as a lab assay does. The clause that stops this test from catching unattended code-running agents as they pass Delegation under [rule 2](#the-placement-rules) is the approval clause, not any rule about the arbiter being physical. That was the job the software-only clause had been doing quietly.

*Applied:* Labguru Assistant fails the second clause. It recommends next steps, and no measured result feeds back into a new proposal. **Dakota** (Sandia) passes the first two clauses and fails the third: once the input deck is launched (the input deck is its configuration file), nothing waits on anyone. **Atinary** passes on its default mode, where the researcher runs the condition and brings the measurement back, and a [trace of its API](WORKFLOWS.md) shows what the gate really is. The loop cannot go on until you send the result back, and the API has no approve step in it: 95 paths, no accept or approve operation, no approval state among the statuses the API can report. Its optional robot integration closes the loop without anyone having to do anything and would fail this clause, which is what rule 3 exists for. Dropping the earlier software-only exclusion opened a computational cell that is still empty as of this revision.


## Where the axis coincides with the old one, and why

Two categories come close to rebuilding a section of the old arrangement, the one that sorted tools by stage of work. **Human Approval** holds exactly the membership that "systematic review" held, and **Standing Verdicts** holds most of what "literature search" held.

That is not the axis failing to bite. In both cases there is a cause behind it. PRISMA asks authors to report how many reviewers screened each record and whether they worked independently, and the evidence standards journals enforce make a trail back to named people practically necessary, so every serious screening platform converged on the same answer about who decides. Literature tools converged on labels that count unless you reverse them, and for a weaker reason: competitive pressure to put a score on everything returned. There the test did move entries. Elicit went up to Human Approval once it shipped dual review. Semantic Scholar went into Standing Verdicts once its influential-citation classifier was read as what it is, a verdict on each item.

Elsewhere the axis cuts hard across the old stages. Grant drafting sits beside unattended manuscript agents. Peer-review tools split by whether the tool can write into your file: the ones that write sit in Delegation, and the two that cannot sit in Critique. Review-it is the closest call. Its corrected document is an upgrade above a floor you already pay for, and whether the fixes apply in bulk or one at a time is not documented anywhere public, so even that placement rests on a fact a reader cannot check. The old lab section splits in two: a proposer whose verdict comes from an instrument, and one whose output is prose.

## Known weak points

- **Delegation is the widest category**, running from a grant-letter drafter to an unattended manuscript agent. A finer split is available if it grows. Does the human's single ruling fall on a brief they wrote, or on material they already owned? That question separates ClawsGO and the Edison Platform from Review-it and Labguru Assistant.
- **Bench holds one entry and its computational cell is empty.** Dropping the software-only exclusion was right on the reasoning, and so far it has let nobody in. Every computational loop I found either has no approval gate (Dakota, ShinkaEvolve) or is a library rather than a system you can run on its own (BoTorch, Ax, Xopt). Since the audience for this list includes people building scientist-assistant platforms, that emptiness is worth watching rather than shrugging at.
- **Critique was empty until this revision, and the claim made about it was wrong.** The README said no maintained product reviews without writing. The real situation was narrower and less flattering to my searching. Review with no write path does exist, where what comes back is a verification report, and the product that critiques the argument itself crosses over into proposing new experiments, which is what q.e.d Science does.
- **Two categories were deleted for the same error, and the error deserves a name.** Retrieval required that a system attach no verdict to anything, and Components that it ship no software you can run. Both were written as facet values, and both contradicted the list's own premise. A system that takes over no judgment is not a human-AI research system (a HAIRS), and a library with no runtime of its own is not a standalone system. A facet value is not a reason to keep a category the definition excludes.
- **Labguru Assistant satisfies no category's written test** and is filed in the widest one because nothing else was left. Its facet values are clear enough on their own. The trouble is that the combination lands in a cell no category currently claims. It is the one entry whose placement rests on leftovers rather than on a test.

## The strongest objection to all of this

You arrive here with a job to do, not with a question about how much say you keep. Suppose you have four thousand abstracts to screen, meaning you must sort each one into keep or throw out. Headings named after stages of work would let you find the right shelf in seconds. Headings named after who decides make you read a paragraph of theory before the boundaries make sense, and nobody types "Human Approval" into a search box. The cut also splits up tools that really are alternatives to each other. Undermind and Covidence both rank literature against criteria the researcher states, and they sit one category apart, so a reader comparing screening tools is seeing part of the market and may not know it.

The answer to that is that splitting them up is the point. Undermind's label is the record unless you open the paper and change it. Covidence advances nothing until two named people rule. A reader who treats those two as interchangeable because both "do screening" is exactly the reader this list is trying to reach. That is why the README's tables carry the distinction in columns of their own.

## What the tests excluded

Writing down what was cut, and why, is part of keeping the bar honest. The rules these cuts apply (the language-service exclusion, the detection-evasion exclusion, and the activity rule) live in [CONTRIBUTING.md](CONTRIBUTING.md), because that is what a contributor needs before opening a PR.

| System | Why not |
| --- | --- |
| [Paperpal](https://paperpal.com/), [Writefull](https://writefull.com/) | Language services at their centre of gravity. Paperpal now also retrieves and proposes sources, but a citation finder bolted onto an editor does not make the editor a research system. |
| [ScholarsReview](https://scholarsreview.com/) | The same business sells an AI humanizer advertising a 100% human score against Turnitin and GPTZero. |
| [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) | Last pushed April 2025, API-dependent, and no frozen release. A chat-style terminal is a front end, not a feature that sets a system apart. |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester and Preview access only. The linked post announces the research. Who can actually get in is stated elsewhere, in Google Cloud documentation, rather than on this page. |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | Waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program, not a research system. Now waitlisted. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly, and listing them adds no signal. |
| AI humanizers and detection-evasion tools | The advertised job is defeating a check on authorship. |
| [SciSpace](https://scispace.com/) | Its AI Writer page advertises output that will "pass as human", plus a Rewriter that humanizes AI prose and a built-in AI detector that flags it. Same criterion that excluded ScholarsReview, and the module rule does not rescue a product that bundles a way around detection. |
| [ai-peer-review](https://github.com/poldrack/ai-peer-review) | A one-maintainer repository from a Stanford lab: 8 of 9 commits by one author, 154 stars, and a README stating that the code was AI-generated. It held the only Critique slot, and it was removed under the same stability rule that applies to everything else rather than kept so the category would not be empty. |
| [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) | A one-maintainer side project: 23 of 24 commits by one author, and no lab, company or publication behind it. Good work, but a curated list should not point a researcher at software whose upkeep depends on one person staying interested. |
| [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) | A library of skills with no software of its own to run them. Whatever agent loads it sets the permissions and the checkpoints, so it is not a standalone research system. Left out for what it is, not for how good it is: 45,000+ stars and sixteen contributors. |
| [Semantic Scholar](https://www.semanticscholar.org/) *(now listed)* | Was filed under a Retrieval category defined as attaching no verdict. Its highly-influential-citation classifier is a machine judgment on each item, so it moved into Standing Verdicts and the category that had held it was deleted. Recorded here because the same reasoning excludes Google Scholar, PubMed and Scopus, which attach no verdict to the individual results and are therefore out. |
| [q.e.d Science](https://qedscience.com/) | No write path at all, and it still fails Critique. It sells experimental proposals, and commentary telling you what to run next is not commentary on work already recorded. The only entry so far rejected by that clause alone. |
| [Dakota](https://dakota.sandia.gov/) | The textbook computational loop, and no gate. Once the input deck is launched it runs to termination with nothing waiting on a researcher. Excluded on the approval clause, not on the Arbiter facet. |
| [statcheck](http://statcheck.io/) | Recomputes the statistics a paper reports and flags the ones that do not add up, with no write path, which is exactly the Critique shape. Excluded because it is deterministic parsing and arithmetic, meaning the same paper always gives the same answer, with no model in it, and this list describes itself in model terms from its first paragraph on. |
| Domain models: [AlphaFold](https://alphafoldserver.com/), [Boltz](https://github.com/jwohlwend/boltz), [MatterGen](https://github.com/microsoft/mattergen), ML weather emulators | Their output is a claim about nature, checked against nature. They substitute for a measurement rather than for a judgment about how the research should go. Left out for what they do, not for how good they are: several are among the most consequential scientific software ever released. |
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
| Individual papers and preprints | Not in this list. See [Related lists](#related-lists) below. |

If a system here becomes generally available, or ships the module that would change where it sits, open a PR.

## Related lists

For the academic-survey side of this space, which changes fast and is better served by lists dedicated to tracking papers:

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists): closest to HAIRS in spirit, and it also covers modes where the human is in or out of the loop.
- [awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science): 400+ open-source projects, code only, no commercial products.
- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery): the paper list that accompanies an EMNLP 2025 survey.

Overlapping less directly: [Awesome-Agent-Scientists](https://github.com/AgenticScience/Awesome-Agent-Scientists), [Awesome-LLM-Agents-Scientific-Discovery](https://github.com/zjlrock777/Awesome-LLM-Agents-Scientific-Discovery) (biomedical), [awesome-deep-research-agent](https://github.com/WuizaKaseiyo/awesome-deep-research-agent) (general-purpose), [awesome-HAI](https://github.com/bwang514/awesome-HAI) (Human-AI *Interaction* papers).

None of them curate live commercial products as the primary focus, and none organize by who decides what enters the research record.
