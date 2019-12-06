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
    loading,
    error,
    header,
    aside,
    children,
}) => {
    if (error) {
        return <ErrorIndicator error="loading" description={error} />;
    }
    if (loading) {
        return <LoadingIndicator />;
    }
    return (
        <Layout
            logo={<Logo title={title} version={version} />}
            header={header}
            aside={aside}>
            <Router>{children}</Router>
        </Layout>
    );
};

AppLayout.propTypes = {
    title: string,
    version: string,
    loading: bool,
    error: string,
    header: node,
    aside: node,
    children: node,
};

AppLayout.defaultProps = {
    version: undefined,
    loading: false,
    error: undefined,
    title: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
};

const AppShell = ({
    title,
    version,
    loading,
    error,
    header,
    aside,
    messages,
    locale,
    children,
}) => {
    return (
        <ThemeProvider>
            <IntlProvider locale={locale} messages={messages} />
            <AppLayout
                title={title}
                version={version}
                loading={loading}
                error={error}
                header={header}
                aside={aside}>
                {children}
            </AppLayout>
        </ThemeProvider>
    );
};

AppShell.propTypes = {
    title: string,
    version: string,
    loading: bool,
    error: string,
    header: node,
    aside: node,
    children: node,
    messages: object,
    locale: string,
};

AppShell.defaultProps = {
    version: undefined,
    title: undefined,
    loading: false,
    error: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
    messages: {},
    locale: 'de',
};

export default AppShell;
