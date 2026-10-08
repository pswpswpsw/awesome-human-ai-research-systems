// Builds the chooser page, docs/index.html, which GitHub Pages serves.
// Run everything at once with: node scripts/build.js
//
// Every product sentence on the page is a README table cell, and the jobs,
// positions, colours and shapes come from scripts/figures/graph-data.js, the
// same file the README's second figure is drawn from. The script refuses to
// build if the README tables and graph-data.js disagree about which systems
// exist, so the page cannot quietly fall out of step with the list.
const fs = require('fs');
const path = require('path');
const { ROOT, readme } = require('../figures/readme');
const { NODES, JOBS, CATS, PALETTE, SHAPES } = require('../figures/graph-data');

const REPO_URL = 'https://github.com/pswpswpsw/awesome-human-ai-research-systems';
const TEMPLATE = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// ---- markdown in a table cell, to HTML and to plain text ----
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function md(s) {
  let h = esc(s.trim());
  h = h.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
  return h;
}
const plain = (s) => s.trim().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`]/g, '');

// ---- every product row, all seven cells ----
const entries = [];
const errors = [];
for (const sec of readme().split(/^## /m).slice(1)) {
  const cat = sec.split('\n')[0].trim();
  if (!CATS[cat]) continue;
  for (const line of sec.split('\n')) {
    if (!/^\| \[[^\]]+\]\(https?:/.test(line)) continue;
    const cells = line.split('|').slice(1, -1);
    if (cells.length !== 7) { errors.push('expected 7 cells, got ' + cells.length + ': ' + line.slice(0, 80)); continue; }
    const m = cells[0].trim().match(/^\[([^\]]+)\]\((https?:[^)\s]+)\)\s*(.*)$/);
    const name = m[1], url = m[2], note = m[3].replace(/^\*\(|\)\*$/g, '').trim();
    const node = NODES[name];
    if (!node) { errors.push('README lists "' + name + '" but graph-data.js NODES has no entry for it.'); continue; }
    entries.push({
      name, url, cat, order: entries.length,
      label: node.label || name,
      x: node.x, y: node.y, a: node.a, dy: node.dy, jobs: node.j,
      noteHTML: note ? md(note) : '',
      doesHTML: md(cells[1]), doesText: plain(cells[1]),
      rulesHTML: md(cells[2]),
      getHTML: md(cells[3]),
      recordHTML: md(cells[4]),
      writesHTML: md(cells[5]),
      accessHTML: md(cells[6]),
    });
  }
}
for (const k of Object.keys(NODES)) {
  if (!entries.some((e) => e.name === k)) errors.push('graph-data.js NODES has "' + k + '" but the README tables do not.');
}
if (errors.length) {
  console.error('Refusing to build the chooser:\n  ' + errors.join('\n  '));
  process.exit(1);
}

// ---- links, exactly as the second figure draws them ----
const edges = [];
for (let i = 0; i < entries.length; i++) {
  for (let k = i + 1; k < entries.length; k++) {
    const a = entries[i], b = entries[k];
    const shared = a.jobs.filter((x) => b.jobs.includes(x));
    if (shared.length) edges.push({ a: a.name, b: b.name, cross: a.cat !== b.cat, jobs: shared });
  }
}
const nCross = edges.filter((e) => e.cross).length;
const jobs = Object.entries(JOBS)
  .map(([key, j]) => ({ key, label: j.label, verb: j.verb, members: entries.filter((e) => e.jobs.includes(key)).map((e) => e.name) }))
  .filter((j) => j.members.length);

// The README links straight to jobs on this page. Those links are written by
// hand, so check them: each must name a job that exists, and each job must
// have one, or a renamed job would leave a link that silently opens nothing.
const linked = [...readme().matchAll(/#job=([a-z]+)/g)].map((m) => m[1]);
const keys = jobs.map((j) => j.key);
const deadLinks = [...new Set(linked.filter((k) => !keys.includes(k)))];
const unlinked = keys.filter((k) => !linked.includes(k));
if (deadLinks.length || unlinked.length) {
  if (deadLinks.length) console.error('README links to jobs that do not exist: ' + deadLinks.join(', '));
  if (unlinked.length) console.error('README has no link to these jobs: ' + unlinked.join(', '));
  process.exit(1);
}

const data = {
  entries,
  edges,
  nSame: edges.length - nCross,
  nCross,
  jobs,
  cats: CATS,
  catOrder: Object.keys(CATS).sort((a, b) => CATS[a].rank - CATS[b].rank),
  shapes: SHAPES,
  graphDesc: 'All ' + entries.length + ' systems. A link joins two that return the same kind of thing. '
    + (edges.length - nCross) + ' solid links join systems in the same category; ' + nCross
    + ' dashed links join systems in different categories, which do the same job but leave you answerable for different things.',
};

// ---- colours as CSS custom properties, from the shared palette ----
function vars(p) {
  const out = ['--edge: ' + p.edge + ';', '--cross: ' + p.cross + ';'];
  for (const name of data.catOrder) out.push('--cat-' + CATS[name].key + ': ' + p[CATS[name].key] + ';');
  return out;
}
const fill = (tpl, tag, lines) => tpl.replace(new RegExp('^([ \\t]*)/\\*' + tag + '\\*/', 'gm'), (m, ind) => lines.map((l) => ind + l).join('\n'));

let out = TEMPLATE;
out = fill(out, '__PALETTE_LIGHT__', vars(PALETTE.light));
out = fill(out, '__PALETTE_DARK__', vars(PALETTE.dark));
out = out.split('__REPO_URL__').join(REPO_URL);
const json = JSON.stringify(data).replace(/</g, '\\u003c');
const withData = out.replace('null; /*__DATA__*/', json + ';');
if (withData === out) { console.error('Data placeholder not found in template.html'); process.exit(1); }
if (/__[A-Z_]+__/.test(withData)) { console.error('An unfilled placeholder is left in the page'); process.exit(1); }

fs.writeFileSync(path.join(ROOT, 'docs', 'index.html'), withData);
// GitHub Pages runs Jekyll by default; this page needs none of it
fs.writeFileSync(path.join(ROOT, 'docs', '.nojekyll'), '');
console.log('site: docs/index.html, ' + entries.length + ' systems, ' + edges.length + ' links (' + nCross + ' cross-category), ' + jobs.length + ' jobs');
