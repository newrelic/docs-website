import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Icon, Link } from '@newrelic/gatsby-theme-newrelic';
import { animated, useSpring } from 'react-spring';
import { usePrevious, useIsomorphicLayoutEffect } from 'react-use';

import AnimatedFeatherIcon from '../AnimatedFeatherIcon';

const ResizeObserver = global.ResizeObserver || class ResizeObserver {};

const SelectCollapser = ({
  label,
  id,
  children,
  isOpen,
  onClick,
  placeholder,
}) => {
  const [element, ref] = useState();
  const [height, setHeight] = useState(0);
  const { height: viewHeight } = useSpring({ height: isOpen ? height : 0 });

  const style = useSpring({
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    color: 'var(--primary-text-color)',
  });

  const previousIsOpen = usePrevious(isOpen);

  const observer = useMemo(
    () =>
      new ResizeObserver(([entry]) => {
        // Unfortunatly entry.contentRect does NOT return the box sizing info
        // (border + padding), which leads to an incorrect height when fully
        // expanded. We are using getBoundingClientRect() to get a more accurate
        // height.
        const { height } = entry.target.getBoundingClientRect();

        setHeight(height);
      }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [element]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-1);

        .dark-mode & {
          box-shadow: var(--shadow-2);
        }
      `}
    >
      <button
        onClick={onClick}
        type="button"
        css={css`
          --color-transition-duration: 0.3s;
          --color-transition-easing: ease-out;

          cursor: pointer;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          transition: background var(--color-transition-duration)
            var(--color-transition-easing);
          border: none;
          background: transparent;

          code {
            transition: background var(--color-transition-duration)
              var(--color-transition-easing);
          }

          &:hover,
          &:focus {
            background: var(--primary-hover-color);
            outline: none;

            .anchor svg {
              opacity: 1;
            }
          }
        `}
      >
        <h5
          id={id}
          css={css`
            display: flex;
            align-items: center;
            flex: 1;
            position: relative;
            font-size: 1rem;
            margin-top: 0;
            margin-bottom: 0;
            text-align: left;
            font-weight: 400;
          `}
        >
          <span>{label ?? placeholder}</span>
          {id && (
            <Link
              to={`#${id}`}
              className="anchor"
              css={css`
                margin-left: 0.5rem;
              `}
            >
              <Icon
                name="fe-link-2"
                css={css`
                  display: block;
                  color: inherit !important;
                `}
              />
            </Link>
          )}
        </h5>
        <AnimatedFeatherIcon style={style} name="fe-chevron-right" />
      </button>

      <animated.div
        style={{ height: isOpen && previousIsOpen ? 'auto' : viewHeight }}
        css={css`
          overflow: hidden;
        `}
      >
        <div
          ref={ref}
          aria-hidden={!isOpen}
          css={css`
            padding: 1rem;
          `}
        >
          {children}
        </div>
      </animated.div>
    </div>
  );
};

SelectCollapser.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

SelectCollapser.defaultProps = {
  isOpen: true,
};

export default SelectCollapser;
