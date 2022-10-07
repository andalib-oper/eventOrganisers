import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import TextInput, { Input } from '../../components/TextInputMailPhone';
import AntDesign from 'react-native-vector-icons/AntDesign'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { emailRegex } from '../../constants/phoneRegex';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage, hideMessage } from 'react-native-flash-message';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  updateFields,
  blurFields,
  stateCleanup,
} from '../../redux/Login/action';
import { logUserIn } from '../../redux/auth/action';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true)
  const loginFormState = useSelector((state) => state.loginFormState);
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authState);
  useEffect(() => {
    console.log("token", authState)
    dispatch(stateCleanup());
  }, [dispatch]);
  // console.log("mail", loginFormState)
  const onSubmitHandler = () => {
      dispatch(logUserIn(loginFormState.inputValues));
  };

  const blurListener = (fieldId) => {
    dispatch(blurFields(fieldId));
  };

  const checkValidity = (val, fieldId) => {
    let isValid = true;
    if (fieldId === 'email' && !emailRegex.test(String(val).toLowerCase())) {
      isValid = false;
    }

    if (fieldId === 'password') {
      isValid = false;
    }
    dispatch(updateFields(val, fieldId, isValid));
  };
  return (
    <View style={styles.container}>
      <View>
        <OrientationLoadingOverlay
          visible={authState.loading}
          color="white"
          indicatorSize="large"
          messageFontSize={24} />
      </View>
      <View style={{
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
      }}>
      <Text style={{
        color: '#003975',
        fontSize: 30
      }}>
        Event Organizers
      </Text>
      </View>
      <View style={{
        alignSelf: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          // marginTop: '5%',
          // marginLeft: 30,
          fontSize: 14
        }}>
          Please enter data to login
        </Text>
      </View>
      <View style={styles.mail}>
        <Text style={{
          textAlign: 'left',
          fontSize: 14,
          marginLeft: 20,
          color: '#000'
        }}>
          Email/Phone
        </Text>
        <View style={{
          // backgroundColor: 'pink',
          width: '90%'
        }}>
          <Input
            placeholderTextColor="#000"
            value={loginFormState.inputValues.email}
            inputIsValid={loginFormState.inputValidity.email}
            inputIsTouched={loginFormState.isTouched.email}
            style={styles.input}
            error="Invalid Email"
            errorStyle={styles.error}
            onChangeText={(val) => checkValidity(val, 'email')}
            onBlur={() => {
                blurListener('email');
            }}
            placeholder="Enter your email address/ phone number"
          />
        </View>
      </View>
      <View style={styles.phone}>
        <Text style={{
          textAlign: 'left',
          fontSize: 14,
          marginLeft: 20,
          color: '#000'
        }}>
          Password
        </Text>
        <View style={{
          // backgroundColor: 'grey',
          flexDirection: 'row'
        }}>
          <View style={{
            // backgroundColor: 'yellow',
            width: '90%'
          }}>
            <Input
              placeholder="Enter Your Password"
              placeholderTextColor="#000"
              theme={{ colors: { primary: "#fff" } }}
              error="Invalid password"
              style={styles.input}
              secureTextEntry={passwordVisible}
            value={loginFormState.inputValues.password}
            inputIsValid={loginFormState.inputValidity.password}
            inputIsTouched={loginFormState.isTouched.password}
            onChangeText={(val) => checkValidity(val, 'password')}
            onBlur={() => {
                blurListener('password');
            }}
            />
          </View>
          <View style={{
            // backgroundColor: 'orange',
            width: '8%'
          }}>
            <AntDesign
              name={passwordVisible ? "eye" : "eyeo"}
              onPress={() => setPasswordVisible(!passwordVisible)}
              color='black'
              style={styles.icon1}
              size={30}
            />
          </View>
        </View>
        <View style={{
          // backgroundColor: 'blue',
          marginTop: '20%',
          alignItems: 'center'
        }}>
          <TouchableOpacity
            onPress={() => onSubmitHandler()}
            style={{
              marginTop: 10,
              marginBottom: 5,
              width: '80%',
              padding: 10,
              justifyContent: 'center',
              alignItems: "center",
              alignSelf: 'center',
              backgroundColor: '#003975',
              borderRadius: 10,
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  mail: {
    // backgroundColor: 'grey',
    marginTop: '10%',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  phone: {
    // backgroundColor: 'grey',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    padding: 10,
  },
  icon1: {
    alignContent: 'center',
    marginTop: '60%'
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: 'center',
    // backgroundColor: '#4CA6A8',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  error: {
    color: 'red',

  }
})