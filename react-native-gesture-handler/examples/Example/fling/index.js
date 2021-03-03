import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';

import { USE_NATIVE_DRIVER } from '../config';

const windowWidth = Dimensions.get('window').width;
const circleRadius = 30;

class Fling extends Component {
  constructor(props) {
    super(props);
    this._touchX = new Animated.Value(windowWidth / 2 - circleRadius);
    this._translateX = Animated.add(
      this._touchX,
      new Animated.Value(-circleRadius)
    );
    this._translateY = new Animated.Value(0);
  }

  _onHorizontalFlingHandlerStateChange = ({ nativeEvent }, offset) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this._touchX, {
        toValue: this._touchX._value + offset,
        useNativeDriver: USE_NATIVE_DRIVER,
      }).start();
    }
  };

  _onVerticalFlingHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this._translateY, {
        toValue: this._translateY._value + 10,
        useNativeDriver: USE_NATIVE_DRIVER,
      }).start();
    }
  };

  render() {
    return (
      <FlingGestureHandler
        direction={Directions.UP}
        numberOfPointers={2}
        onHandlerStateChange={this._onVerticalFlingHandlerStateChange}>
        <FlingGestureHandler
          direction={Directions.RIGHT | Directions.LEFT}
          onHandlerStateChange={ev =>
            this._onHorizontalFlingHandlerStateChange(ev, -10)
          }>
          <View style={styles.horizontalPan}>
            <Animated.View
              style={[
                styles.circle,
                {
                  transform: [
                    {
                      translateX: this._translateX,
                    },
                    {
                      translateY: this._translateY,
                    },
                  ],
                },
              ]}
            />
          </View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    );
  }
}
const LongPressButton = () => (
  <FlingGestureHandler
    direction={Directions.RIGHT | Directions.LEFT}
    onHandlerStateChange={({ nativeEvent }) => {
      if (nativeEvent.state === State.ACTIVE) {
        Alert.alert("I'm flinged!");
    }}>
    <View style={styles.box} />
  </FlingGestureHandler>
);
export default class Example extends Component {
  render() {
    return (
      <View>
        <LongPressButton
          style={{ width: 100, height: 50, backgroundColor: 'brown' }}
        />
        <Fling />

        <Text>
          Move up (with two fingers) or right/left (with one finger) and watch
          magic happens
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontalPan: {
    backgroundColor: '#f76f41',
    height: 300,
    justifyContent: 'center',
    marginVertical: 10,
  },
  circle: {
    backgroundColor: '#42a5f5',
    borderRadius: circleRadius,
    height: circleRadius * 2,
    width: circleRadius * 2,
  },
});
