/* eslint-disable no-console */
import React from 'react';
import ErrorIndicator from './error-indicator';
import ProviderDecorator from '../provider-decorator';

export const ErrorIndicatorStory = () => (
    <ErrorIndicator error="testError" description="testDescription" />
);

ErrorIndicatorStory.storyName = 'default';

export default {
    title: 'Components/ErrorIndicator',
    component: ErrorIndicator,
    decorators: [ProviderDecorator],
};
