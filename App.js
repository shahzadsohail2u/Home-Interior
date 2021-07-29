import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import Header from './src/components/Header'
import StatusBar from './src/components/StatusBar'
import ImgCard from './src/components/ImgCard'
import About from './src/components/About'



const App = () => {
  return (


    <View style ={{flex: 1}}>

      <StatusBar />
      <Header headerTitle={'Home Interior'} />
      <ImgCard />
      

    </View>
  )
}




export default App

const styles = StyleSheet.create({})
