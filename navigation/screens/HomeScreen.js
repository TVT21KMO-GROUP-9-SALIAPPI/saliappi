import 'react-native-gesture-handler'
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "expo-font"
import { useState } from 'react/cjs/react.development';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  const [progs, setProgs] = useState([
    {id: 1, title: "selkä", exercise1: "kulmasoutu", exercise2: "ylätalja", exercise3: "alatalja", exercise4: "pullover"},
    {id: 2, title: "rinta", exercise1: "penkkipunnerrus", exercise2: "vinopenkkipunnerrus", exercise3: "peckdeck"},
    {id: 3, title: "jalat", exercise1: "kyykky", exercise2: "jalkaprässi", exercise3: "reiden ojennus", exercise4: "reiden koukistus"}
    
  ])
  const [loaded] = useFonts({
        Aclonica: require("../../assets/fonts/Aclonica-Regular.ttf")
  })

if (!loaded) {
    return null
}

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
        <Text onPress={() => navigation.navigate('Näytä ohjelma')}>{programs}</Text>
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