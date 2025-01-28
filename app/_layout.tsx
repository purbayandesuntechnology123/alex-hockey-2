import { Stack } from "expo-router";



export default function RootLayout() {
  return   <Stack

  screenOptions={{
    headerStyle: {
     
    },
    headerTitleStyle: {
      fontWeight: "bold",
     
    },
  }}>
  <Stack.Screen name='index' options={{title:'Registration', headerShown:false }} />
  <Stack.Screen name="login" options={{title:'Log In'  }} />
  <Stack.Screen name="forgotpassword"  options={{ title:'Forgot Password' }} />

</Stack>
}
