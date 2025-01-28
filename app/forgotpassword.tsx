import {  StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import Buttons from '@/components/Buttons';
import Header from '@/components/Header';
import forgotSvg from '../assets/images/forgot_icon.svg'
import { Link } from 'expo-router';
//import SvgComponent from '@/components/ForgotPasswordSvg'

const forgotpassword = () => {
  const handleClick=()=>{
    console.log('email: ', email)
  }
  const [email, setEmail]=useState('')
  return (
    <View style={styles.container}>
      <View style={{marginBottom:30}}> 
    
     <Header text="Forget Password"/>
     </View>
     <Image source={forgotSvg} style={{ width: '100%', 
  height:150,
  shadowColor: 'black',
  
  // shadowOpacity: 0.3,
  // shadowRadius: 3.5,
  
 
 
  }}/>
     <Text style={styles.label}>Email</Text>
      <TextInput 
        
        onChangeText={setEmail}
        
        style={styles.input}
        placeholder="Enter your email"
        value={email}
   
        keyboardType="email-address"
        autoCapitalize="none" 
        autoComplete="email"
      />
      
      <View style={{marginTop:20}}></View>
      <Buttons label='Continue' onPress={handleClick}/>

      <Link href={"/otpverification"}>otpverification</Link>
    </View>
  )
}

export default forgotpassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input:{
    width:"100%",
    borderWidth:1,
    padding:10,
    borderColor:'#ccc',
    marginVertical:10,
    borderRadius:5

  },
  label:{
    alignSelf:'flex-start',
    fontSize:20,
    fontWeight:'bold'
  }
  // svgStyle:{
  //    width: 50, 
  //     height:50,
  //     backgroundColor: 'white',
  //     borderRadius: 25, 
  //     shadowColor: 'black',
  //     shadowOpacity: 0.3,
  //     shadowRadius: 3.5,
     
  //     justifyContent: 'center',
  //     alignItems: 'center'}
  
})