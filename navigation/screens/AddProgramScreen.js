import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react/cjs/react.development'

const AddProgramScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("")
  const [text, setText] = useState("")

  const data = [
    {key:"1", value:"Penkkipunnerrus"},
    {key:"2", value:"Vinopenkkipunnerrus"},
    {key:"3", value:"Kulmasoutu"},
    {key:"4", value:"Ylätalja"},
    {key:"5", value:"Alatalja"},
    {key:"6", value:"Pystypunnerrus"},
    {key:"7", value:"Vipunosto sivulle"},
    {key:"8", value:"Hauiskääntö tangolla"},
    {key:"9", value:"Hauiskäänto käsipainoilla"},
    {key:"10", value:"Ranskalainen punnerrus"},
    {key:"11", value:"Pushdown köydellä"}
  ]

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Ohjelman nimi:"
      />
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginRight: 200, marginLeft: 10, marginVertical: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 1:"
        maxHeight={300}
      />
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginRight: 200, marginLeft: 10, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 2:"
        maxHeight={300}
      />
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginRight: 200, marginLeft: 10, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 3:"
        maxHeight={300}
      />
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginRight: 200, marginLeft: 10, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 4:"
        maxHeight={300}
      />
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginRight: 200, marginLeft: 10, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 5:"
        maxHeight={300}
      />
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginRight: 200, marginLeft: 10, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 6:"
        maxHeight={300}
      />
      <View style={styles.button}>
        <Button title='Luo ohjelma' color="#22C55E" onPress={() => navigation.navigate('Ohjelmat')}/>
      </View>
    </View>
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
    width: 210,
    marginTop: 20,
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
    marginTop: 20
  }
});

export default AddProgramScreen