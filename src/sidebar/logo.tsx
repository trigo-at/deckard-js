import React, {FC} from 'react';
import {Flex, Image} from '@chakra-ui/react';

export type LogoProps = {
    /**
     * src zum Image (svg, png)
     */
    src?: string;
};

/**
 * Logo Komponente für den Sidebar
 */
export const Logo: FC<LogoProps> = ({src = undefined}) => {
    return (
        <Flex alignItems="center" flexShrink={0}>
            <Image h={8} w="auto" src={src} />
        </Flex>
    );
};

export default Logo;
