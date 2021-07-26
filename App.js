/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View,StyleSheet,Text,SafeAreaView,Platform, StatusBar} from 'react-native';




function App()  {
 
  return (

    <>
    <SafeAreaView style={{flex:1}}>

      <View style={{padding:16, backgroundColor:'green'}}>
        <Text>Search</Text>
      </View>
      <View style={{flex: 1, padding:16, backgroundColor:'blue'}}>
        <Text>List </Text>
      </View>


    </SafeAreaView>
    <StatusBar style='auto'/>

    </>
  
  );
};


const styles = StyleSheet.create({

});

export default App;
