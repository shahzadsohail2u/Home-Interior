
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const Card = (props) => {

    const styles = StyleSheet.create({
        dimension:{
           
            width: '100%',
            padding: 10,            
            backgroundColor: props.item.backgroundColor, 
            alignItems: 'center',
            justifyContent: 'center',
            
    
    
        },
    
        innerDimension:{
            
            width: '84%',
                    
            
            
            justifyContent:  'center',
            
            
        },
    
        Title:{
            width: props.item.width? '100%': '0%',
            paddingTop:props.item.makeCenter? 80: 50,
            paddingBottom:  15,
            
            borderBottomWidth: 2,
            borderBottomColor: 'white',
            
            
    
        }, 
    
        textTitle:{
            color: 'white',
            fontSize: props.item.fontSize? 22 : 30,
            fontWeight: 'bold',
            letterSpacing: 2,    
            paddingTop: 20,
            
        },
    
        touchButton:{
            width: '100%',
            paddingTop: 8,
            paddingBottom: 8,
            borderColor: 'white', 
            borderWidth: 2,
            flexDirection: 'row',
            
            
        },
    
        textButton:{
            color: 'white',
            fontSize: 13,
            
        },
    
        TitleStyle:{
            width: '70%',
            
            
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        arrowStyle:{
            width: '30%',        
            
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        imgArrow:{ 
            
            tintColor: 'white',
            width: 35,
            height: 20,
            marginRight: 15,
            resizeMode: 'contain'
            
            
    
        },
    
        textDescription:{
           color: 'white',
           letterSpacing: 2,
           fontSize: 11,
           paddingTop: 25,
           paddingBottom: 17,
    
        },
        
        description: {
            width: props.item.descriptionWidth? '100%': '0%',
                 
            justifyContent: 'center'
        },  
        
            customButton: {
            width: props.item.customButtonWidth? '58%': '0%',
            paddingTop: 7,
            paddingBottom: 80,
            // height: props.item.customButtonHeight? 45: 0,
            
        }, 

        backgroundImage:{
            resizeMode: 'contain',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            

        },
    })
    return (
        <View style ={styles.dimension}>
            {props.item.imageName && <Image source ={props.item.imageName} style = {styles.backgroundImage}/>}
            <View style = {styles.innerDimension}>
                <View style = {styles.Title}>
                    <Text style = {styles.textTitle}>{props.item.title}</Text>
                </View>
                <View style = {styles.description}>
                    
                    <Text style = {styles.textDescription}>
                       {props.item.description}
                    </Text>
                    
                </View>
                <View style = {styles.customButton}>
                   {props.item.button && <TouchableOpacity  onPress = {()=> {props.item.onPress}}>
                        <View style = {styles.touchButton}>

                            <View style = {styles.TitleStyle}>
                                 <Text style ={styles.textButton}>GET STARTED</Text>
                            </View>
                            <View style = {styles.arrowStyle}>
                            <Image source = {require('../assets/images/q.png')} style ={styles.imgArrow}/>
                            </View>
                             
                             
                        </View>
                    </TouchableOpacity>}
                </View>
            </View>
            
        </View>
    )
}

export default Card



