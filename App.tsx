import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from './src/app/hooks';
import {resetInterceptor} from './src/rootApi';
import MyStatusBar from './src/screens/AppHeader/MyStatusBar';
import NavigationMenu from './src/screens/AppMenu/NavigationMenu';

const MainNavMenu = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#0f5fa3',
        }}>
        <MyStatusBar backgroundColor="#0f5fa3" barStyle="light-content" />

        <NavigationContainer>
          <NavigationMenu />
        </NavigationContainer>
      </View>
    </>
  );
};

const App = () => {
  const {registerItem} = useAppSelector(state => state.auth);
  // console.log('registerItem->', registerItem);
  React.useEffect(() => {
    if (registerItem?.user?.token) {
      resetInterceptor(registerItem.user.token);
    }
  }, [registerItem]);
  return (
    <>
      <MainNavMenu />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
