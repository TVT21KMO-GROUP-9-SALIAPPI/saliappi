import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import AddProgramScreen from './screens/AddProgramScreen';
import ShowProgramScreen from './screens/ShowProgramScreen';
import { StyleSheet } from 'react-native';

const homeName = "Ohjelmat";
const calendarName = "Kalenteri";
const addProgramName = "Lisää ohjelma"
const ShowProgramName = "Näytä ohjelma"

const Tab = createBottomTabNavigator();

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

            } else if (rn === addProgramName) {
            iconName = focused ? 'add' : 'add-circle-outline';

          } else if (rn === ShowProgramName) {
            iconName = focused ? '' : '';
          } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={36} color={color} />;
          },
        })}
        >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={addProgramName} component={AddProgramScreen} />
        <Tab.Screen name={calendarName} component={CalendarScreen} />
        <Tab.Screen name={ShowProgramName} component={ShowProgramScreen} />
      </Tab.Navigator>
    </NavigationContainer>    
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    justifyContent: "space-evenly",
    position: 'absolute',
    backgroundColor: "#0E7490",
    height: 85,
    borderTopWidth: 1,
    borderTopColor: "black"
  },
  header: {
    backgroundColor: "#0E7490",
    height: 85,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
});


export default MainContainer;