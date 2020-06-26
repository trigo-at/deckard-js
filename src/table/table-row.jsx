/** @jsx jsx */
import {jsx, keyframes, css} from '@emotion/core';
import {node, bool} from 'prop-types';
import {Box} from '@chakra-ui/core';

const blink = keyframes`
    from {
        background-color: #fff9c2;
    }

    50% {
        background-color: #fff9c2;
    }

    to {
        background-color: transparent;
    }
`;

const TableRow = ({entryAnimation, children}) => (
    <Box
        as="tr"
        css={
            entryAnimation
                ? css`
                      animation: ${blink} 3s ease-out;
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
