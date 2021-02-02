import React, {useEffect, useRef, useCallback} from 'react';
import {StyleSheet, View, Button, Animated, Easing} from 'react-native';

const AminOne = () => {
  const mySquare = useRef(new Animated.Value(1)).current;
  // const mySquare = useRef(new Animated.ValueXY(0, 0)).current;
  // const mySquare = new Animated.ValueXY(0, 0);
  // console.log(mySquare);
  // const runSpring = useCallback(() => {
  //   Animated.spring(mySquare, {
  //     toValue: {x: 50, y: 300},
  //   }).start();
  // }, [mySquare]);
  // const runTiming = useCallback(() => {
  //   Animated.timing(mySquare, {
  //     toValue: {x: 50, y: 300},
  //     duration: 2000,
  //     delay: 1500,
  //     easing: Easing.elastic(3),
  //     // useNativeDriver: true,
  //   }).start();
  // }, [mySquare]);
  const runTimingOpacity = useCallback(() => {
    Animated.timing(mySquare, {
      toValue: 0,
      duration: 2000,
      delay: 1500,
      // useNativeDriver: true,
    }).start();
  }, [mySquare]);

  return (
    <View>
      <Animated.View
        // style={mySquare.getLayout()}
        // style={{
        //   left: mySquare.x,
        //   top: mySquare.y,
        // }}
        style={{
          opacity: mySquare,
          transform: [
            {
              rotateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '360deg'],
              }),
            },
            {
              translateY: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [300, 150, 0],
              }),
            },
          ],
          // top: mySquare.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: [50, 0],
          // }),
        }}>
        <View style={styles.container}></View>
      </Animated.View>
      <Button title="start" onPress={() => runTimingOpacity()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});
export default AminOne;
