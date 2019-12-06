import React, {Fragment} from 'react';
import {arrayOf, shape, string, any, node} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Grid, Text, Link as ChakraLink} from '@chakra-ui/core';
import {Link} from '@reach/router';

const DataEntry = ({entry}) => {
    if (entry.Component) {
        return <entry.Component>{entry.value}</entry.Component>;
    }
    if (entry.link) {
        return (
            <ChakraLink as={Link} to={entry.link}>
                {entry.format ? (
                    <FormattedMessage id={`${entry.format}.${entry.value}`} />
                ) : (
                    entry.value
                )}
            </ChakraLink>
        );
    }
    if (entry.format) {
        return <FormattedMessage id={`${entry.format}.${entry.value}`} />;
    }
    return <>{entry.value}</>;
};

DataEntry.propTypes = {
    entry: shape({
        value: any,
        link: string,
        format: string,
        Component: node,
    }).isRequired,
};

const DataList = ({values}) => {
    return (
        <Grid
            alignItems="flex-end"
            justifyContent="center"
            gridTemplateColumns="0.3fr 0.7fr">
            {values.map(value => (
                <Fragment key={value.field}>
                    <Text
                        py={4}
                        borderBottom="1px"
                        borderBottomColor="gray.200"
                        color="gray.600">
                        <FormattedMessage id={`field.${value.field}`} />
                    </Text>
                    <Text
                        py={4}
                        borderBottom="1px"
                        borderBottomColor="gray.200"
                        color="gray.900">
                        <DataEntry entry={value} />
                    </Text>
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
            Component: node,
        })
    ),
};

DataList.defaultProps = {
    values: [],
};

export default DataList;