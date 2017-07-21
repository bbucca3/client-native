import React from 'react';
import { StyleSheet, Text, ScrollView, Button, FlatList, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';

import data from '../../../scratchpad.js';

export default class Settings extends React.Component {

  // settings axios calls

  render() {
    return (
      <ScrollView>
        <Text>Settings!!!</Text>
        <FlatList data={['a']} renderItem={item => <AdminSettings />} />
        <FlatList data={['b']} renderItem={item => <UserSettings />} />
      </ScrollView>
    );
  }
}

// <Button
//   title="View User Settings"
//   color="#000000" />
//   <Button
//     title="View Admin Settings"
//     color="#000000" />
