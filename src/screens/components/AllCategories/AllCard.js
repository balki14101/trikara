import React, {Component} from 'react';
import {Text, View} from 'react-native';
import colors from '../../../colors';
import {Width, Height} from '../../../Dimensions';
import styles from '../../../styles';
export class AllCard extends Component {
  render() {
    return (
      <View
        style={[
          styles.shadow,
          {
            marginVertical: 4,
          },
        ]}>
        <View
          style={[
            styles.row,
            {
              backgroundColor: '#fff',
              width: Width / 3.6,
              height: Height / 6.5,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
          ]}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              color: colors.primary,
            }}>
            {this.props.title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#89CEE8',
            height: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}></View>
      </View>
    );
  }
}

export default AllCard;
