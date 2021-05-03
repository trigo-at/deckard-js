import React, {FC} from 'react';
import {
    Flex,
    Box,
    Text,
    Image,
    LinkBox,
    LinkOverlay,
    forwardRef,
} from '@chakra-ui/react';

export type ProfileProps = {
    /**
     * Der Link zum Profile (kann z.B. auch von next/link kommen)
     */
    href: string;
    /**
     * Wenn es sich um einen externen Link handelt wird der Link in einem neuen Tab geöffnet und rel="noopener noreferrer" wird gesetzt
     */
    isExternal?: boolean;
    /**
     * Der primäre Text. Wird meist für den Username verwendet
     */
    username?: string;
    /**
     * src zum Avatar Image
     */
    avatar?: string;
    /**
     * Fallback onClick, wenn nicht via Router navigiert wird
     */
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    /**
     * angezeigter Text im Link
     */
    linkText?: string;
};

/**
 * Profile Abschnitt des Sidebars
 */
export const Profile: FC<ProfileProps> = forwardRef(
    (
        {
            href,
            onClick,
            isExternal,
            avatar,
            username,
            linkText = 'View profile',
        },
        ref
    ) => {
        return (
            <LinkBox
                flexShrink={0}
                w="full"
                role="group"
                display="block"
                ref={ref}>
                <Flex alignItems="center">
                    {avatar && (
                        <Box>
                            <Image
                                display="inline-block"
                                h={9}
                                w={9}
                                rounded="full"
                                src={avatar}
                                alt="user avatar"
                            />
                        </Box>
                    )}
                    <Box ml={avatar ? '3' : undefined}>
                        {username && (
                            <Text
                                fontSize="sm"
                                fontWeight="medium"
                                color="gray.700"
                                _groupHover={{
                                    color: 'gray.900',
                                }}>
                                {username}
                            </Text>
                        )}
                        <LinkOverlay
                            href={href}
                            isExternal={isExternal}
                            onClick={onClick}
                            id="sidebar-profile-link">
                            <Text
                                decoration="none"
                                fontSize="xs"
                                fontWeight="medium"
                                color="gray.500"
                                _groupHover={{color: 'gray.700'}}>
                                {linkText}
                            </Text>
                        </LinkOverlay>
                    </Box>
                </Flex>
            </LinkBox>
        );
    }
);

export default Profile;
