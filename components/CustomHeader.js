import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = (prop) => {
    const navigation = useNavigation()
    const myIcon = (<Feather name="more-vertical" size={24} color="#000" />)
    const addPro = () => {
        console.log("first")
        navigation.navigate('addnew')
    }
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Feather name={prop.name} size={prop.size} color={prop.color} onPress={prop.headerNavigation} />
                </View>
                <View style={styles.nameView}>
                    <Text {...prop} style={styles.name}>{prop.headerName}</Text>
                </View>
                <View style={styles.iconFilter}>
                    <AntDesign name={prop.filterName} size={prop.filterSize} color={prop.filterColor} onPress={prop.filterNavigation} />
                </View>
            </View>
        </View>
    )
}

export default CustomHeader

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
    header: {
        width: width / 1,
        backgroundColor: '#fff',
        height: height / 15,
        elevation: 5,
        flexDirection: 'row'
    },
    icon: {
        margin: '3%',
        width: '6%',
        alignSelf: 'center'
    },
    nameView: {
        // margin: '3%',
        width: '40%',
        alignSelf: 'center'
    },
    name: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        fontWeight: '600'
    },
    iconFilter: {
        marginLeft: '20%',
        marginTop: '3%'
    },
    iconMenu: {
        margin: '3%'
    }
})