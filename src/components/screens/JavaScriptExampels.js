import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet ,View,Text,ScrollView} from 'react-native'
import { TouchableOpacity ,Button} from 'react-native';
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
 const HeaderContainer2 = styled.View`
 display:flex;
 flex-direction:row;
 background-color:${COLORS.BLUE.LIGHT_BLUE};
 width:200;
 
 
 `;

class JavaScriptExampels extends Component {
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
                <Text style={styles.level1}>Level(3)</Text>

              <TouchableOpacity>

        <Text style={styles.odai}>* Java Script Exampels :-</Text>
        <Text style={styles.textleft}>Welcome to Google's Python online tutorial.
         It is based on the introductory Python course offered internally.
          Originally created during the Python 2.4 days, we've tried to keep the content universal and exercises relevant, even for newer releases.
           As mentioned on the setup page, this material covers Python 2. While we recommend "avoiding" Python 3 for now, recognize that it is the future, as all new features are only going there.\
            The good news is that developers learning either version can pick up the other without too much difficulty. 
            If you want to know more about choosing Python 2 vs. 3, check out this post.
We strongly recommend you follow along with the companion videos throughout the course, starting with the first one.
 If you're seeking a companion MOOC course, try the ones from Udacity and Coursera (intro to programming [beginners] or intro to Python), and if you're looking for a companion book to your learning, regardless of your Python skill level, check out these reading lists. 
 Finally, if you're seeking self-paced online learning without watching videos, try the ones listed towards the end of this post — each feature learning content as well as a Python interactive interpreter you can practice with.
  What's this "interpreter" we mention? You'll find out in the next section!</Text>

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
  level1:{

    color:"#3DB3E5",
    paddingTop:25,
    fontSize:25,
    
  },
  odai:{
      paddingLeft:10,

    fontSize:15,
  },
textleft:{
  paddingLeft:10,
  fontSize:10,
  lineHeight:20,
}


});


export default JavaScriptExampels; 


