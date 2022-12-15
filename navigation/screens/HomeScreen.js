import 'react-native-gesture-handler'
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "expo-font"
import { useState } from 'react/cjs/react.development';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {

  const [progs, setProgs] = useState([
    {id: 1, title: "selkä", exercise1: "kulmasoutu", set1: 2, exercise2: "ylätalja", set2: 3, exercise3: "alatalja", set3: 3, exercise4: "pullover", set4: 4,},
    {id: 2, title: "rinta", exercise1: "penkkipunnerrus", set1: 4, exercise2: "vinopenkkipunnerrus", set2: 3, exercise3: "peckdeck", set3: 5,},
    {id: 3, title: "jalat", exercise1: "kyykky", set1: 2, exercise2: "jalkaprässi", set2: 3, exercise3: "reiden ojennus", set3: 3, exercise4: "reiden koukistus", set4: 3,}
    
  ])
  const [loaded] = useFonts({
        Aclonica: require("../../assets/fonts/Aclonica-Regular.ttf")
  })

if (!loaded) {
    return null
}

/*
const route = useRoute()

const prog1 = route.params?.prog1
console.log(prog1);
*/

const programs = (
 <View style={styles.progsContainer}>
    {progs.map((prog) =>
        <Text key={prog.id} style={styles.progs}>{prog.title}</Text>
    )}
 </View>
);

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FFEDD5"}}>
        <Text style={styles.title}>SaliÄppi</Text>
        <Text onPress={() => navigation.navigate('Näytä ohjelma', {progs: progs[0]})}>{programs}</Text>
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
    marginVertical: 20
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginVertical: 30,
  },
  progsContainer: {
    flexDirection: "row",
    
  },
  progs: {
    fontSize: 24,
    backgroundColor: "#FCD34D",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  }
});