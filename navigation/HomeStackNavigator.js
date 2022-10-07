import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../src/mainTabs/HomeScreen/Home';
import Scanner from '../src/mainTabs/HomeScreen/scanner';

const tabHiddenRoutes = ["scanner"];
const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    // const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name="home" component={Home} 
      options={{
        headerTitle: 'Events'
      }}
      />
      <Stack.Screen name="scanner" component={Scanner}
        options={{
          headerTitle: 'Scanner',
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back"
              color='black'
              size={26}
              style={{ marginLeft: 10, }}
              onPress={() => navigation.goBack()} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})
