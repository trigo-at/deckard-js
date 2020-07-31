import React, {useRef, FC} from 'react';
import {bool, func, number, any} from 'prop-types';
import {Form} from 'react-final-form';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Alert,
    AlertIcon,
    DrawerFooter,
    Button,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FormSection from '../patterns/form-section';
import CheckboxField from '../form-fields/checkbox-field';
// import InputField from '../form-fields/input-field'; // doesnt work

const gridTemplateAreas = `
'setInternalCreditNoteNumber setInternalCreditNoteNumber setInternalCreditNoteNumber'
'internalCreditNoteNumber internalCreditNoteNumber internalCreditNoteNumber'
`;

const initialValues = {
    setInternalCreditNoteNumber: false,
    internalCreditNoteNumber: '',
};

const BulkUpdateDrawer: FC<any> = ({
    isOpen,
    onClose,
    finalFocusRef,
    onBulkUpdate,
    updateCount,
}): any => {
    const firstField = useRef();
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={finalFocusRef}
            // initialFocusRef={firstField}
        >
            <DrawerOverlay />
            <Form initialValues={initialValues} onSubmit={onBulkUpdate}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                <FormattedMessage
                                    id="common.bulk-update"
                                    values={{count: updateCount}}
                                />
                            </DrawerHeader>

                            <DrawerBody>
                                <Alert status="warning" mb={4}>
                                    <AlertIcon />
                                    <FormattedMessage
                                        id="common.bulk-update-count"
                                        values={{count: updateCount}}
                                    />
                                </Alert>
                                <FormSection
                                    gridTemplateAreas={gridTemplateAreas}>
                                    <CheckboxField
                                        ref={firstField}
                                        name="setInternalCreditNoteNumber"
                                    />
                                    {/* {values.setInternalCreditNoteNumber && (
                                        <InputField
                                            name="internalCreditNoteNumber"
                                            isRequired
                                        />
                                    )} */}
                                </FormSection>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button
                                    variant="outline"
                                    mr={3}
                                    onClick={onClose}>
                                    <FormattedMessage id="common.close" />
                                </Button>
                                <Button
                                    type="submit"
                                    variantColor="blue"
                                    onClick={onClose}>
                                    <FormattedMessage id="common.confirm" />
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </form>
                )}
            </Form>
        </Drawer>
    );
};

BulkUpdateDrawer.propTypes = {
    isOpen: bool,
    onClose: func,
    onBulkUpdate: func,
    finalFocusRef: any,
    updateCount: number,
};

BulkUpdateDrawer.defaultProps = {
    isOpen: false,
    onClose: undefined,
    onBulkUpdate: undefined,
    finalFocusRef: undefined,
    updateCount: 0,
};

export default BulkUpdateDrawer;
