import React, {useState} from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function UserList() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(resp => {
        setData(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <Button
        title="Get Data"
        onPress={() => {
          getData();
        }}
      />
      {data.map(user => (
        <View key={user.id}>
          <Pressable
            onPress={() => {
              navigation.navigate('Posts', user.id);
            }}>
            <Text>{user.name}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};
export default UserList;
