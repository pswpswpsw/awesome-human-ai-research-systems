# Workflow traces

The [README](README.md) tables say what each system leaves you answerable for. A table row is short on purpose. Shortness hides the thing that matters most once real work is moving. Three questions get lost: who holds authority when a real task runs through the system, which human acts actually bind the machine, and what happens to a record when nobody acts on it. This file follows four systems through one task each. Each trace runs in order, from what you hand the system to what comes back out, and ends by asking whether any of it can be reached from code. It is written for teams building scientist-assistant platforms who need mechanisms and gaps rather than summaries. The coverage map near the end lists the design decisions none of these four makes for you.

Four traces. [ClawsGO Science](README.md#delegation) takes a one-sentence brief and returns a manuscript. [Elicit](README.md#human-approval) and [Covidence](README.md#human-approval) were run against the identical task, screening roughly 2,000 abstracts through to a PRISMA flow diagram. They get the same task because they read as direct substitutes, and the head-to-head section between them settles the one question that separates them. [Atinary SDLabs](README.md#bench) runs a multi-parameter experimental optimization over several rounds.

A few words recur, so here they are once. A **systematic review** is a study of other studies: you search for everything published on a question, throw out what does not qualify, and summarise what is left. **Screening** is the throwing-out part, done in two stages, first on titles and abstracts and then on the full papers. A **PRISMA flow diagram** is the standard picture that accompanies such a review, showing how many records came in at each step and how many survived. A **verdict**, as METHOD defines it, is a claim the machine makes about one item: that the item fits, or that it is relevant to criteria the researcher stated, or that some value read out of it is such and such. What varies across the README's first four categories is what the AI attaches a verdict to, and what that verdict is worth before you rule on it. In Delegation you rule once, on the finished thing. In Standing Verdicts the machine's call on each item is the record unless you step in. In Human Approval nothing advances until a named person rules on that record. In Critique nothing the AI writes reaches your file unless you act on that specific point yourself. Bench sits outside that pattern, because there a run rather than a reader settles who was right.

## How to read these

Every claim below that carries weight also carries its source. The label on it tells you who is talking, and the labels are not interchangeable. Several claims that circulate as facts about these products turn out to sit two or three rungs down this list.

Watch the word **demonstrated** especially. In everyday English it sounds like proof. Here it means an advertisement.

| Label | What it means |
| --- | --- |
| **documented** | The company's own manual says so: a docs page, a help article, an OpenAPI description, a published specification. It means the vendor wrote it down, not that anyone tested it |
| **demonstrated** | The company's marketing says so: a homepage animation, a blog claim, a case study the vendor reports on its own pages. ClawsGO's entire research procedure sits here, inside an animation of a review that never happened |
| **vendor evaluation** | the vendor published a method and numbers. In other words, the company tested itself and showed its working. Elicit's screening accuracy is this, and it is not independent |
| **peer-reviewed, vendor co-authored** | a journal paper carrying vendor staff among its authors. Other scientists checked it before publication, and people who work for the vendor helped write it. All four Atinary papers are this |
| **independent** | published by people with no stated relationship to the vendor. The Lau and Golder paper on Elicit is one of these |
| **†** | published but not displayed: the wording sits in a page's source code, a schema.org block, or a JavaScript bundle, so a reader looking at the page in a browser will not find it without developer tools. The [README convention](README.md), used here for Atinary's source maps |
| **(screenshot only)** | the wording exists inside a vendor screenshot rather than as page text. You can see it in the picture, but you cannot select it or search for it, so it is not †. Covidence's inter-rater reliability columns, showing how often two reviewers agreed, are the example |

A label in a heading, such as (documented), or in bold at the start of a paragraph, is the default for what follows. A sentence carrying its own label in brackets is the exception to that default, and several sections mix the two.

"Not documented" is used literally throughout and never as a polite way of writing "probably absent". Where a trace came back thin, the section says so.

Four of the tables below share a shape, one row per place a human could step in, and their columns mean this. **Checkpoint** names the moment. **Mandatory** says whether the system refuses to go on until a person acts. **Granularity** says whether one act covers many records at once (bulk) or one record at a time (per item). **Surface** says where the act is available, in the web interface (UI) or from code as well. **If nobody acts** says what the system does when the person never shows up, and that last column is what this whole file turns on.

Every trace below asks whether a program can drive the system with no person involved, so a few technical words need explaining once.

- An **API** is a way for one program to use another program's service directly, with no person clicking anything. A script sends a message and gets an answer back.
- An **endpoint** is a single address inside that API, and each address does one job. Elicit's `POST /api/v2/sessions/systematic-reviews` is an endpoint. The `POST` part is the instruction word, meaning do this thing. The other one you will see is `GET`, which only reads something back.
- A **schema**, usually published as an **OpenAPI document**, is the rulebook for those messages. It lists every endpoint, every field you may send, and which fields you cannot leave out. The list of fields you cannot leave out is called `required`, and it repays close reading, because a field that is not required is a field a program can simply omit.
- **Polling** means the script keeps asking whether the job is done. When a job takes minutes rather than milliseconds, the service often answers straight away and finishes the work later.
- A **webhook** is the opposite arrangement, where the service calls the script back once it finishes. Neither of the two systems here with an API documents one.
- **MCP** is a recent convention for handing an AI assistant a list of tools it may call, so an assistant rather than a script drives the service.
- An **SDK** is a ready-made library a vendor ships so you do not have to write the messages by hand.
- A **404** is a web server saying that the address does not exist.

Hold on to one consequence, because the file keeps coming back to it. A checkpoint that exists only as a button on a website does not exist for a program. If the approval step a vendor advertises lives in the browser, and the API offers no equivalent field, then a team building on the API has inherited the system with its approval step removed.

---

## ClawsGO Science: a sentence at midnight, a manuscript by morning

**The task.** A researcher submits one question and wants a citeable manuscript back. Filed in [Delegation](README.md#delegation).

The set of pages to check is unusually small and knowable. The file at `https://clawsgo.ai/llms.txt` lists the whole documentation set, 11 pages, and `llms-full.txt` returns all of it as markdown. Every quote below was then confirmed by searching the HTML of its own page, fetched separately. `/api`, `/docs/api` and `/developers` all return 404, and the China edition at clawsgo.cn has the same 11 pages and no API page either. One thing went wrong along the way, and it is worth reporting. A tool that fetches a page and summarizes it invented human-checkpoint steps that are not on the page, so everything here comes from raw retrieval instead.

The vendor publishes this exact task twice, in two very different voices. The gap between the two is the central fact about this entry, not a footnote.

### What you hand it (documented)

One brief, written in ordinary language, capped at 32,000 characters. You may attach files, 10 per message, with the size limit per file set by your plan. The quickstart tells you to "Brief it the way you would brief a new colleague" and asks for goal, material and constraints (https://clawsgo.ai/docs/quickstart/first-task).

Five settings, all chosen before you press send, are the only knobs on the run's behaviour: Mode (Balanced, or Cluster, which "orchestrates a group of subagents in parallel for heavy research such as surveys and reviews"), Model, Reasoning level, Context window, and Permissions. Read the Permissions setting closely. It offers three values: "'Approval' always asks before sensitive actions; 'Auto' only asks for detected risky actions; 'Full access' runs any action without asking". Then comes the sentence that decides the entry: "Cloud hosts default to Full access, your own device to Auto."

Standing instructions can be supplied separately, outside the brief. They go in a host-wide `AGENTS.md` file under the Agent dialog's Identity section, or in a project's own instructions and memory (https://clawsgo.ai/docs/quickstart/tour).

### What it does with the brief

**The documented envelope.** A dedicated cloud host running Ubuntu 24.04 with a graphical desktop. It runs as a background job, so "closing the tab or shutting down does not interrupt it". A run lasts at most 24 hours. After that it stops with "Run timed out" and a Continue button. A separate stall detector cuts in after 10 minutes with no output and no tool running. Every tool call lands on a timeline, which collapses into "Worked through N steps" once that part is settled (https://clawsgo.ai/docs/faq, https://clawsgo.ai/docs/quickstart/first-task).

All of that describes the machine the work runs on. How the research itself gets done, between the brief and the manuscript, is **not documented**. The word "screening" does not appear anywhere in the 11 documentation pages. Neither do "PRISMA", "inclusion criteria", or "cloud browser".

**The demonstrated run (homepage animation only).** The only published step-by-step trace of this task is a fictional CRISPR review on https://clawsgo.ai/, headed "A sentence at midnight. A manuscript by morning" and timestamped 23:47 to 07:12, "7h 25m · 1,360 records · 38 pages". Its steps run like this. Write a protocol with inclusion criteria ("Define inclusion criteria — 2020–2025, in vivo + clinical  1m"). Search five sources and remove duplicates, cutting 1,360 records to 887. Screen titles and abstracts, 887 down to 302, then full text, 302 down to 214. Extract into a 214-row evidence table. Run meta-analysis, subgroup, sensitivity and publication-bias scripts. Produce four figures including a PRISMA flow diagram. Draft seven sections. Cross-check 96 citations in 7 minutes. Compile a 38-page PDF. The animation's own caption for the middle of it is "You were asleep for this part."

Nothing in that sequence has a documented counterpart. Read the two paragraphs above as two separate claims. Every mechanism a reviewer would want to inspect lives in the demo, and the demo is an advertisement.

### What persists (documented)

A project owns a working directory on the host, which on cloud is `/home/user/ClawsGO/<project>`, and "A later task can use what an earlier one produced" (https://clawsgo.ai/docs/quickstart/tour). Workspace files survive a filled context window, meaning the point at which the model has no room left to hold the conversation. The documented remedy is to start a new task, since the files remain. Two people can share a project through teams. On what happens when both edit at once, the docs are blunt: "There is no locking; the last write wins" (https://clawsgo.ai/docs/guides/files). A public share link stays live as the run progresses and covers "the conversation and previews, not file downloads".

Version history here is partial, and it should not be called version history. A Git tab shows working-directory status letters, the marks a version-control tool puts beside files it sees as changed. Whether commits are ever made, by whom, and whether history is retained or exportable, is not documented. Deletion is documented as irreversible in two places.

### Where a human can intervene

| Checkpoint | Mandatory | Granularity | Surface | If nobody acts |
| --- | --- | --- | --- | --- |
| The brief | yes | bulk, one act covering the run | UI | nothing starts |
| Permission card | no, and absent by default on cloud | per action | UI | denied automatically after 10 minutes, and the run continues |
| Question card | no, and the agent decides when to raise one | per question, plus a Skip that is not per question | UI | denied automatically after 10 minutes, and the agent proceeds on its own basis |
| Interrupt and send | no, started by the human | not applicable | UI | nothing, because it is not a gate |
| "Continue" on an interruption card | yes, but it is about restarting rather than about content | per event | UI | the run stays stopped |
| The task plan | shown to you, but nothing waits on it | not applicable | UI | it executes |
| Host desktop takeover | no | not applicable | UI | whether the agent pauses while a human drives is not documented |

On the default cloud configuration, the brief is the only human judgment that gates anything. The two mid-run cards that exist both proceed on their own if you say nothing. The troubleshooting page states the consequence without hedging: "Both cards are auto-denied after 10 minutes and ClawsGO continues on that basis" (https://clawsgo.ai/docs/faq/troubleshooting). Neither "sensitive actions" nor "detected risky actions" is defined anywhere. A researcher reading the docs therefore cannot tell whether a research judgment could ever raise a card at all.

The one checkpoint that genuinely blocks never asks about content. Every documented trigger for it is a failure or a limit: run failed, run interrupted, failed to start, run timed out, run stalled, out of memory, process limit, context window full, model service busy, model declined the content, service updated, host offline, out of credits, credit limit reached.

No documented checkpoint exists on inclusion criteria, on a screening decision, on an extracted value, on a citation, or on the finished manuscript. In the demonstrated run the agent writes its own inclusion criteria in the first minute, then screens 887 records down to 214 without stopping once. Deciding which studies count is the most consequential judgment in a systematic review, and here you can watch it being handed over.

Set that against the vendor's own stated position, which is positioning rather than documentation. https://clawsgo.ai/about says "AI does the labor. You do the thinking", and says that an agent blurring that line "is replacing your judgment with its own. We won't build that." No documented mechanism enforces the line. The mechanisms that do exist route around it after ten minutes.

### What checks the work

Self-checking by the platform: none documented. The docs push verification onto the researcher, in the same words twice, on the index page and in the FAQ. Outputs are AI-generated, "Verify them before you decide, publish or cite", and where integrity rules apply, do not present AI output as your own original work. The usage policy files that last item under academic misconduct. The terms assign the rights in the output to the user. The homepage meanwhile headlines "Deliverables you can put your name on".

Every validation step in the pipeline is demonstrated only: the 96-citation cross-check, "Verify every figure is referenced", a `validate_extraction.py` call, and per-reference "Verified" badges on sample reports. None of them appears in the documentation.

Independently verified: nothing found. No paper, no vendor benchmark, no third-party evaluation, and no accuracy figure on any page fetched. A published benchmark of this task shape does exist (ResearchClawBench, arXiv 2606.07591), and its full text contains zero occurrences of "ClawsGO" or "BitMiracle", so it does not evaluate this system. The homepage's only social proof names no institution.

### What leaves

Files leave, and the files are the deliverable. You can download a single file, zip a folder, or convert markdown to Word, PDF or text. Download links are signed for one hour (https://clawsgo.ai/docs/guides/files).

The process record does not leave. The timeline holds every tool call with its input and its output, and a share link keeps that view live for anyone who has the link. No export, archive or download of the timeline is documented anywhere. Whether a researcher's answers to question or permission cards are recorded at all, and whether they are attributed to a named person with a timestamp, is not documented. The only documented export resembling an audit trail is the billing dashboard, which exports CSV by day, member, model and conversation. That is a record of spending, broken down per member, not a record of decisions.

Two consequences are worth stating plainly. First, the demonstrated run generates `fig1_prisma_flow.png` from the model's own screening passes. A PRISMA flow diagram produced that way carries no reviewer attribution, so it looks like the canonical evidence for [Human Approval](METHOD.md#human-approval), the category where a named person rules on every record, and satisfies none of it. Second, the demonstrated `screening_log.csv` is not the documented log. The documented log, the one attributed to the model, is the step timeline, and that can be viewed and shared rather than exported.

### Calling it from code

Nothing, and the negative result is tight rather than a gap in searching. The 11-page documentation set contains no API page, and `/api`, `/docs/api` and `/developers` return 404. No SDK, CLI, webhook, REST endpoint, OpenAPI document, rate limit or token page appears anywhere, including `/pricing`, where such a tier is usually advertised. A CLI here means a command-line tool, the kind you type at a terminal or call from a script.

Every integration that exists points inward, letting the agent reach your things rather than letting your code reach the agent. SSH lab hosts let the agent run jobs on your hardware. MCP is mentioned once in passing, on the new-task page, with no configuration, no transports, and no statement of whether ClawsGO can act as a server. Reading that one sentence as MCP client support is inference. Skills are referenced by a composer command with no format specification. A macOS app registers a Mac as an execution device. Private deployment is "Not sold in the app".

For a platform team the consequence is that ClawsGO cannot be a component on documented functionality. It is a destination. Nobody could submit a brief, poll for status, retrieve the timeline, or pull the deliverable without a human sitting in a browser.

### Not documented

Any research checkpoint at all. What counts as a sensitive or risky action. When the agent chooses to raise a question card, beyond "when a decision matters". Whether card answers are stored or attributed. Any export of the timeline. Whether git commits happen in the working directory. Retention, for tasks, timelines and workspace files. The screening log, the evidence table, the citation cross-check, the PRISMA figure, the cloud browser and the annotate-a-figure loop, all demonstrated and none documented. Whether the agent pauses while a human takes over the desktop. MCP configuration. The Skills format, and the "Skill Market" that appears in the homepage mockup while the documented sidebar shows something else. Cluster mode internals: how many subagents there are, how a review is divided, how their outputs are reconciled.

### For a platform team

Worth copying, six things. Three named permission modes collapsed into a single setting chosen before the run, with the default stated separately per host type. The shape of the question card, whose "Other" free-text slot is the part most agent interfaces omit. Interrupt-and-send as a real control in its own right, one that keeps the work already finished. A project directory later tasks inherit. A live public share link, so someone who is not the operator can supervise. And the interruption-card taxonomy, a named list where each failure state carries a meaning and a remedy that resumes from saved progress, which is a better operational contract than most research software offers.

Worth avoiding, four things. Timeout-then-proceed on a judgment call, which converts human authority into a latency requirement: a researcher who is asleep, which this product explicitly invites, has declined every checkpoint. A decision record with no human in it. Advisory instructions standing in for enforcement, because putting checkpoint requirements in `AGENTS.md` makes the model responsible for honouring its own gates. And a hosted destination with no API, which is a component decision better made explicitly than discovered late.

---

## Elicit: 2,000 abstracts to a PRISMA flow diagram

**The task.** Screening roughly 2,000 abstracts for a systematic review, from search through to a PRISMA flow diagram. Filed in [Human Approval](README.md#human-approval). Traced 2026-09-22 against the help centre, the OpenAPI document at `https://docs.elicit.com/openapi.json` (version 2.0.0, 240 KB, downloaded and parsed rather than summarized), four vendor blog posts, the public `github.com/elicit/api-examples` repository, and Crossref records.

2,000 records sits inside the Pro tier's 5,000-paper cap (documented, help article 14759154, cited below by number). The same task can be run two ways, and the two give the human different amounts of authority. You choose between them once, on the Setup page, before anything runs.

### What you hand it

**In the UI (documented, support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit, the canonical URL from the page's own link rel=canonical, meaning the address the page declares as its real home).** A research question of "two or three sentences at most". An Additional Context field for PICO definitions and inclusion criteria. A search-strategy choice, where keyword is "Best for PRISMA-compliant reviews or HTA filings". A screening depth per stage. A report template. And toggles for abstract screening, full-text screening, figure extraction and dual review.

Screening criteria are not required from you. Elicit auto-generates them from the question and the setup details, and you may edit, disable or add. A user who simply accepts them has supplied nothing beyond the question.

Records you already hold go in through the Library as RIS or BIB. Elicit reads title, authors and abstract only, and nothing else "at this time" (documented, support.elicit.com/en/articles/14744236-upload-paper-titles-abstracts-ris-and-bib-files).

**Through the API (documented, from the schema).** `POST /api/v2/sessions/systematic-reviews` takes researchQuestion, protocolDetails, searches, abstractScreening, fulltextScreening, extraction, generateReport, title and isPublic. Its `required` array, the list of fields you cannot leave out, contains exactly one entry: researchQuestion. There is no collection id, source id, file id, RIS or CSV field anywhere in the request body.

The asymmetry is precise. The API can upload PDFs into the Library, but the systematic-review endpoint cannot read from the Library. So a platform team cannot hand the API its 2,000 exported records at all, while the web app accepts them as RIS or BIB.

### What it does (documented)

Six stages, three unconditional (Gather, Extraction, Report) and two toggleable (abstract screening, full-text screening). Full-text screening depends on abstract screening being on.

You can change the setup at any time, through Modify Setup. Gather searches up to 1,000 papers initially, then accepts more searches, uploads and Library records. Deduplication runs across search tabs, and one consequence carries all the way into the diagram: closing a tab removes those results from the review entirely, including from the PRISMA diagram (documented, support.elicit.com/en/articles/14758182-advanced-search-gathering-for-systematic-reviews). Abstract screening applies the criteria per paper, and the decision rule is published: yes or maybe on all criteria screens the paper in, any no screens it out (vendor evaluation, https://elicit.com/blog/evaluating-elicit-slr).

Depth changes what is recorded, not only how long it takes. Thorough "applies the criteria in full, records the quotes behind each decision". Fast "returns decisions without supporting quotes and wrongly excludes more papers that met your criteria" (OpenAPI). A team running Fast to save usage has given up the per-decision quote that makes the record defensible.

The PRISMA flow diagram appears at the report stage. It is assembled from where the papers came from rather than from who ruled on them: it visualizes how many papers came from each search tab or source, alongside the query strings, the date and the database source (14758182).

Where it runs: server-side and asynchronous. You get back a 202, the web code meaning accepted and still working, plus a sessionId, and then you poll. Reports alone are "typically 5-15 minutes". Duration for a 2,000-record screen is not documented.

One documented conflict a platform team should not plan against: the help centre says "Fast is the default" (support.elicit.com/en/articles/14759157-full-text-screening-in-elicit-systematic-reviews), and the OpenAPI says of both depth fields "Omitting this field means thorough".

### What persists (documented)

A review is a persistent session with a web URL. `GET /api/v2/sessions` lists reports, systematic reviews and agent sessions. It carries a `source` filter whose enum, meaning its fixed list of allowed values, is `user`, `api`, `mcp`, `agent_session`, described as "Filter by how the session was created". That is the clearest published evidence that UI-created and API-created reviews share one namespace, meaning both appear in the same list of sessions, and that where a review came from is recorded.

Collaboration is stronger in the UI than through the API, and the OpenAPI says so outright: API shares are read-only, and "Reports and systematic reviews can also have editors or reviewers added in the Elicit web app; those higher-permission collaborators are managed there and are not returned here."

Version history is documented for the items produced inside Collaborative Sessions, which is a different part of the product. No version history is documented for screening decisions, criteria edits, or threshold changes inside a systematic review.

### Where a human can intervene

| Checkpoint | Mandatory | Granularity | Surface | If nobody acts |
| --- | --- | --- | --- | --- |
| Criteria approval ("Run screening") | yes, in flow | bulk | UI only | nothing starts, but accepting the auto-generated criteria satisfies it |
| Per-paper override | no | per item | UI only | the model's label is the record |
| Threshold slider | no | bulk, after the fact | UI only | labels stand |
| Stage-advance clicks | yes | bulk | UI only | the pipeline waits |
| Dual review: conflict resolution | yes, within dual review | per conflicting item | UI only, Enterprise | not documented; "once both finish" is the whole specification |
| Any of the above, through the API | none exist | not applicable | not applicable | the run completes unattended |

Every row above except the API one is documented in 14759154. On the default single-reviewer path there is exactly one act that must occur before machine labels become the record, and that act rules on the rule rather than on any paper. Per-paper override, the act the category name suggests, gates nothing. Across 2,000 abstracts, the model's label is the record for every paper nobody opens: if you never open a paper, the machine's answer is the one that counts. That is [Standing Verdicts](METHOD.md#standing-verdicts) behaviour in its concrete form.

Dual review, on Enterprise, is what the category placement rests on. It is enabled at setup and only at setup. The model still goes first, so reviewers rule on a set that has already been labelled. Blinding is reviewer to reviewer, not reviewer to model, since "Each reviewer sees papers and Elicit's recommendations, but not the other's decisions, scores, or notes until both finish" (14759154). Conflict resolution is mandatory and happens one item at a time, but it covers only the disagreements. Papers where both reviewers agreed are not re-ruled.

Elicit's marketing says its AI screening "can support two human reviewers, or be the second reviewer" (demonstrated, elicit.com/blog/systematic-review-for-prisma-2020). The help centre documents only the two-human configuration. If the AI may stand as reviewer two, then adjudication, meaning the act of settling a disagreement, becomes one human ruling against a machine. That is a materially different claim about authority, and no published setup procedure supports it.

Through the API none of this exists. Across the whole OpenAPI document the strings `dual`, `override`, `adjudicat`, `prisma`, `audit`, `kappa`, `approve`, `blind` and `webhook` occur zero times. `reviewer` occurs once, in the sentence saying reviewers are managed in the web app. The only documented pause is financial, `pausedForInsufficientQuota`, cleared by a resume call. That is a billing gate, not an approval gate.

**The mechanism that looks like a checkpoint and is not.** Elicit encodes human authority as prose instructions to the calling model, inside the API schema. On screening depth: "The person you are acting for chooses this, do not decide it yourself... if they have not said, ask them rather than picking silently." On figure extraction: "do not turn it on of your own accord." The published Claude Code skill repeats the pattern, telling the calling agent to confirm queries, criteria and extraction questions with the user first (github.com/elicit/api-examples, integrations/claude-code-skill/skill.md). The server accepts the call either way. These are norms addressed to an LLM client, and an audit that counts such strings as safeguards will overstate the system's guarantees. The only enforceable gate on the programmatic path belongs to somebody else. The MCP tool table marks create_report, create_systematic_review and resume_session as not read-only, and the setup instructions say to optionally configure tool permissions in the client (github.com/elicit/api-examples, integrations/mcp). So whatever approval a human gets is enforced by the MCP client rather than by Elicit.

### What checks the work

**Vendor evaluation with published methodology** (https://elicit.com/blog/evaluating-elicit-slr, 6 May 2026). Ground truth, meaning the set of right answers the system was scored against, came from Cochrane reviews, reduced to 888 items whose unit the post itself reports inconsistently, as reviews in its table and as studies in its prose. Search: 95.0% of included studies found from the review title alone. Abstract screening: 96.9% sensitivity, 92.5% specificity, on 931 positives and 5,162 negatives across 108 reviews. Sensitivity is the share of the papers that should have been kept that the system did keep, and specificity is the share of the papers that should have been dropped that it did drop. Full text: 99.5% paper-level recall, 94.8% per-criterion accuracy, on an evaluation set the vendor concedes is "much smaller than we would like". Recall is the same quantity as sensitivity under another name.

Anyone citing those figures should disclose the filter. 138 judgements, 10.9% of the dataset, were excluded from the final dataset: the ones where all models consistently disagreed with the Cochrane reviewers. Removing the cases where every model disagreed with the reference standard raises the reported score by construction. The evaluation post also cautions against comparing its numbers with the human dual-reviewer literature. The launch post drops the caution and claims Elicit "approaches the accuracy of two human reviewers" (demonstrated).

**Independent, and pointing the other way.** Lau O and Golder S, *Cochrane Evidence Synthesis and Methods* 3(6), 2025, doi:10.1002/cesm.70050, verified via Crossref. They report Elicit's sensitivity averaging 39.5% against 94.5% in the original reviews, with higher precision than the original searches (41.8% against 7.55%). Precision is the share of what came back that turned out to be relevant. They conclude that at the time of evaluation Elicit did not search with high enough sensitivity to replace traditional literature searching.

The two results are often set against each other wrongly. Lau and Golder measure search plus screening end to end, on a version predating the May 2026 screening models. Elicit's 96.9% measures screening alone, given candidate papers. Neither refutes the other. What is defensible: the only independent study located that covers screening is unfavourable, and it predates the current models.

**What nobody has evaluated.** There is no published evaluation of the dual-review conflict workflow itself. Not conflict rates, not adjudication quality, not whether blinded reviewers anchor on the model's visible recommendation, meaning let it pull their own judgment toward it. The recommendation is deliberately shown to both reviewers while their own decisions are hidden from each other, so anchoring is the obvious threat to the mechanism, and it is untested in public.

### What leaves

Pro, Scale and Enterprise subscribers export what the vendor itself calls "the screening recommendation tables and the data extraction table", as CSV or Excel (documented, support.elicit.com/en/articles/14758189-export-your-data-from-elicit). References export as RIS or BIB, and the PRISMA flow diagram and search strategies export with the report.

The audit trail sentence is real, and where it sits matters. It reads "Audit trail logs every decision, override, and adjudication for PRISMA reconstruction, plus agreement stats... for both reviewer and Elicit pairs and reviewer to reviewer pairs". It sits inside the dual review subsection of 14759154, under the heading "Dual review (available on Enterprise plans)". No equivalent sentence exists for the single-reviewer path anywhere in the help centre, and the systematic-reviews collection contains six articles, none of them about dual review, the audit trail, or the PRISMA diagram.

What is in the export is not published. No field list, no column schema, no sample file. Whether an exported screening row carries a reviewer name, a timestamp, a model-versus-human flag, or a criterion-level trail, is not documented anywhere public. Reviewer identity is presumably tracked, since kappa is computed reviewer to reviewer, and kappa is the standard score for how far two reviewers agree beyond what chance alone would give. But that is an inference from a statistic rather than a documented field.

On the API side, stage exports exist for search, screen, fulltext and extract, with pre-signed download links valid for seven days. No PRISMA flow diagram is listed among API outputs, and no audit-trail export is listed. The strongest available API-side claim is a blog sentence (demonstrated) that every stage exports with each decision recorded so the review is auditable end to end. That records decisions and attributes them to nobody.

Tier for the flow diagram: not documented. On elicit.com/pricing there is no mention of a PRISMA flow diagram at any tier, the sole PRISMA string is "PRISMA-grade screening and extraction accuracy" under Enterprise, and the word "dual" does not appear on that page at all. The one tier statement attached to the PRISMA launch points at Enterprise rather than Pro (demonstrated, elicit.com/blog/systematic-review-for-prisma-2020).

### Calling it from code

Documented and public, which already distinguishes Elicit from the other three traced here: OpenAPI 3.1.0 at `https://docs.elicit.com/openapi.json`, bearer-token auth, keys self-service from elicit.com/developer, available on Pro and above (support.elicit.com/en/articles/14757400-elicit-s-api). Endpoints cover search, reports, systematic reviews, sessions, shares, usage, a Research Agent family, file staging and a Library family. Work is asynchronous and you poll for it, with each stage's data populated as that stage lands. Search is rate-limited at 100 requests per minute per IP, and per-review caps scale by plan.

An MCP server exists at `https://elicit.com/api/mcp`, OAuth 2.0 with PKCE, eight tools with a published read-only column. One discrepancy is worth knowing before you plan the work. `llms.txt` claims all API functionality is available via MCP, while the published tool table covers three endpoint families and has no tool for the Library, file upload, the Research Agent, shares or usage. The help article is the accurate version.

No webhooks. Polling is the only documented completion signal.

### Not documented

Duration of a 2,000-record screen. The export schema. Any audit trail on the single-reviewer path. The tier for the PRISMA flow diagram. How to configure Elicit as the second reviewer. Whether an API-created review can be continued, overridden or put into dual review from the web app, despite the shared session namespace. Whether a systematic review can live inside a Shared Project. Version history for screening decisions, criteria edits or threshold moves. Webhooks. Any evaluation of the dual-review workflow. Whether the threshold slider's bulk reclassification is recorded in the audit trail as a decision, and if so, attributed to whom.

### For a platform team

The finding, stated precisely: the API does not merely fail to expose dual review. It removes the single-reviewer path's one mandatory checkpoint. Consider a single POST carrying only researchQuestion, with `abstractScreening: {generate: true}`. It screens the whole set of records against criteria no person has read, extracts from whatever survived, and emits a report and a PRISMA flow diagram. No human touches a record at any point. On an Enterprise account the API still runs the single-reviewer path, because no field selects the other one. The vendor's category-qualifying human mechanism exists only in the surface a platform cannot call.

Three mechanisms are worth reusing, in descending order of how well they transfer. First, blinded independent labelling followed by conflict-only adjudication, which spends human attention on disagreements and nothing else. Reuse the idea of spending review effort only where reviewers disagreed, and treat showing both reviewers the model's recommendation as an open question rather than a settled design. Second, decision provenance as a field of its own, meaning the `source` enum that records where a session came from. Provenance is simply a record of where something came from. Adding one to a store already full of data is far harder than declaring it up front. Third, and this is the cautionary one, authority expressed as prose to the calling model. It is a genuinely novel interface convention, and it must be classified as documentation addressed to an agent rather than as a control.

What to build that Elicit does not offer: a screening decision resource of its own, carrying reviewer identity, timestamp, prior value and reason, writable and readable through the API, so that adjudication becomes an operation code can perform. Elicit's own marketing is the argument for it, since the post promising an end-to-end auditable review also approvingly reports a customer finding the results reliable enough to use without reviewing every search manually.

---

## Covidence: the same 2,000 abstracts

**The task.** Identical to the Elicit trace, deliberately. Filed in [Human Approval](README.md#human-approval). Not-for-profit, based in Melbourne, hosted web app only: "It is not possible to use Covidence offline."

Access conditions gate the task before anything else does. The free trial stops at 500 records, so 2,000 needs a paid plan. A co-reviewer, though, needs no subscription of their own (documented).

### What you hand it (documented)

Three things, and the third corrects an obvious assumption.

References as files, in EndNote XML, PubMed text or RIS, unlimited in number, 15,000 per file, 50 MB per file. Deduplication is not a decision you make. It happens on import and is reported on the PRISMA chart (support.covidence.org/help/study-imports).

Reviewers, invited by name and email.

Eligibility criteria, structured. Covidence takes a framework (PICOS, PECOS, PCC, PICo, SPICE, SPIDER) plus inclusion and exclusion criteria, editable at any time (support.covidence.org/help/how-to-create-and-manage-eligibility-criteria). What they are for is stated plainly, and the answer is people: they "provide a shared reference point for your review team", available in a sidebar during screening. Nothing in the documentation says any Covidence model reads them. The machine acts that the product does perform are these: a study-design label from a fixed external classifier and a relevance rank learned from the team's own votes, and neither is described as consuming the criteria. So the accurate statement is that the criteria are a human document sitting inside the platform with no documented machine consumer. That is still the structural inversion of Elicit, where the criteria are the model's input.

What you cannot hand it, and cannot get back: an exclusion reason at title and abstract. The documented workaround is free tags, which "are not blinded: they are visible to everyone on the review team" (support.covidence.org/help/does-covidence-record-exclusion-reasons-at-the-title-and-abstract-screening-stage).

### What it does (documented)

Import and deduplicate, with the PRISMA chart populated from minute one and updating continuously (support.covidence.org/help/export-prisma). Then, on medical and health or Cochrane reviews only, a machine pre-exclusion. References with no manual votes run through the Cochrane RCT classifier, which removes the ones not reporting on randomised controlled trials, meaning trials where participants are assigned to their groups at random. It is fenced by domain and by record quality: titles of 14 or more characters and abstracts of 400 or more (support.covidence.org/help/ai-feature-remove-references-reporting-on-non-rcts-before-screening).

Then title and abstract screening, one record at a time, by people. Dual screening is the default: two votes from two distinct people move a citation forward, all voting blinded, and a Maybe counts as a Yes (support.covidence.org/help/screening-by-title-and-abstract, /help/voting-maybe). Running in parallel with that, never instead of it, is a machine re-ranking. Active learning means a model that keeps learning from votes as they arrive. It sorts by predicted relevance once at least 25 studies have been voted on, including 2 includes and 2 excludes, and it is inert below 100 or above 150,000 studies (support.covidence.org/help/ai-feature-most-relevant-sorting). Then a conflicts queue holds every disagreement. The PRISMA download is available at any time.

There is no job here. Nothing is submitted and awaited. Screening is a human-paced queue, and the only asynchronous work is import processing and export preparation. Screening duration is not documented in any form: no estimate, no throughput figure, no service-level agreement.

The ordering is itself the finding, and it is the cleanest way to show that these two products are not substitutes. Covidence has no "run screening" control and no moment at which a model labels the whole set. Its loop is human vote, then model re-rank, then human vote. Elicit's is model labels everything, then humans rule on a pre-labelled set. The task is the same and the sequence is inverted, which is where every downstream difference comes from.

### What persists (documented)

The review is the persistent unit, owned by a subscription and shared by invitation, with no per-user copy and no merge step. Vote history is retained per record and visible in-app through a View history control, though only "once all actions have been taken at a particular stage of screening", and whether it carries timestamps is not documented (support.covidence.org/help/can-i-export-voting-history-slash-records-of-conflicts). Vote history outlives the reviewer: removing someone leaves their votes in place and still counted (support.covidence.org/help/removing-a-co-reviewer-from-a-review). Blinding is durable state, meaning it persists on the review rather than being a switch someone flips in the interface.

Roles exist at the organisation (non-member, member, admin) and not inside a review. Inside a review no role hierarchy is documented at all. Any reviewer can remove any other, and on the team-level rules the documentation is explicit that "Any reviewer can edit the team settings" (support.covidence.org/help/team-settings). Team Settings is where the conflict-resolver restriction lives. So the rule restricting who may adjudicate can be removed by anyone the rule restricts.

Nothing is versioned. No version history, no snapshot, no protocol freeze is documented anywhere, and eligibility criteria can explicitly be changed mid-review, with a notification but no record. Covidence's own protocol advice points outward, to PROSPERO and OSF: the frozen protocol lives in a registry, not in the platform.

Undo works one record at a time, and it destroys both votes at once.

### Where a human can intervene

| Checkpoint | Mandatory | Granularity | Surface | If nobody acts |
| --- | --- | --- | --- | --- |
| Screening vote | yes, two from distinct identities | per item | UI only | the record parks as "awaiting other reviewer", indefinitely |
| Blinding | enforced, not advisory | per item | UI only | not applicable |
| Conflict adjudication (a third vote) | yes | per item | UI only | the record stays in the conflicts queue |
| Dual-to-single mode switch | no | bulk, irreversible in bulk | UI only | nothing moves; the default stays dual |
| Non-RCT auto-exclusion | not a checkpoint; a machine act | per item, committed in bulk | UI toggle | records are excluded before any person sees them |

Sources by row: /help/screening-by-title-and-abstract and /help/what-does-the-status-awaiting-other-reviewer-mean-in-covidence for the vote and the parked state, /help/resolving-conflicts-at-screening-stage for adjudication, /help/switching-from-dual-to-single-reviewer-mode for the mode switch, and /help/ai-feature-remove-references-reporting-on-non-rcts-before-screening for the classifier. There is no API, so every checkpoint is UI-only, and the question of whether an API bypasses them has one answer: there is nothing to bypass them with.

Adjudication is the mechanism Covidence sells, and it is built carefully. Two votes are the maximum "with the exception of resolving conflicts, where a third and final vote is required" (support.covidence.org/help/switching-from-dual-to-single-reviewer-mode). Nothing resolves by majority, by timeout, or by model. The adjudicator is shown who disagreed but not what they voted, and that is deliberate, "with the goal of minimising bias in the conflict-resolving vote" (support.covidence.org/help/resolving-conflicts-at-screening-stage).

Who may adjudicate is configurable and the default is permissive: if nobody is assigned to the resolver group, everyone can resolve (/help/team-settings). Out of the box a disputant can adjudicate their own conflict, and the documentation treats that as expected rather than as a loophole. The consequence matters for what the mechanism is worth. When the resolver is a disputant, they know their own vote and they know it conflicts, so blinding no longer protects the ruling. Blinding and third-party adjudication work as a pair, and only the first of the pair is on by default.

Allocation is deliberately absent, with the reason stated: no mechanism assigns a subset of studies to a particular reviewer, in order to minimise the bias in voting patterns that allocation could produce (support.covidence.org/help/can-i-allocate-a-set-of-studies-to-a-specific-reviewer-for-screening).

Exactly two things commit in bulk, and neither is a vote. The first is the dual-to-single switch. It moves every half-screened citation forward permanently with one click and one modal, cannot be reversed in bulk, and records no consent tied to a named person. It lives in Review Settings, and who may change Review Settings is not documented, since the article says only to go there. The documented wide-open permission belongs to the neighbouring Team Settings page, which holds the adjudication rules instead. The second is the non-RCT auto-exclusion. This is the one place in Covidence where a machine verdict is the record that counts until a human reverses it, which is [Standing Verdicts](METHOD.md#standing-verdicts) behaviour living inside a Human Approval product. Whether it runs unless you turn it off is not documented in prose. The vendor's own screenshot of the Automation options panel shows the box ticked (screenshot only), a sibling feature is stated to be default-on, and this one is stated neither way. Treat it as material: on a health review this is a classifier excluding records in bulk before any person has seen them, justified by recall rather than by review.

The relevance ranking decides display order and nothing else, and the vendor says so: Covidence recommends no stopping rule and removes no study on the basis of a predicted relevancy score (covidence.org/blog/machine-learning-the-game-changer-for-trustworthy-evidence/). Its own help article names the residual risk, that reviewers may perceive early-ranked items as more important, in ways "the tool cannot fully safeguard against" (/help/ai-feature-most-relevant-sorting). Under METHOD's [definitions](METHOD.md#three-words-the-tests-depend-on) rank order is not a verdict, and the RCT tag is a verdict about study design rather than about fitness against the researcher's criteria. One stage later, at extraction, the contrast is exact: "Reviewers must accept or reject each suggestion individually, suggestions are never saved automatically" (support.covidence.org/help/settings).

### What checks the work

Covidence validates its models, not its humans' decisions. A per-feature directory table publishes model type, developer, training basis and safety measure for all five automation features (support.covidence.org/help/covidences-approach-to-responsible-automation-ai). The RCT classifier is listed at over 99.5% sensitivity, citing Thomas et al. 2021, which is a developer evaluation of a third-party EPPI-Centre component rather than an independent evaluation of Covidence. The relevance sort carries a citation to Miwa 2014 for the method and no Covidence-specific evaluation. Extraction suggestions carry per-field precision and recall with 95% confidence intervals, on a curated sample.

The only quantity the platform computes about human decisions is agreement, worked out after the fact, and it gates nothing. Resolving conflicts does not affect the inter-rater reliability scores (support.covidence.org/help/exporting-inter-rater-reliability-data), and a team can compute kappa and ignore it.

**Independent evaluations: three papers, two groups.** Ringeval, Paré, Vial and Motulsky (ECIS 2026, aisel.aisnet.org/ecis2026/litrev/litrev/11/) worked from a 5,808-reference dataset. They report that Covidence screened 505 references in 53 minutes and retrieved 5 of 28 relevant studies, a recall of 17.8%, against ASReview achieving full recall on 746 references. Read that before reusing it. Screening 505 of 5,808 means screening stopped early, Covidence documents no stopping rule and explicitly recommends none, and the abstract does not state what rule the authors applied. It is a fair test of active-learning screening as a practice and an ambiguous test of Covidence as documented.

Two further papers with overlapping authors (Yao et al., *Intelligent Medicine* 2026, doi:10.1016/j.imed.2025.12.008 and doi:10.1016/j.imed.2025.12.006) exist and were verified through Crossref for metadata only. Both ScienceDirect pages return 403, the web code for access refused, to every retrieval method tried. So no number and no conclusion from either is citable here, and figures circulating in search summaries should not be repeated until someone opens the PDFs.

No evaluation of Covidence's own dual-screening and adjudication workflow was found, from the vendor or from anyone else: no conflict rates, no adjudication quality, no measurement of whether the third vote changes the outcome. The general practice does have evidence behind it, since Gartlehner et al. 2020, relayed in Elicit's evaluation post, found dual-reviewer abstract screening more sensitive than single-reviewer screening (97.5% against 86.6%). What is unmeasured is this implementation of it, which is the part a team copying the design would want to know.

### What leaves

Three things leave, and the gap between them is the finding.

The PRISMA 2020 flow diagram as DOCX, available at any time, carrying counts for identification, deduplication, screening, inclusion and exclusion, with per-reason counts at full text, plus one placeholder box the author must correct by hand (support.covidence.org/help/export-prisma). No reviewer name appears anywhere in it.

Reference lists as RIS or CSV, per stage, with notes and tags as columns and exclusion reasons as notes (support.covidence.org/help/exporting-study-lists-to-your-reference-manager). A tip in the same article gives away what these files are. It recommends exporting the list before screening starts, which tells you this is a snapshot of where records currently sit, not a log of how they got there.

An inter-rater reliability CSV, per stage (support.covidence.org/help/exporting-inter-rater-reliability-data). Inter-rater reliability means how often two reviewers agreed. The actual columns are legible only in the screenshot embedded in that article (screenshot only): Reviewer A, Reviewer B, the four agreement counts, proportionate agreement, the probability columns, and Cohen's Kappa. One row per named reviewer pair, with aggregate 2x2 counts and no record identifiers. This is the most load-bearing piece of evidence in the trace and it is not present as page text.

And the thing that does not exist: "it's not currently possible to export information on voting history or records of conflicts" (support.covidence.org/help/can-i-export-voting-history-slash-records-of-conflicts, last updated 22 Oct 2025). The documented workaround is manual and lossy. You export the Resolve Conflicts list as references before the final vote, which captures that a conflict existed without the votes.

So what leaves Covidence at screening is the surviving records plus pairwise agreement statistics. The decisions, with who made them, do not leave. They are retained and visible in-app record by record, and there is no export path. Extraction, one stage later, behaves the opposite way and offers a pre-consensus individual-reviewer export, with a warning that it contains unblinded data (support.covidence.org/help/export). The per-reviewer export therefore exists in the product, and is simply not offered for screening.

That bears directly on [the Human Approval test](METHOD.md#human-approval), whose second clause asks for the decision flow to leave the platform as evidence. The screening-stage exports attribute agreement counts to reviewer pairs and attribute no ruling to anyone. This trace is why that clause now says the export need not carry names itself. The tempting rescue is to say that no machine attaches a screening verdict here anyway, and the non-RCT auto-exclusion on the health path contradicts it.

### Calling it from code

Nothing, and the absence is thorough rather than merely undocumented. The knowledge-base sitemap lists 480 URLs and zero contain "api". `covidence.org/api`, `/developers` and `app.covidence.org/api` return 404. `api.covidence.org` and `docs.covidence.org` do not resolve at all, which is to say the name maps to no server anywhere. The marketing page's integration claim is entirely about file formats. The deepest-looking integration, RevMan, is a manual file handoff in both directions. The GitHub organisation holds 21 public repositories, none a client library or API specification. The integrations that exist are institutional SSO and downstream file export.

Set against Elicit the position is exact. Elicit's API removes the single-reviewer path's one mandatory act and carries no reviewer concept at all, so its documented gates live only in the browser. Covidence's gates bind properly and are also reachable only in a browser. Neither product gives a platform team a building block for adjudication that it can call, and for opposite reasons: Elicit's API carries no reviewer concept, and Covidence's reviewer mechanism has no API.

### Not documented

Who may change Review Settings, where the dual-to-single switch and the automation toggles live. Whether the non-RCT auto-exclusion is on or off by default for an eligible review. Screening throughput or any service-level agreement. Whether the IRR CSV contains per-record rows in addition to the pair summary. Whether View history carries timestamps, and whether it distinguishes automation actions from human ones. How the PRISMA DOCX labels records removed by the RCT classifier. Whether any Covidence model reads the eligibility criteria. Whether the active-learning model is isolated per review. Data retention, review deletion, and what happens to vote history when a subscription lapses. Whether one person holding two accounts can cast both votes.

### For a platform team

The integration boundary is a file and a human session. You can push RIS in and pull CSV, RIS and DOCX out, by hand. You cannot add records to the queue from code, watch a decision as it is made, subscribe to conflicts, or retrieve the adjudication record at all, because it does not leave. Embedding adjudicated screening therefore means building it yourself, and this trace doubles as the specification. A record-level vote store keyed by reviewer identity, with the required number of votes enforced at the record. Blinding coupled to third-party adjudication, with the resolver group defaulting to exclude the disputants, which is the cheapest improvement available over what Covidence ships. A permission model inside the project and not only at the organisation. Explicit, confirmed and audited handling of any mode change that commits records in bulk. A machine pre-filter that states its default. And an export layer that ships the decisions and not only the survivors, which the product itself shows is not a hard problem.

One mechanism is worth lifting wholesale, and it is unrelated to screening. For every automated component Covidence publishes a paste-ready disclosure paragraph. It names the model, its developer, its training and validation basis, the justification for using its output and its limitations, aligned to RAISE and the 2025 Cochrane Position Statement (/help/covidences-approach-to-responsible-automation-ai). It also tells users how to calibrate, by manually verifying a random sample of affected records, suggesting 50 to 100 records or 20% of the excluded set (/help/should-i-use-automation-ai-in-my-review). A platform that shipped per-component disclosure text and a calibration recipe alongside each automated step would solve, at near-zero cost, a reporting problem its users will otherwise solve badly by hand. It is a documentation pattern rather than a product feature, so it transfers without depending on anything Covidence built.

Covidence enforces its checkpoints properly. It carries the most carefully built adjudication workflow in these four traces. And it is a dead end as a component. Its value to a platform team is as a specification and a set of design decisions to copy or deliberately reject.

---

## Head to head: what happens to a record when nobody acts

Both systems screen the same 2,000 abstracts to the same end product. They differ on one question, and everything else follows from it.

| Path | A record with no human action | Source |
| --- | --- | --- |
| Elicit, single reviewer (default) | the model's label is the record, and stays the record | documented, 14759154: override is per paper, "click on that paper and then select your decision" |
| Elicit, dual review (Enterprise) | the model labels first, then two reviewers rule. What happens if one never finishes is not documented, since "once both finish" is the whole specification | documented in part, 14759154 |
| Elicit, API (any tier) | the review completes: criteria no human read, screening, extraction, report, PRISMA diagram | documented: `researchQuestion` is the only required field |
| Covidence, default | the record parks at "awaiting other reviewer" and does not advance, with no timeout, no majority and no model fallback | documented, /help/what-does-the-status-awaiting-other-reviewer-mean-in-covidence |
| Covidence, conflicts | the record stays in the conflicts queue until a third vote | documented, /help/resolving-conflicts-at-screening-stage |
| Covidence, non-RCT auto-exclusion (health reviews) | the record is excluded with zero human votes, reversible per item or in bulk, and whether the feature is on by default is not documented | documented, /help/ai-feature-remove-references-reporting-on-non-rcts-before-screening; the default is screenshot only |
| Covidence, after the dual-to-single switch | every half-screened record moves forward permanently, on one click, with no per-record record of who authorised it | documented, /help/switching-from-dual-to-single-reviewer-mode |

Read the table as two claims rather than a ranking. Covidence's default genuinely waits, and waiting is the property the [Human Approval](METHOD.md#human-approval) category is named for. Its exceptions are a machine act whose default is undocumented and a bulk switch whose permission boundary is undocumented. Elicit's qualifying mechanism is real, but it sits on one tier, one surface and one stage, and the path most users are on behaves like the category above.

Two conditionals belong on the README rows as a result. Elicit's entry already distinguishes its dual-review path from its default. Covidence's needs the mirror image, distinguishing its default from what a team can switch it to.

---

## Atinary SDLabs: a parameter space over several rounds

**The task.** Optimizing a multi-parameter experimental condition over several rounds. Filed in [Bench](README.md#bench). One real instance exists, from a paper the vendor links: five environmental parameters across spin-coating and annealing of perovskite solar cells, 33 experiments over one initial sampling round and four active-learning cycles (Liu et al., *ACS Energy Lett.* 2026, doi:10.1021/acsenergylett.5c02410).

Three retrieval facts shape everything below. The vendor's technical documentation host, enterprise.atinary.com, returns NXDOMAIN, which is the answer a name server gives when a name maps to no server at all. It has no Wayback snapshot either. Indexed pages from it therefore survive only as search snippets, and they are not quoted here as live documentation. A complete public OpenAPI 3.0.3 document does exist, unauthenticated, at `https://api.sdlabs.atinary.com/schema/` (SDLabs API 2.50.0, 344 KB), linked from inside the application rather than from the marketing site. And the application publishes its JavaScript source maps, the files that turn compiled code back into what a developer wrote, so a reader gets the original TypeScript including developer comments. That evidence is the strongest available about the shipped interface and it takes the †, since a string in a bundle proves distribution rather than availability.

### What you hand it (documented, from the schema)

A configuration object, not a question. `ExperimentCreateInput` requires five things: name, parameters, measurements, batch_config, algorithm.

Parameters are numerical with bounds and an optional step, or categorical with a named list. The schema states a recommended maximum of 20 parameters and a hard maximum of 10 objectives. Measurements are the quantities you report back, and objectives sit on top of them with a goal defaulting to maximize. Constraints are a proper part of the model, with declared types, including conditional rules that exclude parts of the space. `batch_config` carries one integer, how many conditions come back per round. `algorithm` carries a random seed, categorical descriptors, and a required `expert_context` free-text field capped at 4,000 characters. That field is the one place a researcher's prior knowledge enters the optimizer as prose.

Optionally, historical data: a CSV mapped onto parameters and measurements so a campaign starts warm rather than from nothing.

Behind a feature flag, meaning a switch that turns a feature on for some accounts and off for others, a draft experiment also gets a chat panel that ingests attached documents and helps write the configuration (†, `src/app/hooks/useFeatureFlag.ts`, flag "agent"). It works on the draft configuration. It does not propose experimental conditions.

### What it does (documented)

Create a draft, optionally score its optimization difficulty, publish it, start it. The start endpoint's own description says it "Begins optimization by generating initial recommendations. Transitions status to RUNNING". That contradicts the status enum, since `ExperimentStatusEnum` has no RUNNING value. The observable states are draft, created, configuration_changed, recommending, waiting, error, stopped, retraining, retraining_error.

Recommendation generation is asynchronous with no job id and no webhook. The client polls the experiment or listens on a WebSocket, a connection held open so the server can push updates as they happen. Duration is not documented anywhere reachable. When the status reaches `waiting`, rendered as "Ready" in the interface (†, `src/lib/experiment/utils/formatExperimentStatus.ts`), the recommendations endpoint returns a batch of suggested parameter combinations. Early rounds are labelled initial design and later ones model-guided.

You run the experiments. Nothing in the platform participates in this step. Then you submit measurements, which "Triggers model retraining and new recommendations", and the loop repeats. Side branches exist for regenerating recommendations, retraining, retrying and stopping. Editing the configuration mid-campaign moves the experiment to `configuration_changed` and prompts a regenerate.

### What persists (documented)

This is the strongest part of the product. An experiment owns runs, an output dataset, optional historical datasets, labels, the expert-context blob and a batch configuration, and drafts persist before publication.

The data model is better than the marketing suggests. Each proposed condition becomes a Datapoint, and per parameter a `DatapointParameterValue` stores four fields: suggested text and numerical values alongside executed text and numerical values. What was proposed and what was actually executed are retained side by side, per parameter. A Datapoint also carries `created_by` (required), notes, an invalid flag, the run that produced it, measurements, predictions and a merit score. That is the closest thing SDLabs has to a decision trail.

Multi-tenancy, meaning several customers sharing one system without seeing each other's work, is explicit. An `X-TEAM-ID` header ties every request to one team, there are three team roles, and a documented transfer operation appears in the interface as unlocking an experiment for the team (†, `src/app/routes/experiment/ExperimentDetailsRoute.tsx`). Runs are versioned by iteration number and carry an MLflow model id, so the model behind each round is identifiable.

What is not versioned is the experiment configuration itself, which is changed in place, with no history endpoint and no way to see what differed. The interface comments acknowledge the resulting staleness problem and clear cached charts on a configuration change (†, `src/app/queries/experiment.ts`). A researcher who widens a bound in round four has no documented way to retrieve what the bound was in round three.

### Where a human can intervene

| Checkpoint | Mandatory | Granularity | Surface | If nobody acts |
| --- | --- | --- | --- | --- |
| Publish and start the campaign | yes | bulk, once, covering every round | UI and API | nothing runs |
| Edit a proposed value before recording it | no | per item | UI and API | the suggestion is recorded as executed |
| Remove a proposed condition | no | per item | UI only † | the condition stays in the batch |
| Submit results | yes | bulk, per batch | UI and API | the loop stalls and no new proposal is generated |
| Approve an agent tool call (feature-flagged) | yes, for that call | bulk across a turn | UI only † | the literature query is not sent |

Table rows two, three and five are bundle evidence, from `src/lib/experiment/ExperimentDetails/ExperimentMeasurements.tsx`, `src/lib/experiment/hooks/useMeasurements.ts` and `src/lib/experiment/agent/AgentChat/ToolApprovalCard.tsx` respectively, recovered from the published source maps under `https://sdlabs.atinary.com/assets/`.

There is no documented approval control on a proposed condition. There is no pending, proposed, accepted or approved value in the status enum, and no accept or approve operation anywhere in the 95 paths of the OpenAPI document. The only dialog in the product that is genuinely about a specific proposal is a confirmation of a rejection: removing a suggested condition warns that this "is allowed, but it may reduce model efficiency" (†, useMeasurements.ts). Silence advances the loop with the proposal intact.

The one approval mechanism in the product governs whether a literature-search query leaves the platform, not whether an experiment is run. It renders the entire outbound payload verbatim, explains the exposure, and offers "Send it" or "Change something" (†, ToolApprovalCard.tsx), and its own comment states that one decision covers every pending request in a turn.

So the wait between a proposal and the next proposal is a data dependency rather than a control. The optimizer cannot retrain without a number, and only a human can currently supply that number. In the manual workflow that dependency coincides with a researcher deciding to spend material. But the platform records what was executed, afterwards, and records nothing about a decision to run nothing at all. Through the API the wait is not even that. A script holding one key can poll for recommendations and post measurements in a loop, with no interface and no human. The submission is attributed to the key's owner whether or not anyone read the proposal.

That bears on the third clause of the [Bench test](METHOD.md#bench), which asks for a human act between one proposal and the next. This trace is why that clause no longer demands an approval control inside the software, since no listed system ships one. It is the same clause METHOD gives as the reason for excluding Dakota.

The robot case has the same shape, and the best evidence on it is not marketing. The IBM RoboRXN integration paper (peer-reviewed, vendor co-authored: Schilter et al., *Chem Sci* 2024, doi:10.1039/D3SC05607D) puts a human operator in the loop twice, starting a loaded reaction and entering HPLC peak areas. That is laboratory physics rather than a product control, and the authors say they wrote their own backend application to connect the two platforms. The marketing pages meanwhile advertise the gate's absence as a feature, describing robotic batches that sync back for next-iteration planning with "no manual intervention" (demonstrated).

### What checks the work

The system does not check its own output against anything. Input-side validation exists: values outside declared bounds are flagged, though one of the two optimizers accepts them anyway, and submission is refused if a measured value is blank (†, `ExperimentMeasurements.tsx`, `useMeasurements.ts`). Runs carry warnings and errors surfaced as an Attention banner, a model-status endpoint answers whether the model is stale, and analytics endpoints compute prediction explanations and landscape charts. None of these adjudicates whether a returned measurement is correct. A datapoint can be marked invalid by a user, which is a human judgment the platform stores rather than one it makes. Thumbs-up and thumbs-down endpoints collect feedback for the vendor.

Four peer-reviewed campaigns exist and every one has Atinary staff among the authors, so they are peer-reviewed vendor co-authored work rather than third-party evaluation: Liu et al. (doi:10.1021/acsenergylett.5c02410), Ramirez et al. (doi:10.1016/j.checat.2023.100888), Schilter et al. (doi:10.1039/D3SC05607D), Saudan et al. (doi:10.1021/acscatal.5c06595), affiliations verified through api.crossref.org. No published head-to-head against BoTorch, Ax, Dragonfly or any other baseline was found. The marketing carries numbers with no method attached, including a 5x to 100x claim and an anonymous testimonial about outperforming alternatives (demonstrated). One quality signal worth recording: the experimental-design page still ships untouched placeholder lorem ipsum in one block.

### What leaves

Data leaves in three formats. No record of a decision leaves at all.

Dataset export offers CSV, XLSX and JSON and carries datapoints with parameter values, measurements, notes and validity. Experiment export is configuration only, as Markdown or its JSON twin. The interface writes a per-iteration recommendations CSV with empty measurement columns, which is the sheet you carry to the bench (†, `src/lib/experiment/utils/csv/downloadRecommendations.ts`).

Because the database persists suggested and executed values separately and every datapoint carries `created_by`, it holds enough to reconstruct that the model proposed X, that person P recorded that Y was run, and that the result was Z. Whether the dataset export actually emits both the suggested and the executed columns is not documented and could not be established without an account. That gap is the difference between an exportable provenance record, meaning a record of where each value came from, and a plain table of executed conditions.

There is no decision log, no approval trail, no reviewer attribution and no per-decision audit export. A team activity feed exists with no export endpoint, and it is a workspace feed rather than an experiment decision record. The marketing promises something else: "Reproducibility and Audit Trails: Automatic, immutable logging of every experiment's conditions, parameters, and results" (demonstrated, https://atinary.com/technology/sdlabs/). The application does contain a per-experiment history route, with three defined event types. What it actually renders is thirty randomly generated lorem ipsum items, from a function whose name says they are fake, with the per-user attribution line commented out (†, `src/app/routes/experiment/ExperimentHistoryRoute.tsx` and `src/lib/experiment/history/eventType.ts`). Two qualifications, because overstating this would be easy. Nothing in the navigation links to that route, and bundle evidence shows distribution rather than availability. The correct statement is that an unshipped placeholder for a per-experiment history exists in the production bundle, and no working per-experiment decision log is reachable in the interface or the API.

### Calling it from code

A real, complete, self-service REST API, and the most reusable thing in the entry. OpenAPI 3.0.3 served without authentication, Swagger UI alongside it, 95 paths across experiments, datasets, design spaces, analytics, IAM, labels, research, agent and auth. Bearer tokens or self-service API keys, team context in a header, three roles. The chain a platform team would actually use runs from draft, patch, publish and start, through polling for status, fetching recommendations and posting measurements, to dataset export, with regenerate, retrain, retry, stop and predict as side branches. Analytics endpoints use a proper task-id pattern, and experiment recommendations do not. No webhooks, and per-iteration latency is not documented.

The consequence for this audience: the API bypasses every interface-level checkpoint described above, because there is no checkpoint to bypass. A daemon, meaning a program that runs unattended in the background, holding one API key can run an entire multi-round campaign.

No MCP server was found, and no published Python or JavaScript SDK. The obvious PyPI names return 404 and there is no Atinary GitHub organisation. The Scientia API offered to academics on six marketing pages has no reachable documentation, and neither does Nexus, the file-exchange layer the IBM paper says it used. The former SDK documentation is indexed by search engines on a host that no longer resolves, so an SDK plausibly existed and its documentation has been withdrawn.

### Not documented

Any approval, acceptance or hold state on a proposed condition, in the interface, the status enum or the API. How long a recommendation round takes, for any space or batch size. Whether the dataset export emits suggested values alongside executed ones. How the robot and liquid-handler integrations actually work: partners are named and the integration is called seamless, and no connector, adapter, driver, message schema or reference implementation is published, while the one published account has the customer writing the glue. Pricing and access conditions, which are a contact form. Nexus and the Scientia API. A second optimizer, Pluma, which appears in the bundle with its own insight panel and its own bound-clamping behaviour (†, `ExperimentMeasurements.tsx`), and on no public page. Acquisition functions, kernels, surrogate families or hyperparameter policies behind the named models. A vendor benchmark of any kind against an open-source baseline.

### For a platform team

Copy the proposal-and-execution split directly. Keeping suggested and executed values side by side on the same record, with the executed field as the editable one, answers three questions at once: what the model wanted, what the human actually did, and whether the difference mattered. It does that with no approval workflow at all. It is the single best idea in the product.

The lesson to avoid is the one this trace exists to make legible. A data dependency is not a control, and the two are easy to confuse. SDLabs looks human-gated because the loop stalls until someone types a number. It has no control gate. The system has no concept of a proposal being accepted, and the same API that serves the recommendation accepts the result. If a platform's human authority rests on the human having to go to the bench, it disappears the moment the bench is automated. Authority has to be a state the system refuses to leave rather than a step the world happens to be slow at.

The one real gate here is well designed, and it gates an outbound data flow rather than an action. It shows the whole payload before it leaves the boundary, and it treats unknown fields as visible by default, so a field added to the tool later cannot be approved unseen (†, `ToolApprovalCard.tsx`). For a multi-institution platform where the sensitive event is information crossing a boundary, that is a better model than a generic confirm dialog.

Build versus buy. The optimizer is real, exercised in four peer-reviewed campaigns, and exposed through a complete self-service REST API. If the need is Bayesian optimization over a constrained multi-objective space with a usable interface for bench scientists, this is a credible dependency. Bayesian optimization means the system builds a statistical guess at how the settings affect the result, then uses that guess to choose what to try next. If the need is an auditable human-authority layer or a documented robot connector, neither exists. Two procurement cautions. The technical documentation host has been withdrawn, so the durable interface contract is the OpenAPI document rather than prose you can cite. And the application publishes its own source maps, which is a security-review item for anyone deploying it on proprietary chemistry.

---

## Across the four traces

### Programmatic access, and whether it preserves the checkpoints

| | ClawsGO | Elicit | Covidence | Atinary |
| --- | --- | --- | --- | --- |
| Documented API | none; `/api`, `/docs/api`, `/developers` all 404 | OpenAPI 3.1.0, plus an MCP server | none; 480 knowledge-base URLs, zero containing "api" | OpenAPI 3.0.3, schema served unauthenticated |
| Binding human checkpoint on research content | none | one in the UI (criteria approval), plus dual-review adjudication on Enterprise | per record, enforced by the platform | none |
| Does the API preserve it | no API | **no**: the API removes the one mandatory act | no API | nothing to preserve |
| Push completion signal | not applicable | none; polling only | not applicable | none; polling or a WebSocket |

The pattern across all four: binding human authority and programmatic access never coexist. Covidence enforces its checkpoints and cannot be called. Elicit and Atinary can be called, and neither enforces anything on the programmatic path. ClawsGO has neither. A platform team that wants adjudicated screening, or a gated optimization loop, as a callable service will not find one here. That makes a callable building block for adjudication the clearest unoccupied space these four traces expose.

Two API-design patterns are worth separating from that verdict. Elicit's `source` enum, recording whether a session came from a user, the API, MCP or an agent, is small schema doing real work. Atinary's suggested-versus-executed field pair is the same idea applied per value.

### What persists between sessions

All four persist a unit of work on their own servers, and they differ in what that unit remembers. ClawsGO persists a project working directory that later tasks inherit, with git status letters and no documented commit or history. Elicit persists a review session in a namespace shared with API-created sessions, with version history documented only for a different product surface. Covidence persists a review with per-record vote history retained in the app, surviving the reviewer's removal, and versions nothing at all. Atinary persists an experiment with per-parameter suggested and executed values and an MLflow model id per run, and changes its configuration in place with no history.

None of the four documents a versioned protocol or criteria object. Covidence's own advice points outward to PROSPERO and OSF for exactly that, which is a clean statement that the frozen protocol lives in a registry rather than in the platform.

### What an audit trail contains when there is one

Four systems, four different things called a record, and none of them attributes an individual ruling to a named person.

| System | What actually exports | Who it attributes to |
| --- | --- | --- |
| ClawsGO | a step timeline, viewable and shareable, with no documented export; plus a billing CSV by member | the model, for the timeline |
| Elicit | stage CSVs and XLSX, a PRISMA diagram built from search-tab provenance; an audit trail sentence documented under Enterprise dual review only, with no published schema | not determinable from public documentation |
| Covidence | a PRISMA DOCX with no reviewer name, stage reference lists, and an IRR CSV of named reviewer pairs with aggregate counts and no record identifiers; voting history explicitly not exportable | reviewer pairs, for agreement counts; nobody, for any individual ruling |
| Atinary | dataset CSV/XLSX/JSON and a configuration file; no decision log, and an unshipped placeholder history route | the key or account that submitted, implicitly |

The recurring failure has the same shape in all four. A record exists that looks like evidence, and it turns out to be a transcript, a snapshot, a spend log, or an aggregate. A PRISMA diagram generated from a model's own screening passes, as in ClawsGO's demo and on Elicit's API path, carries no reviewer attribution while looking exactly like the document that is supposed to prove one.

### How execution recovers when it fails

Here the four diverge usefully rather than converging. ClawsGO has the best operational contract: a table of named interruption states, each with a stated meaning and a Continue remedy that resumes from saved progress (https://clawsgo.ai/docs/faq/troubleshooting). Elicit exposes four statuses and one recoverable pause, which is financial, cleared by a resume call. Atinary exposes error, stopped and retraining_error states with retry and retrain operations and per-run warnings surfaced in the interface. Covidence has nothing to recover because it runs no job: screening is a human-paced queue, and the only asynchronous work is import and export preparation.

The transferable observation is that a named list of failure states, each with its own remedy, is cheap to write, and none of the other three has one.

### Where the market has not converged

Naming this is a finding rather than an absence of data. On checkpoint behaviour under silence, the four do four different things: proceed after a timer, stand as the record, wait indefinitely, or stall on a data dependency that a script removes. On the decision record, none of the four exports a per-record ruling attributed to a named person with a timestamp, and the one system that retains that information in the app documents that it cannot be exported. On API-side gates, no system in these four traces has one.

Limit that last claim carefully. Rayyan, DistillerSR and Silvi sit in the same README category and were not traced here, and two of those three rows claim logs that name which reviewer made each call, while Silvi's claims only a decision log. Nothing above is evidence against those rows.

---

## The coverage map

The decisions a platform team has to make, and what the four traced systems document about each. There are three statuses, and the difference between the last two matters. The status **not converged** means the four answer differently, so there is no default to inherit. The status **absent in all four** means every system documents or demonstrates that the thing does not exist. And **not documented by any** means all four are silent.

| Decision | What the four traces found | Status |
| --- | --- | --- |
| What happens to a checkpoint nobody answers | proceed after 10 minutes (ClawsGO), the label stands (Elicit), the record waits (Covidence), the loop stalls until data arrives (Atinary) | not converged |
| Whether a gate exists on the programmatic path as well as in the UI | the Elicit schema contains none of the gate strings, Atinary has 95 paths and no accept operation, and the other two have no API | absent in all four |
| Whether a per-record decision export carries identity, timestamp and prior value | Covidence documents that voting history cannot be exported, Atinary has no decision log, ClawsGO documents no timeline export, and Elicit's audit-trail sentence has no published schema | absent in all four |
| Who may change the rules governing adjudication | Covidence answers it, permissively: any reviewer can edit the team settings that govern who adjudicates. The other three have no adjudication rules to govern | not converged |
| How a bulk mode change that commits records is authorised and recorded | Covidence's dual-to-single switch is one click and one modal with no record naming who did it, and the other three have no equivalent | not converged |
| Whether criteria, protocol or configuration are versioned | none of the four versions them, and Covidence documents criteria as changeable at any time with no record, pointing instead to external registries | absent in all four |
| Whether reviewers see the model's call, and what that does to independence | Elicit deliberately shows it to both blinded reviewers, Covidence's own help text names automation bias as a risk it cannot fully safeguard against, and nobody has measured the effect in either | not converged, and unmeasured |
| What counts as a sensitive or risky action worth interrupting for | ClawsGO uses both terms without defining either, and no other system here has the concept | not documented by any |
| A push signal on completion | polling is documented as the only completion signal wherever there is an API at all | absent in all four |
| Retention, and what happens to records when a plan ends | not stated by any of the four. ClawsGO documents deletion as irreversible without stating retention | not documented by any |
| Expected duration of a real workload | only ClawsGO's 24-hour cap and Elicit's 5-15 minutes for reports alone, with no screening or optimization latency figure anywhere | not documented by any |

Five tests are worth writing against your own implementation, and each is stated as evidence rather than as a feature. First, an exported decision record in which every include or exclude call carries a named person, a timestamp and the criterion applied, and from which the PRISMA counts can be reconstructed. Second, a halt test: start a run, ignore the checkpoint, and show the run still waiting after N minutes rather than having proceeded on a default. ClawsGO fails this as documented, and Covidence passes it. Third, an API-parity test, exercising the same checkpoint through the programmatic path, which none of the four would pass. Fourth, a replay test, reconstructing from the export alone, without the platform, which decisions were the model's and which were a human's. A record that cannot support that is a transcript. Fifth, a dual-reading test, comparing the model's call against an independent human's on a sample, reported as agreement with confidence intervals, separately for reviewers who saw the model's recommendation and those who did not. That last one is the anchoring question nobody in this market has answered.

---

## What these traces put in question

Stated as facts with their tests, rather than as proposals to move entries between categories. The placement decisions belong in a PR against the [README](README.md), following [CONTRIBUTING](CONTRIBUTING.md).

- **Atinary and the third [Bench](METHOD.md#bench) clause.** The trace finds no approval state in the status enum, no accept operation in 95 API paths, and an API that closes the loop unattended. METHOD answered this by rewriting the clause to ask for a required human act rather than an approval control, and filing the entry on its default mode, where the researcher still has to bring the measurement back.
- **Covidence and the second [Human Approval](METHOD.md#human-approval) clause.** At screening, what exports is a PRISMA DOCX with no names and an IRR CSV attributing agreement counts to reviewer pairs, with voting history documented as not exportable. The per-reviewer export exists one stage later, at extraction. METHOD answered this by saying the export need not carry names itself, provided a reader can rebuild the flow.
- **Elicit's tier and path qualifications.** The audit-trail sentence sits under Enterprise dual review, the pricing page mentions no PRISMA flow diagram at any tier, and per-decision quotes depend on Thorough screening depth.
- **The Record facet example in [METHOD](METHOD.md#the-facets).** ClawsGO's documented log, the kind whose entries are the model's own labels, is the step timeline, which is viewable and shareable rather than exportable, and the screening log that looks like the example is demonstrated only.
