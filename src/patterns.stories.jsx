import React from 'react';
import {Box, Text, Heading, List, ListItem} from '@chakra-ui/core';
import ProviderDecorator from './provider-decorator';

const TextBlock = (props) => <Text color="gray.900" {...props} />;

export const PatternsStory = () => <div />;

PatternsStory.story = {
    name: 'Patterns',
};

export const PagesStory = () => (
    <Box p={3}>
        <Heading as="h2" size="md">
            ResponsePageError
        </Heading>
        <TextBlock>
            Diese Seite kann genutzt werden um Fehler anzuzeigen die man nur
            durch drastische Massnahmen (Page Reload, Support kontaktieren,...)
            beheben kann. <br />
            Folgend Parameter werden aus der location ausgelesen (in Klammer der
            Fallback; alle Werte außer to werden durch react-intl
            interpretiert):
            <List styleType="disc">
                <ListItem>title (common.error.title)</ListItem>
                <ListItem>description (common.error.description)</ListItem>
                <ListItem>to (/)</ListItem>
                <ListItem>action (common.next)</ListItem>
            </List>
        </TextBlock>

        <Heading as="h2" size="md" mt={10}>
            ResponsePageSuccess
        </Heading>
        <TextBlock>
            Diese Seite kann als Erfolgsmeldung nach einer globalen Aktion (wie
            zB Löschen eines Datensatzes) genutzt werden. Wenn es keinen anderen
            sinnvollen Zustand gibt zu dem man zurückkehren kann, man aber
            anzeigen möchte das die Aktion erfolgreich war. <br />
            Folgend Parameter werden aus der location ausgelesen (in Klammer der
            Fallback; alle Werte außer to werden durch react-intl
            interpretiert):
            <List styleType="disc">
                <ListItem>title (common.success.title)</ListItem>
                <ListItem>description (common.success.description)</ListItem>
                <ListItem>to (/)</ListItem>
                <ListItem>action (common.next)</ListItem>
            </List>
        </TextBlock>
    </Box>
);

PagesStory.story = {
    name: 'Pages',
};

export default {
    title: 'Documentation|Patterns',
    decorators: [ProviderDecorator],
};
