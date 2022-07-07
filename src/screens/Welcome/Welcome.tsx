/* eslint-disable no-extra-boolean-cast */
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../app/hooks';

type WelcomeType = {
  navigation: any;
  route: any;
};

const Welcome = ({navigation, route}: WelcomeType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {registerItem} = useAppSelector(state => state.auth);

  const enterPress = () => {
    if (!!registerItem) {
      if (registerItem && registerItem?.user?.token) {
        const isLoggedIn = registerItem?.user?.token;
        if (isLoggedIn) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('ArticleList');
          }, 1000);
        }
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Register');
        }, 1000);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    if (!!registerItem) {
      if (registerItem && registerItem?.user?.token) {
        const isLoggedIn = registerItem?.user?.token;
        if (isLoggedIn) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('ArticleList');
          }, 1000);
        }
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Register');
        }, 1000);
      }
    }
  }, [registerItem]);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f5fa3',
        flex: 1,
      }}>
      <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}>
        Welcome To Candidate Portal
      </Text>
      {loading ? (
        <>
          <ActivityIndicator
            size="large"
            color="#2091c9"
            animating={loading}
            style={loading ? styles.show : styles.hide}
          />
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={enterPress}
            style={{
              width: '30%',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{color: '#000', fontSize: 20, padding: 8}}>Enter</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  show: {},
  hide: {
    display: 'none',
  },
});
