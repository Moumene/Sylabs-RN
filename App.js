/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 View,
} from 'react-native';
import Stack from './application/components/Register';
import List from './application/components/List';


export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Stack />
      </View>
    );
  }
}

