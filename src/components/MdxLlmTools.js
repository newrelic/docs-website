import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Icon, useClipboard } from '@newrelic/gatsby-theme-newrelic';

const MdxLlmTools = ({ pathname, isEnglishFallback }) => {
  const [copied, copy] = useClipboard();
  // .md files are generated from slugs without a trailing slash
  // (trailingSlash: false in gatsby-node.js's createFilePath call), but
  // this site's pages always render with one (trailingSlash: 'always' in
  // gatsby-config.js) - strip it before appending .md or the path 404s.
  const markdownPath = `${pathname.replace(/\/$/, '')}.md`;

  // Only English pages get a generated .md file - the llms-txt plugin's
  // build query explicitly excludes i18n content (localized markdown isn't
  // supported yet). On a translated page, docPage.js passes the English
  // equivalent of `pathname` instead of the page's own (which would 404),
  // and sets this flag so the label says so instead of silently switching
  // languages on the reader.
  const suffix = isEnglishFallback ? ' (English)' : '';
  const fallbackTitle = isEnglishFallback
    ? "A localized version isn't available yet - this uses the English page."
    : undefined;

  const handleCopyClick = async () => {
    try {
      const res = await fetch(markdownPath);
      if (!res.ok) return;
      copy(await res.text());
    } catch {
      // .md fetch or clipboard access can fail (offline, permissions) - no-op
    }
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 0.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
        font-size: 0.875rem;
        white-space: nowrap;

        button,
        a {
          display: inline-flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary-text-color);
          padding: 0;
          font-size: inherit;
          white-space: nowrap;

          &:hover {
            color: var(--primary-text-color);
          }
        }

        svg {
          margin-right: 0.375rem;
          width: 0.875rem;
          height: 0.875rem;
        }

        .divider {
          color: var(--border-color);
        }
      `}
    >
      <button type="button" onClick={handleCopyClick} title={fallbackTitle}>
        <Icon name="fe-copy" />
        {copied ? 'Copied!' : `Copy for LLM${suffix}`}
      </button>
      <span className="divider">|</span>
      <a
        href={markdownPath}
        target="_blank"
        rel="noopener noreferrer"
        title={fallbackTitle}
      >
        <Icon name="fe-external-link" />
        {`View as Markdown${suffix}`}
      </a>
    </div>
  );
};

MdxLlmTools.propTypes = {
  pathname: PropTypes.string.isRequired,
  isEnglishFallback: PropTypes.bool,
};

MdxLlmTools.defaultProps = {
  isEnglishFallback: false,
};

export default MdxLlmTools;
