// import {View, Text, Image} from 'react-native';
// import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// export default function Introduction({navigation}) {
//   return (
//     <View
//       style={{
//         marginHorizontal: 20,
//         alignItems: 'center',
//         alignSelf: 'center',
//         justifyContent: 'center',
//         marginTop: 80,
//       }}>
//       <Text style={{color: '#5700AB', fontSize: 25, fontWeight: 'bold'}}>
//         Let's work together.
//       </Text>
//       <Text
//         style={{
//           color: '#5700AB',
//           fontSize: 15,
//           fontWeight: '400',
//           marginTop: 10,
//           letterSpacing: 0.5,
//         }}>
//         Achieving great success by using this {'\n'} platform and ease the
//         stress.
//       </Text>
//       <Image
//         style={{
//           width: 300,
//           height: 200,
//           marginTop: 100,
//         }}
//         source={require('../../navigation/assets/introduction.png')}
//       />
//       <TouchableOpacity
//         style={{
//           backgroundColor: '#50227C',
//           height: 50,
//           width: 300,
//           borderRadius: 10,
//           marginTop: 50,
//         }}
//         onPress={() => navigation.navigate('SignUp')}>
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 20,
//             alignSelf: 'center',
//             top: 10,
//             fontWeight: 'bold',
//           }}>
//           Register
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           borderColor: '#50227C',
//           borderWidth: 1,
//           height: 50,
//           width: 300,
//           borderRadius: 10,
//           marginTop: 50,
//         }}
//         onPress={() => navigation.navigate('Login')}>
//         <Text
//           style={{
//             color: '#50227C',
//             fontSize: 20,
//             alignSelf: 'center',
//             top: 10,
//             fontWeight: 'bold',
//           }}>
//           Login in
//         </Text>
//       </TouchableOpacity>
//       {/* </View> */}
//     </View>
//   );
// }

import {View, Text} from 'react-native';
import React from 'react';

export default function Introduction() {
  return (
    <View>
      <Text style={{color: 'red'}}>Introduction</Text>
    </View>
  );
}
