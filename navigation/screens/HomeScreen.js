import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "expo-font"
import { useState } from 'react/cjs/react.development';

export default function HomeScreen({ navigation }) {
  const [progs, setProgs] = useState(["Selkä", "Rinta", "Jalat", "Kädet"])
  const [loaded] = useFonts({
        
    Permanent: require("../../assets/fonts/PermanentMarker-Regular.ttf")
})

if (!loaded) {
    return null
}

    return (
        <View style={{ flex: 1, backgroundColor: "#FFEDD5"}}>
            <Text
                style={styles.title}>SaliÄppi</Text>
                <Text>{progs}</Text>
                <View style={styles.button}>
                    <Button title='+ Lisää ohjelma +' color="#22C55E" onPress={() => navigation.navigate('Lisää ohjelma')}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
  title: {
    color: "#DC2626",
    fontSize: 52,
    fontFamily: "Permanent",
    alignSelf: "center",
    marginTop: 20
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginTop: 20
    
  }
});