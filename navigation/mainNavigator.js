import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Profile from '../src/mainTabs/ProfileScreen/Profile'
import Message from '../src/mainTabs/MessageScreen/Message'
import ReportStackNavigator from './ReportStackNavigator'
import HomeStackNavigator from './HomeStackNavigator';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const mainNavigator = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarStyle: {
        //   backgroundColor: 'white'
        // },
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
      initialRouteName="home">
      <Tab.Screen name="home" component={HomeStackNavigator}
        options={{
          headerTitle: 'Events',
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event-seat" color={color} size={26} />
          ),
          headerShown: false,
          headerTitle: 'Events',
          // headerTitleStyle: {
          //   // marginTop: 10,
          //   marginLeft: 20
          // },
          // headerLeft: () => (
          //   <MaterialIcons 
          //   name="arrow-back" 
          //   color='black' 
          //   size={26} 
          //   style={{marginLeft: 10,}}
          //   onPress={()=> navigation.goBack()}/>
          // ),
        }}
      />
       <Tab.Screen name="report" component={ReportStackNavigator}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color }) => (
            <AntDesign name="dashboard" color={color} size={26} />
          ),
          headerShown: false,
          headerTitle: 'Report',
          // headerLeft: () => (
          //   <MaterialIcons
          //     name="arrow-back"
          //     color='black'
          //     size={26}
          //     style={{ marginLeft: 10, }}
          //     onPress={() => navigation.goBack()} />
          // ),
        }}
      />
      <Tab.Screen name="message" component={Message}
        options={{
          tabBarLabel: 'Message',
          headerShown: true,
          headerTitle: 'Message',
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
          headerShown: true,
          headerTitle: 'Profile',
        }}
      /> 
    </Tab.Navigator>
  );
};

export default mainNavigator;