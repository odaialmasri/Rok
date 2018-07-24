import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet ,View,Text,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { COLORS } from 'constants/styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';


 const HeaderContainer = styled.View`
`;
 const ImageHeader = styled.Image`
  width: 100%;
   height: 150;
   margin-top: 10;
`;
 const BackIconContainer = styled.View`
   margin-top: 10;
   margin-left: 10;
`;

class JsIntro extends Component {
  render() {
    return (
    <View style={StyleSheet.absoluteFill}>

      <ScrollView contentContainerStyle={styles.container}>
        {/*
        <Image style={styles.image} source={require('../../../assets/images/Other-python-icon.png')} />

       
              <HeaderContainer>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <BackIconContainer>
                <Icon name={'arrow-left'} size={30} color={COLORS.WHITE.WHITE} />
              </BackIconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>

            </TouchableOpacity>
          </HeaderContainer>
        */}
              <TouchableOpacity
          onPress={() => this.props.navigation.navigate('browse')}
            
          >
        <Text style={styles.container}>Level(1)</Text>

        <Text style={styles.odai}>Into about Python :-</Text>
        <Text style={styles.textright}>Python is a popular programming language. It was created in 1991 by Guido van Rossum.</Text>

        <Text style={styles.textLeft}>Basic of Python :-</Text>
        <Text style={styles.textright}>Python is a popular programming language. It was created in 1991 by Guido van Rossum.</Text>
        <Text style={styles.textLeft}>Examples:-</Text>
        <Text style={styles.textright}>Python is a popular programming language. It was created in 1991 by Guido van Rossum.</Text>

        <Text style={styles.textLeft}>Basic of Python :-</Text>
        <Text style={styles.textright}>Python is a popular programming language. It was created in 1991 by Guido van Rossum.</Text>

          </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    
      },

  image: {
    marginTop: 60,
    width: 30,
    height: 30,
  },
  text:{
    fontSize: 24,
  },





});


export default JsIntro; 


