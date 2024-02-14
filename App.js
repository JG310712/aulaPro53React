import React, { Component } from 'react';
import  { Button, View, Text } from 'react-native';

class RedButton extends Component {
  render(){
    return(
    <Button color="red" title="Clique em mim!"/>
    )
  }
}

export default class App extends Component{
  render() {
    return(
      <View style={{marginTop:250}}>
      <Text style={{marginTop:250, marginLeft:125}}>Meu primeiro App</Text>
      <RedButton/>
      </View>
    )
  }
}