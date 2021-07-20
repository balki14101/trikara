import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import strings from '../../../strings';
import {Width, Height} from '../../../Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Support extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            borderRadius: 4,
            backgroundColor: '#0089D0',

            width: Width / 3,
            height: Height / 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 8,
            }}>
            <MaterialIcons name="support-agent" size={24} color="#fff" />

            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
              }}>
              {strings.BUTTON_3}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
