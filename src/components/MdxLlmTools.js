import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useClipboard } from '@newrelic/gatsby-theme-newrelic';

const MdxLlmTools = ({ pathname }) => {
  const [copied, copy] = useClipboard();
  // .md files are generated from slugs without a trailing slash
  // (trailingSlash: false in gatsby-node.js's createFilePath call), but
  // this site's pages always render with one (trailingSlash: 'always' in
  // gatsby-config.js) - strip it before appending .md or the path 404s.
  const markdownPath = `${pathname.replace(/\/$/, '')}.md`;

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
        grid-area: page-title;
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

        .divider {
          color: var(--border-color);
        }
      `}
    >
      <button type="button" onClick={handleCopyClick}>
        {copied ? 'Copied!' : 'Copy for LLM'}
      </button>
      <span className="divider">|</span>
      <a href={markdownPath}>View as Markdown</a>
    </div>
  );
};

MdxLlmTools.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default MdxLlmTools;
