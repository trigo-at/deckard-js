import React from 'react';
import {string, bool, node, object} from 'prop-types';
import {Router} from '@reach/router';
import IntlProvider from 'react-intl';
import ThemeProvider from '../theme-provider';
import Layout from '../layout/layout';
import Logo from '../layout/logo';
import ErrorIndicator from '../indicators/error-indicator';
import LoadingIndicator from '../indicators/loading-indicator';

const AppShell = ({
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

AppShell.propTypes = {
    title: string,
    version: string,
    loading: bool,
    error: string,
    header: node,
    aside: node,
    children: node,
};

AppShell.defaultProps = {
    version: undefined,
    loading: false,
    error: undefined,
    title: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
};

const App = ({
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
            <AppShell
                title={title}
                version={version}
                loading={loading}
                error={error}
                header={header}
                aside={aside}>
                {children}
            </AppShell>
        </ThemeProvider>
    );
};

App.propTypes = {
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

App.defaultProps = {
    version: undefined,
    loading: false,
    error: undefined,
    title: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
    messages: {},
    locale: 'de',
};

export default App;
