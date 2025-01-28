import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";


const splash = () => {
  return (
    <LinearGradient colors={["white", "#FEA64B"]} style={styles.container}>
      <Image
        source={require("../assets/images/fyre-logo.png")}
        style={{
          width: 200,
          height: 100,
        }}
      />
      <Image  source={require("../assets/images/hockey.png")} style={{
          width: 400,
          height: '100%',
          position:"absolute",
          bottom:0
        }}/>
    </LinearGradient>
  );
};

export default splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: "center",
    alignItems: "center",
    
  },
});
