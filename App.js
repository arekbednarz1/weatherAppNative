import React from 'react';
import {
StyleSheet,
Text,
KeyboardAvoidingView,
Platform,
TextInput,
View
} from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>Krakow</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Pada deszcz</Text>
        <Text style={[styles.largeText, styles.textStyle]}>5</Text>
        <TextInput autoCorrect={false} placeholder="Wpisz nazwe miasta" placeholderTextColor="white" style={styles.textInput} clearButtonMode="always"/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    red: {
      color: 'blue',
    },
    textStyle: {
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
    textInput: {
      backgroundColor: '#666',
      color: 'white',
      height: 40,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal:10,
      alignSelf: 'center',
    },
  });
  

  // textStyle: {
  //   textAlign: 'center',
  //   ...Platform.select({
  //   ios: {
  //   fontFamily: 'AvenirNext-Regular',
  //   },
  //   android: {
  //   fontFamily: 'Roboto',
  //   },
  //   }),
  //   },