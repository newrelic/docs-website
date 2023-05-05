import React, { useEffect, useState } from 'react';
import {
  Side,
  SideBySide,
  useTessen,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import { animated, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import { useMedia } from 'react-use';
import styled from '@emotion/styled';

import {
  FeaturedContent,
  SmallStackedContent,
  StackedContent,
  TitleBlock,
} from '../components/IntroductionApm';
import QuickstartChooser from '../components/QuickstartChooser';
import ErrorBoundary from '../components/ErrorBoundary';

import introImage from 'images/new-apm-images/intro.webp';
import entitiesImage from 'images/new-apm-images/entities.webp';
import logManagement from 'images/new-apm-images/log-management.webp';
import vulnerabilityManagement from 'images/new-apm-images/vulnerability-management.webp';
import apdex from 'images/new-apm-images/apdex.webp';
import errorManagement from 'images/new-apm-images/error-management.webp';
import userSatisfaction from 'images/new-apm-images/user-satisfaction.webp';
import autoLogInjest from 'images/new-apm-images/auto-log-injest.webp';
import trackDeps from 'images/new-apm-images/track-deps.webp';

const IntroductionApm = () => {
  const { t } = useTranslation();
  const isMobileScreen = useMedia('(max-width: 1240px)');
  const [twoColumnVisible, setTwoColumnVisible] = useState(isMobileScreen);
  const [fourColumnVisible, setFourColumnVisible] = useState(isMobileScreen);

  const tessen = useTessen();

  const twoColumn = useTrail(2, {
    config: { mass: 1, tension: 500, friction: 100 },
    delay: 500,
    from: {
      opacity: 0,
      y: '6%',
    },
    to: {
      opacity: twoColumnVisible ? 1 : 0,
      y: twoColumnVisible ? '0%' : '6%',
    },
  });

  const handleTwoColumn = (isVisible) => {
    if (isVisible) {
      setTwoColumnVisible(true);

      !twoColumnVisible &&
        tessen.track({
          eventName: 'apmIntroVisiblityTrigger',
          category: 'TwoColumnSection',
          path: location.pathname,
        });
    }
  };

  const fourColumn = useTrail(4, {
    config: { mass: 1, tension: 500, friction: 100 },
    from: {
      opacity: 0,
      y: '6%',
    },
    to: {
      opacity: fourColumnVisible ? 1 : 0,
      y: fourColumnVisible ? '0%' : '6%',
    },
  });

  const handleFourColumn = (isVisible) => {
    if (isVisible) {
      setFourColumnVisible(true);

      !fourColumnVisible &&
        tessen.track({
          eventName: 'apmIntroVisiblityTrigger',
          category: 'FourColumnSection',
          path: location.pathname,
        });
    }
  };

  useEffect(() => {
    const gatsbyFocusWrapper = document.querySelectorAll(
      '#gatsby-focus-wrapper'
    );

    if (gatsbyFocusWrapper.length > 1) {
      gatsbyFocusWrapper[1].remove();
    }
  }, []);

  return (
    <ErrorBoundary eventName="apm">
      <FeaturedContent
        text={[t('apm.intro.text.0'), t('apm.intro.text.1')]}
        title={t('apm.intro.title')}
        img={introImage}
        alt="Complete visibility and analytics at your fingertips"
      />
      <QuickstartChooser />
      <SectionWrapper>
        <FeaturedContent
          list={[
            t('apm.block1.list.0'),
            t('apm.block1.list.1'),
            t('apm.block1.list.2'),
          ]}
          subTitle={t('apm.block1.subTitle')}
          img={entitiesImage}
          alt="See the health of all your services in a glance"
          lineIcon="monitor"
          category="SeeHealthOfServices"
        />
        <TitleBlock
          list={[
            t('apm.block2.list.0'),
            t('apm.block2.list.1'),
            t('apm.block2.list.2'),
          ]}
          text={t('apm.block2.text')}
          title={t('apm.block2.title')}
        />
        <FeaturedContent lineIcon="lock" lineIconOnly offset={600}>
          <VisibilitySensor
            onChange={handleTwoColumn}
            partialVisibility
            offset={{ bottom: 300 }}
          >
            <SideBySide>
              <animated.div style={twoColumn[0]}>
                <Side>
                  <StackedContent
                    list={[t('apm.block3.0.list.0'), t('apm.block3.0.list.1')]}
                    subTitle={t('apm.block3.0.subTitle')}
                    img={logManagement}
                    alt="Log Management"
                    isVisible={twoColumnVisible}
                  />
                </Side>
              </animated.div>
              <animated.div style={twoColumn[1]}>
                <Side>
                  <StackedContent
                    list={[t('apm.block3.1.list.0'), t('apm.block3.1.list.1')]}
                    subTitle={t('apm.block3.1.subTitle')}
                    img={vulnerabilityManagement}
                    alt="Vulnerability management"
                    isVisible={twoColumnVisible}
                  />
                </Side>
              </animated.div>
            </SideBySide>
          </VisibilitySensor>
        </FeaturedContent>
        <FeaturedContent
          list={[t('apm.block4.list.0'), t('apm.block4.list.1')]}
          subTitle={t('apm.block4.subTitle')}
          img={apdex}
          lineIcon="thumbsup"
          alt="Ensure a great user experience"
          animate
          category="GreatUserExperience"
        />
      </SectionWrapper>
      <VisibilitySensor onChange={handleFourColumn}>
        <SideBySide>
          <animated.div style={fourColumn[0]}>
            <Side>
              <SmallStackedContent
                subTitle={t('apm.block5.0.subTitle')}
                img={errorManagement}
                text={t('apm.block5.0.text')}
                alt="Proactive error management"
              />
            </Side>
          </animated.div>
          <animated.div style={fourColumn[1]}>
            <Side>
              <SmallStackedContent
                subTitle={t('apm.block5.1.subTitle')}
                img={userSatisfaction}
                text={t('apm.block5.1.text')}
                alt="Measure user satisfaction"
              />
            </Side>
          </animated.div>
          <animated.div style={fourColumn[2]}>
            <Side>
              <SmallStackedContent
                subTitle={t('apm.block5.2.subTitle')}
                img={autoLogInjest}
                text={t('apm.block5.2.text')}
                alt="Automatic log ingest"
              />
            </Side>
          </animated.div>
          <animated.div style={fourColumn[3]}>
            <Side>
              <SmallStackedContent
                subTitle={t('apm.block5.3.subTitle')}
                img={trackDeps}
                text={t('apm.block5.3.text')}
                alt="Track dependancies"
              />
            </Side>
          </animated.div>
        </SideBySide>
      </VisibilitySensor>
      <QuickstartChooser secondary />
    </ErrorBoundary>
  );
};

export default IntroductionApm;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
