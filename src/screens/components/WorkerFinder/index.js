import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import strings from '../../../strings';
import styles from '../../../styles';

export class WorkerFinder extends Component {
  render() {
    return (
      <View style={styles.workerFinderView}>
        <Text style={styles.WORKERFINDER_1Text}>{strings.WORKERFINDER_1}</Text>
        <Text style={styles.WORKERFINDER_2Text}>{strings.WORKERFINDER_2}</Text>
        <TouchableOpacity onPress={() => {}} style={styles.clickHereButton}>
          <Text style={styles.WORKERFINDER_3Text}>
            {strings.WORKERFINDER_3}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WorkerFinder;
