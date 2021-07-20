import React from 'react';
import {Text, View, Image} from 'react-native';
import MapIcon from 'react-native-vector-icons/FontAwesome';
import NotifyIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../../colors';
import strings from '../../../strings';
import styles from '../../../styles';
class Header extends React.Component {
  render() {
    return (
      <View style={{marginTop: 8}}>
        <View style={[styles.row]}>
          <View style={{flex: 1.5}}>
            <Image
              style={{height: 50, width: 50}}
              source={{uri: 'https://i.ibb.co/0j9KJ0Y/logo.jpg'}}
            />
          </View>
          <View
            style={[{backgroundColor: 'lightgreen', flex: 1.5}, styles.row]}>
            <View>
              <MapIcon name="map-marker" size={30} color={colors.primary} />
            </View>
            <View>
              <Text>{strings.ADDRESS_1}</Text>
              <Text>{strings.ADDRESS_2}</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'lightblue', flex: 0.5}}>
            <NotifyIcon
              name="notifications-outline"
              size={30}
              color={colors.primary}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 24,
              fontWeight: 'bold',
              color: colors.primary,
            }}>
            {strings.WELCOME}
          </Text>
        </View>
      </View>
    );
  }
}

export default Header;
