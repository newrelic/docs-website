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
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        font-size: 0.875rem;

        button,
        a {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--primary-system-text);
          padding: 0;
          font-size: inherit;
        }
      `}
    >
      <button type="button" onClick={handleCopyClick}>
        {copied ? 'Copied!' : 'Copy for LLM'}
      </button>
      <a href={markdownPath}>View as Markdown</a>
    </div>
  );
};

MdxLlmTools.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default MdxLlmTools;
