module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        'nativewind/babel',
        'react-native-reanimated/plugin',
        [
            'module:react-native-dotenv',
            {
                envName: 'ENV',
                moduleName: '@env',
                path: '.env',
            },
        ],
        [
            'babel-plugin-root-import',
            {
                rootPathPrefix: '~',
                rootPathSuffix: 'src',
            },
        ],
    ],
};
