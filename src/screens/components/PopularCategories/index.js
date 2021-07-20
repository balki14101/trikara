import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryCard from '../CategoryCard';
import strings from '../../../strings';

class PopularCategories extends Component {
  render() {
    const {items} = this.props;
    return (
      <View style={styles.popularCategoriesView}>
        <Text style={styles.titleTextStyles}>{strings.POPULARCATEGORIES}</Text>
        <View style={[styles.row, styles.categoriesWrap]}>
          {items.map((item, index) => {
            const {icon, bgColor, title} = item;
            return (
              <CategoryCard
                key={index}
                icon={icon}
                title={title}
                bgColor={bgColor}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
export default PopularCategories;
