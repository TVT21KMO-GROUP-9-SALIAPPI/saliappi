import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react/cjs/react.development'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../../firebase'
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import HomeScreen from './HomeScreen'


const AddProgramScreen = ({ navigation }) => {
  const [selected1, setSelected1] = useState("")
  const [selected2, setSelected2] = useState("")
  const [selected3, setSelected3] = useState("")
  const [selected4, setSelected4] = useState("")
  const [selected5, setSelected5] = useState("")
  const [selected6, setSelected6] = useState("")

  const [set1, setSet1] = useState("")
  const [set2, setSet2] = useState("")
  const [set3, setSet3] = useState("")
  const [set4, setSet4] = useState("")
  const [set5, setSet5] = useState("")
  const [set6, setSet6] = useState("")

  const [title, setTitle] = useState("")

    const addedProg = {
    title: title,
    exercise1: selected1,
    exercise2: selected2,
    exercise3: selected3,
    exercise4: selected4,
    exercise5: selected5,
    exercise6: selected6,
    set1: set1,
    set2: set2,
    set3: set3,
    set4: set4,
    set5: set5,
    set6: set6,
}

  const exercises = [
    {key:"1", value:"Penkkipunnerrus"},
    {key:"2", value:"Vinopenkkipunnerrus"},
    {key:"3", value:"Kulmasoutu"},
    {key:"4", value:"Ylätalja"},
    {key:"5", value:"Alatalja"},
    {key:"6", value:"Pystypunnerrus"},
    {key:"7", value:"Vipunosto sivulle"},
    {key:"8", value:"Hauiskääntö tangolla"},
    {key:"9", value:"Hauiskäänto käsipainolla"},
    {key:"10", value:"Ranskalainen punnerrus"},
    {key:"11", value:"Pushdown köydellä"}
  ]

  const sets = [
    {key:"1", value:"1"},
    {key:"2", value:"2"},
    {key:"3", value:"3"},
    {key:"4", value:"4"},
    {key:"5", value:"5"},
    {key:"6", value:"6"},
    {key:"7", value:"7"},
    {key:"8", value:"8"},
    {key:"9", value:"9"},
    {key:"10", value:"10"}
  ]
/*
  const addProgToFirebase = () => {
    const db = getFirestore()
    db.collection("programs").add({
      title: title,
      exercise1: selected1,
      exercise2: selected2,
      exercise3: selected3,
      exercise4: selected4,
      exercise5: selected5,
      exercise6: selected6
    })
    navigation.navigate('Ohjelmat')
  }
*/
  return (
    <ScrollView style={styles.container}>
      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2,}}>
      <TextInput 
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Ohjelman nimi:"
      />
      </View>
      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2}}>
      <SelectList 
        data={exercises} 
        setSelected={setSelected1} 
        boxStyles={{ marginHorizontal: 50, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 1:"
        maxHeight={300}
      />

      <SelectList 
        data={sets} 
        setSelected={setSet1} 
        boxStyles={{ marginHorizontal: 150, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Sarjat:"
        maxHeight={300}
      />
      </View>

      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2}}>
      <SelectList 
        data={exercises} 
        setSelected={setSelected2} 
        boxStyles={{ marginHorizontal: 50, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 2:"
        maxHeight={300}
      />
      <SelectList 
        data={sets} 
        setSelected={setSet2} 
        boxStyles={{ marginHorizontal: 150, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Sarjat:"
        maxHeight={300}
      />
      </View>

      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2}}>
      <SelectList 
        data={exercises} 
        setSelected={setSelected3} 
        boxStyles={{ marginHorizontal: 50, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 3:"
        maxHeight={300}
      />
      <SelectList 
        data={sets} 
        setSelected={setSet3} 
        boxStyles={{ marginHorizontal: 150, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Sarjat:"
        maxHeight={300}
      />
      </View>

      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2}}>
      <SelectList 
        data={exercises} 
        setSelected={setSelected4} 
        boxStyles={{ marginHorizontal: 50, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 4:"
        maxHeight={300}
      />
      <SelectList 
        data={sets} 
        setSelected={setSet4} 
        boxStyles={{ marginHorizontal: 150, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Sarjat:"
        maxHeight={300}
      />
      </View>

      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2}}>
      <SelectList 
        data={exercises} 
        setSelected={setSelected5} 
        boxStyles={{ marginHorizontal: 50, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 5:"
        maxHeight={300}
      />
      <SelectList 
        data={sets} 
        setSelected={setSet5} 
        boxStyles={{ marginHorizontal: 150, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Sarjat:"
        maxHeight={300}
      />
      </View>
      <View style= {{ borderBottomColor: "#A8A29E", borderBottomWidth: 2}}>
      <SelectList 
        data={exercises} 
        setSelected={setSelected6} 
        boxStyles={{ marginHorizontal: 50, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 6:"
        maxHeight={300}
      />
      <SelectList 
        data={sets} 
        setSelected={setSet6} 
        boxStyles={{ marginHorizontal: 150, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Sarjat:"
        maxHeight={300}
      />
      </View>
      <View style={styles.button}>
        <Button title='Luo ohjelma' color="#22C55E" onPress={() => navigation.navigate('Näytä ohjelma')}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#FFEDD5",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    width: 310,
    marginVertical: 20,
    alignSelf: "center",
    fontSize: 16,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 100
  }
});

export default AddProgramScreen