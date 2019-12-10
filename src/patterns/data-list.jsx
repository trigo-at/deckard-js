import React, {Fragment} from 'react';
import {arrayOf, shape, string, any, elementType, func} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Grid, Text, Link as ChakraLink, Flex} from '@chakra-ui/core';
import {Link} from '@reach/router';

const DataEntry = ({entry}) => {
    if (entry.render) {
        return entry.render(entry.value);
    }
    if (entry.Component) {
        return <entry.Component>{entry.value}</entry.Component>;
    }
    if (entry.link) {
        return (
            <Text
                py={4}
                borderBottom="1px"
                borderBottomColor="gray.200"
                color="gray.900">
                <ChakraLink as={Link} to={entry.link}>
                    {entry.format ? (
                        <FormattedMessage
                            id={`${entry.format}.${entry.value}`}
                        />
                    ) : (
                        entry.value
                    )}
                </ChakraLink>
            </Text>
        );
    }
    if (entry.format) {
        return (
            <Text
                py={4}
                borderBottom="1px"
                borderBottomColor="gray.200"
                color="gray.900">
                <FormattedMessage id={`${entry.format}.${entry.value}`} />
            </Text>
        );
    }
    return (
        <Text
            py={4}
            borderBottom="1px"
            borderBottomColor="gray.200"
            color="gray.900">
            {entry.value}{' '}
        </Text>
    );
};

DataEntry.propTypes = {
    entry: shape({
        value: any,
        link: string,
        format: string,
        Component: elementType,
        render: func,
    }).isRequired,
};

const DataList = ({values}) => {
    return (
        <Grid justifyContent="center" gridTemplateColumns="0.3fr 0.7fr">
            {values.map(value => (
                <Fragment key={value.field}>
                    <Flex
                        height="full"
                        alignItems="flex-start"
                        py={4}
                        borderBottom="1px"
                        borderBottomColor="gray.200">
                        <Text color="gray.600">
                            <FormattedMessage id={`field.${value.field}`} />
                        </Text>
                    </Flex>
                    <DataEntry entry={value} />
                </Fragment>
            ))}
        </Grid>
    );
};

DataList.propTypes = {
    values: arrayOf(
        shape({
            field: string.isRequired,
            value: any,
            format: string,
            link: string,
            Component: elementType,
            render: func,
        })
    ),
};

DataList.defaultProps = {
    values: [],
};

export default DataList;
