module.exports = {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
    plugins: [
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
