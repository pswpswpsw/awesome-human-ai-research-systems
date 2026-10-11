// Regenerates everything derived from the README tables:
//   README.md, the section between <!-- needs:start --> and <!-- needs:end -->
//   docs/categories-*.svg   the Standing scale
//   docs/index.html         the chooser page GitHub Pages serves
// Run after any change to a README table, to scripts/lib/data.js or to
// scripts/lib/compare.js:
//   node scripts/build.js
// Each step refuses to run, and this script stops, if the README and the
// needs list in scripts/lib/data.js disagree, if a count in the README prose
// no longer matches, or if a How they differ table fails the checks in
// scripts/lib/compare.js.
const path = require('path');
const { execFileSync } = require('child_process');

const STEPS = ['readme/needs.js', 'figures/categories.js', 'site/build.js'];
for (const step of STEPS) {
  try {
    execFileSync(process.execPath, [path.join(__dirname, step)], { stdio: 'inherit' });
  } catch (e) {
    console.error('\nStopped at ' + step + '. Nothing after it was rebuilt.');
    process.exit(1);
  }
}
