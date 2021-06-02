import {extendTheme} from '@chakra-ui/react';

const colors = {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    brand: {
        blue: '#3246e6',
        tangerine: '#fa744f',
        'ice-blue': '#a0d8d8',
        'english-yellow': '#fadb4c',
    },
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
    },
    red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
    },
    orange: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
    },
    green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
    },
    blue: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
    },
    primary: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
    },
};

const colorSections = {
    sidebar: {
        background: colors.gray[100],
        border: colors.gray[200],
        navItem: {
            default: {
                text: colors.gray[600],
                background: 'inherit',
            },
            active: {
                text: colors.gray[900],
                background: colors.gray[200],
            },
            hover: {
                text: colors.gray[900],
                background: colors.gray[50],
            },
        },
        footer: {
            border: colors.gray[200],
        },
    },
    header: {
        page: {
            text: colors.gray[900],
            background: colors.white,
        },
        card: {
            text: colors.gray[900],
            background: colors.white,
            description: colors.gray[500],
        },
        section: {
            text: colors.gray[900],
            background: colors.white,
            border: colors.gray[900],
            description: colors.gray[500],
        },
    },
    profile: {
        username: {
            default: 'gray.700',
            hover: 'gray.900',
        },
        link: {
            default: 'gray.500',
            hover: 'gray.700',
        },
    },
};

export default {
    ...extendTheme({
        colors: {
            ...colors,
            ...colorSections,
            primary: colors.blue,
        },
        fonts: {
            body: 'Inter',
            heading: 'Inter',
            mono: 'Menlo, monospace',
        },
        shadows: {
            ring2: 'inset 0 0 0 1px #3B82F6',
        },
        sizes: {
            screen: '100vh',
        },
    }),
};
