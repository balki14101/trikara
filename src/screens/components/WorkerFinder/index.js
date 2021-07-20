import React, {Component} from 'react';
import {TouchableOpacity, Text, View, TouchableOpacityBase} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../../colors';
import {Height, Width} from '../../../Dimensions';
import strings from '../../../strings';

export class WorkerFinder extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#F5C048',
          padding: 10,
          borderRadius: 8,
          height: Height / 6,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: colors.text_primary,
            fontWeight: 'bold',
          }}>
          {strings.WORKERFINDER_1}
        </Text>
        <Text style={{fontSize: 10, color: colors.text_secondary}}>
          {strings.WORKERFINDER_2}
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderWidth: 1,
            borderColor: '#416861',
            borderRadius: 4,
            backgroundColor: '#F5C048',
            alignItems: 'center',
            justifyContent: 'center',
            width: Width / 5,
          }}>
          <Text style={{color: '#416861', fontSize: 10, fontWeight: 'bold'}}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WorkerFinder;
