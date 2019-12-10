import React, {Fragment} from 'react';
import {arrayOf, shape, string, any, elementType, func} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Grid, Text, Link as ChakraLink, Flex, Box} from '@chakra-ui/core';
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
            <ChakraLink as={Link} to={entry.link} color="gray.900">
                {entry.format ? (
                    <FormattedMessage id={`${entry.format}.${entry.value}`} />
                ) : (
                    entry.value
                )}
            </ChakraLink>
        );
    }
    if (entry.format) {
        return (
            <Text color="gray.900">
                <FormattedMessage id={`${entry.format}.${entry.value}`} />
            </Text>
        );
    }
    return <Text color="gray.900">{entry.value}</Text>;
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
                    <Box py={4} borderBottom="1px" borderBottomColor="gray.200">
                        <DataEntry entry={value} />
                    </Box>
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
