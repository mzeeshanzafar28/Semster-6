import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './component/home';
import LoginSignupPage from './component/loginform';
import HackerLoginForm from './component/hackerloginform';
import RegistrationComponent from './component/register';
import DropdownMenuDemo from './component/dropdown';
import MyModal from './component/modal';
import MyScrollViewIcon from './component/scrollview';
import GravityCar from './component/gravitycar';
import SoicalIcons from './component/social';
import RegisterDBScreen from './component/registerdb';
import FirebaseDB from './component/firebasedb';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text></Text>
        <>
          {/* <MyComponent /> */}
          {/* <LoginSignupPage /> */}
          <HackerLoginForm />
          {/* <RegistrationComponent /> */}
          {/* <RegisterDBScreen /> */}
          {/* <FirebaseDB /> */}
          {/* <DropdownMenuDemo /> */}
          {/* <MyModal />s */}
          {/* <MyScrollViewIcon /> */}
          {/* <SoicalIcons /> */}
          {/* <GravityCar /> */}



        </>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
