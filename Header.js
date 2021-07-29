import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native'



const Header = (props) => {
    return (
        <View style =  {styles.mainHead}>
            <View style = {styles.Header}>            
                 <View style = {styles.headTitel}>
                   <Text style = {styles.title}>{props.headerTitle}</Text> 
                 </View>                
                 <View style = {styles.iconBox}>
                    <View style ={styles.imgCont}>
                        <TouchableOpacity>
                        <Image source = {require('../assets/images/refresh.png')} style ={styles.icon} />
                        </TouchableOpacity>
                    </View>                
                    <View style = {styles.dotCont}>
                        <TouchableOpacity>
                        <Image source = {require('../assets/images/Vertical-dots.png')} style ={styles.dotIcon}/>
                        </TouchableOpacity>
                    </View>
                 </View>                
            </View>
            <View style = {styles.bottomHeader}>
                   <View style ={styles.bottomText}>
                      <Text style= {{backgroundColor: 'white', letterSpacing: 4, fontSize: 12, fontWeight: 'bold', padding: 2,}}>SS ACADEMY</Text>
                   </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainHead:{
        
        flexDirection: 'column',
    },
    
    Header:{
        width: '100%',
        // height: 58,
        
       

        backgroundColor: '#4050b5',               
        flexDirection: 'row',
        
    },

    bottomHeader:{
        width: '100%',
        backgroundColor: '#2b2e4a',
        // height: 45,
        padding: 12,
        
        justifyContent: 'center',
    },

    bottomText:{
          justifyContent: 'center',
          alignItems: 'center',          
          width: '40%',
          padding: 2,
                    
          
    },


      headTitel:{
          justifyContent: 'center',
          alignItems: 'center',          
          width: '50%',
          padding: 14,
          
      },

      iconBox:{
          width: '50%',          
          flexDirection: 'row',
          justifyContent: 'flex-end',
          
      },

      imgCont:{
          width: '35%',              
          alignItems: 'center',
          justifyContent: 'center',
      },

      dotCont:{
          
          width: '25%',
          alignItems: 'center',
          justifyContent: 'center',
      },

      dotIcon:{
          
          height: 25,
          aspectRatio: 1, 
          tintColor: 'white',
          
    },

       icon:{
          width: 20,
          height: 20,
          aspectRatio: 1,   
          tintColor: 'white',
          

    
      },
    

    textHeader:{                        
        color: 'white',
        
    },


    title:{
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 19,      
        letterSpacing: 1,
        
        
    },

    
    

})
