import React from 'react';
import {Heading} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

type TranslationMessage = string;
type TranslationValues = Record<string, any>;

type Props = {
    [x: string]: unknown;
    title: TranslationMessage;
    values?: TranslationValues;
};

const SectionHeader: React.FC<Props> = ({title, values, ...props}: Props) => {
    return (
        <Heading as="h3" fontSize="lg" lineHeight="base" {...props}>
            <FormattedMessage id={title} values={values} />
        </Heading>
    );
};

export default SectionHeader;
