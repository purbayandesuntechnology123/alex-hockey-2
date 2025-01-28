import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'


const Inputs = () => {
  return (
    <View>
   <TextInput style={tailwind`w-full px-3 py-2`}/>
    </View>
  )
}

export default Inputs

const styles = StyleSheet.create({})