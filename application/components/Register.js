import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Register extends React.Component {
  x = 1;
  state = {
    email: '',
    password: 'pass',
  }

  onPressFunc = () => {
    return Alert.alert(
      this.state.email +
       ' - '+ 
       this.state.password );
  };
  
  render() {
    
    return (
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 50 }}>Register</Text>
        <TextInput
          placeholder='Email'
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text})}
         />
         {!this.state.email &&
          <View
           style={{ height:5, backgroundColor: 'red'}}>
           </View>
         }
        <TextInput
          placeholder='Password'
          value={this.state.password}
          onChangeText={(t) => this.setState({ password: t})}
        />
        <TouchableOpacity
          style={{
            marginTop: 20,
            height: 50,
            backgroundColor: 'red',
            alignItems: 'center',
          }}
         onPress={this.onPressFunc}>
          <Text style={{ fontSize: 40, color: 'white'}}
          >LOGIN</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
