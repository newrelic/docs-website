# MDX Auto-Fix Test Files

This directory contains intentionally broken MDX files to test the auto-fix workflow.

## Test Files

### 1. test-html-comments.mdx
**Tests:** HTML comments around JSX components
**Pattern:** `<!-- <Component> ... </Component> -->`
**Should fix to:** `<Component> ... </Component>`
**Based on:** Commits 9491e0e6cf, 791e9775b6

### 2. test-escaped-comments.mdx
**Tests:** Escaped JSX comment delimiters
**Pattern:** `{/\* comment \*/}`
**Should fix to:** `{/* comment */}`
**Based on:** Commit 6b901cfd51

### 3. test-block-comments.mdx
**Tests:** Block comments in JSX context
**Pattern:** `/* comment */` (not wrapped in curlies)
**Should fix to:** `{/* comment */}`
**Based on:** Commits 9491e0e6cf, 4e24aad33d

### 4. test-missing-releasedate.mdx
**Tests:** Missing releaseDate in release notes
**Pattern:** Frontmatter without `releaseDate` field
**Should fix to:** Add `releaseDate: 'YYYY-MM-DD'`
**Based on:** Commit 856d20810a

### 5. test-combined-errors.mdx
**Tests:** Multiple error types in one file
**Combines:** All the above error patterns

### 6. test-translated-style-errors.mdx
**Tests:** Real patterns from machine translations
**Mimics:** Actual translation PR errors we found

## How to Test

### Local Testing

```bash
# Run verify to see the errors
yarn verify-mdx src/content/docs/test-mdx-errors/

# Run the fixer
yarn fix-mdx src/content/docs/test-mdx-errors/

# Verify the fixes
yarn verify-mdx src/content/docs/test-mdx-errors/
```

### Testing the GitHub Actions Workflow

1. Commit these test files to a branch
2. Push to GitHub
3. Open a PR against `develop` or `main`
4. Watch the `verify mdx files` workflow:
   - Should detect errors initially
   - Should run auto-fix
   - Should commit fixes automatically
   - Should re-verify and pass (or show remaining errors)
   - Should comment on PR with results

## Expected Outcomes

### Full Auto-Fix (Best Case)
- All test files should be fixed automatically
- New commit pushed with fixes
- PR comment: "✅ MDX Errors Auto-Fixed"
- Workflow passes

### Partial Auto-Fix (Likely Case)
- Most errors fixed automatically
- Some complex errors remain
- New commit pushed with partial fixes
- PR comment: "⚠️ MDX Errors Partially Fixed" with remaining error details
- Workflow fails but provides guidance

## Cleanup

After testing, you can either:
- Keep these files for future testing
- Delete them: `rm -rf src/content/docs/test-mdx-errors/`
- Move them to a test directory outside src/content/

## Success Criteria

✅ Workflow detects all intentional errors
✅ Auto-fixer runs without crashing
✅ At least 80% of errors are auto-fixed
✅ Remaining errors are clearly reported in PR comment
✅ Fixed files pass verification
