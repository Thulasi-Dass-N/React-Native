import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {CBtn} from '../Button/LoginButton';
const Separator = () => <View style={styles.separator} />;

const LoginList = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.style1}>
      <View style={styles.style2}>
        <Image
          source={require('../Pics/Logo.png')}
          resizeMode="center"
          style={styles.style3}
        />
      </View>
      <View>
        <Text style={styles.Text}>User Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.Text}>Password</Text>
        <TextInput style={styles.input} />
        <Text style={styles.style4}>Forget Password</Text>
      </View>
      <Separator />

      <CBtn title={'Login'} />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#E3E2DD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  Text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
  },
  style1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  style2: {alignItems: 'center', marginTop: -90, marginBottom: 80, margin: 55},
  style3: {width: 100, height: 100, backgroundColor: '#C4C3BD'},
  style4: {textAlign: 'center'},
});
export default LoginList;
