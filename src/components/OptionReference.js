import React from 'react';
import CodeDef from './CodeDef';
import { css } from '@emotion/react';

const OptionReference = ({ children, array = false }) => {
  return array ? (
    <CodeDef
      css={css`
        max-height: 320px;
        overflow-y: scroll;
      `}
    >
      <CodeDef.Bracket>{'<'}</CodeDef.Bracket>
      <CodeDef.Keyword>Array of</CodeDef.Keyword>
      <CodeDef.Block>
        <CodeDef.Bracket>{'<'}</CodeDef.Bracket>
        <CodeDef.Keyword>One of</CodeDef.Keyword>
        <CodeDef.Block>{children}</CodeDef.Block>
        <CodeDef.Bracket>{'>'}</CodeDef.Bracket>
      </CodeDef.Block>
      <CodeDef.Bracket>{'>'}</CodeDef.Bracket>
    </CodeDef>
  ) : (
    <CodeDef
      css={css`
        max-height: 320px;
        overflow-y: scroll;
      `}
    >
      <CodeDef.Bracket>{'<'}</CodeDef.Bracket>
      <CodeDef.Keyword>One of</CodeDef.Keyword>
      <CodeDef.Block>{children}</CodeDef.Block>
      <CodeDef.Bracket>{'>'}</CodeDef.Bracket>
    </CodeDef>
  );
};

export default OptionReference;
