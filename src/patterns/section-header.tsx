import React from 'react';
import {FormattedMessage} from 'react-intl';
import {TranslationMessage, TranslationValues} from 'src/types';

type Props = {
    title: TranslationMessage;
    values?: TranslationValues;
};

const SectionHeader: React.FC<Props> = ({title, values}: Props) => {
    return (
        <h3 className="text-lg font-bold">
            <FormattedMessage id={title} values={values} />
        </h3>
    );
};

export default SectionHeader;
