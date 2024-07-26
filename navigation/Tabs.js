import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, BlurView, StyleSheet } from 'react-native';
import Home from '../Screens/Home';
import Content from '../Screens/Content';
import Setting from '../Screens/Setting';
import AddNote from '../Screens/AddNote';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: 'white',
      height: 100,
      width: '90%',
      borderRadius: 20,
      alignSelf: 'center',
      bottom: 20,
      elevation: 0,
    //   shadowColor: 'black', // Set custom border color
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    tabBarItemStyle: {
      backgroundColor: 'white',
      margin: 5,
      borderRadius: 10,
    },

  };
  
  

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Content" component={Content} 
         options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                <Image
                  source={require('../assets/add.png')}
                  resizeMode="contain"
                  style={{
                    width: 45,
                    height: 45,
                    tintColor: focused ? 'black' : 'gray',
                  }}
                />
                <Text>Add</Text>
              </View>
            ),
          }}
      />
      <Tab.Screen name="Setting" component={Setting} 
         options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                <Image
                  source={require('../assets/moon.png')}
                  resizeMode="contain"
                  style={{
                    width: 45,
                    height: 45,
                    tintColor: focused ? 'black' : 'gray',
                  }}
                />
                <Text>Dark</Text>
              </View>
            ),
          }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
