import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import Buttons from '@/components/Buttons';
import Header from '@/components/Header';
import { Entypo } from '@expo/vector-icons';
import { Image } from 'expo-image';

import svgFacebook from '../assets/images/facebook_icon.svg'
import svgApple from '../assets/images/apple_icon.svg'
import svgGoogle from '../assets/images/google_icon.svg'
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const eyeHandle=()=>{
    setShowPassword(!isShowPassword)
  }

  const [isShowPassword, setShowPassword]= useState(false)
  const handleLogin=()=>{
    console.log('email:', email, "Password: ", password)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
      <View style={styles.container}>
     
        <Header text='Login'/>
        <Text style={{alignSelf:'flex-start', fontSize:20, marginTop:20, fontWeight:'bold'}}>Welcome </Text>  
      <Text style={{alignSelf:'flex-start',marginTop:20, marginBottom:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fuga.</Text>
      

      <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          autoCapitalize="none" 
          autoComplete="email"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.password_con}> 
       
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={isShowPassword?false:true}  
      />
      
      <Entypo name={isShowPassword?"eye-with-line":"eye"} size={18} color={"black"} style={styles.password_eye} onPress={eyeHandle}/>
      </View>
      <Text style={{alignSelf:'flex-end', marginBottom:10, marginTop:10, fontWeight:'bold', color:'orange'}}>Forgot Password</Text>
      <Buttons label='Login' onPress={handleLogin}/>
      <Text style={{marginTop:30, marginBottom:30}}>Or Sign Up With</Text>
      <View style={styles.footerICons}>
           <Image source={svgFacebook} style={{ width: 50, 
  height:50,
  backgroundColor: 'white',
  borderRadius: 25, 
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowRadius: 3.5,
 
  justifyContent: 'center',
  alignItems: 'center',
  }} />
           <Image source={svgApple} style={{ width: 50, 
  height:50,
  backgroundColor: 'white',
  borderRadius: 25, 
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowRadius: 3.5,
 
  justifyContent: 'center',
  alignItems: 'center',
  }} />
           <Image source={svgGoogle} style={{ width: 50, 
  height:50,
  backgroundColor: 'white',
  borderRadius: 25, 
 
 
  justifyContent: 'center',
  alignItems: 'center',
  }} />
        </View>

<View style={styles.footerTextContainer}>
  <Text>Don't have an account? <Text style={{fontWeight:'bold', color:'orange'}}>Sign Up</Text></Text>
  </View>

      <Link href={'/forgotpassword'}>Forgot Password</Link>
      </View>
    </GestureHandlerRootView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',  
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  password_eye:{
    position:'absolute',
    right:10,
    top:20
    
  },
  password_con:{
position:'relative',
width:'100%'
  },
  footerICons:{
    
    flexDirection:'row',
    justifyContent:'center'
  },
  footerTextContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    height:'auto'
  }
});
