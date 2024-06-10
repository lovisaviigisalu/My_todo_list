import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DoneScreen from './src/screens/DoneScreen';
import { Image } from 'react-native';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Todo"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../My_todo_list/src/assets/home.png')}
              style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'gray' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Done"
        component={DoneScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../My_todo_list/src/assets/checkmark.png')}
              style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'gray' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      
    </NavigationContainer>
  );
};

export default App;
