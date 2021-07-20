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

class Home extends React.Component {
  state = {
    tabItems: [
      {title: 'Search', icon: 'magnify', isSelected: true},
      {
        title: 'AayCard',
        icon: 'card-account-details-outline',
        isSelected: false,
      },
      {title: 'Bookings', icon: 'briefcase-minus-outline', isSelected: false},
      {title: 'AayTrack', icon: 'trackpad', isSelected: false},
      {title: 'Account', icon: 'account-circle-outline', isSelected: false},
    ],
  };

  handleOnPress = selectedTabTitle => {
    let tabItems = [...this.state.tabItems];
    tabItems.map(i => (i.isSelected = false));
    tabItems.map(i => {
      if (i.title === selectedTabTitle) {
        i.isSelected = true;
      }
    });
    this.setState({tabItems});
  };
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
        <BottomTabBar
          items={this.state.tabItems}
          onPress={this.handleOnPress}
        />
      </View>
    );
  }
}
export default Home;
