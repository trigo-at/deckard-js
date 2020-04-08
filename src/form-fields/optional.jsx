import React from 'react';
import {Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import HideOptionalContext from './hide-optional-context';

const Optional = ({...props}) => {
    return (
        <HideOptionalContext.Consumer>
            {(hideOptional) =>
                hideOptional ? null : (
                    <Text color="gray.500" {...props}>
                        <FormattedMessage id="common.optional" />
                    </Text>
                )
            }
        </HideOptionalContext.Consumer>
    );
};

Optional.propTypes = {};

export default Optional;
