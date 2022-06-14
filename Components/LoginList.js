import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Separator = () => <View style={styles.separator} />;
const LoginList = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: -90,
           marginBottom: 100,
          margin: 45,
        }}>
        <Image
          source={require('../Pics/Logo.png')}
          resizeMode="center"
          style={{width: 100, height: 100, backgroundColor: '#C4C3BD'}}
        />
      </View>
      <View>
        <Text style={styles.Text}>User Name</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.Text}>Password</Text>
        <TextInput style={styles.input}></TextInput>
        {/* <Separator /> */}
        <Text style={{textAlign: 'center'}}>Forget Password</Text>
      </View>
      <Separator />
      <View style={{ flexDirection:'row',justifyContent: 'center'}}>
        <Button
          title="login"
          color="#EFD467"
          style={styles.Button}
          onPress={() => navigation.navigate('Users')}></Button>
      </View>
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
  Button:{
    borderWidth: 20,
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  separator: {
    marginVertical: 30,
  },
});
export default LoginList;
