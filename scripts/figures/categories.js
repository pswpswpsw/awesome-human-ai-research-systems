// Figure 1: the Standing scale across the ranked four, and Bench off it.
// Counts come from the README tables. Run: node scripts/figures/categories.js
const { readEntries, counts, plural, write } = require('./readme');

const n = counts(readEntries());
const FONT = '&quot;Iowan Old Style&quot;,&quot;Palatino Linotype&quot;,Palatino,&quot;Book Antiqua&quot;,Georgia,&quot;Times New Roman&quot;,serif';
const T = {
  light: { bg: '#fdfcfa', card: '#f7f8fa', bd: '#d6dde5', ink: '#12181f', mut: '#5b6875', ax: '#8d99a6', ac: '#2d6a8f', be: '#a4602a', beBg: '#fbf1e6', acBg: '#eaf1f6' },
  dark: { bg: '#0d1117', card: '#161b22', bd: '#30363d', ink: '#e6edf3', mut: '#9198a1', ax: '#6e7681', ac: '#6cb6ff', be: '#e3a94a', beBg: '#241c11', acBg: '#132430' },
};
const BOX = [
  { n: 'Delegation', l1: 'It is the record.', l2: 'You rule once, at the end,', l3: 'on the whole finished work.' },
  { n: 'Standing Verdicts', l1: 'It stands until', l2: 'someone reverses it.', l3: '' },
  { n: 'Human Approval', l1: 'It waits for a named', l2: 'person’s ruling,', l3: 'which gets recorded.' },
  { n: 'Critique', l1: 'It can never be', l2: 'the record. It comments', l3: 'on work you already have.' },
];
const W = 860, H = 486, BW = 185, G = 12, X0 = 42, BY = 78, BH = 104;
const XE = X0 + 4 * BW + 3 * G;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function svg(mode) {
  const c = T[mode];
  const o = [];
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="${FONT}" role="img" aria-labelledby="figtitle figdesc">`);
  o.push('<title id="figtitle">How the five categories are arranged</title>');
  o.push('<desc id="figdesc">A partial view showing two of the five facets. Four categories sit in order on one qualitative scale, what the AI&#8217;s call on an item is worth before the researcher acts: in Delegation it is the record, in Standing Verdicts it stands until someone reverses it, in Human Approval it waits for a named person&#8217;s recorded ruling, in Critique it can never be the record. The order is qualitative, not a measured quantity. Bench sits off that scale because it answers a different question, who settles whether the AI was right: a reader for the other four, a run for Bench. Placement also depends on the other three facets, Scope, Record and Target.</desc>');
  o.push(`<rect width="${W}" height="${H}" fill="${c.bg}"/>`);
  o.push(`<text x="${X0}" y="32" font-size="16" font-weight="600" fill="${c.ink}">Standing: what the AI&#8217;s call on one item is worth before you do anything</text>`);
  o.push(`<text x="${X0}" y="52" font-size="12.5" fill="${c.mut}">These four sit in order on one qualitative scale. The order is a ranking, not a measured quantity, and it is one facet</text>`);
  o.push(`<text x="${X0}" y="68" font-size="12.5" fill="${c.mut}">rather than the categories themselves.</text>`);
  BOX.forEach((b, i) => {
    const x = X0 + i * (BW + G);
    o.push(`<rect x="${x}" y="${BY}" width="${BW}" height="${BH}" rx="7" fill="${c.card}" stroke="${c.bd}"/>`);
    o.push(`<rect x="${x}" y="${BY}" width="5" height="${BH}" rx="2.5" fill="${c.ac}"/>`);
    o.push(`<text x="${x + 18}" y="${BY + 25}" font-size="14" font-weight="700" fill="${c.ink}">${esc(b.n)}</text>`);
    o.push(`<text x="${x + 18}" y="${BY + 43}" font-size="11.5" fill="${c.mut}">${plural(n[b.n])}</text>`);
    o.push(`<text x="${x + 18}" y="${BY + 66}" font-size="11.5" fill="${c.ink}">${esc(b.l1)}</text>`);
    o.push(`<text x="${x + 18}" y="${BY + 81}" font-size="11.5" fill="${c.ink}">${esc(b.l2)}</text>`);
    if (b.l3) o.push(`<text x="${x + 18}" y="${BY + 96}" font-size="11.5" fill="${c.ink}">${esc(b.l3)}</text>`);
  });
  const AY = 216;
  o.push(`<defs><marker id="arw${mode}" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,1 L8,4.5 L0,8 z" fill="${c.ax}"/></marker></defs>`);
  o.push(`<line x1="${X0}" y1="${AY}" x2="${XE}" y2="${AY}" stroke="${c.ax}" stroke-width="1.6" marker-end="url(#arw${mode})"/>`);
  o.push(`<text x="${X0}" y="${AY + 22}" font-size="12" fill="${c.mut}">the AI&#8217;s call is already the record</text>`);
  o.push(`<text x="${XE}" y="${AY + 22}" font-size="12" fill="${c.mut}" text-anchor="end">it can never be the record</text>`);
  o.push(`<line x1="${X0}" y1="278" x2="${XE}" y2="278" stroke="${c.bd}" stroke-width="1" stroke-dasharray="4 4"/>`);
  o.push(`<text x="${X0}" y="308" font-size="16" font-weight="600" fill="${c.ink}">Bench is not further along that line. It answers a different question.</text>`);
  o.push(`<text x="${X0}" y="330" font-size="13" fill="${c.mut}">Arbiter: who settles whether the AI was right?</text>`);
  const FY = 346, FH = 86, FW = 382, RX = X0 + FW + G + 2;
  o.push(`<rect x="${X0}" y="${FY}" width="${FW}" height="${FH}" rx="7" fill="${c.acBg}" stroke="${c.bd}"/>`);
  o.push(`<text x="${X0 + 16}" y="${FY + 26}" font-size="13.5" font-weight="700" fill="${c.ac}">a reader</text>`);
  o.push(`<text x="${X0 + 16}" y="${FY + 47}" font-size="11.5" fill="${c.ink}">A reader judges whether the AI was right.</text>`);
  o.push(`<text x="${X0 + 16}" y="${FY + 64}" font-size="11.5" fill="${c.mut}">The four categories above.</text>`);
  o.push(`<rect x="${RX}" y="${FY}" width="${FW}" height="${FH}" rx="7" fill="${c.beBg}" stroke="${c.bd}"/>`);
  o.push(`<text x="${RX + 16}" y="${FY + 26}" font-size="13.5" font-weight="700" fill="${c.be}">a run</text>`);
  o.push(`<text x="${RX + 16}" y="${FY + 47}" font-size="11.5" fill="${c.ink}">A measurement settles it, and that result</text>`);
  o.push(`<text x="${RX + 16}" y="${FY + 62}" font-size="11.5" fill="${c.ink}">feeds the next proposal. A human act is</text>`);
  o.push(`<text x="${RX + 16}" y="${FY + 77}" font-size="11.5" fill="${c.ink}">required in between. Bench &#183; ${plural(n['Bench'])}.</text>`);
  o.push(`<text x="${X0}" y="464" font-size="11.5" fill="${c.mut}">Two of five facets shown. Placement also depends on Scope, Record and Target, tabulated in METHOD.md.</text>`);
  o.push('</svg>');
  return o.join('\n');
}

write('categories-light.svg', svg('light'));
write('categories-dark.svg', svg('dark'));
console.log('categories: ' + Object.entries(n).map(([k, v]) => k + ' ' + v).join(', '));
