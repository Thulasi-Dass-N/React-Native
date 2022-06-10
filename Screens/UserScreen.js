// import React, {useState} from 'react';
// import {View, Text, Button, Pressable} from 'react-native';

// function UserData() {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(response => response.json())
//       .then(resp => {
//         setData(resp);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <View>
//       <Button
//         title="Get Data"
//         onPress={() => {
//           getData();
//         }}
//       />
//       {/* <Text>{JSON.stringify(data)}</Text> */}
//       {data.map(user => (
//         <>
//           <Pressable onPress={alert}>
//             <Text> {user.name}</Text>
//           </Pressable>
//           {/* <Text>{user.name}</Text> */}
//         </>
//       ))}
//     </View>
//   );
// }
// export default UserData;
import React from 'react'
import {View, Text} from 'react-native';
const UserScreen = () => {
  return (
    <View>
      <Text>Hai</Text>
    </View>
  );
};
export default UserScreen;