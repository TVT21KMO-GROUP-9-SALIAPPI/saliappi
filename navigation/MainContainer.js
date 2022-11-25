import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import AddProgramScreen from './screens/AddProgramScreen';
import { StyleSheet } from 'react-native';


const homeName = "Ohjelmat";
const calendarName = "Kalenteri";
const addProgramName = "Lisää ohjelma"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          headerStyle: styles.header,
          tabBarLabelStyle: {
            "paddingBottom": 10,
            "fontSize": 16,
          },
            tabBarStyle: styles.tabBarStyle,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === calendarName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={36} color={color} />;
          },
        })}
        >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={calendarName} component={CalendarScreen} />
        <Tab.Screen name={addProgramName} component={AddProgramScreen} />
      </Tab.Navigator>
      </NavigationContainer>    
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    justifyContent: "space-evenly",
    position: 'absolute',
    backgroundColor: "#DC2626",
    height: 85,
    borderTopWidth: 1,
    borderTopColor: "black"
  },
  header: {
    backgroundColor: "#DC2626",
    height: 85,
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});


export default MainContainer;