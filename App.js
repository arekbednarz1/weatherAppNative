import React from 'react';
import {StyleSheet,Text,KeyboardAvoidingView,Platform,TextInput,View, ImageBackground,} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.setState ={
      location: 'Krakow',
    };
  }
  

    handleUpdateLocation = city =>{
      this.setState({
        location: city,
      });
    };

    render(){
      const {location} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground source={getImageForWeather('Clear')} style={styles.imageContainer} imageStyle={styles.image} >
        <View style={styles.detailContainer}>
        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Pada deszcz</Text>
        <Text style={[styles.largeText, styles.textStyle]}>5</Text>
        <SearchInput placeholder="Wpisz nazwe miasta" onSubmit={this.handleUpdateLocation}
        />
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    detailContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
    },
    textStyle: {
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color: 'white',
    }
  });
  
