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
} from '@chakra-ui/react';
import PrimaryButton from '../buttons/primary-button';
import TertiaryButton from '../buttons/tertiary-button';

const ConfirmButton = ({
    messageId,
    onConfirm,
    confirmMessageId,
    closeMessageId,
    headerMessageId,
    questionMessageId,
    colorScheme,
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
                        <PrimaryButton colorScheme={colorScheme} {...props}>
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
                            <Stack spacing={2} isInline>
                                <PrimaryButton
                                    colorScheme={colorScheme}
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}>
                                    <FormattedMessage id={confirmMessageId} />
                                </PrimaryButton>
                                <TertiaryButton
                                    onClick={onClose}
                                    ref={initialFocusRef}>
                                    <FormattedMessage id={closeMessageId} />
                                </TertiaryButton>
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
    colorScheme: string,
};

ConfirmButton.defaultProps = {
    confirmMessageId: 'common.confirm',
    closeMessageId: 'common.close',
    headerMessageId: 'common.confirm-header',
    questionMessageId: 'common.confirm-question',
    colorScheme: 'teal',
};

export default ConfirmButton;
