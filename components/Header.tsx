import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type HeaderProps={
    text:string
}

const Header = ({text}:HeaderProps) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})