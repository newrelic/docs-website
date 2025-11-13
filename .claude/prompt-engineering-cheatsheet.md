# Claude Code Prompt Engineering Cheat Sheet for Technical Writers

## 🚫 Traditional Prompting vs ✅ Claude Code + MCP

### ❌ INEFFECTIVE: Generic AI Writing Prompts
```
"Write documentation for our security feature"
"Make this page better"
"Create API docs"
"Review this content"
```

### ✅ EFFECTIVE: Context-Rich, Structured Prompts

## 📋 Quick Reference Templates

### 1. Documentation Review
```
Review src/content/docs/vulnerability-management/overview.mdx for:
- New Relic style guide compliance
- Technical accuracy of Security RX features
- User onboarding flow effectiveness
- Cross-reference link validity

Provide line-specific feedback with improvement suggestions.
```

### 2. Content Enhancement
```
Enhance the Security RX overview page by:
1. Adding a "Quick Start" section for first-time users
2. Including 3 practical NRQL query examples
3. Strengthening the value proposition in the intro
4. Ensuring all integration links work correctly

Maintain existing MDX structure and New Relic voice.
```

### 3. Documentation Gap Analysis
```
Compare our current NRQL security examples against:
- Popular vulnerability detection use cases
- Integration documentation coverage
- Competitor documentation completeness

Identify top 5 missing examples and create them.
```

## 🎯 Prompt Patterns That Work

### Pattern 1: Context → Task → Constraints → Output
```
CONTEXT: Working on Security RX docs for DevSecOps teams
TASK: Create tutorial for setting up AWS Security Hub integration
CONSTRAINTS: Must follow DITA task structure, include troubleshooting
OUTPUT: Complete MDX file with working code examples
```

### Pattern 2: File-Specific Updates
```
Update src/content/docs/vulnerability-management/integrations/aws.mdx:
- Add CloudFormation template examples
- Update IAM policy requirements
- Include new API endpoints from v2.1
- Test all code examples for accuracy
```

### Pattern 3: Cross-Document Consistency
```
Ensure consistency across these Security RX files:
- overview.mdx
- integrations/aws.mdx
- integrations/snyk.mdx

Standardize: terminology, code formatting, cross-references, tone
```

## 🔧 Leveraging Claude Code's Unique Capabilities

### 1. Repository Context Awareness
**Instead of:** "Look at our docs"
**Use:** "Review src/content/docs/vulnerability-management/ structure and identify inconsistencies with our integration pattern in src/content/docs/integrations/"

### 2. Real-time File Analysis
**Instead of:** "Check if this is correct"
**Use:** "Verify that all NRQL examples in this file execute correctly and match our current schema"

### 3. Cross-Reference Validation
**Instead of:** "Make sure links work"
**Use:** "Validate all internal links in the vulnerability management section and update any that point to deprecated pages"

## 📊 Before/After Examples

### Example 1: Feature Documentation

#### ❌ BEFORE (Weak Prompt)
```
"Document the new security feature"
```

#### ✅ AFTER (Strong Prompt)
```json
{
  "context": {
    "feature": "Security RX Cloud Vulnerability Detection",
    "audience": "DevSecOps engineers using AWS",
    "existing_docs": "src/content/docs/vulnerability-management/",
    "integration_point": "AWS Security Hub"
  },
  "task": {
    "deliverable": "Complete feature documentation with setup guide",
    "scope": "Cover installation, configuration, and first-use scenarios",
    "examples_needed": ["CloudFormation template", "IAM policies", "NRQL queries"]
  },
  "requirements": {
    "format": "DITA-style task documentation",
    "voice": "New Relic conversational but authoritative",
    "technical_level": "Intermediate AWS users"
  }
}
```

### Example 2: Content Review

#### ❌ BEFORE (Vague Request)
```
"Is this page good?"
```

#### ✅ AFTER (Specific Review Criteria)
```
Review src/content/docs/vulnerability-management/overview.mdx against:

CONTENT QUALITY:
- Does the intro clearly explain Security RX value in <30 seconds?
- Are use cases specific and actionable?
- Do code examples work with current API?

NEW RELIC STANDARDS:
- Voice and tone consistency with style guide
- Proper use of DNT, Callout, and CodeBlock components
- SEO optimization (title, meta description, headings)

USER EXPERIENCE:
- Clear path from overview to first action
- Logical information hierarchy
- Mobile-friendly formatting

Provide specific line numbers and actionable improvements.
```

### Example 3: API Documentation

#### ❌ BEFORE (Generic Request)
```
"Create API docs from this code"
```

#### ✅ AFTER (Comprehensive Specification)
```
Generate API documentation for Security RX endpoints by:

1. ANALYZING: Review the OpenAPI spec in /api/security-rx/
2. STRUCTURING: Use New Relic API doc template pattern
3. EXAMPLES: Create working cURL and JavaScript examples
4. INTEGRATION: Cross-reference with existing authentication docs
5. TESTING: Verify all examples execute successfully

Include: endpoint descriptions, parameter tables, response schemas, error codes, rate limiting info.

Format as MDX with proper frontmatter for New Relic docs site.
```

## 🎭 Role-Based Prompt Strategies

### For Technical Writers
```
"As a technical writer reviewing this Security RX documentation, evaluate:
- Information architecture and flow
- Clarity for target audience (DevSecOps teams)
- Completeness of task-oriented content
- Integration with existing doc ecosystem"
```

### For Subject Matter Experts
```
"As a security engineer, verify this documentation for:
- Technical accuracy of configurations
- Real-world applicability of examples
- Potential security implications or warnings needed
- Missing edge cases or troubleshooting scenarios"
```

### For UX Writers
```
"As a UX writer, assess this documentation for:
- User journey and onboarding flow
- Language clarity and accessibility
- Call-to-action effectiveness
- Cognitive load and information hierarchy"
```

## ⚡ Power User Tips

### 1. Batch Operations
```
"Perform these tasks in parallel:
1. Review AWS integration docs for accuracy
2. Update Snyk integration with new API changes
3. Validate all NRQL examples execute correctly
4. Check cross-references between security docs"
```

### 2. Template Creation
```
"Create a reusable template for integration documentation based on:
- Current AWS integration structure
- Snyk integration patterns
- New Relic component usage standards
- Include sections for: overview, setup, configuration, examples, troubleshooting"
```

### 3. Consistency Audits
```
"Audit all Security RX documentation for:
- Consistent terminology (Security RX vs Vulnerability Management)
- Standardized code formatting and syntax highlighting
- Uniform use of callouts and warnings
- Cross-reference completeness and accuracy"
```

## 🚀 Advanced Techniques

### Multi-Document Updates
```
"Update security terminology across these files to use 'Security RX' consistently:
- src/content/docs/vulnerability-management/*.mdx
- src/nav/security.yml
- Any cross-references in other documentation sections

Maintain all existing functionality and links."
```

### Integration Testing
```
"Test the complete Security RX onboarding flow by:
1. Following the overview documentation step-by-step
2. Executing all NRQL examples provided
3. Verifying integration setup instructions work
4. Identifying any gaps or friction points
5. Suggesting improvements for smoother user experience"
```

### Competitive Analysis Integration
```
"Compare our Security RX documentation approach with industry standards:
- Analyze 3 similar security platform docs
- Identify gaps in our coverage
- Suggest improvements for competitive advantage
- Maintain New Relic's unique voice and approach"
```

## 📋 Quick Copy-Paste Templates

### Documentation Review
```
Review [FILE_PATH] for New Relic standards compliance:
- Style guide adherence
- Technical accuracy
- User experience flow
- SEO optimization
Provide specific, actionable feedback.
```

### Content Creation
```json
{
  "context": {"audience": "TARGET_USERS", "existing_content": "FILE_PATH"},
  "task": {"deliverable": "SPECIFIC_OUTPUT", "scope": "BOUNDARIES"},
  "requirements": {"style": "New Relic standards", "format": "MDX"},
  "success_criteria": ["MEASURABLE_OUTCOMES"]
}
```

### Gap Analysis
```
Compare [SECTION/FEATURE] documentation against:
- User needs and use cases
- Competitive offerings
- Internal product capabilities
Identify top priority gaps and solutions.
```

---

## 🎯 Key Takeaways for Your Team

1. **Be Specific**: Use file paths, line numbers, exact requirements
2. **Provide Context**: Audience, purpose, existing content relationships
3. **Set Success Criteria**: How will you know the output is good?
4. **Leverage MCP**: Use GitHub integration, file analysis, cross-references
5. **Structure Requests**: JSON format for complex tasks, clear templates for routine work
6. **Test Everything**: Verify code examples, links, and user flows work correctly