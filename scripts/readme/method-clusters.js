// Writes the list of clusters into METHOD.md's "Clusters" section, between
// <!-- clusters:start --> and <!-- clusters:end -->, from scripts/lib/clusters.js,
// so the featured system, its members and the reason it is featured cannot
// drift from what the README and the chooser show. Run everything with:
//   node scripts/build.js
const fs = require('fs');
const path = require('path');
const { ROOT } = require('../lib/readme');
const { CLUSTERS } = require('../lib/clusters');
const { NEEDS } = require('../lib/data');

const START = '<!-- clusters:start -->';
const END = '<!-- clusters:end -->';
const FILE = path.join(ROOT, 'METHOD.md');
const text = fs.readFileSync(FILE, 'utf8');
const i = text.indexOf(START), j = text.indexOf(END);
if (i < 0 || j < i) {
  console.error('METHOD.md needs the markers ' + START + ' and ' + END + ' in its Clusters section.');
  process.exit(1);
}
const and = (xs) => (xs.length < 2 ? xs.join('') : xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1]);
const lines = Object.values(CLUSTERS).map((c) =>
  '- **' + c.featured + '** is featured for *' + c.title.charAt(0).toLowerCase() + c.title.slice(1) + '*' +
  (c.job ? ', under *' + NEEDS[c.job].label + '* only' : '') + ', ahead of ' + and(c.members.map((m) => m.name)) + '. ' + c.reason);
const block = START + '\n' + lines.join('\n') + '\n' + END;
const next = text.slice(0, i) + block + text.slice(j + END.length);
if (next !== text) fs.writeFileSync(FILE, next);
console.log('method: clusters list ' + (next !== text ? 'rewritten' : 'unchanged') + ' (' + Object.keys(CLUSTERS).length + ' clusters)');
