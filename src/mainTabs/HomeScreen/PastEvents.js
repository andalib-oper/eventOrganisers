import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const PastEvents = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('scanner')}>
                    <Text style={styles.eventName}>Stand Up Comedy</Text>
                    <Text style={styles.eventTime}>Show Date: <Text style={{ color: "grey" }}> 2022-7-8</Text></Text>
                    <Text style={styles.eventTime}>Total Tickets Sold:<Text style={{ color: 'grey' }}> {'\b'}56{'\b'} </Text></Text>
                    <Text style={styles.eventTime}>Total Check In:<Text style={{ color: 'grey' }}> {'\b'}56{'\b'} </Text></Text>
                    <Text style={styles.eventTime}>Total Revenue:<Text style={{ color: 'grey' }}> {'\b'}56{'\b'} </Text></Text>
                    <Text style={styles.eventTime}>Comission Amount:<Text style={{ color: 'grey' }}> {'\b'}56{'\b'} </Text></Text>
                    <Text style={styles.eventTime}>Net Amount:<Text style={{ color: 'grey' }}> {'\b'}56{'\b'} </Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PastEvents

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
        marginTop: '5%',
        marginBottom: '5%',
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        height: 'auto',
        width: width / 1.1,
        justifyContent: 'center'
    },
    eventName: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'left',
        color: '#003975',
        marginBottom: 5,
        marginLeft: 10
    },
    eventTime: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        color: '#003975',
        marginLeft: 10,
        marginBottom: 5,
    },
    updatePrice:{
        marginBottom: 5,
        width: 'auto',
        height: 30,
        padding: 5,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: '#003975',
        alignSelf: 'flex-end'
    },
    updatePriceText:{
        fontSize: 14,
        fontWeight: '400',
        color: '#fff'
    },
})