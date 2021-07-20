import React, {Component} from 'react';
import {Text, View} from 'react-native';
import strings from '../../../strings';
import styles from '../../../styles';
import AllCard from './AllCard';

class AllCategories extends Component {
  render() {
    const {items} = this.props;
    return (
      <View>
        <View style={[styles.row, styles.allCategoryTitleView]}>
          <Text style={styles.allCategoryTitleText}>
            {strings.ALLCATEGORIES}
          </Text>
          <Text style={styles.A_style}>{'A'}</Text>
        </View>
        <View style={[styles.row, styles.categoriesWrap]}>
          {items.map((item, index) => {
            return <AllCard key={index} title={item.title} />;
          })}
        </View>
      </View>
    );
  }
}

export default AllCategories;
