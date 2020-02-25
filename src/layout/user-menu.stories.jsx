/* eslint-disable no-console */
import React from 'react';
import ProviderDecorator from '../provider-decorator';
import UserMenu from './user-menu';

export const UserMenuStory = () => (
    <UserMenu
        userName="John Doe"
        onLogout={event => console.log('logged out:', event)}
    />
);

UserMenuStory.story = {
    name: 'default',
};

export const UserMenuStory2 = () => (
    <UserMenu onLogout={event => console.log('logged out:', event)} />
);

UserMenuStory2.story = {
    name: 'no-username',
};

export default {
    title: 'Components|UserMenu',
    component: UserMenu,
    decorators: [ProviderDecorator],
};