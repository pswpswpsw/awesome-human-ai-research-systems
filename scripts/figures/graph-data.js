// The one hand-maintained list besides the README tables: where each system
// sits in the second figure, and which jobs it does. Both the figure
// (similar.js) and the chooser page (scripts/site/build.js) read it, so a
// system can only be added or moved here.
//
// A job is read off what the system documents that it returns, never off how
// it sells itself. The README tables decide which systems exist and which
// category each sits in; build scripts refuse to run if this file disagrees.

// x, y: position in the figure. j: jobs. a: label anchor override.
// dy: label offset override. label: shorter display name.
const NODES = {
  'Consensus':             { x: 104, y: 146, j: ['search'], a: 'end' },
  'Undermind':             { x: 252, y: 104, j: ['search'] },
  'Ai2 Asta':              { x: 304, y: 214, j: ['search'], a: 'end' },
  'OpenScholar':           { x: 98,  y: 268, j: ['search'], a: 'end' },
  'Semantic Scholar':      { x: 206, y: 344, j: ['search', 'citations'] },
  'scite':                 { x: 116, y: 456, j: ['citations'] },
  'Elicit':                { x: 450, y: 226, j: ['search', 'screen'] },
  'ClawsGO Science':       { x: 606, y: 318, j: ['screen', 'draft'], dy: 24 },
  'Granted AI':            { x: 770, y: 100, j: ['draft'] },
  'AI-Researcher (HKUDS)': { x: 928, y: 176, j: ['draft'], label: 'AI-Researcher' },
  'Edison Platform':       { x: 764, y: 250, j: ['draft'], a: 'start' },
  'Question First':        { x: 918, y: 352, j: ['draft'] },
  'Review-it':             { x: 700, y: 540, j: ['check'] },
  'SciScore':              { x: 896, y: 568, j: ['check'], a: 'start' },
  'Reviewer3':             { x: 776, y: 636, j: ['check'] },
  'Atinary SDLabs':        { x: 340, y: 560, j: ['next'] },
  'Labguru Assistant':     { x: 512, y: 612, j: ['next'], dy: 24 },
};

// phrase: used in the figure's accessibility text.
// label, verb: the chooser's button and its "All of these ..." sentence.
const JOBS = {
  search:    { phrase: 'searching the literature',              label: 'Search the literature',           verb: 'search the literature and judge what they find' },
  screen:    { phrase: 'screening and extracting for a review', label: 'Screen and extract for a review', verb: 'screen and extract for a systematic review' },
  citations: { phrase: 'judging citations',                     label: 'Judge citations',                 verb: 'judge the citations a paper receives' },
  draft:     { phrase: 'writing a draft',                       label: 'Get a draft written',             verb: 'hand back something written' },
  check:     { phrase: 'checking a finished manuscript',        label: 'Check a manuscript',              verb: 'check a finished manuscript' },
  next:      { phrase: 'picking the next experiment',           label: 'Pick the next experiment',        verb: 'suggest what to run next' },
};

module.exports = { NODES, JOBS };
