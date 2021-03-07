// react-native.config.js
module.exports = {
    dependencies: {
      'react-native-dialogflow': {
        platforms: {
          android: null, // disable Android platform, other platforms will still autolink
        },
      },
      'react-native-voice': {
        platforms: {
          android: null, // disable Android platform, other platforms will still autolink
        },
      },
    },
  };