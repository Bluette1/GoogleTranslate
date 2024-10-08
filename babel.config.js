module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);

  const presets = [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'];

  const plugins = [];

  return {
    presets,
    plugins,
    ...(isTest && {
      presets: [
        ...presets,
        'module:metro-react-native-babel-preset',
        '@babel/preset-env', // Optional if you need it for compatibility
      ],
      plugins: [
        ...plugins,
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    }),
  };
};
