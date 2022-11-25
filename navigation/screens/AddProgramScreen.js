import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react/cjs/react.development'

const AddProgramScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("")

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
      <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{ marginHorizontal: 100, marginVertical: 20, backgroundColor:"white" }}
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
        boxStyles={{ marginHorizontal: 100, marginBottom: 20, backgroundColor:"white" }}
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
        boxStyles={{ marginHorizontal: 100, marginBottom: 20, backgroundColor:"white" }}
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
        boxStyles={{ marginHorizontal: 100, marginBottom: 20, backgroundColor:"white" }}
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
        boxStyles={{ marginHorizontal: 100, marginBottom: 20, backgroundColor:"white" }}
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
        boxStyles={{ marginHorizontal: 100, marginBottom: 20, backgroundColor:"white" }}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={{ backgroundColor: "gray" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "white", fontSize: 16 }}
        placeholder="Valitse liike 6:"
        maxHeight={300}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#FFEDD5",
   
  }
});

export default AddProgramScreen