/** @jsx jsx */
import {jsx, keyframes, css} from '@emotion/core';
import {node, bool} from 'prop-types';
import {Box} from '@chakra-ui/core';

const blink = (color) => keyframes`
    from {
        background-color: ${color};
    }

    50% {
        background-color: ${color};
    }

    to {
        background-color: transparent;
    }
`;

const TableRow = ({entryAnimation, children}) => (
    <Box
        as="tr"
        css={(theme) =>
            entryAnimation
                ? css`
                      animation: ${blink(theme.colors.yellow['200'])} 3s
                          ease-out;
                  `
                : undefined
        }>
        {children}
    </Box>
);

TableRow.propTypes = {
    entryAnimation: bool,
    children: node,
};
TableRow.defaultProps = {
    entryAnimation: false,
    children: undefined,
};

export default TableRow;
