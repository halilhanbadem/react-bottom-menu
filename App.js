import React from 'react'; 
import { NavigationContainer, useIsFocused, useNavigation } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { View, Text} from 'react-native';
import BottomMenu from "./components/BottomMenu";
import { navigationRef, isReadyRef  } from "./rootNavigation";

const NavigatorPages = createStackNavigator();

function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);


  return(
     <NavigationContainer 
       ref={navigationRef}
       onReady={() => {isReadyRef.current = true;}}
      >

       <NavigatorPages.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
         <NavigatorPages.Screen name = "Home" component = {Home}/>
         <NavigatorPages.Screen name = "Profile" component = {Profile}/>
         <NavigatorPages.Screen name = "Settings" component = {Settings}/>
       </NavigatorPages.Navigator>
 
        <View style={{justifyContent: "center", alignItems: "center"}}>
         <BottomMenu
          iconOne = {"add-circle"}
          iconTwo = {"search-outline"}
          iconThree = {"earth-outline"}
          iconFour = {"chatbubbles-outline"}
          iconFive = {"person-outline"}
        />
        </View>
 
     </NavigationContainer>
  )
 }
 
 
export default App;

