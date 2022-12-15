import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const ShowProgramScreen = ({ navigation }) => {

  const route = useRoute()

  const progs = route.params.progs

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFEDD5" }}>
      <View style={styles.container}>
      <Text style={styles.title}>{progs.title}</Text>
      <Text style={styles.text}>{progs.exercise1}   {progs.set1}</Text>
      <Text style={styles.text}>{progs.exercise2}   {progs.set2}</Text>
      <Text style={styles.text}>{progs.exercise3}   {progs.set3}</Text>
      <Text style={styles.text}>{progs.exercise4}   {progs.set4}</Text>
      <Text style={styles.text}>{progs.exercise5}   {progs.set5}</Text>
      <Text style={styles.text}>{progs.exercise6}   {progs.set6}</Text>
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
    marginVertical: 20
  },
  text: {
    fontSize: 25,
    marginLeft: 10
  },
});

export default ShowProgramScreen