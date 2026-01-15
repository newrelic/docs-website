import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

// Add or remove entries here; ALWAYS include trailing slash for directories.
// Example: 'src/content/docs/experimental/' to exclude that subdir.
const EXCLUDE_PREFIXES = [
  'src/content/docs/release-notes/', 
  'src/content/docs/style-guide/',
];

function isExcluded(relPath) {
  return EXCLUDE_PREFIXES.some(pref => relPath.startsWith(pref));
}

function sh(cmd) {
  try { return execSync(cmd, { encoding: 'utf8' }).trim(); } catch { return ''; }
}

function listMdxFiles() {
  console.log('Collecting tracked MDX files...');
  const all = sh('git ls-files src/content/docs');
  const tracked = all ? all.split('\n').filter(f => f.endsWith('.mdx') && !isExcluded(f)) : [];
  console.log(`Found ${tracked.length} tracked MDX files...`);
  return tracked;
}

function lastCommitISO(path) {
  return sh(`git log -1 --format=%cI -- "${path}"`) || null;
}

function daysBetween(iso) {
  const then = Date.parse(iso);
  const now = Date.now();
  return (now - then) / (1000 * 60 * 60 * 24);
}

function monthsBetween(iso) {
  return daysBetween(iso) / 30;
}

function main() {

  console.log('Starting MDX tracking scan...');
  const files = listMdxFiles();

  console.log('Querying last commit for each file...');
  const rows = [];
  let processed = 0;

  for (const f of files) {
    const iso = lastCommitISO(f);
    processed++;
    if (processed % 500 === 0) console.log(`Processed ${processed} files...`);
    if (!iso) continue; // skip if no commit
    const ageDays = daysBetween(iso);
    const ageMonths = monthsBetween(iso);
    rows.push({ path: f, lastCommit: iso, ageDays, ageMonths });
  }
  console.log(`Collected commit data for ${rows.length} files`);

  // Sort by age (oldest first)
  rows.sort((a,b) => b.ageDays - a.ageDays);
  console.log('Sorted files by age (descending)');

  // Determine age bucket for each row
  function getAgeBucket(ageMonths) {
    if (ageMonths >= 24) return '24+ months';
    if (ageMonths >= 18) return '18-24 months';
    if (ageMonths >= 12) return '12-18 months';
    if (ageMonths >= 6) return '6-12 months';
    return '0-6 months';
  }

  // Escape CSV field if needed (contains comma, quote, or newline)
  function escapeCSV(field) {
    if (field.includes(',') || field.includes('"') || field.includes('\n')) {
      return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
  }

  // Generate CSV output
  const csvLines = [];
  csvLines.push('Path,Last Commit,Age (months),Age (days),Age Bucket');

  for (const r of rows) {
    const bucket = getAgeBucket(r.ageMonths);
    const line = [
      escapeCSV(r.path),
      r.lastCommit,
      r.ageMonths.toFixed(1),
      r.ageDays.toFixed(0),
      bucket
    ].join(',');
    csvLines.push(line);
  }

  const outputCSV = csvLines.join('\n');
  const outArg = process.argv.find(a => a.startsWith('--out='));
  const outPath = outArg ? outArg.split('=')[1] : 'mdx-freshness.csv';
  try {
    writeFileSync(outPath, outputCSV, 'utf8');
    console.log(`Wrote report to ${outPath}`);
  } catch (e) {
    console.log('Failed writing file, falling back to stdout');
    console.log(outputCSV);
  }
  console.log('Done');
}

main();
