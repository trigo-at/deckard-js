/* eslint-disable no-console */
import React from 'react';
import LoadingIndicator from './loading-indicator';

export const LoadingIndicatorStory = () => <LoadingIndicator />;

LoadingIndicatorStory.story = {
    name: 'default',
};

export default {
    title: 'Components|LoadingIndicator',
    component: LoadingIndicator,
};
