import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch} from '../../app/hooks';
import {RegisterAction} from '../../app/actions/authAction';

type RegisterType = {
  navigation: any;
  route: any;
};

const Register = ({navigation, route}: RegisterType) => {
  const dispatch = useAppDispatch();

  const [inputState, setInputState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<any>({
    usernameErr: '',
    emailErr: '',
    passErr: '',
  });
  const {username, email, password} = inputState;
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);

  const registerPress = () => {
    Keyboard.dismiss();
    if (!username || !email || !password) {
      var atpos = email.indexOf('@');
      var dotpos = email.lastIndexOf('.');

      Alert.alert('', 'Please fill all the fields');
      if (username.trim() === '') {
        setError({
          ...error,
          usernameErr: 'Please enter first name',
          emailErr: '',
          passErr: '',
        });
      } else if (email.trim() === '') {
        setError({
          ...error,
          emailErr: 'Please enter email',
          passErr: '',
          usernameErr: '',
        });
      } else if (atpos < 1 || dotpos - atpos < 2) {
        setError({
          ...error,
          emailErr: 'Please enter valid email',
          passErr: '',
          usernameErr: '',
        });
      } else if (password === '') {
        setError({
          ...error,
          passErr: 'Please enter password',
          usernameErr: '',
          emailErr: '',
        });
      } else {
        setError({
          usernameErr: '',
          emailErr: '',
          passErr: '',
        });
      }
    } else {
      const postData = {
        username: username,
        email: email,
        password: password,
      };

      const postRegister: any = {
        user: postData,
      };
      console.log('postRegister->', postRegister);
      setRegisterLoading(true);
      dispatch(RegisterAction(postRegister))
        .unwrap()
        .then(resp => {
          console.log('regResp->', resp);
          setRegisterLoading(false);
          navigation.navigate('ArticleList');
        })
        .catch(err => {
          console.log('errrr->', err);
          setRegisterLoading(false);
          Alert.alert('', 'Login failed! User already exists');
          navigation.navigate('Register');
        });
    }
  };
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={100}
          enabled
          style={styles.keyContainer}>
          <View style={styles.fieldsContainer}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 5,
                marginBottom: 5,
                color: '#000',
              }}>
              Register Candidate
            </Text>
            <View style={{marginTop: 0}}>
              <Text style={styles.textUpper}>Username</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  autoComplete="name"
                  style={styles.textStylePro}
                  onChangeText={(text: any) => {
                    setInputState({...inputState, username: text});
                  }}
                  value={username}
                  placeholder={'User Name'}
                />
              </View>

              <Text style={styles.errorText}>{error.usernameErr}</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.textUpper}>Email</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  autoComplete="email"
                  style={styles.textStylePro}
                  onChangeText={(text: any) => {
                    setInputState({...inputState, email: text});
                  }}
                  value={email}
                  placeholder={'Email'}
                />
              </View>
              <Text style={styles.errorText}>{error.emailErr}</Text>
            </View>
            <View>
              <Text style={styles.textUpper}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  autoComplete="password"
                  style={styles.textStylePro}
                  onChangeText={(text: any) => {
                    setInputState({...inputState, password: text});
                  }}
                  value={password}
                  secureTextEntry={true}
                  placeholder={'Password'}
                />
              </View>
              <Text style={styles.errorText}>{error.passErr}</Text>
            </View>
            <View style={{marginBottom: 14}}>
              <TouchableOpacity style={styles.sendBtn} onPress={registerPress}>
                <Text style={styles.btnText}>
                  {registerLoading ? (
                    <>
                      <ActivityIndicator size="small" color="#ffffff" /> Signup
                    </>
                  ) : (
                    <>Register</>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#0f5fa3',
  },
  keyContainer: {
    backgroundColor: 'transparent',
  },
  textStylePro: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    paddingTop: 8,
    color: '#000',
    width: '85%',
  },
  heading: {
    textAlign: 'center',
    fontSize: 17,
    color: '#0f3f5a',
  },
  fieldsContainer: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    paddingTop: 10,
    borderRadius: 10,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 100,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 0,
    justifyContent: 'center',
  },

  inputContainer: {
    borderColor: '#000',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  textUpper: {
    textTransform: 'uppercase',
    marginLeft: 14,
    color: '#3a3d3d',
    marginBottom: 10,
  },
  sendBtn: {
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0d283f',
    width: '40%',
    padding: 15,
    marginTop: 8,
    marginLeft: 2,
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 1,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  errorText: {
    color: '#d12b39',
    marginLeft: 14,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '500',
  },
  successText: {
    color: '#09ba36',
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },

  show: {},
  hide: {
    display: 'none',
  },
});
