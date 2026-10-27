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
//        d: true when only page source, a script bundle or a repository's code
//        says so, which the README marks with a dagger
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
// if a row shows no system with the feature, or if a row shows the same value
// for every system in the panel and so tells them apart from nothing. A panel
// with one system has no table.

const CHECKED = 'October 2026';

const FEATURES = {
  // literature
  relevance_reason: 'Says why each paper is relevant',
  coverage: 'Estimates how much of the literature it found',
  tally: 'Counts how many studies say yes or no',
  uncited_label: 'Labels text it wrote without a source',
  peer_reviewed: 'Evaluation published in a peer-reviewed venue',
  // systematic review
  dual: 'Two people screen each record independently',
  person_record: 'Records which person decided each item',
  prisma: 'Draws a PRISMA flow diagram',
  extraction: 'Cites the passage behind each extracted value',
  // gaps in the literature
  gap_sources: 'Which papers it draws the gaps from',
  gap_grid: 'Counts the papers in each sub-topic and dimension',
  gap_rank: 'Ranks the gaps by impact and feasibility',
  screen_log: 'Exports which papers it screened in or out, with its reasons',
  // hypotheses from your own data
  score_by: 'What each hypothesis is scored on',
  data_input: 'What it needs from your data',
  test_code: 'Writes and runs code to test each hypothesis, and shows it',
  test_review: 'Has a reviewer agent confirm each test matched its hypothesis',
  held_out: 'Reports accuracy on test data kept out of generation',
  // whether an idea is new
  feature_table: 'Compares the idea feature by feature against each reference',
  prior_art_scope: 'Where it searches for prior work',
  thin_search_flag: 'Says when its search found too little to judge',
  confirm_reading: 'Lets you correct its reading of the idea before it searches',
  // citations and manuscripts
  fabricated: 'Flags references that match no real paper',
  stance: 'Shows whether later papers support or contrast a cited work',
  selfcite: 'Flags self-citation',
  score: 'Scores the manuscript',
  rigor: 'Checks reporting rigour such as blinding and power',
  rrid: 'Checks resource identifiers against a registry',
  claim_evidence: 'Checks each claim against the manuscript’s own evidence',
  // drafting
  midrun: 'Stops at set points for your approval',
  self_check: 'Checks every citation and number in its own draft',
  // your own data
  own_model: 'Lets you choose the language model',
  evidence_package: 'Exports a package tying the claims you bind to their runs',
  rerun: 'Checks that the analysis reruns in a clean workspace',
  gates: 'Stops for your approval before it acts',
  // the lab
  closed_loop: 'Plans the next run from the results of earlier runs',
  notebook: 'Its output can be saved in your lab notebook',
  robot: 'Connects to lab robots or instruments',
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
  find: ['relevance_reason', 'coverage', 'tally', 'person_record'],
  answer: ['uncited_label', 'tally', 'peer_reviewed', 'weights'],
  review: ['dual', 'person_record', 'prisma', 'extraction', 'own_text', 'api'],
  gaps: ['gap_sources', 'gap_grid', 'gap_rank', 'screen_log'],
  hypotheses: ['score_by', 'data_input', 'test_code', 'test_review', 'held_out'],
  novelty: ['feature_table', 'prior_art_scope', 'thin_search_flag', 'confirm_reading', 'selfhost'],
  citations: ['fabricated', 'stance', 'selfcite'],
  manuscript: ['score', 'rigor', 'rrid', 'claim_evidence', 'fabricated'],
  paper: ['midrun', 'self_check'],
  data: ['selfhost', 'own_model', 'evidence_package', 'rerun', 'gates'],
  next: ['closed_loop', 'notebook', 'robot', 'api'],
};

// Hand-entered values, keyed by the system's name as the README writes it.
// Each yes, no or text value carries the page it was read on and the words it rests on.
const CELLS = {
  "Edison Platform": {
    uncited_label: { v: "nd" },
    tally: { v: "nd" },
    peer_reviewed: { v: "nd" },
    own_model: { v: "yes", q: "enterprise agent profiles", url: "https://docs.edisonscientific.com/edison-client/agent-configurations.md", quote: "LLM for this profile; `None` uses the platform default." },
    evidence_package: { v: "nd" },
    rerun: { v: "nd" },
    gates: { v: "no", q: "task runs", url: "https://docs.edisonscientific.com/edison-client/methods/chat-sessions.md", quote: "Tasks (`run_tasks_until_done`) are fire-and-forget, not interactive." },
  },
  "Polaris": {
    midrun: { v: "yes", q: "promotion and in-app submission; runs pause only with opt-in gates", url: "https://github.com/ZJU-REAL/Polaris/blob/main/docs/concepts.md", quote: "Promoting an idea to the experiment stage — promotion is itself an approval action, so this gate is always created. ... Marking a manuscript as submitted — always an approval action." },
    self_check: { v: "yes", q: "percentages and decimals; support for up to 30 citations a round", url: "https://github.com/ZJU-REAL/Polaris", quote: "Line-by-line citation verification (existence: exact, minor, or fabricated; support: supported, partial, or unsupported) plus deterministic fact-checking of every number against the experiment record, then multi-perspective top-venue reviewer agents and a meta-review. A fabricated citation forces a non-pass." },
  },
  "Wisp Science": {
    own_model: { v: "yes", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/README.md", quote: "Bring OpenAI-compatible or Anthropic models, or drive Codex / Claude Code over" },
    evidence_package: { v: "yes", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/docs/publication-evidence.md", quote: "Run, input, output, code, and environment lineage under `provenance/`; ... the evidence purpose and optional supported Claim;" },
    rerun: { v: "yes", q: "local runs", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/docs/publication-evidence.md", quote: "On the frozen Run evidence card, choose **Verify in clean workspace**. ... compares every declared output against the frozen reference; and" },
    gates: { v: "yes", q: "dangerous commands, by default", url: "https://raw.githubusercontent.com/xuzhougeng/wisp-science/main/docs/basic-configuration.md", quote: "- **按工具规则**（默认）：遵循各工具的允许、询问或禁止规则；危险命令仍需确认，并非每次调用都会询问。" },
  },
  "Consensus": {
    relevance_reason: { v: "nd" },
    coverage: { v: "nd" },
    tally: { v: "yes", url: "https://consensus.app/home/blog/introducing-the-consensus-meter/", quote: "For \"Yes/No\" questions, the Consensus Meter uses large language models to instantly classify the results as indicating \"yes\", \"no\" or \"possibly\" in a clean, aggregated interface." },
    person_record: { v: "no", url: "README.md", quote: "No" },
    uncited_label: { v: "nd" },
    peer_reviewed: { v: "yes", q: "independent study of its search, 2026", url: "https://api.crossref.org/works/10.1108/IDD-02-2026-0049", quote: "This study aims to evaluate the performance of Consensus, Semantic Scholar and Google Scholar in retrieving relevant literature." },
  },
  "Undermind": {
    relevance_reason: { v: "yes", url: "https://www.undermind.ai/mcp", quote: "Why it’s relevant" },
    coverage: { v: "yes", url: "https://www.undermind.ai/", quote: "By statistically modeling this process, we can determine what fraction of relevant papers we have likely found. If your paper didn't show up at first, it's likely the search system knows it has not yet found everything (and the report summary will tell you)." },
    tally: { v: "nd" },
    person_record: { v: "no", url: "README.md", quote: "No" },
  },
  "Ai2 Asta": {
    relevance_reason: { v: "yes", d: true, url: "https://asta.allen.ai/547.64c6e7.chunk.js", quote: "n.relevance,relevanceScore:s.relevanceScore,text:null===(i=s.relevanceJudgement)||void 0===i?void 0:i.relevanceSummary" },
    coverage: { v: "nd" },
    tally: { v: "nd" },
    person_record: { v: "no", url: "README.md", quote: "No" },
    uncited_label: { v: "yes", d: true, url: "https://asta.allen.ai/547.64c6e7.chunk.js", quote: "This text was generated by ${n}'s ${i} model without citing any retrieved papers. It relies on the model's training data." },
    peer_reviewed: { v: "yes", q: "Scholar QA, ACL 2025 demo", url: "https://aclanthology.org/2025.acl-demo.49/", quote: "In an evaluation on a recent scientific QA benchmark, we find that Ai2 Scholar QA outperforms competing systems." },
  },
  "OpenScholar": {
    uncited_label: { v: "nd" },
    tally: { v: "nd" },
    peer_reviewed: { v: "yes", q: "Nature, 2026", url: "https://www.nature.com/articles/s41586-025-10072-4", quote: "thanks Shubham Agarwal, Pascal Sun and the other, anonymous, reviewer(s) for their contribution to the peer review of this work." },
  },
  "scite": {
    fabricated: { v: "nd" },
    stance: { v: "yes", url: "https://scite.ai/features", quote: "Our deep learning model analyzes 1.6B+ citation statements and classifies each one as supporting, contrasting, or mentioning" },
    selfcite: { v: "nd" },
  },
  "Elicit": {
    relevance_reason: { v: "yes", url: "https://support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit", quote: "Click any paper to see its per-criterion decisions, exclusion reasons, and source quotes from the abstract supporting each decision" },
    coverage: { v: "nd" },
    tally: { v: "nd" },
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
    fabricated: { v: "nd" },
  },
  "Reviewer3": {
    fabricated: { v: "yes", url: "https://reviewer3.com/", quote: "Finds hallucinated, retracted, irrelevant, and self-cited references." },
    stance: { v: "nd" },
    selfcite: { v: "yes", url: "https://reviewer3.com/", quote: "Finds hallucinated, retracted, irrelevant, and self-cited references." },
    score: { v: "nd" },
    rigor: { v: "nd" },
    rrid: { v: "nd" },
    claim_evidence: { v: "yes", url: "https://reviewer3.com/", quote: "A manuscript is decomposed into the claims it makes, and every claim is checked against the evidence offered for it." },
  },
  "Atinary SDLabs": {
    closed_loop: { v: "yes", url: "https://help.atinary.com/en/articles/591086-suggestions-measurements", quote: "Submitting results triggers a new recommendation cycle — the algorithm analyzes all available data and produces the next batch of recommendations." },
    notebook: { v: "yes", q: "optional, through its API", url: "https://atinary.com/technology/sdlabs/", quote: "data management systems like LIMS and ELNs, is optional and seamless via API/SDK." },
    robot: { v: "yes", q: "optional", url: "https://atinary.com/technology/sdlabs/", quote: "Integration with laboratory robotics platforms (such as Chemspeed, Bruker, or IBM RoboRXN), as well as platforms like ACD/Labs’ Katalyst and data management systems like LIMS and ELNs, is optional and seamless via API/SDK." },
    api: { v: "yes", url: "https://api.sdlabs.atinary.com/schema/", quote: "SDLabs API for experiment optimization and dataset management." },
  },
  "OpenResearch": {
    midrun: { v: "no", q: "default Agentic setting †; asks you between runs only at its repair cap", url: "README.md", quote: "its loop waits on you between runs only when failed runs hit its repair cap" },
    self_check: { v: "nd" },
  },
  "NeuriCo": {
    midrun: { v: "no", q: "default Auto setting †; a legal proposal waits for you only with Auto off", url: "README.md", quote: "On the default Auto setting its manager agent decides whether to admit each proposal †, and a legal proposal waits for you only with Auto off" },
    self_check: { v: "nd" },
  },
  "Elicit Reports": {
    gap_sources: { v: "text", t: "papers it finds and screens itself", url: "https://support.elicit.com/en/articles/14756862-get-a-research-report-to-generate-in-depth-answers-automatically-in-elicit", quote: "Searching over 138 million papers to gather papers relevant to your research question ... Applying those criteria against all found papers to filter for the most relevant papers to include in your report" },
    gap_grid: { v: "nd" },
    gap_rank: { v: "nd" },
    screen_log: { v: "yes", q: "CSV export of each step", url: "https://support.elicit.com/en/articles/14756862-get-a-research-report-to-generate-in-depth-answers-automatically-in-elicit", quote: "The screening criteria used and screening results for each paper, including Elicit's reasoning for all answers provided" },
  },
  "Consensus Research Gaps Matrix": {
    gap_sources: { v: "text", t: "a topic search, or a saved Collection", url: "https://help.consensus.app/en/articles/17234045-consensus-ai-analysis-citations-and-visuals", quote: "You can use the Research Gaps Matrix across a general topic or within a saved Collection to understand what your current evidence base covers and what may be missing." },
    gap_grid: { v: "yes", url: "https://consensus.app/home/blog/introducing-new-research-gaps-matrix/", quote: "Sub-topics run down one side, research dimensions across the top, and each cell shows how many papers sit at that intersection." },
    gap_rank: { v: "nd" },
    screen_log: { v: "nd" },
  },
  "SCiNiTO Gap Finding Agent": {
    gap_sources: { v: "text", t: "papers you select", url: "https://www.scinito.ai/help/smart-search/gap-finding-agent", quote: "The Gap Finding Agent analyzes the paper(s) you select and systematically identifies research gaps across three dimensions:" },
    gap_grid: { v: "nd" },
    gap_rank: { v: "yes", url: "https://www.scinito.ai/help/smart-search/gap-finding-agent", quote: "Impact and feasibility assessments ... Gaps are ranked by urgency, impact, and feasibility" },
    screen_log: { v: "nd" },
  },
  "Ai2 Asta AutoDiscovery": {
    score_by: { v: "text", t: "how far the test result moves an LLM's belief (Bayesian surprise)", url: "https://allenai.github.io/asta-autodiscovery/autodiscovery/overview/", quote: "Score the result by how surprising it is: how much the evidence changed an LLM's belief in the hypothesis." },
    data_input: { v: "text", t: "data files such as CSV, JSON or Parquet, with a description of their context", url: "https://allenai.org/blog/autodiscovery", quote: "Upload your files (CSV, JSON, Parquet, etc.) and describe your context to seed the system's beliefs." },
    test_code: { v: "yes", url: "https://allenai.org/blog/autodiscovery", quote: "writing Python code to execute them ... view the full hypothesis, the statistical analysis, and the actual Python code used to generate the result." },
    test_review: { v: "yes", q: "an LLM agent, in the open-source docs", url: "https://allenai.github.io/asta-autodiscovery/autodiscovery/hypothesis_generation/", quote: "Checks whether the plan was followed and the hypothesis was actually tested ... The node counts as successful only if the reviewer approves it." },
    held_out: { v: "nd" },
  },
  "HypoGeniC": {
    score_by: { v: "text", t: "accuracy when the model uses it to predict your labels", url: "https://raw.githubusercontent.com/ChicagoHAI/hypothesis-generation/HEAD/hypogenic/algorithm/README.md", quote: "The inference class is used in both the *Generation* and *Update* classes to track your hypothesis' accuracy." },
    data_input: { v: "text", t: "labelled text examples in train, test and validation files", url: "https://raw.githubusercontent.com/ChicagoHAI/hypothesis-generation/HEAD/README.md", quote: "To use HypoGeniC, we require users to provide a dataset in the HuggingFace datasets format: ... `<TASK>_test.json`: A json file containing the test data. ... The json file should have keys: `'text_features_1'`, ... `'text_features_n'`, `'label'`. The values corresponding to each key should be a list of strings." },
    test_code: { v: "nd" },
    test_review: { v: "nd" },
    held_out: { v: "yes", d: true, url: "https://raw.githubusercontent.com/ChicagoHAI/hypothesis-generation/HEAD/pipeline.py", quote: "train_data, _, _ = task.get_data(num_train, num_test, num_val, seed) ... train_data, test_data, val_data = task.get_data(num_train, num_test, num_val, seed) ... acc = results_dict[\"accuracy\"]" },
  },
  "Edison Precedent": {
    feature_table: { v: "nd" },
    prior_art_scope: { v: "text", t: "the literature, across fields", q: "no corpus named in its docs", url: "https://docs.edisonscientific.com/agents.md", quote: "Precedent (formerly known as \"Has Anyone\") searches across fields to determine whether your hypotheses are truly novel ... Precedent can search the literature to confirm whether similar lentiviral transduction approaches with this specific genetic variant have been attempted" },
    thin_search_flag: { v: "yes", q: "API flag for whether it found a good answer", url: "https://docs.edisonscientific.com/edison-client/readme.md", quote: "For `LITERATURE` and `PRECEDENT`, we default to a subclass, `PQATaskResponse` which has some key attributes: ... Flag for whether the agent was able to find a good answer to your query or not." },
    confirm_reading: { v: "no", q: "API task runs", url: "https://docs.edisonscientific.com/edison-client/methods/chat-sessions.md", quote: "Tasks (`run_tasks_until_done`) are fire-and-forget, not interactive." },
  },
  "Arbor idea-check": {
    feature_table: { v: "nd" },
    prior_art_scope: { v: "text", t: "alphaXiv, through its public API", url: "https://raw.githubusercontent.com/RUC-NLPIR/Arbor/HEAD/docs/cli.md", quote: "Novelty / prior-art check for a single idea against the public alphaXiv API." },
    thin_search_flag: { v: "yes", d: true, q: "under overlap risks, by a prompt instruction, while the label reads novel", url: "https://raw.githubusercontent.com/RUC-NLPIR/Arbor/HEAD/src/search_agent/prompts.py", quote: "`related_papers: []`, `novelty_assessment: \"novel\"`, and `overlap_risks` explaining the search came up empty" },
    confirm_reading: { v: "nd" },
  },
  "Patsnap Eureka Novelty Search": {
    feature_table: { v: "yes", q: "up to 5 references", url: "https://help.patsnap.com/hc/en-us/articles/38547096847645-Novelty-Search", quote: "The agent preselects the 3 most relevant references for the feature comparison table. You can manually select other patents for the table (up to 5 references). ... For each selected reference, the Feature Comparison indicates how the technical features relate to the content of that reference, including whether a feature is: Disclosed, Obvious, or Undisclosed." },
    prior_art_scope: { v: "text", t: "patents and non-patent literature", q: "it ranks and compares patents", url: "https://help.patsnap.com/hc/en-us/articles/38547096847645-Novelty-Search", quote: "The agent can also use citation tracking and search non-patent literature and other available sources. ... The agent returns up to 100 patents matching your input, grouped by family. ... You can manually select other patents for the table (up to 5 references)." },
    thin_search_flag: { v: "nd" },
    confirm_reading: { v: "yes", q: "its summary, and the features unless Auto Run is selected", url: "https://help.patsnap.com/hc/en-us/articles/38547096847645-Novelty-Search", quote: "Users can review the summary and edit it if needed. Confirm the technical summary once you are satisfied with the summary. Note: Selecting Auto Run will run through all of the following sections automatically. Unselect this if you want to customize each section. ... Users can add, edit, or delete technical features." },
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
  // a panel with one system has nothing to compare
  if (members.length < 2) return [];
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
    if (members.length < 2) continue;
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
      if (shown.length === members.length && !members.some((m) => { const c = cellFor(m, f); return c && ['yes', 'preprint', 'text'].includes(c.v); })) errors.push('row "' + f + '" under "' + need + '" shows no system with the feature, so it compares nothing.');
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
