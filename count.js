// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#F9E79F',
//       }}>
//       <View>
//         <Text style={{textAlign: 'center', fontSize: 40}}>Count = {count}</Text>
//       </View>
//       <View style={styles.button}>
//         <Button
//           color="#f194ff"
//           onPress={() => {
//             setCount(count + 1);
//           }}
//           title="Increment"
//         />
//         <Button
//           color="#239B56"
//           onPress={() => {
//             if (count > 0) {
//               setCount(count - 1 );
//             }
//           }}
//           title="Decrement"
//         />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   button: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // width: 50,
//     marginLeft: 10,
//     margin: 40,
//     paddingLeft: 10,
//   },
// });
// export default Counter;
