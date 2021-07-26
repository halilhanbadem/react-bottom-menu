import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Dimensions, Text, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { navigate } from "../rootNavigation";

 

function BottomMenu(props) {
  const [iconOne, seticonOne] = useState(false);
  const [iconTwo, seticonTwo] = useState(false);
  const [iconThree, seticonThree] = useState(false);
  const [iconFour, seticonFour] = useState(false);
  const [iconFive, seticonFive] = useState(false);
  
  var Icon1Props = {
    type: 'ionicon',
    color: '#fff',
    size: "30",
    name:  iconOne ? "add-circle" : "add-circle-outline",
    onPress: () => {seticonOne(true), seticonTwo(false), seticonThree(false), seticonFour(false), seticonFive(false), navigate("Home")},
  };

  var Icon2Props = {
    type: 'ionicon',
    color: '#fff',
    size: "30",
    name:  iconTwo ? "search" : "search-outline",
    onPress: () => {seticonOne(false), seticonTwo(true), seticonThree(false), seticonFour(false), seticonFive(false), navigate("Profile")},
  };

  var Icon3Props = {
    type: 'ionicon',
    color: '#fff',
    size: "30",
    name:  iconThree ? "earth" : "earth-outline",
    onPress: () => {seticonOne(false), seticonTwo(false), seticonThree(true), seticonFour(false), seticonFive(false),  navigate("Settings")},
  };

  var Icon4Props = {
    type: 'ionicon',
    color: '#fff',
    size: "30",
    name:  iconFour ? "chatbubbles" : "chatbubbles-outline",
    onPress: () => {seticonOne(false), seticonTwo(false), seticonThree(false), seticonFour(true), seticonFive(false),  navigate("Profile")},
  };
  
  var Icon5Props = {
    type: 'ionicon',
    color: '#fff',
    size: "30",
    name:  iconFive ? "person" : "person-outline",
    onPress: () => {seticonOne(false), seticonTwo(false), seticonThree(false), seticonFour(false), seticonFive(true),  navigate("Home")},
  };  

  





  
  return (      
       <View style={styles.bottomdesign}>
           <Icon
             {...Icon1Props}
             style = {styles.textdesign}
            />

            <Icon
             {...Icon2Props}
             style = {styles.textdesign}
            />

            <Icon
             {...Icon3Props}
             style = {styles.textdesign}
             />    


           <Icon
             {...Icon4Props}
             style = {styles.textdesign}
            />       

          <Icon
             {...Icon5Props}
             style = {styles.textdesign}
            />             

                       
       </View>
    );
  }
 

const ScreenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    bottomdesign: {
        position: "absolute",
        backgroundColor: "#0A1931",
        width: ScreenWidth,
        flexDirection: "row",
        bottom: 0,
        alignItems: "center",
        justifyContent: 'space-around',
        flexWrap: "nowrap",
        height: 50,
    },
});    


export default BottomMenu;