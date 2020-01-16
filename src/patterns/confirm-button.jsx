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

const ConfirmButton = ({
    messageId,
    onConfirm,
    confirmMessageId,
    closeMessageId,
    headerMessageId,
    questionMessageId,
    ...props
}) => {
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
                            <FormattedMessage id={headerMessageId} />
                        </PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <FormattedMessage id={questionMessageId} />
                        </PopoverBody>
                        <PopoverFooter>
                            <ButtonGroup size="sm">
                                <Button
                                    variantColor="blue"
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}>
                                    <FormattedMessage id={confirmMessageId} />
                                </Button>
                                <Button
                                    onClick={onClose}
                                    variant="ghost"
                                    ref={initialFocusRef}>
                                    <FormattedMessage id={closeMessageId} />
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
    confirmMessageId: string,
    closeMessageId: string,
    headerMessageId: string,
    questionMessageId: string,
};

ConfirmButton.defaultProps = {
    confirmMessageId: 'common.confirm',
    closeMessageId: 'common.close',
    headerMessageId: 'common.confirm-header',
    questionMessageId: 'common.confirm-question',
};

export default ConfirmButton;
