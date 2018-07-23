import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const scoreCircleSize = 300;

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const quizStyles = StyleSheet.create({
  oval: {
    width: width * 90/100,
    borderRadius: 20,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "gray"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export const playQuizStyles = StyleSheet.create({
  score: {
    color: "gray",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize/2,
    backgroundColor: "black"
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  toolbar:{
    backgroundColor:'#A7312F',
    width:500,
    paddingTop:30,
    paddingBottom:60,
    flexDirection:'row'
  },
  toolbarButton:{
    width: 200,
    marginBottom:10,
    color:'#fff',
    textAlign:'center'
  },
  toolbarTitle:{
    color:'#fff',
    fontSize:25,
    paddingTop:40,


    textAlign:'center',
    fontWeight:'bold',
    flex:1
  }
});