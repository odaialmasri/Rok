import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet ,View,Text,ScrollView} from 'react-native'
import { TouchableOpacity,Button } from 'react-native';
import { COLORS } from 'constants/styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';



 const HeaderContainer = styled.View`
 display:flex;
 flex-direction:row;
 background-color:${COLORS.BLACK.DARK_BLACK};
 width:350;
 height:100;
`;
 const HeaderContainer1 = styled.View`
 display:flex;
 flex-direction:row;
 background-color:${COLORS.BLUE.LIGHT_BLUE};
 width:200; 
 `;

 const BackIconContainer = styled.View`
   margin-top: 10;
   margin-left: 10;
`;

class LevelsScreen extends Component {
  render() {
    return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderContainer>
          <Text style={styles.text1}>Levels</Text>
        </HeaderContainer>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('browse')}>
           <Image style={styles.image} source={require('../../../assets/images/Other-python-icon.png')} />
        </TouchableOpacity>
        <HeaderContainer1>
          <Text style={styles.text}>Level (1)</Text>
        </HeaderContainer1>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HtmlCssScreen')}>
         <Image style={styles.image} source={require('../../../assets/images/html.png')} />
        </TouchableOpacity>        
        <HeaderContainer1>
          <Text style={styles.text}>Level (2)</Text>
        </HeaderContainer1>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('JsScreen')}>
           <Image style={styles.image} source={require('../../../assets/images/js.png')} />
        </TouchableOpacity> 
        <HeaderContainer1>
          <Text style={styles.text}>Level (3)</Text>
        </HeaderContainer1>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Playquiz')
          }} 
          title="Test"
          color="black"
          />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    marginTop: 60,
    width: 115,
    height: 115,
  },
  text:{
    fontSize: 24,
    paddingLeft:60,
    color:"white",
  },
  text1:{
    paddingLeft:130,
    fontSize:30,
    paddingTop:35,
    color:"#3DB3E5",


  },


});


export default LevelsScreen; 


