import React, {useRef, FC} from 'react';
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
    Portal,
    ButtonProps,
} from '@chakra-ui/react';
import PrimaryButton from '../buttons/primary-button';
import TertiaryButton from '../buttons/tertiary-button';

export type ConfirmButtonProps = {
    onConfirm: () => void;
    messageId: string;
    confirmMessageId?: string;
    closeMessageId?: string;
    headerMessageId?: string;
    questionMessageId?: string;
} & ButtonProps;

export const ConfirmButton: FC<ConfirmButtonProps> = ({
    messageId,
    onConfirm,
    confirmMessageId,
    closeMessageId,
    headerMessageId,
    questionMessageId,
    colorScheme,
    ...props
}) => {
    const initialFocusRef = useRef(null);
    return (
        <Popover initialFocusRef={initialFocusRef} placement="auto">
            {({onClose}) => (
                <>
                    <PopoverTrigger>
                        <PrimaryButton colorScheme={colorScheme} {...props}>
                            <FormattedMessage id={messageId} />
                        </PrimaryButton>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent zIndex={4}>
                            <PopoverHeader>
                                <FormattedMessage id={headerMessageId} />
                            </PopoverHeader>
                            <PopoverArrow />
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
                                        <FormattedMessage
                                            id={confirmMessageId}
                                        />
                                    </PrimaryButton>
                                    <TertiaryButton
                                        onClick={onClose}
                                        ref={initialFocusRef}>
                                        <FormattedMessage id={closeMessageId} />
                                    </TertiaryButton>
                                </Stack>
                            </PopoverFooter>
                        </PopoverContent>
                    </Portal>
                </>
            )}
        </Popover>
    );
};

ConfirmButton.defaultProps = {
    confirmMessageId: 'common.confirm',
    closeMessageId: 'common.close',
    headerMessageId: 'common.confirm-header',
    questionMessageId: 'common.confirm-question',
    colorScheme: 'teal',
};

export default ConfirmButton;
