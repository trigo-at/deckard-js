import React from 'react';
import {Box} from '@chakra-ui/core';
import FullPageAlert from './full-page-alert';
import ProviderDecorator from '../provider-decorator';

export const InfoStory = () => (
    <Box p={6} bg="gray.50">
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
        />
    </Box>
);

InfoStory.story = {
    name: 'info',
};

export const ErrorStory = () => (
    <Box p={6} bg="gray.50">
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
            status="error"
        />
    </Box>
);

ErrorStory.story = {
    name: 'error',
};

export const SuccessStory = () => (
    <Box p={6} bg="gray.50">
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
            status="success"
        />
    </Box>
);

SuccessStory.story = {
    name: 'success',
};

export const WarningStory = () => (
    <Box p={6} bg="gray.50">
        <FullPageAlert
            title="fullpagealert.title"
            description="fullpagealert.description"
            status="warning"
        />
    </Box>
);

WarningStory.story = {
    name: 'warning',
};

export default {
    title: 'Patterns|FullPageAlert',
    component: FullPageAlert,
    decorators: [ProviderDecorator],
};
