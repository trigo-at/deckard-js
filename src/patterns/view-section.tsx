import React, {FC, ReactNode} from 'react';
// import {Box} from '@chakra-ui/core';
import SectionHeader from './section-header';

type TranslationMessage = string;
type TranslationValues = Record<string, any>;

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
    // return (
    //     <Box as="section" mb={10} {...props}>
    //         <Box px={isEmbedded ? 0 : 4} pt={4} pb={2}>
    //             {title && <SectionHeader title={title} />}
    //             {actions && <Box py={3}>{actions}</Box>}
    //         </Box>
    //         <Box px={isEmbedded ? 0 : 4}>{children}</Box>
    //         {footer && (
    //             <Box px={isEmbedded ? 0 : 4} pt={4} pb={2}>
    //                 <Box py={3}>{footer}</Box>
    //             </Box>
    //         )}
    //     </Box>
    // );

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
