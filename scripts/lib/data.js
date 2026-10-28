// The one hand-maintained list besides the README tables: the stages of a
// research project, the jobs a researcher arrives with inside each stage, and
// which listed entries do each job. The README's "What do you want to do?"
// section and the chooser page are both built from it, so a job is named, and
// an entry placed under it, here and nowhere else.
//
// An entry is one README row, and a row describes one module of a product: the
// part that carries research judgment for that job. A product with modules
// that serve different jobs, and leave the researcher different things to rule
// on, has one row per module, each with its own category. An entry is put
// under a job only when its own documentation says that module does the job,
// never on the strength of how the product sells itself. Modules that leave the researcher the same
// thing to rule on can share a row. A module that no row covers is not shown
// under any job, however real it is, because the card
// would show another module's answerability. The README tables decide which
// entries exist and which category each sits in; the build refuses to run if
// this file disagrees with them.

// label: the heading in the README and the button on the chooser.
// verb: completes the chooser's sentence "All of these ...".
const NEEDS = {
  find:       { label: 'Find papers on a question',              verb: 'find papers on a question and judge what they find' },
  answer:     { label: 'Get a sourced answer to a question',     verb: 'answer a research question from the literature, with sources' },
  review:     { label: 'Run a systematic review',                verb: 'take on systematic-review work' },
  gaps:       { label: 'Find gaps in the literature',            verb: 'point to where the literature on a question leaves something open' },
  hypotheses: { label: 'Find hypotheses in your own data',       verb: 'propose hypotheses from data you provide and test them against it' },
  novelty:    { label: 'Check whether an idea has been done',    verb: 'judge whether an idea already has prior work' },
  data:       { label: 'Analyse your own data with an agent',    verb: 'run analyses on files you provide to answer a question you set' },
  next:       { label: 'Decide what to run next',                verb: 'propose the next experiment from the results of earlier ones' },
  citations:  { label: 'Check whether citations hold up',        verb: 'judge whether the citations in a paper hold up' },
  manuscript: { label: 'Check a manuscript before submitting',   verb: 'check a finished manuscript before it goes out' },
  paper:      { label: 'Hand over the whole project',            verb: 'take a question, a direction, an idea or a codebase through their own experiments to a finished write-up' },
};

// The stages of a project, in order, each with its jobs. The chooser shows
// these first. n numbers the five stages; the whole-project entry point has
// none, because it spans them. A system belongs there when it starts from a
// question, direction, idea or codebase, decides which experiments or analyses
// to run, runs them, and hands back a finished paper or report, with no
// documented step at which the researcher designs the experiments.
const STAGES = [
  { key: 'understand', n: 1, label: 'Understand the field and the problem', jobs: ['find', 'answer', 'review'] },
  { key: 'ideas',      n: 2, label: 'Find gaps and ideas',                  jobs: ['gaps', 'hypotheses'] },
  { key: 'solution',   n: 3, label: 'Propose a solution and check it is new', jobs: ['novelty'] },
  { key: 'experiment', n: 4, label: 'Design and run the experiments',       jobs: ['data', 'next'] },
  { key: 'write',      n: 5, label: 'Write it up',                          jobs: ['citations', 'manuscript'] },
  { key: 'whole',      n: 0, label: 'Hand over the whole project',          jobs: ['paper'] },
];

// The product each module row belongs to, keyed by the row's name. A row not
// listed here is its own product. The README counts products from this.
const PRODUCT = {
  'Edison Precedent':               'Edison Platform',
  'Elicit Reports':                 'Elicit',
  'Arbor idea-check':               'Arbor',
  'Consensus Research Gaps Matrix': 'Consensus',
  'Ai2 Asta AutoDiscovery':         'Ai2 Asta',
  'SCiNiTO Gap Finding Agent':      'SCiNiTO',
  'Patsnap Eureka Novelty Search':  'Patsnap Eureka',
  'Yila Research Gap and Topic Validation': 'Yila',
};

// Which jobs each entry does, keyed by its name exactly as the README table
// writes it.
const TAGS = {
  'Edison Platform':                ['answer', 'data'],
  'Edison Precedent':               ['novelty'],
  'Polaris':                        ['paper'],
  'Wisp Science':                   ['data'],
  'OpenResearch':                   ['paper'],
  'NeuriCo':                        ['paper'],
  'Outerloop':                      ['next'],
  'Elicit Reports':                 ['gaps'],
  'Arbor idea-check':               ['novelty'],
  'Consensus':                      ['find', 'answer'],
  'Consensus Research Gaps Matrix': ['gaps'],
  'Undermind':                      ['find'],
  'Ai2 Asta':                       ['find', 'answer'],
  'Ai2 Asta AutoDiscovery':         ['hypotheses'],
  'OpenScholar':                    ['answer'],
  'PaperQA2':                       ['answer'],
  'scite':                          ['citations'],
  'SCiNiTO Gap Finding Agent':      ['gaps'],
  'HypoGeniC':                      ['hypotheses'],
  'Patsnap Eureka Novelty Search':  ['novelty'],
  'Yila Research Gap and Topic Validation': ['gaps', 'novelty'],
  'Elicit':                         ['find', 'review'],
  'SciScore':                       ['manuscript'],
  'Reviewer3':                      ['citations', 'manuscript'],
  'Atinary SDLabs':                 ['next'],
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

module.exports = { NEEDS, STAGES, PRODUCT, TAGS, CATS, PALETTE, SHAPES, CHOOSER_URL };
