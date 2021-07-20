import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Width, Height} from '../../../Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CategoryCard = props => {
  const {icon, bgColor, title} = props;

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Icon name={icon} size={80} color={colors.primary} />
      <Text style={{color: colors.text_secondary, fontSize: 16}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 4,
    marginVertical: 4,
    width: Width / 3.6,
    height: Height / 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default CategoryCard;
