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
            fontSize: {
                tiny: '0.625rem',
                small: '0.75rem',
                base: '1rem',
                large: '1.25rem',
                extralarge: '1.5rem',
                huge: '2rem',
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
    },
    plugins: [],
};
