import React from 'react';
import {string, bool, node, object} from 'prop-types';
import {Router} from '@reach/router';
import {IntlProvider} from 'react-intl';
import ThemeProvider from '../theme-provider';
import Layout from '../layout/layout';
import Logo from '../layout/logo';
import ErrorIndicator from '../indicators/error-indicator';
import LoadingIndicator from '../indicators/loading-indicator';

const AppLayout = ({
    title,
    version,
    imgSrc,
    loading,
    error,
    header,
    sidebar,
    children,
    accent,
    fixedAside,
}) => {
    if (error) {
        return <ErrorIndicator error="loading" description={error} />;
    }
    if (loading) {
        return <LoadingIndicator />;
    }
    return (
        <Layout header={header} sidebar={sidebar}>
            <Router>{children}</Router>
        </Layout>
    );
};

AppLayout.propTypes = {
    loading: bool,
    error: string,
    header: node,
    sidebar: node,
    children: node,
};

AppLayout.defaultProps = {
    loading: false,
    error: undefined,
    header: undefined,
    sidebar: undefined,
    children: undefined,
};

const AppShell = ({
    loading,
    error,
    header,
    sidebar,
    messages,
    locale,
    children,
    accent,
}) => {
    return (
        <ThemeProvider>
            <IntlProvider locale={locale} messages={messages}>
                <AppLayout
                    loading={loading}
                    error={error}
                    header={header}
                    sidebar={sidebar}>
                    {children}
                </AppLayout>
            </IntlProvider>
        </ThemeProvider>
    );
};

AppShell.propTypes = {
    loading: bool,
    error: string,
    header: node,
    sidebar: node,
    children: node,
    messages: object,
    locale: string,
    accent: string,
};

AppShell.defaultProps = {
    loading: false,
    error: undefined,
    header: undefined,
    sidebar: undefined,
    children: undefined,
    messages: {},
    locale: 'de',
};

export default AppShell;
