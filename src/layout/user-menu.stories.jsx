/* eslint-disable no-console */
import React from 'react';
import UserMenu from './user-menu';
import ProviderDecorator from '../provider-decorator';

export const UserMenuStory = () => (
    <UserMenu
        userName="John Doe"
        onLogout={(event) => console.log('logged out:', event)}
    />
);

UserMenuStory.storyName = 'default';

export const UserMenuStory2 = () => (
    <UserMenu onLogout={(event) => console.log('logged out:', event)} />
);

UserMenuStory2.storyName = 'no-username';

export default {
    title: 'Components/UserMenu',
    component: UserMenu,
    decorators: [ProviderDecorator],
};
