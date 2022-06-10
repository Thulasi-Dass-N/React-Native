import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Count from './count';
import UsersScreen from './Screens/UserScreen';
import PostsScreen from './Screens/PostsScreen';
import CommentsScreen from './Screens/Comments';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="User" onPress={() => navigation.navigate('Users')}/>
      <Button title="Post" onPress={() => navigation.navigate('Posts')}/>
      <Button title="Comment" onPress={() => navigation.navigate('Comments')}/>

    </View>
  );
}

// function CountScreen({navigation}) {
//   return (
//     <>
//       <Count />
//       <View>
//         <Button title="Go Back" onPress={() => navigation.goBack()} />
//       </View>
//     </>

//     // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     //   <Text>Details Screen</Text>
//     //   <Button
//     //     title="Go to Details... again"
//     //     onPress={() => navigation.push('Details')}
//     //   />
//     //   <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     //   <Button title="Go back" onPress={() => navigation.goBack()} />
//     //   <Button
//     //     title="Go back to first screen in stack"
//     //     onPress={() => navigation.popToTop()}
//     //   />
//     // </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Count" component={CountScreen} /> */}
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
