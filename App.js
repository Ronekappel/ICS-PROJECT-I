import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { firebase } from './config';

import Login from './src/Login';
import Registration from './src/Registration';
import Dasboard from './src/Dasboard';
import Header from './components/Header';

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTitle: () => <Header name="Carpool" />,
                headerStyle: {
                  height: 150,
                  borderBottomLeftRadius: 50,
                  backgroundColor: '#00e4d0',
                  shadowColor: '#000',
                  elevation: 25,
                },
              }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{
                headerTitle: () => <Header name="Carpool" />,
                headerStyle: {
                  height: 150,
                  borderBottomLeftRadius: 50,
                  backgroundColor: '#00e4d0',
                  shadowColor: '#000',
                  elevation: 25,
                },
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Dasboard"
            component={Dasboard}
            options={{
              headerTitle: () => <Header name="Dasboard" />,
              headerStyle: {
                height: 150,
                borderBottomLeftRadius: 50,
                backgroundColor: '#00e4d0',
                shadowColor: '#000',
                elevation: 25,
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
