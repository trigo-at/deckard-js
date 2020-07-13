import React, {FC, ReactNode} from 'react';
import {TranslationMessage, TranslationValues} from 'src/types';
import SectionHeader from './section-header';

type Props = {
    title?: TranslationMessage;
    titleValues?: TranslationValues;
    actions?: ReactNode;
    footer?: ReactNode;
    isEmbedded?: boolean;
    children: ReactNode;
};

const ViewSection: FC<Props> = ({
    title,
    titleValues,
    actions,
    footer,
    isEmbedded,
    children,
}: Props) => {
    const px = isEmbedded ? `px-0` : `px-4`;
    return (
        <section className="mb-10">
            <div className={`pt-4 pb-2 ${px}`}>
                {title && <SectionHeader title={title} values={titleValues} />}
                {actions && <div className="py-3">{actions}</div>}
            </div>
            <div className={px}>{children}</div>
            {footer && (
                <div className={`pt-4 pb-2 ${px}`}>
                    <div className="py-3">{footer}</div>
                </div>
            )}
        </section>
    );
};

export default ViewSection;
