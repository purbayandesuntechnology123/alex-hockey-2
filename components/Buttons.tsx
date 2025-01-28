import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const Buttons = ({label, onPress}:{label:string, onPress:()=>void}) => {
  return (
    
     <TouchableOpacity style={styles.button} onPress={onPress}> <Text style={styles.buttontext}>{ label}</Text>  </TouchableOpacity>

  )
}

export default Buttons

const styles = StyleSheet.create({
   container:{flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',},
   
    button:{
        backgroundColor:'orange',
        width:'100%',
        paddingVertical: 15, 
        paddingHorizontal: 15,
        borderRadius:25, 
        
       
      
      },
      buttontext:{
        textAlign:'center',
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    
      },


})