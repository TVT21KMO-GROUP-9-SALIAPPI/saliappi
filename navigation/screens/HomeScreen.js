import 'react-native-gesture-handler'
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "expo-font"
import { useEffect, useState } from 'react/cjs/react.development';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { arrayRemove } from 'firebase/firestore';

export default function HomeScreen({ navigation }) {

  const [progs, setProgs] = useState([
    {title: "selkä/hauis", exercise1: "kulmasoutu", set1: 2, exercise2: "ylätalja", set2: 3, exercise3: "alatalja", set3: 3, exercise4: "pullover", set4: 4, exercise5: "hauiskääntö tangolla", set5: 3, exercise6: "hauiskääntö käsipainoilla", set6: 2},
    {title: "rinta/ojentaja", exercise1: "penkkipunnerrus", set1: 3, exercise2: "vinopenkkipunnerrus", set2: 2, exercise3: "peckdeck", set3: 4, exercise4: "dippi", set4: 2, exercise5: "ranskalainen punnerrus", set5: 3, exercise6: "pushdown köydellä", set6: 2},
    {title: "jalat", exercise1: "kyykky", set1: 2, exercise2: "jalkaprässi", set2: 3, exercise3: "reiden ojennus", set3: 3, exercise4: "reiden koukistus", set4: 3, exercise5: "askelkyykky", set5: 2, exercise6: "pohkeet", set6: 5},
    
  ]) 

const route = useRoute()

const prog1 = route.params?.prog1

if(prog1 === undefined){
  console.log(prog1)
} else {
  progs.push(prog1)
  
}

  const [loaded] = useFonts({
        Aclonica: require("../../assets/fonts/Aclonica-Regular.ttf")
  })

if (!loaded) {
    return null
}
/*
const programs = (
 <View style={styles.progsContainer}>
    {progs.map((prog, idx) =>
        <Text key={prog.idx} style={styles.progs}>{prog.title}</Text>
    )}
 </View>

*/

let text1 = progs[0].title
let text2 = progs[1].title
let text3 = progs[2].title


    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FFEDD5"}}>
        <Text style={styles.title}>SaliÄppi</Text>
        <Text style={styles.subTitle}>Ohjelmat:</Text>
        <View style={styles.progsContainer}>
        <Text style={styles.progs} onPress={() => navigation.navigate('Näytä ohjelma', {progs: progs[0]})}>{text1}</Text>
        <Text style={styles.progs} onPress={() => navigation.navigate('Näytä ohjelma', {progs: progs[1]})}>{text2}</Text>
        <Text style={styles.progs} onPress={() => navigation.navigate('Näytä ohjelma', {progs: progs[2]})}>{text3}</Text>
        {progs.length > 3 ? (
        <Text style={styles.progs} onPress={() => navigation.navigate('Näytä ohjelma', {progs: progs[3]})}>{progs[3].title}</Text>
        ) : ("")}
        </View>
          <View style={styles.button}>
            <Button title='+ Lisää ohjelma +' color="#22C55E" onPress={() => navigation.navigate('Lisää ohjelma')}/>
          </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  title: {
    color: "#1E40AF",
    textShadowRadius: 6,
    textShadowColor: "black",
    fontSize: 72,
    fontFamily: "Aclonica",
    alignSelf: "center",
    marginVertical: 16
  },
  subTitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginVertical: 30,
  },
  progsContainer: {
    flexDirection: "column",
    
  },
  progs: {
    fontSize: 24,
    backgroundColor: "#FCD34D",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 3
  }
});