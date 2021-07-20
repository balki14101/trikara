import React,{Component} from 'react'
import { Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper';

class Search extends Component {
    render(){
        return(   
            
        <View style={{backgroundColor:'#808080'}}>
             <Searchbar
                placeholder="Who do you want to hire"
                onChangeText={()=>{}}
                value={''}
              />
        </View>
    )
    }

    
    
}
export default Search