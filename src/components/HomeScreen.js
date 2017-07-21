import React from 'react';
import { Text, View, ScrollView, Button, FlatList, TouchableOpacity, StatusBar, StyleSheet, Switch } from 'react-native';
import { StackNavigator } from 'react-navigation';

import PostPreview from './PostPreview.js';

import data from '../../scratchpad.js';
var posts = data.subredditPosts;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snooze: false
    }
    this.hitSnooze = this.hitSnooze.bind(this);
  }

  hitSnooze() {
    this.setState({snooze: !this.state.snooze});
    // this function needs to update the database
  }
  // subreddit axios calls

  render() {
    return (
      <ScrollView >
        <View style={styles.navBar}>
          <Button style={styles.drawer} title="Drawer" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
          <Switch style={styles.snoozeButton} onValueChange={this.hitSnooze} value={this.state.snooze}/>
        </View>
        <FlatList
          data={posts}
          renderItem={({item}) => {
            return (
            <TouchableOpacity>
              <PostPreview key={item.id} text={item.text} title={item.title} upvotes={item.upvotes} />
            </TouchableOpacity>
            )}
          }
        />
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  navBar: {
    height: 80,
    paddingTop: 15,
    // paddingHorizontal: 10,
    borderColor: '#AAAAAA',
    borderBottomWidth: 1,
    backgroundColor: '#F5FCFF',
  },
  snoozeButton: {
  },
  drawer: {
  }
});
