
import { Entypo } from '@expo/vector-icons';

import ExpoImage from 'expo-image/build/ExpoImage';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity } from 'react-native';
import svgFacebook from '../assets/images/facebook_icon.svg'
import svgApple from '../assets/images/apple_icon.svg'
import svgGoogle from '../assets/images/google_icon.svg'

import { Image } from 'expo-image';
import Header from '@/components/Header';
import Checkbox from 'expo-checkbox';
import { Link } from 'expo-router';


const index = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
   const [password, setPassword] = useState('');
  const [isShowPassword, setShowPassword]= useState(false)
  const [isSelected, setIsSelected] = useState(false);


  const handleSubmit = () => {
    // Handle the form submission logic
    console.log('Form submitted with:', { fullName, email, contactNumber, password, isSelected });
  };

  const eyeHandle=()=>{
    setShowPassword(!isShowPassword)
  }

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };
  return (
   
      
    <View style={styles.container}>
          <Header text='Registration'/>
      
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your contact number"
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
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

    <View style={styles.checkbox_container}>
        <Checkbox value={isSelected} onValueChange={handleCheckboxChange}> </Checkbox>
        <Text >
            I Agree <Text style={styles.checkbox_inside_text}>With Terms and Conditions</Text>
        </Text>
    </View>
<TouchableOpacity onPress={handleSubmit} style={styles.button}><Text style={styles.buttontext}>Sign Up</Text> </TouchableOpacity>
     <View>
        <Text style= { styles.registration_footer}>Or Sign In With</Text>
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

        <Text style={{color:'black'}}>Already have an account? <Text style={{color:'orange', fontWeight:'bold'}}>Sign In</Text></Text>
     </View>
     <Link href={"/login"}>About</Link>
    </View>
  
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight:'bold',
    alignSelf: 'flex-start',  
  },

  button:{
    backgroundColor:'orange',
    width:'100%',
    paddingVertical: 15, 
    borderRadius:25,
   
  
  },
  buttontext:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    fontWeight:'bold'

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

  checkbox_container:{
 flexDirection:'row',
 alignSelf:'flex-start',
 alignItems:'center',
 gap:10,
 marginTop:20,
 marginBottom:20
  },
  checkbox_inside_text:{
    color:'orange'
  },
  registration_footer:{
    marginTop:20,
    textAlign:'center'
  },
  footerICons:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center'
  }

  
  
});


