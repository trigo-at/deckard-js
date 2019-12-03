import React from 'react';
import {string, node} from 'prop-types';
import {Link, Match} from '@reach/router';
import {Box, Icon, Text} from '@chakra-ui/core';

const NavLink = ({to, icon, children}) => (
    <Link to={to}>
        <Match path={to}>
            {({match}) =>
                match ? (
                    <Box
                        px={6}
                        bg="gray.900"
                        py={3}
                        borderLeftWidth="4px"
                        borderLeftColor="blue.300">
                        <Box
                            to="/"
                            ml="-4px"
                            display="flex"
                            alignItems="center"
                            color="gray.200">
                            <Icon name={icon} mr={2} size="24px" />
                            <Text as="span">{children}</Text>
                        </Box>
                    </Box>
                ) : (
                    <Box
                        px={6}
                        py={3}
                        display="flex"
                        alignItems="center"
                        color="gray.200">
                        <Icon name={icon} mr={2} size="24px" />
                        <Text as="span">{children}</Text>
                    </Box>
                )
            }
        </Match>
    </Link>
);

NavLink.propTypes = {
    to: string.isRequired,
    icon: string.isRequired,
    children: node.isRequired,
};

export default NavLink;
