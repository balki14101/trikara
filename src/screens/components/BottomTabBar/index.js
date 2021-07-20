import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../../../styles';
import TabItem from './TabItem';

class BottomTabBar extends Component {
  render() {
    const {items, onPress} = this.props;
    return (
      <View style={styles.bottomTabView}>
        {items.map((item, index) => {
          return <TabItem key={index} data={item} onPress={onPress} />;
        })}
      </View>
    );
  }
}

export default BottomTabBar;
