import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../../../components/CustomHeader'

const ReportDetails = () => {
    const navigation = useNavigation()
  return (
    <View>
        <CustomHeader 
        name='arrow-left'
        size={26}
        color='#000'
        headerNavigation={()=>navigation.goBack()}
        headerName='Report Details'
        />
      <Text style={{color: '#000'}} onPress={()=>navigation.goBack()}>ReportDetails</Text>
    </View>
  )
}

export default ReportDetails

const styles = StyleSheet.create({})