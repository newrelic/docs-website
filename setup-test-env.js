/* global expect */
import { createSerializer } from 'jest-emotion';
import * as emotion from '@emotion/react';

expect.addSnapshotSerializer(createSerializer(emotion));
