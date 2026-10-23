// Near-duplicates, grouped. A cluster is a set of systems that pass every
// written test and answer the same question for the same reader: the same
// need, the same category, and the same thing in and out.
// One featured system keeps its full README row, its card and its column in
// How they differ. Every other member is one line under it: what it does
// differently, with the page and the words that line rests on. METHOD.md's
// "Clusters" section has the criteria that pick the featured system; the order
// in which systems reached the list counts for nothing.
//
// The close-alternatives lists in the README's need panels and under its
// category tables, the chooser's stacked cards and the list in METHOD.md's
// Clusters section are all built from this file. The build refuses to run if a
// featured system is not a README row, if a member also has a README row (by
// name or by URL), if a member line has no source, if a URL is not https, if a
// system sits in two clusters, or if a member still appears in METHOD.md's
// exclusion table.

// key: {
//   title     the shared approach, shown on the stack
//   featured  the system's name exactly as the README table writes it
//   reason    why it is featured, criterion by criterion (written into METHOD.md)
//   members   [{ name, url, line, src: { url, quote }, was }]
//             line: one documented difference from the featured system
//             was:  the month it last had its own README row, if it had one
// }
const CLUSTERS = {
  "local-agent": {
    title: "Your files in, analyses out, on your own machine",
    featured: "Wisp Science",
    reason: "Criterion 1. Only its docs name a state recorded on single items of the output: each evidence binding is marked Candidate, Selected or Rejected, with a purpose and a selection rationale, though they do not say who sets it. They also list what the exported capsule holds. The other five document rulings on actions or plans only, so backing and stars, where several of them lead, are never reached.",
    members: [
      { name: "OpenScience", url: "https://github.com/synthetic-sciences/openscience", line: "in its Autoresearch studies the agent records a kept or reverted verdict on each run",
        src: { url: "https://openscience.sh/docs/llms-full.txt", quote: "The agent records a verdict for each run (kept or reverted, with its analysis and any lesson)" } },
      { name: "OpenAI4S", url: "https://github.com/PKU-YuanGroup/OpenAI4S", line: "shares a session as a read-only snapshot that anyone with the link can view",
        src: { url: "https://github.com/PKU-YuanGroup/OpenAI4S/blob/main/docs/webshare.md", quote: "Share a session as a read-only snapshot that anyone with the link can view" } },
      { name: "AIPOCH Open-Science", url: "https://github.com/aipoch/open-science", line: "exported `.science` packages describe their final snapshot with RO-Crate 1.1 metadata",
        src: { url: "https://github.com/aipoch/open-science/blob/main/release-notes/0.33.0/en.md", quote: "Newly exported `.science` packages describe their final snapshot with RO-Crate 1.1 metadata" } },
      { name: "Open Science Desktop", url: "https://github.com/ai4s-research/open-science", line: "its `osd server` command runs the workbench with no window",
        src: { url: "https://github.com/ai4s-research/open-science/blob/master/README.md", quote: "`osd server` runs the workbench with no window" } },
      { name: "ScienceDiscovery (openJiuwen)", url: "https://github.com/openJiuwen-ai/sciencediscovery", line: "its code sandbox has no network interface by default",
        src: { url: "https://sciencediscovery.github.io/docs/reference/runtime-behavior.html", quote: "Network is a policy, not a constant: it defaults to none (no interface in the sandbox)" } },
    ],
  },
};

const norm = (u) => u.toLowerCase().replace(/^https?:\/\/(www\.)?/, '').replace(/\/+$/, '');

function checkClusters(rows, methodText) {
  const errors = [];
  const names = new Set(rows.map((r) => r.name));
  const rowUrls = new Map(rows.map((r) => [norm(r.url), r.name]));
  const seen = new Map();
  const https = (u) => /^https:\/\/[^\s"<>]+$/.test(u || '');
  const excluded = (() => {
    const i = methodText.indexOf('## What the tests excluded');
    if (i < 0) { errors.push('METHOD.md has no "## What the tests excluded" section, so the cluster exclusion check cannot run.'); return ''; }
    const j = methodText.indexOf('\n## ', i + 5);
    return methodText.slice(i, j < 0 ? undefined : j).toLowerCase();
  })();
  const note = (id, label, key) => {
    if (seen.has(id)) errors.push(seen.get(id) === key ? '"' + label + '" appears twice in cluster "' + key + '".' : '"' + label + '" sits in two clusters: ' + seen.get(id) + ' and ' + key + '.');
    seen.set(id, key);
  };
  for (const [key, c] of Object.entries(CLUSTERS)) {
    if (!c.title || !c.reason) errors.push('cluster "' + key + '" needs a title and a reason.');
    if (!names.has(c.featured)) errors.push('cluster "' + key + '" features "' + c.featured + '", which has no README row.');
    const row = rows.find((r) => r.name === c.featured);
    note(row ? norm(row.url) : c.featured, c.featured, key);
    if (!c.members || !c.members.length) errors.push('cluster "' + key + '" has no members besides its featured system.');
    for (const m of c.members || []) {
      note(m.url ? norm(m.url) : m.name, m.name, key);
      if (names.has(m.name)) errors.push('"' + m.name + '" is a member of cluster "' + key + '" and also has its own README row.');
      else if (m.url && rowUrls.has(norm(m.url))) errors.push('"' + m.name + '" in cluster "' + key + '" links ' + m.url + ', which the README row "' + rowUrls.get(norm(m.url)) + '" also links.');
      if (!https(m.url) || (m.src && !https(m.src.url))) errors.push('"' + m.name + '" in cluster "' + key + '": its url and source url must be https.');
      if (!m.url || !m.line) errors.push('"' + m.name + '" in cluster "' + key + '" needs a url and a line.');
      if (!m.src || !m.src.url || !m.src.quote) errors.push('"' + m.name + '" in cluster "' + key + '": its line needs a source url and quote.');
      const inTable = (m.url && new RegExp('\\(https?://(www\\.)?' + norm(m.url).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '/?[)#?]').test(excluded)) || excluded.includes('[' + m.name.toLowerCase() + '](');
      if (inTable) errors.push('"' + m.name + '" is in cluster "' + key + '" but still in METHOD.md\'s exclusion table.');
    }
  }
  return errors;
}

// The cluster a README row features, if any.
function clusterOf(name) {
  for (const [key, c] of Object.entries(CLUSTERS)) if (c.featured === name) return Object.assign({ key }, c);
  return null;
}

const alternatives = () => Object.values(CLUSTERS).reduce((n, c) => n + c.members.length, 0);

module.exports = { CLUSTERS, checkClusters, clusterOf, alternatives };
