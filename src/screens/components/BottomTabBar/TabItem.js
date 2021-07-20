import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles';
import colors from '../../../colors';

const TabItem = props => {
  const {title, icon, isSelected} = props.data;
  const bgColor = isSelected ? colors.lightblue : colors.white;
  const iconSize = isSelected ? 48 : 28;
  return (
    <TouchableOpacity
      onPress={() => props.onPress(title)}
      style={styles.tabItemView}>
      <View style={[{backgroundColor: bgColor}, styles.borderRadius]}>
        <Icon name={icon} size={iconSize} color={colors.bluevariant2} />
      </View>
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
