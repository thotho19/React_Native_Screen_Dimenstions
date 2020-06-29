import React, { Component } from 'react';
import { TextInput , ScrollView ,Text , View } from 'react-native';
import {Dimensions} from 'react-native'

const screenWidth= Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class App extends Component{
  render(){
    return(
      <View>
        <View style={{ height: screenHeight,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Text>Welcome to the Hello World Application</Text>
        <Text>Screen Width: {screenWidth}</Text>
        <Text>Screen Height: {screenHeight}</Text>
        </View>
       </View>
    )
  }
};

export default App