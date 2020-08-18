/* global expect */
import { createSerializer } from 'jest-emotion';
import * as emotion from '@emotion/core';

expect.addSnapshotSerializer(createSerializer(emotion));
