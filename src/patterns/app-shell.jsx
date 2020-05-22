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
    aside,
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
        <Layout
            fixedAside={fixedAside}
            accent={accent}
            logo={<Logo title={title} version={version} imgSrc={imgSrc} />}
            header={header}
            aside={aside}>
            <Router>{children}</Router>
        </Layout>
    );
};

AppLayout.propTypes = {
    title: string,
    version: string,
    imgSrc: string,
    loading: bool,
    error: string,
    header: node,
    aside: node,
    children: node,
    accent: string,
    fixedAside: bool,
};

AppLayout.defaultProps = {
    version: undefined,
    loading: false,
    imgSrc: undefined,
    error: undefined,
    title: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
    accent: 'gray',
    fixedAside: false,
};

const AppShell = ({
    title,
    version,
    imgSrc,
    loading,
    error,
    header,
    aside,
    messages,
    locale,
    children,
    accent,
    fixedAside,
}) => {
    return (
        <ThemeProvider>
            <IntlProvider locale={locale} messages={messages}>
                <AppLayout
                    accent={accent}
                    title={title}
                    version={version}
                    imgSrc={imgSrc}
                    loading={loading}
                    error={error}
                    header={header}
                    aside={aside}
                    fixedAside={fixedAside}>
                    {children}
                </AppLayout>
            </IntlProvider>
        </ThemeProvider>
    );
};

AppShell.propTypes = {
    title: string,
    version: string,
    imgSrc: string,
    loading: bool,
    error: string,
    header: node,
    aside: node,
    children: node,
    messages: object,
    locale: string,
    accent: string,
    fixedAside: bool,
};

AppShell.defaultProps = {
    version: undefined,
    title: undefined,
    imgSrc: undefined,
    loading: false,
    error: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
    messages: {},
    locale: 'de',
    accent: 'gray',
    fixedAside: false,
};

export default AppShell;
