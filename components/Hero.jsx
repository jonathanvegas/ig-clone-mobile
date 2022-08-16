import React from 'react';
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';

function Hero(){
  return(
    <View style={styles.headerBar}>
      <Text style={styles.headerText}>IG CLONE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar:{
    height: 50,
    backgroundColor: 'white',
  },
  headerText:{
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Hero;