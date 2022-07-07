import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Welcome from '../Welcome/Welcome';
import Register from '../Register/Register';
import ArticleList from '../Article/ArticleList';
import {useAppSelector} from '../../app/hooks';
import ArticleDetails from '../Article/ArticleDetails';

export type NavigationMenuStackParamList = {
  Welcome: undefined;
  Register: undefined;
  ArticleList: undefined;
  ArticleDetails: undefined;
};
const Stack = createStackNavigator<NavigationMenuStackParamList>();
const myOptions: StackNavigationOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0f5fa3',
    height: Platform.OS === 'ios' ? 60 : 50,
  },
  headerTitleAlign: 'center',

  headerTitleStyle: {
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '100',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-sarif',
  },
};

const NavigationMenu = () => {
  const {registerItem} = useAppSelector(state => state.auth);
  var isLoggedIn = registerItem?.user?.token ? registerItem?.user?.token : '';

  useEffect(() => {}, [registerItem]);

  return (
    <>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Welcome">
          {isLoggedIn ? (
            <>
              <Stack.Screen
                name="ArticleList"
                component={ArticleList}
                options={{...myOptions, headerShown: true}}
              />
              <Stack.Screen
                name="ArticleDetails"
                component={ArticleDetails}
                options={{...myOptions, headerShown: true}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{...myOptions, headerShown: false}}
              />

              <Stack.Screen
                name="Register"
                component={Register}
                options={{...myOptions, headerShown: true}}
              />
            </>
          )}
        </Stack.Navigator>
      </View>
    </>
  );
};

export default NavigationMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  innerScreenHead: {
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
});
