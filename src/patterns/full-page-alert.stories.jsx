import React from 'react';
import FullPageAlert from './full-page-alert';
import ProviderDecorator from '../provider-decorator';

export const InfoStory = () => (
    <FullPageAlert
        title="fullpagealert.title"
        description="fullpagealert.description"
    />
);

InfoStory.story = {
    name: 'info',
};

export const ErrorStory = () => (
    <FullPageAlert
        title="fullpagealert.title"
        description="fullpagealert.description"
        status="error"
    />
);

ErrorStory.story = {
    name: 'error',
};

export const SuccessStory = () => (
    <FullPageAlert
        title="fullpagealert.title"
        description="fullpagealert.description"
        status="success"
    />
);

SuccessStory.story = {
    name: 'success',
};

export const WarningStory = () => (
    <FullPageAlert
        title="fullpagealert.title"
        description="fullpagealert.description"
        status="warning"
    />
);

WarningStory.story = {
    name: 'warning',
};

export default {
    title: 'Patterns|FullPageAlert',
    component: FullPageAlert,
    decorators: [ProviderDecorator],
};
