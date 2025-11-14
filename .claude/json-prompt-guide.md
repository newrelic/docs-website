# JSON Prompt Engineering Guide for Technical Writers

## Template Structure

```json
{
  "context": {
    "project": "New Relic Documentation",
    "audience": "developers|administrators|end-users",
    "doc_type": "concept|task|reference|tutorial",
    "existing_content": "file_path or description",
    "related_docs": ["list", "of", "related", "files"]
  },
  "task": {
    "primary_goal": "clear, specific objective",
    "deliverable": "what you want created/updated",
    "scope": "boundaries and limitations",
    "success_criteria": ["measurable", "outcomes"]
  },
  "requirements": {
    "style_guide": "New Relic voice and tone",
    "format": "MDX with specific components",
    "structure": "headings, sections, flow",
    "examples": "code samples, screenshots, etc.",
    "cross_references": "links to maintain"
  },
  "constraints": {
    "length": "word count or section limits",
    "technical_level": "beginner|intermediate|advanced",
    "compliance": "security, legal, brand requirements",
    "deadline": "time constraints if relevant"
  },
  "output_format": {
    "structure": "specific markdown/MDX format",
    "components": "New Relic doc components to use",
    "frontmatter": "required metadata fields",
    "review_checklist": "what to verify before completion"
  }
}
```

## Example Templates by Documentation Type

### 1. New Feature Documentation
```json
{
  "context": {
    "project": "New Relic Documentation",
    "audience": "developers",
    "doc_type": "concept + task",
    "existing_content": "none - new feature",
    "related_docs": ["src/content/docs/apis/", "src/content/docs/integrations/"]
  },
  "task": {
    "primary_goal": "Introduce new Security RX feature",
    "deliverable": "Complete feature documentation with overview and setup",
    "scope": "Cover core functionality, exclude advanced configurations",
    "success_criteria": ["User can understand the feature", "User can complete basic setup", "SEO optimized"]
  },
  "requirements": {
    "style_guide": "New Relic conversational but authoritative tone",
    "format": "MDX with code blocks and callouts",
    "structure": "Overview → Prerequisites → Setup → Verification → Next Steps",
    "examples": "Working code samples, API calls, configuration files",
    "cross_references": "Link to related security and API docs"
  },
  "constraints": {
    "length": "1500-2500 words maximum",
    "technical_level": "intermediate developers",
    "compliance": "Include security best practices warnings",
    "deadline": "none specified"
  },
  "output_format": {
    "structure": "Standard New Relic doc template",
    "components": "Use Callout, CodeBlock, InlineCode components",
    "frontmatter": "Include title, description, redirects, freshnessValidatedDate",
    "review_checklist": ["Accuracy", "Completeness", "Style compliance", "Link validation"]
  }
}
```

### 2. Documentation Update/Revision
```json
{
  "context": {
    "project": "New Relic Documentation",
    "audience": "security engineers",
    "doc_type": "reference update",
    "existing_content": "src/content/docs/vulnerability-management/overview.mdx",
    "related_docs": ["aws.mdx", "security NRQL examples"]
  },
  "task": {
    "primary_goal": "Update Security RX overview with latest features",
    "deliverable": "Revised overview page with current capabilities",
    "scope": "Update existing sections, add 2-3 new sections",
    "success_criteria": ["Reflects current product state", "Maintains existing structure", "Improves user onboarding"]
  },
  "requirements": {
    "style_guide": "Match existing doc voice, update outdated terms",
    "format": "Maintain current MDX structure and components",
    "structure": "Keep existing headings, expand content within",
    "examples": "Update code samples to current API versions",
    "cross_references": "Verify all internal links still work"
  },
  "constraints": {
    "length": "Don't exceed current length by more than 30%",
    "technical_level": "Match current intermediate level",
    "compliance": "Ensure security recommendations are current",
    "deadline": "none specified"
  },
  "output_format": {
    "structure": "Preserve existing heading structure",
    "components": "Use same components as original",
    "frontmatter": "Update freshnessValidatedDate, keep other metadata",
    "review_checklist": ["No broken functionality", "Backward compatibility", "Updated examples work"]
  }
}
```

### 3. API Documentation Generation
```json
{
  "context": {
    "project": "New Relic Documentation",
    "audience": "API developers",
    "doc_type": "reference",
    "existing_content": "OpenAPI spec or code comments",
    "related_docs": ["authentication guides", "SDK documentation"]
  },
  "task": {
    "primary_goal": "Generate comprehensive API reference from code",
    "deliverable": "Complete API endpoint documentation",
    "scope": "All public endpoints, exclude internal/deprecated ones",
    "success_criteria": ["All endpoints documented", "Working code examples", "Clear error handling"]
  },
  "requirements": {
    "style_guide": "Technical but accessible, New Relic API doc standards",
    "format": "MDX with consistent parameter tables and code blocks",
    "structure": "Endpoint → Parameters → Examples → Responses → Errors",
    "examples": "cURL and JavaScript/Python examples for each endpoint",
    "cross_references": "Link to authentication, rate limiting, SDK docs"
  },
  "constraints": {
    "length": "Comprehensive but scannable",
    "technical_level": "Intermediate to advanced developers",
    "compliance": "Include rate limiting and security considerations",
    "deadline": "none specified"
  },
  "output_format": {
    "structure": "New Relic API reference template",
    "components": "Use Table, CodeBlock, Callout for warnings",
    "frontmatter": "Include API version, last updated, related endpoints",
    "review_checklist": ["All examples tested", "Parameter types correct", "Error codes accurate"]
  }
}
```

## Quick Reference Prompts

### Documentation Review
```json
{
  "context": {"existing_content": "file_path", "audience": "target_user"},
  "task": {"primary_goal": "comprehensive review", "deliverable": "actionable feedback"},
  "requirements": {"style_guide": "New Relic standards", "format": "current MDX"},
  "output_format": {"structure": "line-by-line feedback with suggestions"}
}
```

### Content Gap Analysis
```json
{
  "context": {"existing_content": "doc_section", "related_docs": ["comparative_files"]},
  "task": {"primary_goal": "identify missing content", "deliverable": "gap analysis + recommendations"},
  "requirements": {"style_guide": "match existing", "format": "structured analysis"},
  "output_format": {"structure": "gaps → impact → priority → solutions"}
}
```

## Best Practices for JSON Prompts

1. **Be Specific**: Use exact file paths, not generic descriptions
2. **Set Clear Boundaries**: Define what's in/out of scope
3. **Include Success Criteria**: How will you know it's done well?
4. **Reference Standards**: Always specify New Relic style requirements
5. **Plan for Review**: Include what should be checked before publishing

## Integration with Claude Code MCP

- Use GitHub MCP to reference actual files and PRs
- Leverage exploration agents for understanding doc relationships
- Use task agents for complex multi-step documentation projects
- Include file paths that Claude Code can directly access and analyze