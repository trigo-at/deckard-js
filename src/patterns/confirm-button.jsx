import React, {useRef} from 'react';
import {func, string} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    Stack,
} from '@chakra-ui/core';
import PrimaryButton from '../components/primary-button';
import SecondaryButton from '../components/secondary-button';

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
                        <PrimaryButton {...props}>
                            <FormattedMessage id={messageId} />
                        </PrimaryButton>
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
                            <Stack spacing={2} isInLine>
                                <PrimaryButton
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}>
                                    <FormattedMessage id={confirmMessageId} />
                                </PrimaryButton>
                                <SecondaryButton
                                    onClick={onClose}
                                    ref={initialFocusRef}>
                                    <FormattedMessage id={closeMessageId} />
                                </SecondaryButton>
                            </Stack>
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
