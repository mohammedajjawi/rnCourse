/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Toast, {DURATION} from 'react-native-easy-toast';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  
  TextInput
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state ={
    place :"",
    
    compaination:{}
  };
  
  placeChangedHandler = val =>{
   this.setState({
     username : val
   })
  };
 
  SearchPressHandler = () =>{
    
    if(this.state.username.trim() === "" || this.state.password.trim() ==="")
    {
     this.refs.toast.show("unvalid username or password!",2000)
     return;
    }
    
    alert(this.state.username)

   
   
  }


  render() {
    return (
    
      <View style={styles.inputContainer}>
     <Form>
          <Item style={{width:300}} floatingLabel >
            
            <Input 
                placeholder="An awsome place"
                onChange={this.userNameChangedHandler} 
                value={this.state.username}/>
          </Item>
         </Form>
         
          <Button primary>
          <Text>Add</Text>
          </Button>
            
          
    
       </View>
        
       
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  logo:{
    width: "100%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    
   },
  Label:{
    color:'white'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  inputContainer:{
   
    flexDirection:"row",
    justifyContent:"space-between"

  }
  
});
