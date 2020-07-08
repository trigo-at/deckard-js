import React from 'react';
import FullPageAlert from './full-page-alert';
import TrigoStoryWrapper from '../../.storybook/trigo-story-wrapper';

export const InfoStory = () => (
    <TrigoStoryWrapper>
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
        />
    </TrigoStoryWrapper>
);

InfoStory.story = {
    name: 'info',
};

export const ErrorStory = () => (
    <TrigoStoryWrapper>
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
            status="error"
        />
    </TrigoStoryWrapper>
);

ErrorStory.story = {
    name: 'error',
};

export const SuccessStory = () => (
    <TrigoStoryWrapper>
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
            status="success"
        />
    </TrigoStoryWrapper>
);

SuccessStory.story = {
    name: 'success',
};

export const WarningStory = () => (
    <TrigoStoryWrapper>
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
            status="warning"
        />
    </TrigoStoryWrapper>
);

WarningStory.story = {
    name: 'warning',
};

export default {
    title: 'Patterns|FullPageAlert',
    component: FullPageAlert,
};
