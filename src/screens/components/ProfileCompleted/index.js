import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../colors';
import strings from '../../../strings';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../../styles';

class ProfileCompleted extends Component {
  render() {
    return (
      <View style={styles.profileCompletedView}>
        <Text style={styles.mainText}>{strings.PROFILECOMPLETED_1}</Text>
        <TouchableOpacity style={styles.addDetailsButton}>
          <View style={[styles.row, styles.addDetailsButtonView]}>
            <Feather name="plus" size={16} color={colors.primary} />
            <Text style={styles.addDetailsButtonText}>{strings.BUTTON_2}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileCompleted;
