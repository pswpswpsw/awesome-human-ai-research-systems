// Figure 2: which systems do the same job.
// Run: node scripts/figures/similar.js
//
// Two systems are linked when they share a job. The job tags in graph-data.js are read
// off what each system documents that it returns; the category of every node
// comes from the README table it sits in, never from this file. The script
// refuses to draw if the README and this file disagree about which systems
// exist, and it names every count in the README prose that no longer matches
// the graph, so a removal cannot leave a stale number behind.
const { readme, readEntries, words, write } = require('./readme');

const { NODES, JOBS, CATS, PALETTE, SHAPES } = require('./graph-data');
const JOB = Object.fromEntries(Object.entries(JOBS).map(([k, v]) => [k, v.phrase]));
const COLOUR = Object.fromEntries(Object.entries(CATS).map(([name, c]) => [name, c.key]));

// ---- agree with the README before drawing anything ----
const entries = readEntries();
const errors = [];
for (const e of entries) {
  if (!NODES[e.name]) errors.push('README lists "' + e.name + '" but the graph has no position or job for it. Add it to NODES in graph-data.js.');
}
for (const k of Object.keys(NODES)) {
  if (!entries.some((e) => e.name === k)) errors.push('The graph has "' + k + '" but the README tables do not. Remove it from NODES in graph-data.js.');
}
if (errors.length) {
  console.error('Refusing to draw:\n  ' + errors.join('\n  '));
  process.exit(1);
}
const N = {};
for (const e of entries) N[e.name] = { ...NODES[e.name], c: COLOUR[e.cat], shape: CATS[e.cat].shape, label: NODES[e.name].label || e.name };

const names = Object.keys(N);
const edges = [];
for (let i = 0; i < names.length; i++) {
  for (let k = i + 1; k < names.length; k++) {
    const a = N[names[i]], b = N[names[k]];
    if (a.j.some((x) => b.j.includes(x))) edges.push({ a: names[i], b: names[k], cross: a.c !== b.c });
  }
}
const nCross = edges.filter((e) => e.cross).length;
const nSame = edges.length - nCross;
const nNodes = names.length;

// The dashed-link sentence is built from the edges, so it cannot list a pair
// that is no longer drawn. Group each hub with all of its partners.
function dashedSentence() {
  const left = edges.filter((e) => e.cross).map((e) => [e.a, e.b]);
  const parts = [];
  const lab = (n) => N[n].label;
  const list = (xs) => (xs.length === 1 ? xs[0] : xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1]);
  while (left.length) {
    const deg = {};
    for (const [a, b] of left) { deg[a] = (deg[a] || 0) + 1; deg[b] = (deg[b] || 0) + 1; }
    const hub = Object.keys(deg).sort((x, y) => deg[y] - deg[x])[0];
    const mine = left.filter(([a, b]) => a === hub || b === hub);
    parts.push(lab(hub) + ' to ' + list(mine.map(([a, b]) => lab(a === hub ? b : a))));
    for (const p of mine) left.splice(left.indexOf(p), 1);
  }
  return parts.join('; ');
}
const jobsUsed = Object.keys(JOB).filter((k) => names.some((n) => N[n].j.includes(k))).map((k) => JOB[k]);
const jobList = jobsUsed.slice(0, -1).join(', ') + ', or ' + jobsUsed[jobsUsed.length - 1];

const FONT = '&quot;Iowan Old Style&quot;,&quot;Palatino Linotype&quot;,Palatino,&quot;Book Antiqua&quot;,Georgia,&quot;Times New Roman&quot;,serif';
const ORDER = Object.keys(CATS).sort((a, b) => CATS[a].rank - CATS[b].rank);
const T = {
  light: { bg: '#fdfcfa', ink: '#1a1b1e', mut: '#5c5d63', halo: '#fdfcfa', ...PALETTE.light },
  dark: { bg: '#0d1117', ink: '#e9e6e1', mut: '#9a978f', halo: '#0d1117', ...PALETTE.dark },
};
const W = 1000, H = 742;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const SAME = { w: 1.35, op: 0.8 }, CROSS = { w: 1.8, op: 0.95 };

function svg(mode) {
  const c = T[mode];
  const o = [];
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="${FONT}" role="img" aria-labelledby="gt gd">`);
  o.push('<title id="gt">Which systems do the same job</title>');
  o.push(`<desc id="gd">A graph of all ${nNodes} systems. Two systems are joined when they return the same kind of thing: ${jobList}. Node colour and shape both mark the category, meaning what the human still rules on. There are two kinds of link. A plain solid link, ${nSame} of them, joins two systems in the same category, so they are straightforward alternatives. A thicker dashed link, ${nCross} of them, joins two systems in different categories: they do the same job but leave the researcher answerable for different things. The dashed links join ${esc(dashedSentence())}.</desc>`);
  o.push(`<rect width="${W}" height="${H}" fill="${c.bg}"/>`);
  o.push(`<text x="34" y="34" font-size="17" font-weight="600" fill="${c.ink}">Which systems do the same job</text>`);
  o.push(`<text x="34" y="55" font-size="12.5" font-style="italic" fill="${c.mut}">A link joins two systems that return the same kind of thing. What the link looks like tells you whether they also sit in the same category.</text>`);
  for (const e of edges) {
    const a = N[e.a], b = N[e.b], s = e.cross ? CROSS : SAME;
    o.push(`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${e.cross ? c.cross : c.edge}" stroke-width="${s.w}"${e.cross ? ' stroke-dasharray="5 3"' : ''} opacity="${s.op}"/>`);
  }
  for (const n of names) {
    const d = N[n];
    o.push(`<path d="${SHAPES[d.shape]}" transform="translate(${d.x},${d.y})" fill="${c[d.c]}" stroke="${c.halo}" stroke-width="2" stroke-linejoin="round"/>`);
    const anchor = d.a || (d.x > 700 ? 'end' : d.x < 330 ? 'start' : 'middle');
    const dx = anchor === 'end' ? -12 : anchor === 'start' ? 12 : 0;
    const dy = d.dy !== undefined ? d.dy : anchor === 'middle' ? -15 : 4;
    o.push(`<text x="${d.x + dx}" y="${d.y + dy}" font-size="12.5" text-anchor="${anchor}" fill="${c.ink}" stroke="${c.halo}" stroke-width="3.4" paint-order="stroke">${esc(d.label)}</text>`);
  }
  const y1 = H - 64;
  o.push(`<line x1="34" y1="${y1 - 4}" x2="78" y2="${y1 - 4}" stroke="${c.edge}" stroke-width="${SAME.w}" opacity="${SAME.op}"/>`);
  o.push(`<text x="88" y="${y1}" font-size="12.5" fill="${c.ink}">same job, same category (${nSame}): straightforward alternatives</text>`);
  const x2 = 520;
  o.push(`<line x1="${x2}" y1="${y1 - 4}" x2="${x2 + 44}" y2="${y1 - 4}" stroke="${c.cross}" stroke-width="${CROSS.w}" stroke-dasharray="5 3"/>`);
  o.push(`<text x="${x2 + 54}" y="${y1}" font-size="12.5" fill="${c.ink}">same job, different category (${nCross}): different answerability</text>`);
  const y2 = H - 26;
  let lx = 34;
  o.push(`<text x="${lx}" y="${y2}" font-size="12.5" font-style="italic" fill="${c.mut}">Node colour and shape, the category:</text>`);
  lx += 226;
  for (const name of ORDER) {
    const k = CATS[name].key;
    o.push(`<path d="${SHAPES[CATS[name].shape]}" transform="translate(${lx},${y2 - 4}) scale(0.8)" fill="${c[k]}"/>`);
    o.push(`<text x="${lx + 12}" y="${y2}" font-size="12.5" fill="${c.ink}">${name}</text>`);
    lx += name.length * 7.1 + 34;
  }
  o.push('</svg>');
  return o.join('\n');
}

write('similar-light.svg', svg('light'));
write('similar-dark.svg', svg('dark'));
console.log(`similar: ${nNodes} nodes, ${edges.length} links, ${nSame} same-category, ${nCross} cross-category`);

// ---- every number the README prose states about this figure ----
const r = readme();
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const checks = [
  ['README opening, system count', cap(words(nNodes)) + ' systems a researcher can use today'],
  ['README alt text, node count', 'A graph of all ' + nNodes + ' systems'],
  ['README alt text, solid links', 'A plain solid link, ' + nSame + ' of them'],
  ['README alt text, dashed links', 'A dashed link, ' + nCross + ' of them'],
  ['README prose, link counts', words(nCross) + ' of them against ' + words(nSame) + ' of the other kind'],
];
const stale = checks.filter(([, want]) => !r.includes(want));
if (stale.length) {
  console.error('README is out of step with the figure. Expected to find:');
  for (const [where, want] of stale) console.error('  ' + where + ': "' + want + '"');
  process.exit(1);
}
console.log('README counts agree with the figure.');
