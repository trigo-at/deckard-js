import React, {useRef} from 'react';
import {func, string} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    ButtonGroup,
} from '@chakra-ui/core';

const ConfirmButton = ({messageId, onConfirm, ...props}) => {
    const initialFocusRef = useRef();
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement="left-center"
            usePortal>
            {({onClose}) => (
                <>
                    <PopoverTrigger>
                        <Button {...props}>
                            <FormattedMessage id={messageId} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent zIndex={4}>
                        <PopoverArrow />
                        <PopoverHeader>
                            <FormattedMessage id="common.confirm-header" />
                        </PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <FormattedMessage id="common.confirm-question" />
                        </PopoverBody>
                        <PopoverFooter>
                            <ButtonGroup size="sm">
                                <Button
                                    variantColor="blue"
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}>
                                    <FormattedMessage id="common.confirm" />
                                </Button>
                                <Button
                                    onClick={onClose}
                                    variant="ghost"
                                    ref={initialFocusRef}>
                                    <FormattedMessage id="common.close" />
                                </Button>
                            </ButtonGroup>
                        </PopoverFooter>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
};

ConfirmButton.propTypes = {
    onConfirm: func.isRequired,
    messageId: string.isRequired,
};

ConfirmButton.defaultProps = {};

export default ConfirmButton;
