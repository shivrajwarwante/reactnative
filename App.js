import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import SQLite from 'react-native-sqlite-storage';
import Home from './Home';
import ItemsScreen from './ItemsScreen';
import MenuScreen from './MenuScreen';
import ProfileScreen from './ProfileScreen';
import ReportScreen from './ReportScreen';
import SalesScreen from './SalesScreen';
import SettingsScreen from './SettingsScreen';
import Welcome from './Welcome';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await firestore()
        .collection('testing')
        .doc('krrX1hl7tVj5XtWSZfml')
        .get();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Items" component={ItemsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const initDatabase = async () => {
  try {
    global.db = await SQLite.openDatabase({
      name: 'SQLite',
      location: 'default',
      createFromLocation: '~SQLite.db',
    });

    console.log('Database opened successfully');
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

// const App = () => {
//   useEffect(() => {
//     initDatabase();
//   }, []);

//   // ...
// };

export default App;
