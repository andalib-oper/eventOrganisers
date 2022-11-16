import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import ReportDetails from '../src/mainTabs/ReportScreen/ReportDetails';
import Report from '../src/mainTabs/ReportScreen/Report';

const tabHiddenRoutes = ["reportDetails"];
const Stack = createStackNavigator();

const ReportStackNavigator = ({ route }) => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    // const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName='report'>
      <Stack.Screen name="report" component={Report} 
      options={{
        headerTitle: 'Report',
        headerShown: true
      }}
      />
      <Stack.Screen name="reportDetails" component={ReportDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default ReportStackNavigator

const styles = StyleSheet.create({})
