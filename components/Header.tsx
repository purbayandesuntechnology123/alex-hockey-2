import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type HeaderProps={
    text:string
}

const Header = ({text}:HeaderProps) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerStyle:{
        color:'orange',
        fontSize:24,
        fontWeight:'bold',
      
    }
})