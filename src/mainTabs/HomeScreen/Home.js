import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../../redux/events/actions'
import {logout, logUserOut} from '../../../redux/auth/action'
import HomTobTab from './HomTobTab'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useRoute } from '@react-navigation/native/lib/typescript/src'

const Home = ({ navigation }) => {
  const eventState = useSelector((state) => state.eventState)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])
  const formatDate = (date) => {
    const arr = date.split("-")
    const formatStr = `${arr[2]}-${arr[1]}-${arr[0]}`
    return formatStr
  }
const userOut =()=> {
  dispatch(logUserOut())
}
  // console.log(formatDate())
  return (
    <View style={styles.container}>
      <HomTobTab/>
      <TouchableOpacity
            style={styles.button}
            onPress={() => userOut()}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Home

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
    marginRight: '5%',
    width: '40%',
    padding: 10,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'flex-end',
    backgroundColor: '#003975',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  // heading: {
  //   fontSize: 18,
  //   fontWeight: '600',
  //   color: '#000'
  // },
  // content: {
  //   fontSize: 16,
  //   fontWeight: '500',
  //   color: '#000'
  // },
  // header: {
  //   // marginBottom: '10%',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   marginTop: '5%',
  //   marginLeft: '8%',
  //   marginRight: '8%'
  // },
  // headerContent: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   // marginTop: '10%',
  //   marginLeft: '8%',
  //   marginRight: '8%'
  // },
  // eventName: {
  //   borderColor: 'black',
  //   paddingHorizontal: 20,
  //   paddingVertical: 20,
  //   borderTopWidth: 1,
  //   borderRightWidth: 1,
  //   borderLeftWidth: 1,
  //   borderBottomWidth: 0.5,
  //   width: width / 2
  // },
  // eventTime: {
  //   borderColor: 'black',
  //   borderTopWidth: 1,
  //   width: width / 3,
  //   paddingHorizontal: 20,
  //   paddingVertical: 20,
  //   borderRightWidth: 1,
  //   borderBottomWidth: 0.5,
  // }
})