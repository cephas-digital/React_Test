import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {SIZES, COLORS, FONTS, icons, images} from '../../Constants';

export default function AccountHome() {
  const [Account, setAccount] = useState([
    {
      id: '0',
      name: 'Notifications',
      // icon: 'location',
      // onPress: () => navigation.navigate(''),
    },
    {
      id: '1',
      name: 'Edit Profile',
      // icon: 'contact',
      // onPress: () => navigation.navigate(''),
    },
    {
      id: '2',
      name: 'Wishlist',
      // icon: 'lock',
      // onPress: () => navigation.navigate(''),
    },
  ]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#112D42',
          height: '12%',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: SIZES.base * 2,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF8137',
              width: 40,
              height: 40,
              borderRadius: SIZES.base * 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{color: 'white', fontSize: 20, marginLeft: SIZES.base}}>
              Ba
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="      search in Basket"
            placeholderTextColor="gray"
            style={{
              backgroundColor: '#FFf',
              width: '60%',
              height: SIZES.base * 4.1,
              borderRadius: SIZES.base * 1.5,
              color: 'black',
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FF8137',
              width: 40,
              height: 40,
              borderRadius: SIZES.base * 5,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, marginLeft: 8}}>
              Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FF8137',
          width: '100%',
          height: '25%',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', marginHorizontal: SIZES.radius}}>
          <TouchableOpacity
            style={{
              marginTop: SIZES.base * 2,
              height: 90,
              borderRadius: 45,
              alignItems: 'center',
              bottom: SIZES.base * 2.2,
            }}>
            <Image source={icons.profile} />
          </TouchableOpacity>
          <View style={{marginLeft: 20, justifyContent: 'center', bottom: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontWeight: '500',
                ...FONTS.body1,
              }}>
              Daniel Obi
            </Text>
            <Text
              style={{color: 'black', fontSize: SIZES.h3, fontWeight: '500'}}>
              danielobi@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: '90%',
          height: '68%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          bottom: SIZES.radius * 5,
          borderRadius: 10,
        }}>
        <View style={{}}>
          <FlatList
            data={Account}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{}}>
                <TouchableOpacity style={{}}>
                  {/* <Image
                  source={icons[item.icon]}
                  style={{width: 25, height: 25}}
                /> */}

                  <Text
                    style={{
                      ...FONTS.h4,
                      color: 'red',
                      fontWeight: '800',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
