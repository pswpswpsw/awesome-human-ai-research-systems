// Regenerates everything derived from the README tables:
//   docs/categories-*.svg   the Standing scale
//   docs/similar-*.svg      which systems do the same job
//   docs/index.html         the chooser page GitHub Pages serves
// Run after any change to a README table or to scripts/figures/graph-data.js:
//   node scripts/build.js
// Each step refuses to run, and this script stops, if the README and the
// graph data disagree, or if a count in the README prose no longer matches.
const path = require('path');
const { execFileSync } = require('child_process');

const STEPS = ['figures/categories.js', 'figures/similar.js', 'site/build.js'];
for (const step of STEPS) {
  try {
    execFileSync(process.execPath, [path.join(__dirname, step)], { stdio: 'inherit' });
  } catch (e) {
    console.error('\nStopped at ' + step + '. Nothing after it was rebuilt.');
    process.exit(1);
  }
}
