import React from 'react';
import {Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import HideOptionalContext from './hide-optional-context';

const Optional = () => {
    return (
        <HideOptionalContext.Consumer>
            {hideOptional =>
                hideOptional ? null : (
                    <Text fontSize="xs" color="gray.500">
                        <FormattedMessage id="common.optional" />
                    </Text>
                )
            }
        </HideOptionalContext.Consumer>
    );
};

Optional.propTypes = {};

export default Optional;
