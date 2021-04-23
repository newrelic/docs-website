import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { MOBILE_BREAKPOINT } from './config';

const TimelineItem = ({ label, children }) => (
  <>
    <div
      css={css`
        position: relative;
        padding-right: 2rem;
        text-align: right;

        &::after {
          content: '';
          position: absolute;
          width: var(--timeline-width);
          background: var(--timeline-color);
          right: calc(var(--timeline-width) * -1);
          z-index: -1;
          top: 0;
          bottom: 0;
        }

        &:first-child:after {
          top: calc(var(--ring-size) / 2);
        }

        &:nth-last-child(2):after {
          bottom: calc(100% - (var(--ring-size) / 2));
        }

        @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
          text-align: left;
          border-right: none;
          padding-right: 0;

          &::after {
            display: none;
          }
        }
      `}
    >
      <span
        css={css`
          display: inline-flex;
          align-items: center;
          height: 1.875rem;
          line-height: 1;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-neutrals-900);

          .dark-mode & {
            color: var(--color-dark-900);
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
            display: block;
            font-size: 1rem;
            margin-bottom: 1rem;
            border-top: 1px solid var(--divider-color);
            border-bottom: 1px solid var(--divider-color);
            padding: 1rem 0;
            height: unset;
          }
        `}
      >
        {label}
      </span>

      <div
        css={css`
          position: absolute;
          top: 7px;
          right: calc((var(--timeline-width) * -1) / 2);
          transform: translateX(50%);
          width: var(--ring-size);
          height: var(--ring-size);
          border-radius: 50%;
          background: var(--timeline-color);

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: calc(var(--ring-size) - (var(--ring-border-width) * 2));
            height: calc(var(--ring-size) - (var(--ring-border-width) * 2));
            transform: translate(-50%, -50%);
            background: var(--primary-background-color);
            border-radius: 50%;
          }

          @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
            display: none;
          }
        `}
      />
    </div>
    <div>{children}</div>
  </>
);
TimelineItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

export default TimelineItem;
