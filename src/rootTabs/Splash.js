import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const checkFirstLaunch = useCallback(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      navigation.navigate('login');
      // dispatch(req());
    });
  }, [navigation]);
  useEffect(() => {
    setTimeout(() => {
      checkFirstLaunch();
    }, 5000);
  }, [checkFirstLaunch]);
  console.log('App Executed');
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Event Organizers</Text>
    </View>
  )
}

export default Splash

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  text: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center'
  },
})