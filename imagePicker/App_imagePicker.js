/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [avatar, setAvatar] = useState('');
  const addImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'choose your photo',
        takePhotoButtonTitle: 'take a picture',
        chooseFromLibraryButtonTitle: 'select an old one',
        cancelButtonTitle: 'just go back',
      },
      (response) => {
        console.warn(response);
        setAvatar(response.uri);
      },
    );
  };
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Button title="add an image" onPress={() => addImage()} />
      <Button
        title="Take image"
        onPress={() =>
          launchCamera(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 500,
              maxWidth: 500,
            },
            (response) => {
              setAvatar(response.uri);
            },
          )
        }
      />

      <Button
        title="Select image"
        onPress={() =>
          launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 500,
              maxWidth: 500,
            },
            (response) => {
              setAvatar(response.uri);
            },
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
