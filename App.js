/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';
import HomeScreen from './screens/HomeScreen';
import ForumsScreen from './screens/ForumsScreen';











const Drawer = createDrawerNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="home"
        drawerContent={props => (
          <CustomDrawer initIdRoute={'inbox_'} {...props} />
        )}>
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="forums" component={ForumsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
