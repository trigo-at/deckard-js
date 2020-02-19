/* eslint-disable no-console */
import React from 'react';

import ProviderDecorator from '../provider-decorator';
import ErrorIndicator from './error-indicator';

export const ErrorIndicatorStory = () => (
    <ErrorIndicator error="testError" description="testDescription" />
);

ErrorIndicatorStory.story = {
    name: 'default',
};

export default {
    title: 'Components|ErrorIndicator',
    component: ErrorIndicator,
    decorators: [ProviderDecorator],
};
