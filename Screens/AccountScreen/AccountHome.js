import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {SIZES, COLORS, FONTS} from '../../Constants';

export default function AccountHome() {
  return (
    <View>
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
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
              Ba
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="      search in Basket"
            placeholderTextColor="gray"
            style={{
              backgroundColor: '#FFf',
              width: '60%',
              height: 40,
              borderRadius: 10,
              color: 'black',
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FF8137',
              width: 40,
              height: 40,
              borderRadius: 20,
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
        <View style={{flexDirection: 'row', marginHorizontal: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#112D42',
              marginTop: 20,
              width: 90,
              height: 90,
              borderRadius: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: '#FFF',
              bottom: 20,
            }}>
            <Text style={{color: 'white'}}>Profile</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, justifyContent: 'center', bottom: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontWeight: '500',
                ...FONTS.h1,
              }}>
              Daniel Obi
            </Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
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
          bottom: 50,
          borderRadius: 10,
        }}></View>
    </View>
  );
}
