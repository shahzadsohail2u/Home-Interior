
import React from 'react'
import { FlatList,  StyleSheet, View } from 'react-native'
import Card from './Card'

const ImgCardData = [{
    title: 'Home Interior',
    description: 'CONGRATS FOR TAKING ACTION, ENJOY LEARNING NEW SUBJECTS WITH SUBJECT MASTERY ACADEMY',
    button: true,
    width: true,
    height: true,
    descriptionWidth: true,
    descriptionHeight: true,
    customButtonWidth: true,
    customButtonHeight: true,
    innerDimension: false,
    imageName: null,
    fontSize: false,
    // onPress: navigation.navigate('Details'),
    backgroundColor: '#2b2e4a',

},

{
    
    title: 'Basement Interior Cost',
    description: null,    
    width: true,
    descriptionWidth: true, 
    fontSize: true,
    makeCenter: true,
    imageName: require('../assets/images/bedroom.png'),
    
    

},

{
    title: 'Bathroom Interior Cost',
    description: null,    
    width: true,
    descriptionWidth: true, 
    fontSize: true,
    makeCenter: true,
    imageName: require('../assets/images/bathroom.png'),
},

{
    title: 'Bathroom Remodel Plumbing',
    description: null,    
    width: true,
    descriptionWidth: true, 
    fontSize: true,
    makeCenter: true,
    imageName: require('../assets/images/plumbing.png'),
},

{
    title: 'Bedroom Addition Cost',
    description: null,    
    width: true,
    descriptionWidth: true, 
    fontSize: true,
    makeCenter: true,
    imageName: require('../assets/images/bedroomCost.png'),
},

{
    title: 'Bedroom Remodeling Cost',
    description: null,    
    width: true,
    descriptionWidth: true, 
    fontSize: true,
    makeCenter: true,
    imageName: require('../assets/images/bedroomRemodel.png'),
},

{
    title: 'Bathroom Interior Cost',
    description: null,    
    width: true,
    descriptionWidth: true, 
    fontSize: true,
    makeCenter: true,
    imageName: require('../assets/images/bathroom.png'),
},





]

const ImgCard = () => {
    return (

        <View style = {styles.mainCont}>
            <FlatList
            data = {ImgCardData}
            keyExtractor ={(item, index) => index.toString()}
            renderItem = {({item})=> <Card item = {item} />} />
        </View>

        
        // <ScrollView>
        //     <View>
        //         <Card title = {'Home Interior'} 
        //         fontSize description = {'CONGRATS FOR TAKING ACTION, ENJOY LEARNING NEW SUBJECTS WITH SUBJECT MASTERY ACADEMY'}
        //         button
        //         width
        //         height
        //         descriptionWidth
        //         descriptionHeight
        //         customButtonWidth
        //         customButtonHeight
        //         />
        //         <Card title = {'Basement Interior Cost'}
        //         imageName = {require('../assets/images/bedroom.png')}
        //         width
        //         height
        //         innerDimension/>
        //         <Card title = {'Bathroom Interior Cost'}
        //         imageName = {require('../assets/images/bathroom.png')}
        //         width
        //         height
        //         innerDimension/>
        //    </View>
        // </ScrollView>
    )
}

export default ImgCard

const styles = StyleSheet.create({
    mainCont:{
        flex: 1,
        
        
    }
})
