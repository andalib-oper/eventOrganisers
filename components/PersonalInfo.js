import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import colors from '../constants/Colors'

export const PersonalInput = (props) => {
  return (
    <View>
        <View>
    <TextInput
    {...props}
            style={styles.input}
            error = {!props.inputIsValid && props.inputIsTouched}
            placeholder={props.name}
            editable={props.editable}
            placeholderTextColor={colors.black}
            value={props.value}
        />
        </View>
        {!props.inputIsValid && props.inputIsTouched && (
            <Text>{props.error}</Text>
        ) }
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        fontSize: 16,
    },
})

export default PersonalInput;