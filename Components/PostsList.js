import React, {useState} from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
function PostsList() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + route.params)
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
              navigation.navigate('Comments', user.id);
            }}>
            <Text>{user.body}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
export default PostsList;
