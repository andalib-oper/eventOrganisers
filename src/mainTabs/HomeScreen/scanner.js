import {
  SafeAreaView,
  Modal,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QRCodeScanner from 'react-native-qrcode-scanner';
import EventTable from '../../../components/EventTable';
import { approveTicket, disapproveTicket } from '../../../redux/events/actions';

const Scanner = () => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState("Useless Text");
  const [scan, setScan] = useState(true)
  const [ScanResult, setScanResult] = useState({})
  const [result, setResult] = useState(
    {
      ticket:
      {
        type: "gold",
        guest:
        {
          name: "Imtiyaz",
          email: "kjdfs",
          phone: "283",
          age: 23
        },
        id: "62f37b3fcf8a3f1c2485f34d",
        event:
        {
          location: {
            city: {
              name: "kolkata",
              state: {
                name: "west bengal",
                country: {
                  name: "india"
                }
              }
            },
            address: "abcd/2/3"
          },
          cancellation:
          {
            status: "LIVE",
            initiateCancellationReason: null,
            confirmCancellationReason: null
          },
          _id: "62e76e1782718e39b895a3f2",
          name: "test event",
          date: "2025-12-12",
          organiser:
          {
            _id: "62d2908a52f35824aaf4b727",
            name: "brad"
          },
          venue: "62e76e1782718e39b895a3ec",
          description: "description",
          time: "12:12",
          poster: "16593341673902022-06-22-15:37:49-screenshot.png",
          createdAt: "2022-08-01T06:09:27.473Z",
          updatedAt: "2022-08-10T10:26:21.006Z",
          v: 0,
          above18: true
        },
        number: "A-1",
        section: "62e76e1782718e39b895a3ed",
        price: 999,
        phone: "123",
        _v: 0,
        createdAt: "2022-08-10T09:32:47.726Z",
        updatedAt: "2022-08-10T10:34:07.049Z",
        isApproved: false,
        disapproveReason: "nothing"
      }
    }
  )
  // console.log("clg", result)
  const onSuccess = (e) => {
    const check = e.data;
    console.log('scanned data' + check);
    const obj = JSON.parse(check)
    console.log("obj", obj)
    setResult(obj)
    setScan(false)
    setScanResult(true)
  }

  const activeQR = () => {
    console.log("50")
    setScan(true)
    console.log("52")
  }
  const scanAgain = () => {
    setScan(true)
    setScanResult(false)
  }
  const onSubmit = () => {
    if (result.ticket.isApproved) {
      return
    }
    dispatch(approveTicket(result?.ticket?.id, result?.ticket?.event?._id, Alert))
  }
  const onReject = () => {
    // console.log("auth at scanner", authState.accessToken)
    dispatch(disapproveTicket(result?.ticket?.id, result?.ticket?.event?._id, text, Alert))
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{
          justifyContent: 'center',
          // backgroundColor: 'yellow',
          marginTop: '5%',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#000'
          }}>Please Click On the button To Scan The QR Code</Text>
          {!scan && !ScanResult &&
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: '20%',
                // margin: '20%',
                backgroundColor: '#003975',
                height: height / 13,
                width: width / 3,
                padding: 5,
              }}
              onPress={() => activeQR()}>
              <Text style={{
                alignSelf: 'center',
                // padding: 2,
                fontSize: 14,
                color: 'white',
                textAlign: 'center'
              }}>Click to Scan !</Text>
            </TouchableOpacity>
          }
        </View>
        {ScanResult &&
          <View>
            <View>
              <View style={{
                margin: '5%',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 20,
                  color: '#003975',
                  fontWeight: '600'
                }}>Ticket Details</Text>
              </View>
              <EventTable
                name="Ticket Number"
                map={result?.ticket?.number}
              />
              <EventTable
                name="Ticket Price"
                map={result?.ticket?.price}
              />
              <EventTable
                name="Ticket Type"
                map={result?.ticket?.type}
              />
              <EventTable
                name="Event Name"
                map={result?.ticket?.event?.name}
              />
              <EventTable
                name="Event Date"
                map={result?.ticket?.event?.date}
              />
              <EventTable
                name="Event Location"
                map={result?.ticket?.event?.location?.address + " " +
                  result?.ticket?.event?.location?.city?.name + " " +
                  result?.ticket?.event?.location?.city?.state?.name + " " +
                  result?.ticket?.event?.location?.city?.state?.country?.name}
              />
              <EventTable
                name="Event Time"
                map={result?.ticket?.event?.time}
              />
              <EventTable
                name="User Email"
                map={result?.ticket?.guest?.email}
              />
              <EventTable
                name="Name"
                map={result?.ticket?.guest?.name}
              />
              <EventTable
                name="User Phone"
                map={result?.ticket?.guest?.phone}
              />
              <EventTable
                name="Age"
                map={result?.ticket?.guest?.age}
              />
              <View style={{
                flexDirection: 'row'
              }}>
                <TouchableOpacity style={{
                  width: '40%',
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  // margin: 10,
                  marginLeft: '10%',
                  marginTop: '10%',
                  // width: 'auto',
                  height: 'auto',
                  // height: height / 19,
                  borderRadius: 10,
                  backgroundColor: 'green'
                }} onPress={() => onSubmit()}>
                  <Text style={{
                    textAlign: 'center',
                    padding: 10,
                    color: '#fff'
                  }}>{result.ticket.isApproved ? "Ticket already Approved" : "Approve"}</Text>

                </TouchableOpacity>
                <View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Reason</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                      />
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        // onPress={() => setModalVisible(!modalVisible)}
                        onPress={()=>onReject(setModalVisible(!modalVisible))}
                      >
                        <Text style={styles.textStyle}>Reject</Text>
                      </Pressable>
                    </View>
                  </Modal>
                </View>
                <TouchableOpacity style={{
                  width: '30%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginLeft: '10%',
                  marginTop: '10%',
                  // marginBottom: '15%',
                  borderRadius: 10,
                  backgroundColor: 'red',
                  height: 'auto'
                  // width: 'auto',
                  // height: height / 19
                }} onPress={() => setModalVisible(true)}>
                  <Text style={{
                    textAlign: 'center',
                    padding: 10,
                    color: '#fff'
                  }}>Reject</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => scanAgain()}>
                <View style={{
                  width: '50%',
                  alignSelf: 'center',
                  // marginLeft: '30%',
                  marginTop: '5%',
                  marginBottom: '10%',
                  borderRadius: 10,
                  backgroundColor: '#003975',
                  height: height / 19
                }}>
                  <Text style={{
                    textAlign: 'center',
                    padding: 10,
                    color: '#fff'
                  }}>Scan Again</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        }
        {!scan &&
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            onRead={(e) => onSuccess(e)}
          />
        }
      </ScrollView>
    </View>
  )
}

export default Scanner

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    marginBottom: '6%',
    fontSize: 16,
    color: '#003975'
  },
  Button: {
    borderRadius: 10,
    width: width / 2.5,
    height: height / 16,
    backgroundColor: '#003975'
  },
  input: {
    height: height/10,
    width: width/1.5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    padding: 8,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '600'
  },
  modalView: {
    marginTop: '20%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 15,
    textAlign: "center"
  }
})