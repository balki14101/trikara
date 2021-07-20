import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from './components/Header';
import styles from '../styles';
import Search from './components/Search';
import PopularCategories from './components/PopularCategories';
import WorkerFinder from './components/WorkerFinder';
import ProfileCompleted from './components/ProfileCompleted';
import Support from './components/Support';
import AllCategories from './components/AllCategories';
import BottomTabBar from './components/BottomTabBar';

const categories = [
  {title: 'plumber', icon: 'filter', bgColor: '#54C5F7'},
  {title: 'Mechanic', icon: 'tool', bgColor: '#FF6B6B'},
  {title: 'Painter', icon: 'form', bgColor: '#1CD1A1'},
  {title: 'Construction', icon: 'home', bgColor: '#5ED1C9'},
  {title: 'Carpenter', icon: 'pushpino', bgColor: '#9BC9F7'},
  {title: 'Electrician', icon: 'disconnect', bgColor: '#FC9483'},
];

const allcategories = [
  {title: 'Assembler'},
  {title: 'Attender'},
  {title: 'Audio Worker'},
  {title: 'Bar Tender'},
  {title: 'Carpenter'},
  {title: 'Chemical Worker'},
  {title: 'Clay Worker'},
  {title: 'Cleaner'},
  {title: 'Construction Worker'},
];

const tabItems = [
  {title: 'Search', icon: 'magnify', isSelected: true},
  {title: 'AayCard', icon: 'card-account-details-outline', isSelected: false},
  {title: 'Bookings', icon: 'briefcase-minus-outline', isSelected: false},
  {title: 'AayTrack', icon: 'trackpad', isSelected: false},
  {title: 'Account', icon: 'account-circle-outline', isSelected: false},
];

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Search />
          <PopularCategories items={categories} />
          <WorkerFinder />
          <ProfileCompleted />
          <Support />
          <AllCategories items={allcategories} />
        </ScrollView>

        <BottomTabBar items={tabItems} />
      </View>
    );
  }
}
export default Home;

{
  /* <View style={{flex:1,backgroundColor:'#f6f6f6'}}>
         <Image
          style={{height:50,width:50}}
          source={{uri:'https://i.ibb.co/0j9KJ0Y/logo.jpg'}}
        />

      <Text style={{color:'#000'}}> {'Welcome Vineeth'}</Text>

      </View> */
}
