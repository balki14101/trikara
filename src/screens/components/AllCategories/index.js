import React, {Component} from 'react';
import {Text, View} from 'react-native';
import colors from '../../../colors';
import {Width} from '../../../Dimensions';
import strings from '../../../strings';
import styles from '../../../styles';
import AllCard from './AllCard';

class AllCategories extends Component {
  render() {
    const {items} = this.props;
    return (
      <View>
        <View
          style={[
            styles.row,
            {
              marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text
            style={{fontSize: 16, color: colors.primary, fontWeight: '800'}}>
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
            }}>
            {'A'}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {flexWrap: 'wrap', justifyContent: 'space-between'},
          ]}>
          {items.map(item => {
            return <AllCard title={item.title} />;
          })}
        </View>
      </View>
    );
  }
}

export default AllCategories;
