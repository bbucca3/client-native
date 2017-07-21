import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { Drawer } from './routers';

import data from '../scratchpad.js';
var user = data.user;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // user info axios calls

  render() {
    return (
      <Drawer screenProps={
          {
            openDrawer: () => console.log(this),
          }
        }/>
    );
  }
}
