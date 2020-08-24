import React, { Component } from 'react';
import { View, Text, Animated, Easing,Image,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { spinAnim: new Animated.Value(0) }
  }
  componentDidMount() {
    Animated.timing(
      this.state.spinAnim,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (

      <View style={{ flex: 1 }}>
        <Animated.View style={{ flex: 1, justifyContent: "center", alignContent: 'center', transform: [{ rotate: spin }] }}>
          <LinearGradient colors={['#005cb2', '#3b5998', '#1e88e5']} style={styles.shadowcard,{ height: "35%", margin: 10, backgroundColor: "red", borderRadius: 12, justifyContent: "space-between", flexDirection: 'column' }}>
            <View style={{ flex: 1, margin: 3 }}>
              <View style={{ flex: 3, justifyContent: "center", margin: 3 }}>
                <Text style={{ fontSize: 24, color: "white" }}>
                  Master card
                </Text>
              </View>

            </View>
            <View style={{ flex: 1 ,marginHorizontal:15,flexDirection:'row',justifyContent:"space-between"}}>
          <Text style={styles.textCode}>5</Text>
          <Text style={styles.textCode}>1</Text>
          <Text style={styles.textCode}>3</Text>
          <Text style={styles.textCode}>7</Text>
          <Text style={styles.textCode}>7</Text>
          <Text style={styles.textCode}>9</Text>
          <Text style={styles.textCode}>4</Text>
          <Text style={styles.textCode}>2</Text>
          <Text style={styles.textCode}>6</Text>
          <Text style={styles.textCode}>9</Text>
            

            </View>
            <View style={{ flex: 1,  margin: 4 ,flexDirection:"row"}}>
              <View style={{flex:3,alignContent:"center",marginLeft:10}}>
                <Text style={{color:"white"}}>12/07</Text>
                <Text style={styles.CustomtextShadow,{color:"white",fontFamily:"bold",fontSize:20
            
              }}>Riadh farhati</Text>
              </View>
              <View style={{flex:1,alignContent:"center"}}>
            <Image
        style={{height:40,width:70}}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png',
        }}
      />
      </View>
            </View>
          </LinearGradient>
        </Animated.View>




      </View>
    );
  }
}

const styles= StyleSheet.create({
  CustomtextShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
  },
  textCode:{
    color:'white',fontSize:25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,

  },
  shadowcard:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
  }

})