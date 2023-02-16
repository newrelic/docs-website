import React from 'react';
import { css } from '@emotion/react';

import {
  FeaturedContent,
  GreenLine,
  SectionWrapper,
  SmallStackedContent,
  StackedContent,
  TitleBlock,
} from '../components/IntroductionApm';
import {
  Side,
  SideBySide,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';

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
  return (
    <>
      <FeaturedContent
        text={[t('apm.intro.text.0'), t('apm.intro.text.1')]}
        title={t('apm.intro.title')}
        img={introImage}
      />
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
            lineIcon="monitor"
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
          <FeaturedContent lineIcon="lock" lineIconOnly>
            <SideBySide>
              <Side>
                <StackedContent
                  list={[t('apm.block3.0.list.0'), t('apm.block3.0.list.1')]}
                  subTitle={t('apm.block3.0.subTitle')}
                  img={logManagement}
                />
              </Side>
              <Side>
                <StackedContent
                  list={[t('apm.block3.1.list.0'), t('apm.block3.1.list.1')]}
                  subTitle={t('apm.block3.1.subTitle')}
                  img={vulnerabilityManagement}
                />
              </Side>
            </SideBySide>
          </FeaturedContent>
          <FeaturedContent
            list={[t('apm.block4.list.0'), t('apm.block4.list.1')]}
            subTitle={t('apm.block4.subTitle')}
            img={apdex}
            lineIcon="thumbsup"
          />
        </SectionWrapper>
      </SectionWrapper>
      <SideBySide>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.0.subTitle')}
            img={errorManagement}
            text={t('apm.block5.0.text')}
          />
        </Side>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.1.subTitle')}
            img={userSatisfaction}
            text={t('apm.block5.1.text')}
          />
        </Side>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.2.subTitle')}
            img={autoLogInjest}
            text={t('apm.block5.2.text')}
          />
        </Side>
        <Side>
          <SmallStackedContent
            subTitle={t('apm.block5.3.subTitle')}
            img={trackDeps}
            text={t('apm.block5.3.text')}
          />
        </Side>
      </SideBySide>
    </>
  );
};

export default IntroductionApm;
