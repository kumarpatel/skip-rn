// jest.config.js
module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|react-navigation-tabs" +
      "|react-navigation" +
      "|react-native-splash-screen" +
      "|react-native-screens" +
      "|react-native-reanimated" +
      ")/)",
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)",
  ],
  //   transform: {
  //     "\\.ts$": [
  //       // "ts-jest"
  //     ],
  //   },
  automock: false,
  setupFiles: ["./setupJest.ts"],
};
