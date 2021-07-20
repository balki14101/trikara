import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabItem from './TabItem';

export class BottomTabBar extends Component {
  render() {
    const {items} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 64,
          backgroundColor: '#fff',
          marginHorizontal: -16,
          justifyContent: 'space-evenly',
        }}>
        {items.map((item, index) => {
          return <TabItem data={item} />;
        })}
      </View>
    );
  }
}

export default BottomTabBar;
