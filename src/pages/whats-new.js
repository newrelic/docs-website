import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageTitle from '../components/PageTitle';
import { graphql } from 'gatsby';
import {
  Layout,
  Icon,
  Link,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import { TYPES } from '../utils/constants';
import Tada from '../../createHtml';

const WhatsNew = () => <Tada />;
export default WhatsNew;
