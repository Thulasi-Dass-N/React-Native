import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
TouchableOpacity.defaultProps = {activeOpacity: 0.8};
export const CBtn = ({title, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.screen}>
        <Text onPress={() => navigation.navigate('Users')} style={styles.Text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FFC300',
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
  },
  Text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
