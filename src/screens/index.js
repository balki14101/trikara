import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './components/Header';
import styles from '../styles';
import Search from './components/Search';
import PopularCategories from './components/PopularCategories'
import WorkerFinder from './components/WorkerFinder'

const categories = [{title: "plumber", icon: "paint-brush", bgColor: "#54C5F7"},
                    {title: "Mechanic", icon: "paint-brush", bgColor: "#FF6B6B"},
                    {title: "Painter", icon: "paint-brush", bgColor: "#1CD1A1"},
                    {title: "Construction", icon: "paint-brush", bgColor: "#5ED1C9"},
                    {title: "Carpenter", icon: "paint-brush", bgColor: "#9BC9F7"},
                    {title: "Electrician", icon: "paint-brush", bgColor: "#FC9483"}
                ]
 

class Home extends React.Component{
    render(){
        return(
            <SafeAreaView style={[styles.flex1, styles.container]}>
                <Header/>
                <Search/>
                <PopularCategories items={categories}/>
                <WorkerFinder/>
            </SafeAreaView>
        );
    }
}
export default Home;


{/* <View style={{flex:1,backgroundColor:'#f6f6f6'}}>
         <Image
          style={{height:50,width:50}}
          source={{uri:'https://i.ibb.co/0j9KJ0Y/logo.jpg'}}
        />

      <Text style={{color:'#000'}}> {'Welcome Vineeth'}</Text>

      </View> */}