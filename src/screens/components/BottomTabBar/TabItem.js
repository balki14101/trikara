import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../colors';

export default function TabItem(props) {
  const {title, icon, isSelected} = props.data;
  const bgColor = isSelected ? '#89CEE8' : '#ffffff';
  const iconSize = isSelected ? 48 : 28;
  return (
    <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: bgColor,
          borderRadius: 32,
        }}>
        <Icon name={icon} size={iconSize} color="#115067" />
      </View>
      <Text style={{textAlign: 'center', color: '#808080'}}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
