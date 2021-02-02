import React, {useEffect, useRef, useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SuperText = (props) => {
  return (
    <View>
      <Text style={[styles.superText, props.style]}>{props.children}</Text>
      {/* <Text style={styles.superText}>{props.children}</Text>
      <Text style={styles.superText} {...props}>
        {props.children}
      </Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  superText: {
    width: 100,
    fontSize: 25,
    backgroundColor: 'skyblue',
  },
});
export default SuperText;
