# Testing the CodeQL Security Fix

## Overview
This document describes how to safely test the security fix for CodeQL alert #52 before merging to `develop`.

## What Changed?

### Security Vulnerability (Alert #52)
- **Severity:** High
- **Issue:** Checkout of untrusted code in privileged context
- **Location:** `.github/workflows/netlify-build-forked-pr.yml:144-152`

### The Fix
**Before:** Workflow checked out untrusted fork code locally using `actions/checkout`
```yaml
- uses: actions/checkout@v3
  with:
    ref: ${{ github.event.pull_request.head.sha }}  # Untrusted!
```

**After:** Uses GitHub API to create/update branches without checkout
```javascript
await github.rest.git.createRef({
  owner: context.repo.owner,
  repo: context.repo.repo,
  ref: `refs/heads/${prBranch}`,
  sha: headSha,
});
```

**Security Benefit:** No untrusted code is ever checked out or executed locally ✅

---

## Testing Options

### Option 1: Safe Test Workflow (Recommended)

A test workflow has been created: `.github/workflows/netlify-build-forked-pr-TEST.yml`

**Steps:**

1. **Push your branch:**
   ```bash
   git add .
   git commit -m "fix: replace checkout with GitHub API to fix CodeQL security vulnerability"
   git push origin fix/codeql-security-vulnerabilities
   ```

2. **Run the test workflow:**
   - Go to: https://github.com/newrelic/docs-website/actions/workflows/netlify-build-forked-pr-TEST.yml
   - Click **"Run workflow"**
   - Select branch: `fix/codeql-security-vulnerabilities`
   - Enter inputs:
     - **pr_number:** Any open PR number (check with `gh pr list`)
     - **comment_author:** Your GitHub username (must be in DOCS-ENG team)
   - Click **"Run workflow"**

3. **Verify results:**
   - ✅ Workflow completes successfully
   - ✅ No checkout steps in the logs
   - ✅ Branch created via GitHub API calls
   - ✅ Test branch automatically cleaned up

**Note:** The test workflow:
- Uses a `TEST-` prefix for branch names
- Cleans up automatically
- Won't create PRs or trigger Netlify builds
- Safe to run multiple times

---

### Option 2: Create a Test PR to Develop

If you want to test the real workflow end-to-end:

1. **Create PR to develop:**
   ```bash
   gh pr create --base develop --title "fix: CodeQL security vulnerability #52" \
     --body "Fixes CodeQL alert by replacing checkout with GitHub API calls"
   ```

2. **Wait for a fork PR:**
   - Find an existing open fork PR, or
   - Wait for a new fork PR to be created
   - Ask a team member to comment "netlify build fork" on the fork PR

3. **Monitor the workflow:**
   - Check the Actions tab for the workflow run
   - Verify it completes successfully
   - Check that the mirrored branch is created

4. **If issues occur:**
   - The workflow will fail safely (no security risk)
   - Fix issues in your branch
   - Push updates and repeat

---

### Option 3: Code Review Only

If you prefer to merge without live testing:

1. **Review the changes:**
   - The logic is equivalent to the old version
   - Only the implementation changed (git commands → GitHub API)
   - Same inputs, same outputs

2. **Create PR for team review:**
   ```bash
   gh pr create --base develop --title "fix: CodeQL security vulnerability #52" \
     --body "$(cat <<'EOF'
   ## Security Fix

   Fixes CodeQL alert #52: "Checkout of untrusted code in trusted context"

   ### Changes
   - Replaced `actions/checkout` with GitHub API calls
   - Uses `github.rest.git.createRef()` and `updateRef()` to create branches
   - No untrusted code is checked out or executed

   ### Security Benefits
   - ✅ Eliminates code execution attack vector
   - ✅ Maintains all existing functionality
   - ✅ Faster execution (no checkout needed)
   - ✅ Preserves authorization checks

   ### Testing
   - Test workflow available: `netlify-build-forked-pr-TEST.yml`
   - Can be manually triggered for validation
   - See TESTING_WORKFLOW_FIX.md for details

   Fixes #52
   EOF
   )"
   ```

3. **Get approvals from team members**

4. **Merge and monitor:**
   - Merge to `develop`
   - Monitor the next fork PR that triggers the workflow
   - CodeQL will rescan and close the alert automatically

---

## Verification Checklist

After deployment, verify:

- [ ] Workflow triggers on fork PR comments
- [ ] Team membership check works
- [ ] Branch created with correct name
- [ ] Mirrored PR created successfully
- [ ] Comments posted to both PRs
- [ ] Netlify build triggered
- [ ] CodeQL alert #52 marked as resolved
- [ ] No checkout steps in workflow logs

---

## Rollback Plan

If issues occur after merging:

1. **Immediate rollback:**
   ```bash
   git revert <commit-sha>
   git push origin develop
   ```

2. **Emergency fix:**
   - The old workflow version is in git history
   - Can quickly restore if needed
   - Create hotfix branch from previous commit

3. **Debug approach:**
   - Check workflow logs in Actions tab
   - Look for GitHub API errors
   - Verify `REPO_ACCESS_TOKEN` has correct permissions

---

## Additional Notes

### Required Permissions
The `REPO_ACCESS_TOKEN` needs:
- `repo` scope (for creating branches)
- `workflow` scope (if modifying workflow files)

### Branch Naming
- Same sanitization logic as before
- Format: `{author}-{branch}` → sanitized
- Example: `john-doe-fix-typo` → `john-doe-fix-typo`

### Performance
The new approach is **faster** because:
- No repository checkout (saves ~10-30 seconds)
- No git operations locally
- Direct API calls are more efficient

---

## Questions?

- Review the code changes in `.github/workflows/netlify-build-forked-pr.yml`
- Check the test workflow: `.github/workflows/netlify-build-forked-pr-TEST.yml`
- See CodeQL guidance: https://codeql.github.com/codeql-query-help/actions/actions-untrusted-checkout/
