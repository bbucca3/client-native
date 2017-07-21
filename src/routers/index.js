import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen.js';
import SignIn from '../components/SignIn.js';
import Settings from '../components/settings/Settings.js';
import CreatePost from '../components/CreatePost.js';
import PostView from '../components/PostView.js';

const SettingsStack = StackNavigator({
  Settings: { screen: Settings }
})

const Drawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  SignIn: {
    screen: SignIn,
  },
  SettingsStack: {
    screen: Settings,
  },
  CreatePost: {
    screen: CreatePost,
  },
});


export { Drawer };
