import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const EventTable = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.eventName}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.eventTime}>
          <Text style={styles.map}>{props.map}</Text>
        </View>
      </View>
    </View>
  )
}

export default EventTable
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    //   marginLeft: '10%',
    justifyContent: 'center'
  },
  eventName: {
    justifyContent: 'center',
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 0.5,
    width: width / 3
  },
  eventTime: {
    borderColor: 'black',
    borderTopWidth: 1,
    width: width / 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRightWidth: 1,
    borderBottomWidth: 0.5,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#003975'
  },
  map: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black'
  }
})