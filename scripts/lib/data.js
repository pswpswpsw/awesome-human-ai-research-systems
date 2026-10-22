// The one hand-maintained list besides the README tables: the needs a
// researcher arrives with, and which listed systems meet each one. The
// README's "What do you want to do?" section and the chooser page are both
// built from it, so a need is named, and a system placed under it, here and
// nowhere else.
//
// A system is put under a need only when its own documentation says it does
// that job, never on the strength of how it sells itself, and only through the
// module its README row describes. The needs section shows that row's cells
// and that row's category, so placing a product under a need served by some
// other module would put one module's answerability on another. Elicit's
// research reports, scite's question answering and Asta's data analysis are
// real, and are left out for that reason. The README tables
// decide which systems exist and which category each sits in; the build
// refuses to run if this file disagrees with them.

// label: the heading in the README and the button on the chooser.
// verb: completes the chooser's sentence "All of these ...".
const NEEDS = {
  find:       { label: 'Find papers on a question',              verb: 'find papers on a question and judge what they find' },
  answer:     { label: 'Get a sourced answer to a question',     verb: 'answer a research question from the literature, with sources' },
  review:     { label: 'Run a systematic review',                verb: 'take on systematic-review work' },
  citations:  { label: 'Check whether citations hold up',        verb: 'judge whether the citations in a paper hold up' },
  manuscript: { label: 'Check a manuscript before submitting',   verb: 'check a finished manuscript before it goes out' },
  paper:      { label: 'Get a whole paper drafted',              verb: 'hand back a drafted paper' },
  data:       { label: 'Analyse your own data with an agent',    verb: 'run analyses on files you provide' },
  next:       { label: 'Decide what to run next in the lab',     verb: 'suggest the next experiment' },
};

// Which needs each system meets, keyed by its name exactly as the README
// table writes it.
const TAGS = {
  'ClawsGO Science':       ['review', 'paper'],
  'Edison Platform':       ['answer', 'data'],
  'Review-it':             ['citations', 'manuscript'],
  'Labguru Assistant':     ['next'],
  'Polaris':               ['paper'],
  'Wisp Science':          ['data'],
  'Semantic Scholar':      ['find'],
  'Consensus':             ['find', 'answer'],
  'Undermind':             ['find'],
  'Ai2 Asta':              ['find', 'answer'],
  'OpenScholar':           ['answer'],
  'scite':                 ['citations'],
  'Elicit':                ['find', 'review'],
  'SciScore':              ['manuscript'],
  'Reviewer3':             ['citations', 'manuscript'],
  'Atinary SDLabs':        ['next'],
  'NeuriCo':               ['next'],
  'OpenResearch':          ['next'],
};

// Category key, its position on the Standing scale (Bench sits off it), the
// shape that marks it, and what happens if you do nothing, shown on each card.
//
// Colour never carries category on its own. The palette below was checked
// with a colour-vision validator, and no five hues stay pairwise
// distinguishable for colour-blind readers; in dark mode Delegation and
// Standing Verdicts are the closest pair. So wherever a colour marks a
// category, the category is also named in text and marked by its shape.
const CATS = {
  'Delegation':        { key: 'D', rank: 0, shape: 'diamond',  idle: 'What it hands back is yours as it stands, and nothing records which parts you checked.' },
  'Standing Verdicts': { key: 'S', rank: 1, shape: 'circle',   idle: 'Its call on every item you never open is the one that counts.' },
  'Human Approval':    { key: 'H', rank: 2, shape: 'square',   idle: 'Nothing moves on until a named person rules.' },
  'Critique':          { key: 'C', rank: 3, shape: 'triangle', idle: 'Not a word it writes reaches your file.' },
  'Bench':             { key: 'B', rank: 4, shape: 'hexagon',  idle: 'Nothing runs, and the next experiment waits on you.' },
};

const PALETTE = {
  light: { D: '#2a78d6', S: '#4a3aa7', H: '#008300', C: '#e34948', B: '#eda100' },
  dark:  { D: '#3987e5', S: '#9085e9', H: '#008300', C: '#e66767', B: '#c98500' },
};

// Each shape as a path centred on 0,0, about 16 units across.
const SHAPES = {
  circle:   'M7,0A7,7 0 1 1 -7,0A7,7 0 1 1 7,0Z',
  square:   'M-6.2,-6.2H6.2V6.2H-6.2Z',
  diamond:  'M0,-8.2L8.2,0L0,8.2L-8.2,0Z',
  triangle: 'M0,-8.4L7.8,6L-7.8,6Z',
  hexagon:  'M-7.4,0L-3.7,-6.4L3.7,-6.4L7.4,0L3.7,6.4L-3.7,6.4Z',
};

const CHOOSER_URL = 'https://pswpswpsw.github.io/awesome-human-ai-research-systems/';

module.exports = { NEEDS, TAGS, CATS, PALETTE, SHAPES, CHOOSER_URL };
