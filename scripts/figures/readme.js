// Reads the product tables out of README.md, so the figures are drawn from
// the same rows a reader sees rather than from a second copy of the list.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const CATS = ['Delegation', 'Standing Verdicts', 'Human Approval', 'Critique', 'Bench'];

function readme() {
  return fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
}

function readEntries() {
  const out = [];
  for (const s of readme().split(/^## /m).slice(1)) {
    const cat = s.split('\n')[0].trim();
    if (!CATS.includes(cat)) continue;
    for (const l of s.split('\n')) {
      const m = l.match(/^\| \[([^\]]+)\]\(https?:/);
      if (m) out.push({ name: m[1], cat });
    }
  }
  return out;
}

function counts(entries) {
  const c = {};
  for (const k of CATS) c[k] = 0;
  for (const e of entries) c[e.cat]++;
  return c;
}

const plural = (n) => n + (n === 1 ? ' system' : ' systems');

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const words = (n) => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : ''));

function write(name, svg) {
  fs.writeFileSync(path.join(ROOT, 'docs', name), svg);
}

module.exports = { ROOT, CATS, readme, readEntries, counts, plural, words, write };
