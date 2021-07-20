import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import colors from '../../../colors'
import { Width } from '../../../Dimensions'
import strings from '../../../strings'

export class WorkerFinder extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#F5C048',padding:10}}>
                <Text style={{fontSize:20,color:colors.text_primary,fontWeight:'bold'}}>{strings.WORKERFINDER_1}</Text>
                <Text style={{fontSize:10,color:colors.text_secondary}}>{strings.WORKERFINDER_2}</Text>
                <Button
                    onPress={()=>{}}
                    title="Click Here"
                    color="#841584"
/>
            </View>
        )
    }
}

export default WorkerFinder
