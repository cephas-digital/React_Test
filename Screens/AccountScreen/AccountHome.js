import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {SIZES, COLORS, FONTS, icons, images} from '../../Constants';

export default function AccountHome() {
  const [Account, setAccount] = useState([
    {
      id: '0',
      name: 'Notifications',
      icon: 'Bell',
      // onPress: () => navigation.navigate(''),
    },
    {
      id: '1',
      name: 'Edit Profile',
      icon: 'editprofile',
    },
    {
      id: '2',
      name: 'Wishlist',
      icon: 'wishlist',
    },
    {
      id: '3',
      name: 'Order history',
      icon: 'orderhistory',
    },
    {
      id: '4',
      name: 'Track Order',
      icon: 'Tracking',
    },
    {
      id: '5',
      name: 'Payment options',
      icon: 'paymentOpt',
    },
    {
      id: '6',
      name: 'Settings',
      icon: 'settings',
    },
    {
      id: '7',
      name: 'Logout',
      icon: 'logout',
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
          <TouchableOpacity style={{}}>
            <Image source={icons.Logo1} style={{width: 45, height: 45}} />
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
          <TouchableOpacity style={{}}>
            <Image source={icons.menu} style={{width: 25, height: 25}} />
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
          height: '72%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          bottom: SIZES.radius * 5,
          borderRadius: 10,
        }}>
        <View style={{marginTop: SIZES.base * 4}}>
          <FlatList
            data={Account}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{marginTop: SIZES.base * 3}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                  }}>
                  <Image
                    source={icons[item.icon]}
                    style={{width: 25, height: 25}}
                  />

                  <Text
                    style={{
                      ...FONTS.body3,
                      color: 'black',
                      fontWeight: '700',
                      marginHorizontal: SIZES.radius * 4,
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
