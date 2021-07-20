import React, {Component} from 'react';
import {Text, View} from 'react-native';
import colors from '../../../colors';
import strings from '../../../strings';
import styles from '../../../styles';

class AllCategories extends Component {
  render() {
    return (
      <View
        style={[
          styles.row,
          {
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text style={{fontSize: 16, color: colors.primary}}>
          {strings.ALLCATEGORIES}
        </Text>
        <Text
          style={{
            fontSize: 24,
            backgroundColor: '#115067',
            color: '#fff',
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            marginRight: -8,
          }}>
          {'A'}
        </Text>
      </View>
    );
  }
}

export default AllCategories;
