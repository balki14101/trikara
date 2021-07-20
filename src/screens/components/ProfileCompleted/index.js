import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../colors';
import strings from '../../../strings';
import {Height, Width} from '../../../Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../../styles';

class ProfileCompleted extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#A0EAFF',
          marginVertical: 10,
          borderRadius: 8,
          padding: 10,
          justifyContent: 'space-between',
          height: Height / 6,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: colors.text_primary,
          }}>
          {strings.PROFILECOMPLETED_1}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: 4,
            backgroundColor: '#A0EAFF',
            alignItems: 'center',
            justifyContent: 'center',
            width: Width / 5,
          }}>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-evenly', alignItems: 'center'},
            ]}>
            <Feather name="plus" size={16} color={colors.primary} />
            <Text style={{fontSize: 10}}>{strings.BUTTON_2}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileCompleted;
