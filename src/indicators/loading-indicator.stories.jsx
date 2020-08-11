/* eslint-disable no-console */
import React from 'react';
import LoadingIndicator from './loading-indicator';
import ProviderDecorator from '../provider-decorator';

export const LoadingIndicatorStory = () => <LoadingIndicator />;

LoadingIndicatorStory.storyName = 'default';

export default {
    title: 'Components/LoadingIndicator',
    component: LoadingIndicator,
    decorators: [ProviderDecorator],
};
