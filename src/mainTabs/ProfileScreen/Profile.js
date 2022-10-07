import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PersonalInput from '../../../components/PersonalInfo';

const Profile = () => {
  const onSubmitHandler = () => {
    console.log("first")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={{
            marginTop: '10%',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 16,
            color: '#000',
            marginLeft: 20,
          }}> Name</Text>
          <PersonalInput
            editable={true}
          // value={profileState.firstName}
          />
        </View>
        <View>
          <Text style={{
            marginTop: '3%',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 16,
            color: '#000',
            marginLeft: 20,
          }}>Email</Text>
          <PersonalInput
            editable={true}
          // value={profileState.email}
          />
        </View>
        <View>
          <Text style={{
            marginTop: '3%',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 16,
            color: '#000',
            marginLeft: 20,
          }}>Phone Number</Text>
          <PersonalInput
            editable={true}
          // value={profileState.phoneNo}
          />
        </View>
        <View>
          <Text style={{
            marginTop: '3%',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 16,
            color: '#000',
            marginLeft: 20,
          }}>Company Name</Text>
          <PersonalInput
            editable={true}
          // value={profileState.phoneNo}
          />
        </View>
        <View>
          <Text style={{
            marginTop: '3%',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 16,
            color: '#000',
            marginLeft: 20,
          }}>Password</Text>
          <View>
            <PersonalInput
              placeholder="Enter Your Password"
              placeholderTextColor="#6A6A6A"
              style={[styles.textInput]}
              editable={true}
              theme={{ colors: { primary: "#fff" } }}
              error="Invalid password"
            // value={profileState.inputValues.password}
            // inputIsValid={profileState.inputValidity.password}
            // inputIsTouched={profileState.isTouched.password}
            // onChangeText={(val) => checkValidity(val, 'password')}
            // onBlur={() => {
            //     blurListener('password');
            // }}
            // right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} 
            // onPress={() => setPasswordVisible(!passwordVisible)} />}
            />
          </View>
        </View>
        <View style={{
          // backgroundColor: 'blue',
          marginTop: 20,
          alignItems: 'center'
        }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onSubmitHandler()}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}


export default Profile;

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  icon: {
    marginLeft: 15,
    marginTop: 5,
    width: '30%',
    // backgroundColor: 'pink',
    alignSelf: 'center'
  },
  iconEdit: {
    marginLeft: '25%',
    marginTop: 5,
    width: '10%',
    // backgroundColor: 'pink',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  mainText: {
    marginTop: 5,
    fontSize: 20,
    // backgroundColor: 'grey',
    fontWeight: '600',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ffffff',
  },
  icon1: {
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 30,
    // backgroundColor: 'pink',
    alignSelf: 'center',
  },
  textInput: {
    // fontFamily: 'Montserrat',
    // fontWeight: 'bold',
    // fontSize: 18,
    // color: '#6A6A6A',
    // marginTop: 1,
    // marginLeft: 10,
    // marginRight: 10,
    // width: windowWidth/1.5,
    // height: windowHeight/17,
    // backgroundColor: 'grey',
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white'
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
    backgroundColor: '#003975',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
})