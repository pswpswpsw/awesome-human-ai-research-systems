// The "How they differ" table inside each need panel: for every system under
// a need, whether it has each feature that sets those systems apart. The README
// section and the chooser page are both built from this file.
//
// Two kinds of row. A derived row (selfhost, weights, own_text) is read straight
// off the system's own README cells, Access and Writes into your draft, and
// cannot drift from them. Every other value is entered here by hand and carries
// the URL and the exact words it rests on, copied from a page that was fetched
// and read, so any cell can be re-checked. Where the URL is README.md, the words
// must appear in that system's own README row. The values a cell may take:
//   yes  the vendor's pages, or the system's own README row, document it;
//        d: true when only page source or a script bundle says so, which the
//        README marks with a dagger
//   no   the vendor's pages say it does not, or the system's own README row
//        rules it out; for a hand-entered value, absence of evidence is never "no"
//   nd   nothing found on the vendor's public pages says either way
//   preprint, text   for rows that report a value, such as the evaluation row,
//        which names a study
// q is a short qualifier shown with the value, such as the path it applies to.
//
// The build refuses to run if a system under a need has no value for one of
// that need's rows, if a value is not one of the above, if a hand-entered yes
// or no has no source, if a README-sourced quote is not in that system's row,
// or if a row shows the same value for every system in the panel and so tells
// them apart from nothing.

const CHECKED = 'October 2026';

const FEATURES = {
  // literature
  relevance_reason: 'Says why each paper is relevant',
  coverage: 'Estimates how much of the literature it found',
  tally: 'Counts how many studies say yes or no',
  influence: 'Marks highly influential citations',
  uncited_label: 'Labels text it wrote without a source',
  runs_code: 'Runs code to reach the answer, and shows it',
  peer_reviewed: 'Evaluation published in a peer-reviewed venue',
  // systematic review
  dual: 'Two people screen each record independently',
  person_record: 'Records which person decided each item',
  prisma: 'Draws a PRISMA flow diagram',
  extraction: 'Cites the passage behind each extracted value',
  // citations and manuscripts
  fabricated: 'Flags references that match no real paper',
  retraction: 'Flags retracted references',
  stance: 'Shows whether later papers support or contrast a cited work',
  selfcite: 'Flags self-citation',
  score: 'Scores the manuscript',
  rigor: 'Checks reporting rigour such as blinding and power',
  rrid: 'Checks resource identifiers against a registry',
  claim_evidence: 'Checks each claim against the manuscript’s own evidence',
  journal_fit: 'Suggests journals that fit',
  // drafting
  finds_citations: 'Finds and inserts citations itself',
  loi: 'Drafts letters of inquiry',
  prereg: 'Handles preregistrations and study plans',
  self_review: 'Reviews the draft and applies every fix at once',
  runs_experiments: 'Runs the analyses itself',
  code: 'Hands you the code behind the results',
  latex: 'Compiles the paper in LaTeX',
  midrun: 'Stops at set points for your approval',
  self_check: 'Checks every citation and number in its own draft',
  // your own data
  own_model: 'Lets you choose the language model',
  evidence_package: 'Exports a package tying the claims you bind to their runs',
  rerun: 'Checks that the analysis reruns in a clean workspace',
  gates: 'Stops for your approval before it acts',
  // the lab
  closed_loop: 'Plans the next run from results you measure',
  admit: 'Waits for you to admit each proposal before it runs',
  notebook: 'Its output can be saved in your lab notebook',
  robot: 'Connects to lab robots or instruments',
  anomaly: 'Flags anomalies in your data',
  // any system
  api: 'Can be called from code',
  selfhost: 'You can host the whole system yourself',
  weights: 'Model weights are downloadable',
  own_text: 'Its text can go straight into your document',
};

// Rows read off the README row itself. cells: [system, does, rules, get, record, writes, access].
const DERIVED = {
  selfhost: (c) => ({ v: /self-host|install into a host/.test(c[6]) ? 'yes' : 'no' }),
  weights: (c) => ({ v: /open weights/.test(c[6]) ? 'yes' : 'no' }),
  own_text: (c) => {
    const w = c[5];
    if (/^(No\b|Not on its own)/.test(w)) return { v: 'no' };
    if (/^(Yes|It \*?is\*? the draft|Its output is saved|It writes)/.test(w)) {
      return { v: 'yes', d: /^Yes[^;.]*†/.test(w), q: /upgrade tier/.test(w) ? 'upgrade tier' : '' };
    }
    return null;
  },
};

// Which rows each need's panel shows, in this order.
const ROWS = {
  find: ['relevance_reason', 'coverage', 'tally', 'influence', 'person_record'],
  answer: ['runs_code', 'uncited_label', 'tally', 'peer_reviewed', 'weights'],
  review: ['dual', 'person_record', 'prisma', 'extraction', 'own_text', 'api'],
  citations: ['fabricated', 'retraction', 'stance', 'selfcite', 'own_text'],
  manuscript: ['score', 'rigor', 'rrid', 'claim_evidence', 'journal_fit', 'fabricated', 'own_text'],
  grant: ['finds_citations', 'loi', 'prereg', 'self_review'],
  paper: ['runs_experiments', 'code', 'latex', 'midrun', 'self_check', 'selfhost'],
  data: ['selfhost', 'own_model', 'evidence_package', 'rerun', 'gates'],
  next: ['closed_loop', 'admit', 'notebook', 'robot', 'anomaly', 'api'],
};

// Hand-entered values, keyed by the system's name as the README writes it.
// Each yes, no or text value carries the page it was read on and the words it rests on.
const CELLS = {
  "ClawsGO Science": {
    dual: { v: "no", url: "README.md", quote: "The question, then keep / revise / discard the whole study" },
    person_record: { v: "no", url: "README.md", quote: "Screening log of the model's own inclusion calls, seen only in a sample run on the homepage" },
    prisma: { v: "yes", q: "sample run only", url: "https://clawsgo.ai/", quote: "fig1_prisma_flow.png" },
    extraction: { v: "nd" },
    api: { v: "nd" },
    runs_experiments: { v: "yes", url: "https://clawsgo.ai/docs", quote: "On a Linux host of its own it searches, reads, writes code, runs analyses and drafts documents for hours" },
    code: { v: "yes", url: "https://clawsgo.ai/", quote: "Every plot is a reproducible bundle: figure, code, environment, version history." },
    latex: { v: "yes", url: "https://clawsgo.ai/", quote: "LaTeX drafts with real citations, compiled to PDF." },
    midrun: { v: "no", q: "asks at its own discretion, then proceeds", url: "https://clawsgo.ai/docs/quickstart/first-task", quote: "When a decision matters, ClawsGO stops and asks. ... Skip them all and it decides on its own." },
    self_check: { v: "nd" },
  },
  "Edison Platform": {
    runs_code: { v: "yes", q: "Kosmos", url: "https://docs.edisonscientific.com/overview.md", quote: "Kosmos autonomously reads literature, writes and executes analysis code, generates hypotheses, and produces a comprehensive cited report. ... You can trace any finding back to the specific code or literature passage that produced it." },
    uncited_label: { v: "nd" },
    tally: { v: "nd" },
    peer_reviewed: { v: "preprint", url: "https://arxiv.org/abs/2511.02824", quote: "Kosmos: An AI Scientist for Autonomous Discovery" },
    own_model: { v: "yes", q: "enterprise agent profiles", url: "https://docs.edisonscientific.com/edison-client/agent-configurations.md", quote: "LLM for this profile; `None` uses the platform default." },
    evidence_package: { v: "nd" },
    rerun: { v: "nd" },
    gates: { v: "no", q: "task runs", url: "https://docs.edisonscientific.com/edison-client/methods/chat-sessions.md", quote: "Tasks (`run_tasks_until_done`) are fire-and-forget, not interactive." },
  },
  "Question First": {
    finds_citations: { v: "yes", d: true, url: "https://www.questionfirst.org/assets/index-2RvbMirU.js", quote: "The AI searches for and verifies every citation using live academic databases" },
    loi: { v: "nd" },
    prereg: { v: "yes", d: true, url: "https://www.questionfirst.org/assets/index-2RvbMirU.js", quote: "auto-generates a pre-registration from your project content using the right OSF template (standard, AsPredicted, replication recipe, qualitative, secondary data, registered report, and more)" },
    self_review: { v: "nd" },
    runs_experiments: { v: "nd" },
    code: { v: "nd" },
    latex: { v: "nd" },
    midrun: { v: "yes", q: "outline before full text", d: true, url: "https://www.questionfirst.org/assets/ExportModal-DOVphZng.js", quote: "Generate an outline first, then click \"Generate Full Text\" to create the document" },
    self_check: { v: "nd" },
  },
  "Review-it": {
    fabricated: { v: "yes", url: "https://review-it.ai/", quote: "Cross-verify literature citations in real-time to flag fabricated references or AI-hallucinated research sources." },
    retraction: { v: "nd" },
    stance: { v: "nd" },
    selfcite: { v: "yes", q: "reference checker", url: "https://review-it.ai/reference-checker", quote: "Calculates self-citation ratios and flags potential manipulation of citation metrics for ethical compliance." },
    score: { v: "yes", url: "https://review-it.ai/", quote: "Receive distinct quality marks (0-100) for your Abstract, Intro, Methodology, and Discussion sections." },
    rigor: { v: "nd" },
    rrid: { v: "nd" },
    claim_evidence: { v: "nd" },
    journal_fit: { v: "yes", url: "https://review-it.ai/review-document", quote: "recommend the best-fit scholars and journals for your research." },
  },
  "Granted AI": {
    finds_citations: { v: "nd" },
    loi: { v: "yes", url: "https://grantedai.com/features", quote: "Personalized letters of inquiry from real funder data with tone selection and DOCX export" },
    prereg: { v: "nd" },
    self_review: { v: "yes", q: "upgrade tier", url: "https://grantedai.com/grant-proposal-review", quote: "Respond to each finding, then click one button — your proposal is revised to address every committee finding." },
  },
  "Labguru Assistant": {
    closed_loop: { v: "nd" },
    admit: { v: "nd" },
    notebook: { v: "yes", url: "https://www.labguru.com/labguru-assistant", quote: "generating structured protocols ready to save and share within Labguru ELN/LIMS" },
    robot: { v: "nd" },
    anomaly: { v: "yes", url: "https://www.labguru.com/labguru-assistant", quote: "Analyze results, summarize trends, generate visual outputs, and identify anomalies using AI-powered insights." },
    api: { v: "nd" },
  },
  "Polaris": {
    runs_experiments: { v: "yes", url: "https://github.com/ZJU-REAL/Polaris", quote: "writes code, runs a smoke test, launches runs with streamed logs and live metric curves" },
    code: { v: "yes", url: "https://github.com/ZJU-REAL/Polaris", quote: "Agents write and run code on real GPU servers, iterate on metrics, and" },
    latex: { v: "yes", url: "https://github.com/ZJU-REAL/Polaris", quote: "The Paper Writer opens a multi-file LaTeX project (NeurIPS, ICLR, ACL templates) with a CodeMirror 6 editor, real-time collaborative editing (CRDT), and local tectonic compilation to a live PDF preview." },
    midrun: { v: "yes", q: "promotion and in-app submission; runs pause only with opt-in gates", url: "https://github.com/ZJU-REAL/Polaris/blob/main/docs/concepts.md", quote: "Promoting an idea to the experiment stage — promotion is itself an approval action, so this gate is always created. ... Marking a manuscript as submitted — always an approval action." },
    self_check: { v: "yes", q: "percentages and decimals; support for up to 30 citations a round", url: "https://github.com/ZJU-REAL/Polaris", quote: "Line-by-line citation verification (existence: exact, minor, or fabricated; support: supported, partial, or unsupported) plus deterministic fact-checking of every number against the experiment record, then multi-perspective top-venue reviewer agents and a meta-review. A fabricated citation forces a non-pass." },
  },
  "Wisp Science": {
    own_model: { v: "yes", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/README.md", quote: "Bring OpenAI-compatible or Anthropic models, or drive Codex / Claude Code over" },
    evidence_package: { v: "yes", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/docs/publication-evidence.md", quote: "Run, input, output, code, and environment lineage under `provenance/`; ... the evidence purpose and optional supported Claim;" },
    rerun: { v: "yes", q: "local runs", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/docs/publication-evidence.md", quote: "On the frozen Run evidence card, choose **Verify in clean workspace**. ... compares every declared output against the frozen reference; and" },
    gates: { v: "yes", q: "dangerous commands, by default", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/docs/basic-configuration.md", quote: "- **按工具规则**（默认）：遵循各工具的允许、询问或禁止规则；危险命令仍需确认，并非每次调用都会询问。" },
  },
  "Semantic Scholar": {
    relevance_reason: { v: "nd" },
    coverage: { v: "nd" },
    tally: { v: "nd" },
    influence: { v: "yes", url: "https://www.semanticscholar.org/faq", quote: "Semantic Scholar identifies citations where the cited publication has a significant impact on the citing publication, making it easier to understand how publications build upon and relate to each other. Influential citations are determined utilizing a machine-learning model analy" },
    person_record: { v: "no", url: "README.md", quote: "No" },
  },
  "Consensus": {
    relevance_reason: { v: "nd" },
    coverage: { v: "nd" },
    tally: { v: "yes", url: "https://consensus.app/home/blog/introducing-the-consensus-meter/", quote: "For \"Yes/No\" questions, the Consensus Meter uses large language models to instantly classify the results as indicating \"yes\", \"no\" or \"possibly\" in a clean, aggregated interface." },
    influence: { v: "nd" },
    person_record: { v: "no", url: "README.md", quote: "No" },
    runs_code: { v: "nd" },
    uncited_label: { v: "nd" },
    peer_reviewed: { v: "yes", q: "independent study of its search, 2026", url: "https://api.crossref.org/works/10.1108/IDD-02-2026-0049", quote: "This study aims to evaluate the performance of Consensus, Semantic Scholar and Google Scholar in retrieving relevant literature." },
  },
  "Undermind": {
    relevance_reason: { v: "yes", url: "https://www.undermind.ai/mcp", quote: "Why it’s relevant" },
    coverage: { v: "yes", url: "https://www.undermind.ai/", quote: "By statistically modeling this process, we can determine what fraction of relevant papers we have likely found. If your paper didn't show up at first, it's likely the search system knows it has not yet found everything (and the report summary will tell you)." },
    tally: { v: "nd" },
    influence: { v: "nd" },
    person_record: { v: "no", url: "README.md", quote: "No" },
  },
  "Ai2 Asta": {
    relevance_reason: { v: "yes", d: true, url: "https://asta.allen.ai/547.64c6e7.chunk.js", quote: "n.relevance,relevanceScore:s.relevanceScore,text:null===(i=s.relevanceJudgement)||void 0===i?void 0:i.relevanceSummary" },
    coverage: { v: "nd" },
    tally: { v: "nd" },
    influence: { v: "nd" },
    person_record: { v: "no", url: "README.md", quote: "No" },
    runs_code: { v: "nd" },
    uncited_label: { v: "yes", d: true, url: "https://asta.allen.ai/547.64c6e7.chunk.js", quote: "This text was generated by ${n}'s ${i} model without citing any retrieved papers. It relies on the model's training data." },
    peer_reviewed: { v: "yes", q: "Scholar QA, ACL 2025 demo", url: "https://aclanthology.org/2025.acl-demo.49/", quote: "In an evaluation on a recent scientific QA benchmark, we find that Ai2 Scholar QA outperforms competing systems." },
  },
  "OpenScholar": {
    runs_code: { v: "nd" },
    uncited_label: { v: "nd" },
    tally: { v: "nd" },
    peer_reviewed: { v: "yes", q: "Nature, 2026", url: "https://www.nature.com/articles/s41586-025-10072-4", quote: "thanks Shubham Agarwal, Pascal Sun and the other, anonymous, reviewer(s) for their contribution to the peer review of this work." },
  },
  "scite": {
    fabricated: { v: "nd" },
    retraction: { v: "yes", url: "https://scite.ai/features", quote: "including whether any have been retracted, received editorial notices, or accumulated contrasting findings." },
    stance: { v: "yes", url: "https://scite.ai/features", quote: "Our deep learning model analyzes 1.6B+ citation statements and classifies each one as supporting, contrasting, or mentioning" },
    selfcite: { v: "nd" },
  },
  "Elicit": {
    relevance_reason: { v: "yes", url: "https://support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit", quote: "Click any paper to see its per-criterion decisions, exclusion reasons, and source quotes from the abstract supporting each decision" },
    coverage: { v: "nd" },
    tally: { v: "nd" },
    influence: { v: "nd" },
    person_record: { v: "yes", q: "dual-review path", url: "https://support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit", quote: "Audit trail logs every decision, override, and adjudication for PRISMA reconstruction, plus agreement stats (decision agreement, exclusion reason agreement, Cohen's kappa) for both reviewer and Elicit pairs and reviewer to reviewer pairs" },
    dual: { v: "yes", q: "dual-review path", url: "https://support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit", quote: "When dual review is enabled, two reviewers can independently make screening decisions in Elicit. Afterwards, Elicit will surface conflicts in screening judgements for reviewers to resolve." },
    prisma: { v: "yes", url: "https://support.elicit.com/en/articles/14758182-advanced-search-gathering-for-systematic-reviews", quote: "Generate a PRISMA flow diagram visualizing how many papers were identified from each specific search tab/source." },
    extraction: { v: "yes", url: "https://support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit", quote: "Click on any cell in the finished data extraction table to view supporting quotes from the paper and check the AI-generated answers for accuracy." },
    api: { v: "yes", q: "dual review not in the API docs", url: "https://support.elicit.com/en/articles/14757400-elicit-s-api", quote: "run a full review end to end, with control over search strategy, screening criteria, extraction parameters, and reporting." },
  },
  "SciScore": {
    score: { v: "yes", q: "methods reporting", url: "https://sciscore.asedasciences.com/faq", quote: "Scores range between 1 and 10 and are based on both rigor adherence and resource reporting completeness." },
    rigor: { v: "yes", url: "https://sciscore.asedasciences.com/faq", quote: "Addressing certain rigor criteria in the methods section like blinding, randomization of groups, and power analysis, even if it is to simply state that they are not relevant to the study, should improve your score." },
    rrid: { v: "yes", url: "https://www.scicrunch.com/faq-rrid", quote: "If authors use this RRID, then SciScore will ask the database about that particular identifier." },
    claim_evidence: { v: "nd" },
    journal_fit: { v: "nd" },
    fabricated: { v: "nd" },
  },
  "Reviewer3": {
    fabricated: { v: "yes", url: "https://reviewer3.com/", quote: "Finds hallucinated, retracted, irrelevant, and self-cited references." },
    retraction: { v: "yes", url: "https://reviewer3.com/", quote: "Finds hallucinated, retracted, irrelevant, and self-cited references." },
    stance: { v: "nd" },
    selfcite: { v: "yes", url: "https://reviewer3.com/", quote: "Finds hallucinated, retracted, irrelevant, and self-cited references." },
    score: { v: "nd" },
    rigor: { v: "nd" },
    rrid: { v: "nd" },
    claim_evidence: { v: "yes", url: "https://reviewer3.com/", quote: "A manuscript is decomposed into the claims it makes, and every claim is checked against the evidence offered for it." },
    journal_fit: { v: "no", url: "https://reviewer3.com/compare/reviewer3-vs-thesify", quote: "Citation search across 200M+ sources, a journal recommender, and research agents. / None of these. Reviewer3 searches academic databases to verify the citations already in your paper, not to find new ones for you." },
  },
  "Atinary SDLabs": {
    closed_loop: { v: "yes", url: "https://help.atinary.com/en/articles/591086-suggestions-measurements", quote: "Submitting results triggers a new recommendation cycle — the algorithm analyzes all available data and produces the next batch of recommendations." },
    notebook: { v: "yes", q: "optional, through its API", url: "https://atinary.com/technology/sdlabs/", quote: "data management systems like LIMS and ELNs, is optional and seamless via API/SDK." },
    robot: { v: "yes", q: "optional", url: "https://atinary.com/technology/sdlabs/", quote: "Integration with laboratory robotics platforms (such as Chemspeed, Bruker, or IBM RoboRXN), as well as platforms like ACD/Labs’ Katalyst and data management systems like LIMS and ELNs, is optional and seamless via API/SDK." },
    anomaly: { v: "nd" },
    api: { v: "yes", url: "https://api.sdlabs.atinary.com/schema/", quote: "SDLabs API for experiment optimization and dataset management." },
    admit: { v: "nd" },
  },
  "OpenResearch": {
    closed_loop: { v: "yes", q: "on runs it launches itself", url: "https://github.com/alphaXiv/OpenResearch", quote: "learn from past results and decide what to try next." },
    admit: { v: "no", q: "default Agentic setting; opt-in Copilot asks, as guidance rather than enforcement", url: "README.md", quote: "its loop waits on you between runs only when failed runs hit its repair cap" },
    notebook: { v: "nd" },
    robot: { v: "nd" },
    anomaly: { v: "nd" },
    api: { v: "yes", q: "orx CLI", url: "https://github.com/alphaXiv/OpenResearch/blob/main/SKILL.md", quote: "Read this before driving `orx` programmatically." },
  },
  "NeuriCo": {
    closed_loop: { v: "yes", q: "scores its own scorer computes, not measurements", url: "https://github.com/ChicagoHAI/NeuriCo", quote: "Iteratively proposes, executes, scores, and checkpoints improvements" },
    admit: { v: "yes", url: "https://github.com/ChicagoHAI/NeuriCo/blob/main/docs/HITL_AUTORESEARCH.md", quote: "A legal proposal is presented to the human for approval or concrete feedback." },
    notebook: { v: "nd" },
    robot: { v: "nd" },
    anomaly: { v: "nd" },
    api: { v: "nd" },
  },
};

function display(cell) {
  if (!cell) return '';
  const q = cell.q ? ' (' + cell.q + ')' : '';
  if (cell.v === 'yes') return '✓' + (cell.d ? ' †' : '') + q;
  if (cell.v === 'no') return '✗' + q;
  if (cell.v === 'nd') return 'not documented';
  if (cell.v === 'preprint') return 'preprint' + q;
  if (cell.v === 'text') return cell.t + q;
  return '';
}

function cellFor(row, feature) {
  if (DERIVED[feature]) return DERIVED[feature](row.cells);
  return (CELLS[row.name] || {})[feature] || null;
}

// The table for one need. members: README rows, already in panel order.
function matrix(need, members) {
  return (ROWS[need] || []).map((f) => ({
    feature: f,
    label: FEATURES[f],
    cells: members.map((m) => {
      const cell = cellFor(m, f);
      return { name: m.name, cell, text: display(cell) };
    }),
  }));
}

const VALUES = ['yes', 'no', 'nd', 'preprint', 'text'];

function check(rowsByNeed) {
  const errors = [];
  for (const [need, members] of Object.entries(rowsByNeed)) {
    for (const f of ROWS[need] || []) {
      if (!FEATURES[f]) { errors.push('need "' + need + '" shows row "' + f + '", which FEATURES does not define.'); continue; }
      const shown = [];
      for (const m of members) {
        const cell = cellFor(m, f);
        if (!cell) { errors.push('"' + m.name + '" has no value for "' + f + '" under "' + need + '".'); continue; }
        if (!VALUES.includes(cell.v)) errors.push('"' + m.name + '" / "' + f + '": "' + cell.v + '" is not a value this table allows.');
        if (!DERIVED[f] && cell.v !== 'nd' && (!cell.url || !cell.quote)) errors.push('"' + m.name + '" / "' + f + '": a hand-entered "' + cell.v + '" needs a url and a quote.');
        if (cell.url === 'README.md' && !m.cells.join(' | ').includes(cell.quote)) errors.push('"' + m.name + '" / "' + f + '": the quote is not in its README row: "' + cell.quote + '"');
        if (cell.v === 'text' && !cell.t) errors.push('"' + m.name + '" / "' + f + '": a text value needs its text.');
        // a dagger only says where the evidence sits, so it does not tell systems apart
        shown.push([cell.v, cell.q || '', cell.t || ''].join('|'));
      }
      if (shown.length === members.length && new Set(shown).size === 1) errors.push('row "' + f + '" under "' + need + '" reads the same for every system, so it tells them apart from nothing.');
    }
  }
  for (const [name, cells] of Object.entries(CELLS)) {
    for (const f of Object.keys(cells)) {
      if (DERIVED[f]) errors.push('"' + name + '" / "' + f + '" is read off the README row and must not be entered by hand.');
      if (!FEATURES[f]) errors.push('"' + name + '" has a value for "' + f + '", which FEATURES does not define.');
    }
  }
  return errors;
}

module.exports = { CHECKED, FEATURES, ROWS, CELLS, matrix, check, display };
