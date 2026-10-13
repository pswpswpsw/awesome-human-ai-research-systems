// Regenerates everything derived from the README tables:
//   README.md, the section between <!-- needs:start --> and <!-- needs:end -->
//   docs/categories-*.svg   the Standing scale
//   docs/index.html         the chooser page GitHub Pages serves
// Run after any change to a README table, or to scripts/lib/data.js,
// scripts/lib/compare.js or scripts/lib/clusters.js:
//   node scripts/build.js
// Each step refuses to run, and this script stops, if the README and the
// needs list in scripts/lib/data.js disagree, if a count in the README prose
// no longer matches, if a How they differ table fails the checks in
// scripts/lib/compare.js, if a cluster in scripts/lib/clusters.js is
// inconsistent with the README or METHOD.md's exclusion table, or if the
// At a glance counts or the close-alternatives count are stale. It also
// writes the list of clusters into METHOD.md.
const path = require('path');
const { execFileSync } = require('child_process');

const STEPS = ['readme/needs.js', 'readme/method-clusters.js', 'figures/categories.js', 'site/build.js'];
for (const step of STEPS) {
  try {
    execFileSync(process.execPath, [path.join(__dirname, step)], { stdio: 'inherit' });
  } catch (e) {
    console.error('\nStopped at ' + step + '. Nothing after it was rebuilt.');
    process.exit(1);
  }
}
