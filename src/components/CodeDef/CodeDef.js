import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/react';
import Block from './Block';
import Bracket from './Bracket';
import Comment from './Comment';
import Identifier from './Identifier';
import Keyword from './Keyword';
import NumberValue from './Number';
import Operator from './Operator';
import StringValue from './String';
import Type from './Type';

const CodeDef = ({ className, children }) => (
  <code
    className={cx(className, 'code-def')}
    css={css`
      display: block;
      line-height: 2;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      padding: 1rem;

      &&& {
        background: var(--color-background);

        .light-mode & {
          background: var(--code-console-text-primary);
        }
      }

      .code-def {
        padding: 0;
      }
    `}
  >
    {children}
  </code>
);

CodeDef.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CodeDef.Block = Block;
CodeDef.Bracket = Bracket;
CodeDef.Comment = Comment;
CodeDef.Keyword = Keyword;
CodeDef.Identifier = Identifier;
CodeDef.Number = NumberValue;
CodeDef.Operator = Operator;
CodeDef.String = StringValue;
CodeDef.Type = Type;

export default CodeDef;
