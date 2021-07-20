import React from 'react';
import {Text, View, Image} from 'react-native';
import MapIcon from 'react-native-vector-icons/FontAwesome';
import NotifyIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../../colors';
import strings from '../../../strings';
import styles from '../../../styles';
import url from '../../../Url';
class Header extends React.Component {
  render() {
    return (
      <View style={{marginTop: 8}}>
        <View style={styles.row}>
          <View style={{flex: 1.4}}>
            <Image style={styles.logo} source={{uri: url}} />
          </View>
          <View style={[styles.row, styles.shadow, styles.addressView]}>
            <View>
              <MapIcon
                name="map-marker"
                size={20}
                color={colors.primary_variant}
              />
            </View>
            <View>
              <Text style={styles.address1}>{strings.ADDRESS_1}</Text>
              <Text style={styles.address2}>{strings.ADDRESS_2}</Text>
            </View>
          </View>
          <View style={[styles.shadow, styles.notificationView]}>
            <NotifyIcon
              name="notifications-outline"
              size={30}
              color={colors.primary}
            />
          </View>
        </View>
        <View>
          <Text style={styles.welcomeText}>{strings.WELCOME}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
