import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
function PostsList() {
  const [data, setData] = useState([]);
  const route = useRoute();
  console.log(route.params);
  // const getData = () => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${route.params}/comments`)
  //     .then(response => response.json())
  //     .then(resp => {
  //       setData(resp);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${route.params}/comments`)
      .then(response => response.json())
      .then(resp => {
        setData(resp);
      })
      .catch(err => {
        console.log(err);
      });
  },[])
  return (
    <View>
      {/* <Button
        title="Get Data"
        onPress={() => {
          getData();
        }}
      /> */}
      {data.map(user => (
        <View key={user.id}>
          <Text>{user.email}</Text>
        </View>
      ))}
    </View>
  );
}
export default PostsList;
