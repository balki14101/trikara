import React,{Component} from 'react'
import { Text, View } from 'react-native'
import colors from '../../../colors'
import styles from '../../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Width,Height} from '../../../Dimensions'
import CategoryCard from '../CategoryCard'



class PopularCategories extends Component {


    render(){
        const {items} = this.props;
        return (
            <View style={{marginVertical:16}}>
                <Text style={{fontSize:16,color:colors.primary,fontWeight:'bold'}}>{'Popular Categories'}</Text>
                <View style={[styles.row,{flexWrap:'wrap',marginTop:10}]}>
                    {items.map((item, index) => {
                        const {icon, bgColor, title} = item;
                        return <CategoryCard icon={icon} title={title} bgColor={bgColor} />
                    })}
                

                </View>



            </View>
        )
    }
}
export default PopularCategories