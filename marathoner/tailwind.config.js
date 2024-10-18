/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['src/**/*.{tsx,ts,jsx,js}', './App.{tsx,ts,jsx,js}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                'plex-bold': 'IBMPlexSansKR-Bold',
                'plex-medium': 'IBMPlexSansKR-Medium',
                'plex-regular': 'IBMPlexSansKR-Regular',
                'plex-light': 'IBMPlexSansKR-Light',
                'plex-thin': 'IBMPlexSansKR-Thin',
                'plex-extralight': 'IBMPlexSansKR-ExtraLight',
                'plex-semibold': 'IBMPlexSansKR-SemiBold',
            },
            colors: {
                'vivid-green': '#B4FD2E',
            },
            keyframes: {
                'to-right': {
                    '0%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(10px)'},
                },
            },
            animation: {
                'to-right': 'to-right 1s ease-in-out infinite alternate',
            },
        },
        fontSize: {
            // regenerate text sizes without line-height
            xxs: '.625rem',
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '8rem',
        },
    },
    plugins: [],
};
