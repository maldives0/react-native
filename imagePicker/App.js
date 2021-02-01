/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Contacts from 'react-native-contacts';
const App = () => {
  const [myContacts, setMyContacts] = useState([]);
  const requestContactPermission = async () => {
    if (Platform.OS === 'ios') {
      console.warn('iOS');
      return true;
    } else {
      console.warn('Android');

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);
      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  const getContacts = () => {
    requestContactPermission().then((didGetPermission) => {
      if (didGetPermission) {
        Contacts.getAll()
          .then((contacts) => {
            // console.warn(contacts);
            setMyContacts(contacts);
          })
          .catch((err) => {
            console.error(err);
            throw err;
          });
      } else {
        alert('no permission');
      }
    });
  };
  const addContacts = () => {
    requestContactPermission().then((didGetPermission) => {
      if (didGetPermission) {
        const newContact = {
          emailAddress: [
            {
              label: 'work',
              email: 'jjj@example.com',
            },
          ],
          familyName: 'jung',
          givenName: 'juyoung',
          phoneNumbers: [
            {
              label: 'mobile',
              number: '(010) 5555-5555',
            },
          ],
        };
        Contacts.addContact(newContact)
          .then(() => {
            // console.warn(contacts);
            getContacts();
          })
          .catch((err) => {
            console.error(err);
            throw err;
          });
      } else {
        alert('no permission');
      }
    });
  };
  const openForm = () => {
    Contacts.openContactForm({})
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {myContacts.map((item, idx) => {
            return (
              <Text key={idx}>
                {item.givenName}
                {item.familyName}
              </Text>
            );
          })}
          <Button title="load contacts" onPress={() => getContacts()} />
          <Button title="add contacts" onPress={() => addContacts()} />
          <Button title="open form" onPress={() => openForm()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
