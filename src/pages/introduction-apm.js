import React, { useEffect } from 'react';
import {
  Side,
  SideBySide,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import { animated, useTrail } from 'react-spring';

import {
  FeaturedContent,
  GreenLine,
  SectionWrapper,
  SmallStackedContent,
  StackedContent,
  TitleBlock,
} from '../components/IntroductionApm';

import QuickstartChooser from '../components/QuickstartChooser';

import introImage from 'images/new-apm-images/intro.png';
import entitiesImage from 'images/new-apm-images/entities.png';
import logManagement from 'images/new-apm-images/log-management.png';
import vulnerabilityManagement from 'images/new-apm-images/vulnerability-management.png';
import apdex from 'images/new-apm-images/apdex.png';
import errorManagement from 'images/new-apm-images/error-management.png';
import userSatisfaction from 'images/new-apm-images/user-satisfaction.png';
import autoLogInjest from 'images/new-apm-images/auto-log-injest.png';
import trackDeps from 'images/new-apm-images/track-deps.png';

const IntroductionApm = () => {
  const { t } = useTranslation();
  const spring = useTrail(2, {
    from: {
      opacity: 0,
      y: '6%',
    },
    to: { opacity: 1, y: '0%' },
  });

  useEffect(() => {
    const gatsbyFocusWrapper = document.querySelectorAll(
      '#gatsby-focus-wrapper'
    );

    if (gatsbyFocusWrapper.length > 1) {
      gatsbyFocusWrapper[1].remove();
    }
  }, []);

  return (
    <>
      <FeaturedContent
        text={[t('apm.intro.text.0'), t('apm.intro.text.1')]}
        title={t('apm.intro.title')}
        img={introImage}
        alt="Complete visibility and analytics at your fingertips"
        animate
      />
      <QuickstartChooser />
      <SectionWrapper>
        <GreenLine />
        <SectionWrapper column>
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
            animate
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
          <SideBySide>
            <Side>
              <animated.div style={spring[0]}>
                <StackedContent
                  list={[t('apm.block3.0.list.0'), t('apm.block3.0.list.1')]}
                  subTitle={t('apm.block3.0.subTitle')}
                  img={logManagement}
                  alt="Log Management"
                />
              </animated.div>
            </Side>
            <Side>
              <animated.div style={spring[1]}>
                <StackedContent
                  list={[t('apm.block3.1.list.0'), t('apm.block3.1.list.1')]}
                  subTitle={t('apm.block3.1.subTitle')}
                  img={vulnerabilityManagement}
                  alt="Vulnerability management"
                />
              </animated.div>
            </Side>
          </SideBySide>
          <FeaturedContent
            list={[t('apm.block4.list.0'), t('apm.block4.list.1')]}
            subTitle={t('apm.block4.subTitle')}
            img={apdex}
            lineIcon="thumbsup"
            alt="Ensure a great user experience"
          />
        </SectionWrapper>
      </SectionWrapper>
      <SideBySide>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.0.subTitle')}
            img={errorManagement}
            text={t('apm.block5.0.text')}
            alt="Proactive error management"
          />
        </Side>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.1.subTitle')}
            img={userSatisfaction}
            text={t('apm.block5.1.text')}
            alt="Measure user satisfaction"
          />
        </Side>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.2.subTitle')}
            img={autoLogInjest}
            text={t('apm.block5.2.text')}
            alt="Automatic log ingest"
          />
        </Side>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.3.subTitle')}
            img={trackDeps}
            text={t('apm.block5.3.text')}
            alt="Track dependancies"
          />
        </Side>
      </SideBySide>
      <QuickstartChooser secondary />
    </>
  );
};

export default IntroductionApm;
