import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import strings from '../../../strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../styles';
import colors from '../../../colors';

export default class Support extends Component {
  render() {
    return (
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonStyle}>
          <View style={styles.buttonContainer}>
            <MaterialIcons
              name="support-agent"
              size={24}
              color={colors.white}
            />
            <Text style={styles.buttonText}>{strings.BUTTON_3}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
