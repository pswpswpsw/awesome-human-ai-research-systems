# Awesome Human-AI Research Systems (HAIRS) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, commercial-product-first list of systems where AI collaborates with human researchers — from formulating a question to drafting the manuscript.

**This list is deliberately narrow, and deliberately small.** Most "awesome AI for science" lists fail in one of two ways: they try to be exhaustive and eventually rot because nobody has the bandwidth to maintain 400+ entries, or they're really just a bibliography of papers — most of which stop mattering the moment the grad student who wrote them graduates.

Every entry here has to pass two tests:

1. **Can a researcher actually use it today?** No waitlists, no trusted-tester programs, no private previews, no "contact your account team."
2. **Is it a research *system*?** Purpose-built for a step of the research workflow — not a general-purpose chatbot, not a discount/access program, not a prompt template.

Things that failed those tests are listed in [Deliberately Not Listed](#deliberately-not-listed), with reasons. Open-source and academic projects get one small dedicated section rather than being mixed throughout.

Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

- [Autonomous Research Agents (end-to-end)](#autonomous-research-agents-end-to-end)
- [Research Planning, Question & Hypothesis Formulation](#research-planning-question--hypothesis-formulation)
- [Literature Search, Review & Synthesis](#literature-search-review--synthesis)
- [Systematic Review & Evidence Synthesis](#systematic-review--evidence-synthesis)
- [Experiment Design & Lab Assistants](#experiment-design--lab-assistants)
- [Academic Writing & Manuscript Assistants](#academic-writing--manuscript-assistants)
- [Peer Review Assistants](#peer-review-assistants)
- [Grant Writing Assistants](#grant-writing-assistants)
- [Academic & Open-Source HAIRS](#academic--open-source-hairs)
- [Deliberately Not Listed](#deliberately-not-listed)
- [Related Awesome Lists](#related-awesome-lists)
- [Contributing](#contributing)
- [License](#license)

---

## Autonomous Research Agents (end-to-end)

Systems that run large chunks of the research pipeline — search, analysis, drafting — with minimal human intervention, typically on cloud compute over a period of hours.

- [ClawsGO Science](https://clawsgo.ai/) — Submit a single research question and get back literature reviews, analyses, figures, and a citeable manuscript draft; supports LaTeX/SyncTeX, a cloud browser, and SSH offload to your own GPU cluster.
- [FutureHouse Platform](https://www.futurehouse.org/tools) — Suite of autonomous science agents (literature QA, deep search, precedent search) available on the open web and via API.

## Research Planning, Question & Hypothesis Formulation

Human-in-the-loop tools that help a researcher think *before* they collect data — clarifying the question, mapping the literature gap, and designing a defensible study.

- [Question First](https://www.questionfirst.org/) *(formerly planyourscience.com)* — Free AI mentor that walks researchers through formulating a research question, identifying the gap, developing and testing hypotheses, and choosing a methodology before starting a project.

> **Note:** this stage is strikingly underserved. Almost every AI research product jumps straight to literature search, skipping the part where a bad question wastes a year. PRs very welcome here.

## Literature Search, Review & Synthesis

- [Elicit](https://elicit.com/) — AI research assistant for finding papers, extracting data into structured tables, and synthesizing evidence.
- [Consensus](https://consensus.app/) — Searches and synthesizes findings across peer-reviewed papers, with a consensus-meter for contested claims.
- [Undermind](https://www.undermind.ai/) — Deep-search agent that iteratively reads and reasons over the literature rather than returning a ranked keyword list; aimed at exhaustive coverage of a narrow question.
- [Ai2 Asta](https://asta.allen.ai/) — Agentic literature tools (including Paper Finder) from the Allen Institute for AI; free and grounded in the Semantic Scholar corpus.
- [Semantic Scholar](https://www.semanticscholar.org/) — AI-powered academic search engine with citation graphs and TLDR summaries; free, nonprofit.
- [scite](https://scite.ai/) — Shows how a paper has been cited (supporting / contrasting / mentioning) via "Smart Citations."
- [SciSpace](https://scispace.com/) — Literature review, paper Q&A, and AI-assisted writing in one workspace.

## Systematic Review & Evidence Synthesis

The most mature human-AI division of labor in research: AI screens and ranks, a human decides, and the audit trail is publishable.

- [Covidence](https://www.covidence.org/) — Widely used systematic-review platform (Cochrane-affiliated) with AI-assisted screening and data extraction.
- [Rayyan](https://www.rayyan.ai/) — Collaborative screening platform with AI-assisted relevance ranking; long-standing standard in health sciences.
- [DistillerSR](https://www.distillersr.com/) — Enterprise literature-review automation with AI screening, built for regulated/pharma evidence workflows.
- [Silvi](https://silvi.ai/) — AI-assisted screening and data extraction for systematic reviews and meta-analyses.

## Experiment Design & Lab Assistants

- [Labguru Assistant](https://www.labguru.com/labguru-assistant) — AI assistant layered on an electronic lab notebook / LIMS for pharma and biotech labs.
- [Atinary SDLabs](https://atinary.com/applications/ai-experimental-design-platform/) — AI-driven platform for experimental design (design of experiments) and self-driving labs.

## Academic Writing & Manuscript Assistants

- [Paperpal](https://paperpal.com/) — AI writing and language-quality assistant built specifically for academic manuscripts.
- [Writefull](https://writefull.com/) — Academic-language feedback and paraphrasing; integrates with Overleaf and Word.

## Peer Review Assistants

- [Review-it](https://review-it.ai/) — Pre-submission manuscript review and journal-fit finder.
- [ScholarsReview](https://scholarsreview.com/) — AI peer-review, literature-review, and journal-finder assistant for academic writing.

## Grant Writing Assistants

- [Granted AI](https://grantedai.com/) — Grant discovery plus AI-assisted proposal drafting, with a focus on federal research funding (NIH, NSF, SBIR).

> **Note:** most "AI grant writing" products target nonprofit fundraising, not research funding. Research-specific entries are wanted here.

---

## Academic & Open-Source HAIRS

A small, hand-picked set of open-source/research-lab systems that are actually usable (not just a paper with no code), for people who want to run something themselves or build on it. Kept deliberately short — see [Related Awesome Lists](#related-awesome-lists) for the exhaustive paper trackers.

- [AI-Researcher (HKUDS)](https://github.com/hkuds/ai-researcher) — Production-ready autonomous scientific innovation agent (NeurIPS 2025); hosted demo at [novix.science](https://novix.science/chat).
- [scientific-agent-skills](https://github.com/k-dense-ai/scientific-agent-skills) — 165+ validated "agent skills" that turn any coding agent (Claude Code, Cursor, etc.) into a science assistant, plus 100+ scientific database integrations.
- [agent-literature-review](https://github.com/Arcadia-Science/agent-literature-review) — Open-source agent pipeline for automated literature review, from the research nonprofit Arcadia Science.
- [Deep-Research-Agent](https://github.com/CYC2002tommy/Deep-Research-Agent) — Autonomous pipeline with strict DOI verification and multi-source (Scopus/OpenAlex/Semantic Scholar) retrieval, exporting APA 7th `.docx` reviews.
- [ai-peer-review](https://github.com/poldrack/ai-peer-review) — Open-source tool for AI-assisted meta-review of scientific papers (Russ Poldrack's lab).

## Deliberately Not Listed

Recording what was cut, and why, is part of keeping the bar honest:

| System | Why not |
| --- | --- |
| [Google Co-Scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) | Trusted Tester / Preview only — Gemini Enterprise docs say "access to these agents is restricted; contact your Google account team." Impressive, but not something you can go use. |
| [Gemini for Science](https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/) | "Register your interest" waitlist for individuals, private preview for enterprise partners. |
| [OpenAI for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) | A subsidized-access program (free seats, training, credits at selected institutions), not a research system. |
| Google's [figure & peer-review agents](https://research.google/blog/improving-the-academic-workflow-introducing-two-ai-agents-for-better-figures-and-peer-review/) | Research-stage prototypes, no public product. |
| ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Liner | General-purpose assistants. Researchers use them constantly, but they're not research systems, and listing them adds no signal. |
| Prompt-template "hypothesis generators" | A prompt wrapped in a landing page is not a system. |
| Individual papers and preprints | Out of scope — see [Related Awesome Lists](#related-awesome-lists). |

If a system here becomes generally available, open a PR moving it up — that's exactly the kind of contribution this list wants.

## Related Awesome Lists

For the academic-survey side of this space — which changes fast and is better served by lists dedicated to tracking papers — see:

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) — Closest existing list to HAIRS in spirit; survey-companion list that also covers human-in/out-of-the-loop collaboration modes.
- [awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science) — 400+ open-source projects for AI-automated scientific research (code only, no commercial products).
- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — EMNLP 2025 survey-companion paper list.

Others in this space that overlap less directly: [Awesome-Agent-Scientists](https://github.com/AgenticScience/Awesome-Agent-Scientists), [Awesome-LLM-Agents-Scientific-Discovery](https://github.com/zjlrock777/Awesome-LLM-Agents-Scientific-Discovery) (biomedical-specific), [awesome-deep-research-agent](https://github.com/WuizaKaseiyo/awesome-deep-research-agent) (general-purpose, not research-specific), [awesome-HAI](https://github.com/bwang514/awesome-HAI) (Human-AI *Interaction*/HCI papers).

**Why a separate list instead of contributing to one of these?** None of the above curate live, usable commercial products as the primary focus. This list stays commercial-first and intentionally small; if it starts sprawling into a 400-entry paper bibliography, that's a bug, not a feature — open an issue.

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first. Short version: it must be usable today and purpose-built for research; one entry per PR; no papers (link a survey list instead); and if a category gets bloated, we prune rather than let it grow forever.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
