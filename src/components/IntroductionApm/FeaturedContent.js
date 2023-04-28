import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import VisibilitySensor from 'react-visibility-sensor';
import { animated, useTrail } from 'react-spring';
import { useMedia } from 'react-use';

import { Icon, useTessen } from '@newrelic/gatsby-theme-newrelic';

export const FeaturedContent = ({
  alt,
  category,
  children,
  lineIcon,
  lineIconOnly,
  img,
  list,
  offset = 0,
  subTitle,
  text,
  title,
}) => {
  const isMobileScreen = useMedia('(max-width: 1240px)');
  const [visible, setVisible] = useState(isMobileScreen);

  const tessen = useTessen();

  const updateVisibility = (isVisible) => {
    if (isVisible) {
      setVisible(true);

      // Only the Sections with categories are being animated/tracked.
      if (category) {
        tessen.track({
          eventName: 'apmIntroVisiblityTrigger',
          category,
          path: location.pathname,
        });
      }
    }
  };

  const spring = useTrail(6, {
    config: { mass: 1, tension: 400, friction: 40 },
    from: {
      opacity: 0,
      y: '6%',
    },
    to: {
      opacity: visible ? 1 : 0,
      y: visible ? '0%' : '6%',
    },
  });

  return (
    <VisibilitySensor
      onChange={isMobileScreen ? null : updateVisibility}
      partialVisibility={offset && true}
      offset={{ bottom: offset }}
    >
      <Container addMargin={lineIcon}>
        {!lineIconOnly && (
          <>
            <TextContainer separator={title}>
              {title && <Title>{title}</Title>}
              {subTitle && (
                <SubTitle as={animated.h2} style={spring[1]}>
                  {subTitle}
                </SubTitle>
              )}
              {text && text.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              {list && (
                <ListWrapper>
                  {list.map((item, i) => (
                    <ListItem key={i} as={animated.div} style={spring[3 + i]}>
                      <Icon
                        name="fe-check"
                        css={css`
                          margin-right: 8px;
                          width: 36px;
                        `}
                      />
                      <li>{item}</li>
                    </ListItem>
                  ))}
                </ListWrapper>
              )}
            </TextContainer>
            {img && (
              <ImageWrapper
                separator={title}
                as={animated.div}
                style={spring[2]}
              >
                <img alt={alt} src={img} />
              </ImageWrapper>
            )}
          </>
        )}
        {lineIcon && (
          <>
            <Spacer>
              <IconBorder>
                <LineIconWrapper as={animated.div} style={spring[0]}>
                  <LineIcon
                    name={lineIcon}
                    css={css`
                      width: 36px;
                    `}
                  />
                </LineIconWrapper>
              </IconBorder>
              <GreenLine visible={visible} />
            </Spacer>
            {children}
          </>
        )}
      </Container>
    </VisibilitySensor>
  );
};

const Container = styled.div`
cubic-bezier(0, 0.3, 0.4, 1);
display: flex;
margin-left: ${(p) => (p.addMargin ? '24px' : '0')};
padding: 48px 40px;
position: relative;
width: 100%;

&.no-animate {
  opacity: 1;
}

  @media screen and (max-width: 1240px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 0;
    padding: 0;
  }
`;

const GreenLine = styled.div`
  background-color: var(--brand-button-primary-accent);
  height: ${(p) => (p.visible ? '100%' : '0px')};
  position: absolute;
  top: 0;
  transition: height 750ms;
  width: 2px;
  z-index: 0;

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  ${(p) => p.separator && `padding-left: 32px`};
  width: 30%;

  img {
    object-fit: contain;
    width: 100%;
  }

  @media screen and (max-width: 1240px) {
    width: 100%;
  }
`;

const IconBorder = styled.div`
  background: var(--primary-background-color);
  padding: 1rem 0;
  z-index: 10;
`;

const LineIcon = styled(Icon)`
  color: var(--secondary-text-color);
  height: 33px;
  width: 33px;
`;

const LineIconWrapper = styled.div`
  align-items: center;
  background: var(--primary-background-color);
  border: 4px solid var(--secondary-text-color);
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`;

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 32px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0;
  padding-right: ${(p) => (p.separator ? `32px` : `16px`)};
  width: 66%;

  @media screen and (max-width: 1240px) {
    border: 0;
    padding: 0;
    width: 100%;
  }
`;

const Spacer = styled.div`
  align-items: center;
  background: var(--primary-background-color);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: -48px;
  padding: 12px;
  position: absolute;

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 44px;

  @media screen and (max-width: 1240px) {
    font-size: 32px;
  }
`;
