module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin',
      {
                    alias: {
                        "@screens": "./src/screens",
                        "@core": "./src/core",
                        "@utils": "./src/utils",
                        "@contexts": "./src/contexts",
                        "@config": "./src/config",
                        "@assets": "./assets",
                        "@api": "./src/API.ts"
                    }
                }
              ]
    ]
  };
};
