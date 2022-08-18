import { StyleSheet, SafeAreaView } from 'react-native'
import Login from './screens/Login.jsx'
//import Header from './screens/Header.jsx'
import PhotoList from './screens/PhotoList.jsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={() => {
        return {
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        }
      }}>
        <Tab.Screen
          name="Login"
          component={Login}
          option={() => {
            return {
              tabBarIcon: () => (
                <Icon name="sc-telegram" type="evilicon" color='#517fa4' size="20" />
              ),
            }
          }}
        />
        <Tab.Screen
          name="Home"
          component={PhotoList}
          option={() => {
            return { tabBarIcon: () => <Icon name="house" size="20" /> }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
})

/*
import { StyleSheet, SafeAreaView } from 'react-native';

//import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import Login from './screens/Login';
import PhotoList from './screens/PhotoList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component={PhotoList} 
          options = {() => {
            return {tabBarIcon: () => <Icon name='house' size='20' />}
          }} />
        <Tab.Screen 
          name='Login' 
          component={Login} 
          options = {() => {
            return {tabBarIcon: () => <Icon name='sc-telegram' type="evilicon" size='20' /> }
          }} />
      </Tab.Navigator>

    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
*/