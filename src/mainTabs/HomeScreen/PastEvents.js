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
  const formatDate = (date) => {
    const arr = date.split("-")
    const formatStr = `${arr[2]}-${arr[1]}-${arr[0]}`
    return formatStr
}
  console.log('past events screen', eventState.pastEvents.data);
  return (
    <View style={styles.container}>
      <ScrollView refreshControl={
                <RefreshControl
                refreshing={eventState.loading}
                />
            }>
      <View style={styles.header}>
        {eventState?.pastEvents?.data.map(item => {
          return (
            <TouchableOpacity onPress={() => console.log('object')}>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text style={styles.eventTime}>
                Show Date: <Text style={{color: 'grey'}}>{formatDate(item.date)}</Text>
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
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
    height: 'auto',
    width: width / 1.1,
    // justifyContent: 'center'
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
