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

  // Grouping buckets
  const buckets = [
    { label: '24+ months', filter: r => r.ageMonths >= 24 },
    { label: '18-24 months', filter: r => r.ageMonths >= 18 && r.ageMonths < 24 },
    { label: '12-18 months', filter: r => r.ageMonths >= 12 && r.ageMonths < 18 },
    { label: '6-12 months', filter: r => r.ageMonths >= 6 && r.ageMonths < 12 },
    { label: '0-6 months', filter: r => r.ageMonths < 6 },
  ];

  function renderTable(sectionRows) {
    if (sectionRows.length === 0) return '_No files_';
    const header = ['Path','Last Commit','Age (months)','Age (days)'];
    const lines = [
      `| ${header.join(' | ')} |`,
      `| ${header.map(()=> '---').join(' | ')} |`
    ];
    for (const r of sectionRows) {
      lines.push(`| ${r.path} | ${r.lastCommit} | ${r.ageMonths.toFixed(1)} | ${r.ageDays.toFixed(0)} |`);
    }
    return lines.join('\n');
  }

  const summaryCounts = buckets.map(b => ({ label: b.label, count: rows.filter(b.filter).length }));

  const out = [];
  out.push('# MDX Report');
  out.push('');

  out.push(`Generated: ${new Date().toISOString()}`);
  out.push('');

  out.push('## Summary by Age Bucket');
  out.push('');

  out.push('| Age Bucket | File Count |');
  out.push('| --- | ---: |');
  for (const sc of summaryCounts) {
    out.push(`| ${sc.label} | ${sc.count} |`);
  }
  out.push('');

  for (const b of buckets) {
    const sectionRows = rows.filter(b.filter);
    out.push(`## ${b.label}`);
    out.push('');
    out.push(renderTable(sectionRows));
    out.push('');
  }
  const outputTxt = out.join('\n');
  const outArg = process.argv.find(a => a.startsWith('--out='));
  const outPath = outArg ? outArg.split('=')[1] : 'mdx-freshness.txt';
  try {
    writeFileSync(outPath, outputTxt, 'utf8');
    console.log(`Wrote report to ${outPath}`);
  } catch (e) {
    console.log('Failed writing file, falling back to stdout');
    console.log(outputTxt);
  }
  console.log('Done');
}

main();
