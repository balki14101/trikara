// library imports
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// icons
import Icon from 'react-native-vector-icons/AntDesign';

// styles
import colors from '../../../colors';
import styles from '../../../styles';

/**
 * @function CategoryCard
 * @param {object} props
 * @returns {JSX}
 * @description It returns a single card in All categories
 */
const CategoryCard = props => {
  const {icon, bgColor, title} = props;

  return (
    <TouchableOpacity
      onPress={() => alert(`You clicked ${title} card`)}
      style={[
        styles.popularCategoryCard,
        styles.shadow,
        {backgroundColor: bgColor},
      ]}>
      <Icon name={icon} size={80} color={colors.primary} />
      <Text style={styles.cardName}>{title}</Text>
    </TouchableOpacity>
  );
};

// exports
export default CategoryCard;
