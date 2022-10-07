import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../../redux/events/actions'
import HomTobTab from './HomTobTab'

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

  // console.log(formatDate())
  return (
    <View style={styles.container}>
      <HomTobTab/>
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