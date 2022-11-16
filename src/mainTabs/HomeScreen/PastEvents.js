import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPastEvents} from '../../../redux/events/actions';

const PastEvents = ({navigation}) => {
  const eventState = useSelector(state => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPastEvents());
  }, [dispatch]);
  const formatDate = date => {
    const arr = date.split('-');
    const formatStr = `${arr[2]}-${arr[1]}-${arr[0]}`;
    return formatStr;
  };
  // console.log('past events', eventState.pastEvents.data);
  // console.log('past events screen', eventState.pastEvents.data); refreshControl={
  //     <RefreshControl
  //     refreshing={eventState.loading}
  //     />
  // }
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={eventState.loading} />}>
        {eventState.pastEvents.data &&
          eventState.pastEvents.data.map(item => {
            return (
              <View style={styles.header}>
                <View>
                  <Text style={styles.eventName}>{item.name}</Text>
                  <Text style={styles.eventTime}>
                    Show Date:{' '}
                    <Text style={{color: 'grey'}}>{formatDate(item.date)}</Text>
                  </Text>
                  {/* <View style={styles.ticketDetailsView}> */}
                <Text style={styles.eventTime}>Total Tickets Sold: {'\b'}
                <Text style={{color: 'grey'}}>120</Text>
                </Text>
                <Text style={styles.eventTime}>Total Check In: {'\b'}
                <Text style={{color: 'grey'}}>90</Text>
                </Text>
                <Text style={styles.eventTime}>Total Revenue: {'\b'}
                <Text style={{color: 'grey'}}>4500</Text>
                </Text>
                <Text style={styles.eventTime}>Commission amount: {'\b'}
                <Text style={{color: 'grey'}}>1000</Text>
                </Text>
                <Text style={styles.eventTime}>Net Amount: {'\b'}
                <Text style={{color: 'grey'}}>4000</Text>
                </Text>
              {/* </View> */}
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default PastEvents;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    marginTop: '5%',
    marginBottom: '5%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    height: 'auto',
    width: width / 1.1,
    justifyContent: 'center',
  },
  eventName: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    color: '#003975',
    marginBottom: 5,
    marginLeft: 10,
  },
  eventTime: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    color: '#003975',
    // width: '100%',
    // backgroundColor: 'pink',
    marginLeft: 10,
    marginBottom: 5,
  },
  updatePrice: {
    marginBottom: 5,
    width: 'auto',
    height: 30,
    padding: 5,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#003975',
    alignSelf: 'flex-end',
  },
  updatePriceText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
});
