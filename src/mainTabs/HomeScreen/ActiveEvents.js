import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../../redux/events/actions'

const ActiveEvents = ({ navigation }) => {
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

    return (
        <View style={styles.container}>
            <ScrollView>
                {eventState?.data?.data && eventState?.data?.data.map((item) => {
                    return (
                        <View>
                            <View style={styles.header}>
                                <TouchableOpacity  onPress={() => navigation.navigate('scanner')}>
                                    <Text style={styles.eventName}>{item.name}</Text>
                                    <Text style={styles.eventTime}>Show Date: <Text style={{ color: "grey" }}> {formatDate(item.date)}</Text></Text>
                                    <Text style={styles.eventTime}>Total Tickets Sold:<Text style={{ color: 'grey' }}> {'\b'}56{'\b'} </Text></Text>
                                </TouchableOpacity>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={styles.updatePrice}>
                                    <Text style={styles.updatePriceText}>Update Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.updatePrice}>
                                    <Text style={styles.updatePriceText}>Download</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ActiveEvents

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