import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../../styles';
class AllCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => alert(`You clicked ${this.props.title} card`)}
        style={[styles.shadow, styles.marginVertical]}>
        <View style={[styles.row, styles.allCategorycardview]}>
          <Text style={styles.allCategorycarTitle}>{this.props.title}</Text>
        </View>
        <View style={styles.bottomCardColorView} />
      </TouchableOpacity>
    );
  }
}

export default AllCard;
