import React, {FC} from 'react';
import {string} from 'prop-types';
import {Tag} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const getColorScheme = (state) => {
    switch (state) {
        case 'draft':
            return {color: 'orange.900', bg: 'orange.200'};
        case 'new':
            return {};
        case 'review':
            return {color: 'yellow.900', bg: 'yellow.200'};
        case 'paid':
            return {color: 'orange.900', bg: 'orange.200'};
        case 'completed':
            return {color: 'green.900', bg: 'green.200'};
        case 'adacta':
            return {};
        default:
            return {};
    }
};

const ClaimState: FC<any> = ({state, children}): any => {
    return (
        // allow prop sreading
        // eslint-disable-next-line
        <Tag size="sm" {...getColorScheme(state || children)}> 
            <FormattedMessage id={`claimState.${state || children}`} />
        </Tag>
    );
};

ClaimState.propTypes = {
    state: string,
    children: string,
};

ClaimState.defaultProps = {
    state: '',
    children: '',
};

export default ClaimState;
