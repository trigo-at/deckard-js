import React, {SFC, ReactNode} from 'react';
import {TranslationMessage, TranslationValues} from 'src/types';
import {FormattedMessage} from 'react-intl';

type Props = {
    title?: TranslationMessage;
    values?: TranslationValues;
    actions?: ReactNode;
    children: ReactNode;
    isPrimary: boolean;
};

const PageSection: SFC<Props> = ({
    title,
    values,
    actions,
    children,
    isPrimary,
}: Props): React.ReactElement => {
    return (
        <section className="mb-8">
            <div className="flex justify-between items-center">
                {isPrimary ? (
                    <h1 className="font-bold mb-4 mt-4 text-lg">
                        <FormattedMessage id={title} values={values} />
                    </h1>
                ) : (
                    <h2 className="font-bold mb-4 mt-4 text-lg">
                        <FormattedMessage id={title} values={values} />
                    </h2>
                )}

                {actions && <div>{actions}</div>}
            </div>
            <div className="bg-white rounded shadow-md p-4">{children}</div>
        </section>
    );
};
export default PageSection;
