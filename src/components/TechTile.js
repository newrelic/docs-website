import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { ClassNames, css } from '@emotion/react';
import { Surface, Icon, Link } from '@newrelic/gatsby-theme-newrelic';

const TileIcon = ({ className, icon }) => {
  if (typeof icon === 'string') {
    return (
      <Icon
        name={icon}
        size="2rem"
        className={className}
        css={css`
          flex: 1;
        `}
      />
    );
  }

  if (isValidElement(icon) && icon.props?.mdxType === 'img') {
    return (
      <span
        className={className}
        css={css`
          flex: 1;
        `}
      >
        <ClassNames>
          {({ css }) =>
            cloneElement(icon, {
              className: css`
                width: 2rem;
                height: auto;
                border-radius: 0.25rem;
              `,
            })
          }
        </ClassNames>
      </span>
    );
  }

  return null;
};

TileIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const TechTile = ({ name, icon, to }) => (
  <Surface
    as={to ? Link : undefined}
    to={to}
    base={Surface.BASE.SECONDARY}
    interactive={Boolean(to)}
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0.5rem;
      color: currentColor;

      &:hover {
        color: currentColor;
      }

      .light-mode & {
        border: 1px solid var(--border-color);

        &:hover {
          border-color: var(--border-hover-color);
        }
      }
    `}
  >
    <TileIcon
      icon={icon}
      css={css`
        margin-bottom: 0.5rem;
      `}
    />
    <div
      css={css`
        font-size: 0.875rem;
      `}
    >
      {name}
    </div>
  </Surface>
);

TechTile.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  to: PropTypes.string,
};

export default TechTile;
