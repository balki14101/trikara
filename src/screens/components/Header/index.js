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
        <View style={styles.row}>
          <View style={{flex: 1.4}}>
            <Image
              style={{height: 50, width: 50}}
              source={{uri: 'https://i.ibb.co/0j9KJ0Y/logo.jpg'}}
            />
          </View>
          <View
            style={[
              {
                borderRadius: 8,
                backgroundColor: '#ffffff',
                flex: 1.5,
                padding: 4,
                justifyContent: 'space-around',
                alignItems: 'center',
              },
              styles.row,
              styles.shadow,
            ]}>
            <View>
              <MapIcon
                name="map-marker"
                size={20}
                color={colors.primary_variant}
              />
            </View>
            <View>
              <Text style={{fontSize: 12, color: colors.primary}}>
                {strings.ADDRESS_1}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.primary,
                  fontWeight: 'bold',
                }}>
                {strings.ADDRESS_2}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 50,
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12,
            }}>
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
