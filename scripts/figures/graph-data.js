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

// Category key, its position on the Standing scale (Bench sits off it), the
// shape that marks it, and what the machine's call is worth there.
//
// Shape is not decoration. No five hues stay pairwise distinguishable for
// colour-blind readers, so colour never carries category on its own. The
// palette below was checked with a CVD validator: on the four category pairs
// that a link actually joins (S-H, H-D, D-C, B-D), the worst separation over
// light and dark mode together is Delta E 19.2 for colour-blind vision (dark
// mode, D-C) and 29 for normal vision, against floors of 8 and 15. Across all
// ten pairs no five hues pass, and the shapes carry the rest.
const CATS = {
  'Delegation':        { key: 'D', rank: 0, shape: 'diamond',  phrase: 'The machine’s call is the record.' },
  'Standing Verdicts': { key: 'S', rank: 1, shape: 'circle',   phrase: 'It stands until someone reverses it.' },
  'Human Approval':    { key: 'H', rank: 2, shape: 'square',   phrase: 'It waits for a named person’s ruling.' },
  'Critique':          { key: 'C', rank: 3, shape: 'triangle', phrase: 'It can never be the record.' },
  'Bench':             { key: 'B', rank: 4, shape: 'hexagon',  phrase: 'Off this scale: a run settles it, not a reader.' },
};

const PALETTE = {
  light: { D: '#2a78d6', S: '#4a3aa7', H: '#008300', C: '#e34948', B: '#eda100', edge: '#3f8d9c', cross: '#a4602a' },
  dark:  { D: '#3987e5', S: '#9085e9', H: '#008300', C: '#e66767', B: '#c98500', edge: '#5fb4c4', cross: '#e3a94a' },
};

// Each shape as a path centred on 0,0, about 16 units across.
const SHAPES = {
  circle:   'M7,0A7,7 0 1 1 -7,0A7,7 0 1 1 7,0Z',
  square:   'M-6.2,-6.2H6.2V6.2H-6.2Z',
  diamond:  'M0,-8.2L8.2,0L0,8.2L-8.2,0Z',
  triangle: 'M0,-8.4L7.8,6L-7.8,6Z',
  hexagon:  'M-7.4,0L-3.7,-6.4L3.7,-6.4L7.4,0L3.7,6.4L-3.7,6.4Z',
};

module.exports = { NODES, JOBS, CATS, PALETTE, SHAPES };
