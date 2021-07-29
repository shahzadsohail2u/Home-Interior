import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Bicost = () => {
    return (
        <View style ={{width: '100%', flex:1, justifyContent: 'center', backgroundColor: 'green'}}>  
            <View style ={{width: '80%', backgroundColor: 'red', alignItems: 'center', borderBottomWidth: 3, borderColor: 'white'}}>
                <Text style ={{fontSize: 28,  color: 'white'}}>Basement Interior Cost </Text>
            
            </View>
            <View style = {{width: '60%', backgroundColor: 'yellow'}}>
                <Text>
                National average  {"\n"}
                $25,000 - $55,000 
                (finishing a 600 sq.ft. basement with a bathroom)

                </Text>
            </View>           
        </View>
    )
}

export default Bicost

const styles = StyleSheet.create({})
