import React, {Fragment} from 'react';
import {arrayOf, shape, string, any} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Grid, Text} from '@chakra-ui/core';

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
                        {value.format ? (
                            <FormattedMessage
                                id={`${value.format}.${value.value}`}
                            />
                        ) : (
                            value.value || ''
                        )}
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
        })
    ),
};

DataList.defaultProps = {
    values: [],
};

export default DataList;
