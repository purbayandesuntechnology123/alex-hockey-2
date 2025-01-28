import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Image } from 'expo-image'
import otpSvg from "../assets/images/otp_icon.svg"
import Buttons from '@/components/Buttons'
import { Link } from 'expo-router'

const otpverification = () => {
    const inputs = useRef<TextInput[]>([]);
    const [otp, setOtp] = useState<string[]>(['', '', '', ''])
    const handleChange = (text: string, index: number) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = text; 
        setOtp(updatedOtp);

        if (text.length === 1 && index < inputs.current.length - 1) {
          inputs.current[index + 1]?.focus(); 
        }
        if (text === '' && index > 0) {
          inputs.current[index - 1]?.focus();
        }
      };

      const handleCheckOtp = () => {
        console.log('Entered OTP:', otp.join('')); 
      };
  return (
    <View style={styles.mainContainer}>
      <Text style={{color:'orange', fontWeight:'bold', fontSize:20, marginBottom:20}}>OTP Verification</Text>
      <Image source={otpSvg} style={{ width:150, 
  height:150,
  shadowColor: 'black',
  // shadowOpacity: 0.3,
  // shadowRadius: 3.5,
  justifyContent: 'center',
  alignItems: 'center',
  }}/>
 
    <Text style={{fontSize:15,marginTop:20}}>We will send you a one time password on this</Text>
    <Text style={{fontSize:20}}>Mail Id</Text>

    <View style={styles.inputContainer}>
      {[...Array(4)].map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          textAlign="center"
          ref={(el) => (inputs.current[index] = el!)} // Assign ref for each input
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}
    </View>

    <Text style={{color:"gray", fontWeight:'bold', marginTop:20}}>00:00</Text>

  <Text style={{ marginTop:20, marginBottom:20}}>Dont Send You OTP? <Text style={{color:"orange", fontWeight:'bold'}}>Send OTP</Text></Text>
  <Buttons label='Continue' onPress={handleCheckOtp}/>
  <Link href={'/splash'}>Splash</Link>
    </View>
  )
}

export default otpverification

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        width: '80%',
        alignSelf: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: 50,
        height: 50,
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
      },
})