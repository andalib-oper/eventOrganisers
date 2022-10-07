import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text>Message</Text>
      </View>
    </View>
  )
}

export default Message

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: '5%',
    marginBottom: '5%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    // height: 'auto',
    height: height/7,
    width: width / 1.1,
    justifyContent: 'center'
},
})