import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useRoute } from '@react-navigation/native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const ShowProgramScreen = ({ navigation }) => {

  const route = useRoute()

  const progs = route.params.progs

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFEDD5" }}>
      <View style={styles.container}>
      <Text style={styles.title}>{progs.title}</Text>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{progs.exercise1}</Text>
      <Text style={styles.text2}>Sarjat: {progs.set1}</Text>
      <TextInput style={styles.text2}>Painot/toistot: </TextInput>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{progs.exercise2}</Text>
      <Text style={styles.text2}>Sarjat: {progs.set2}</Text>
      <TextInput style={styles.text2}>Painot/toistot: </TextInput>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{progs.exercise3}</Text>
      <Text style={styles.text2}>Sarjat: {progs.set3}</Text>
      <TextInput style={styles.text2}>Painot/toistot: </TextInput>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{progs.exercise4}</Text>
      <Text style={styles.text2}>Sarjat: {progs.set4}</Text>
      <TextInput style={styles.text2}>Painot/toistot: </TextInput>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{progs.exercise5}</Text>
      <Text style={styles.text2}>Sarjat: {progs.set5}</Text>
      <TextInput style={styles.text2}>Painot/toistot: </TextInput>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{progs.exercise6}</Text>
      <Text style={styles.text2}>Sarjat: {progs.set6}</Text>
      <TextInput style={styles.text2}>Painot/toistot: </TextInput>
      </View>
      <View style={styles.button}>
      <Button title='Tallenna treeni' color="#22C55E" onPress={() => navigation.navigate('Ohjelmat')}/>
      </View>
    </View> 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
  },
  title:{
    fontSize: 50,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "600"
  },
  textContainer: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 6,
    backgroundColor: "#FCD34D"
  },
  text: {
    fontSize: 26,
    fontWeight: "600"
    
  },
  text2: {
    fontSize: 18,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 100,
  },
});

export default ShowProgramScreen