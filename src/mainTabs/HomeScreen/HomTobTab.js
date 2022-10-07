import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveEvents from './ActiveEvents'
import PastEvents from './PastEvents'

const Tab = createMaterialTopTabNavigator();

const HomTobTab = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="activeorders" component={ActiveEvents} 
    options={{
      tabBarLabel: 'Active Events'
    }}
    />
    <Tab.Screen name="previouorders" component={PastEvents} 
    options={{
      tabBarLabel: "Past Events"
    }}
    />
  </Tab.Navigator>
  )
}

export default HomTobTab

const styles = StyleSheet.create({})