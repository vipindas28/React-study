/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.calculation}>
              <Text style={styles.calculationText}></Text>
          </View>
          <View style={styles.result}>
              <Text style={styles.resultText}></Text>
          </View>
          <View style={styles.buttons}>
               <View style={styles.operations}>
                    <Button title="+"/>
                    <Button title="-"/>
                    <Button title="*"/>
                    <Button title="/"/>
                 </View>
               <View style={styles.numbers}>
                    <View style={styles.row}>
                        <Touchableopacity>1</Touchableopacity>
                        <Touchableopacity>2</Touchableopacity>
                        <Touchableopacity>3</Touchableopacity>
                     </View>
                   <View style={styles.row}>
                        <Touchableopacity>4</Touchableopacity>
                        <Touchableopacity>5</Touchableopacity>
                        <Touchableopacity>6</Touchableopacity>
                      </View>
                  <View style={styles.row}>
                        <Touchableopacity>7</Touchableopacity>
                        <Touchableopacity>8</Touchableopacity>
                        <Touchableopacity>9</Touchableopacity>
                  </View>
                  <View style={styles.row}>
                  <Touchableopacity>1</Touchableopacity>
                        <Touchableopacity>2</Touchableopacity>
                        <Touchableopacity>3</Touchableopacity>
                   </View>
                </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  result:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  calculatortext:{
    fontSize:24,
    color:"black"
  },
  resultText:{
    fontSize:18,
    color:"black"
  },
  row:{
    flexDirection:"row",
    flex:1,
    justifyContent:"space-around",
    alignItems:"stretch",
  },
  button:{
    flex:2,
  },
  operations:{
    flexGrow:2,
    justifyContent:"space-around",
    alignItems:"stretch",
    backgroundColor:"black",
  },
  number:{
    flexGrow:3,
  },
});
