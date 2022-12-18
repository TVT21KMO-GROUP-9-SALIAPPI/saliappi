import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calendar from 'react-native-calendars/src/calendar'

export default function CalendarScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFEDD5"}}>
            <Calendar style={styles.calendar}
            /*
            onDayPress={date => {
                console.log(date);
            }}
            */
            minDate={"2022-01-01"}
            maxDate={"2023-12-31"}
            
            /*
            markedDates={{
                "2022-12-14": {marked: true, selected: true, selectedColor: "green"}
            }}
            */
            />
        </View>
    )
}
    const styles = StyleSheet.create({
        calendar: {
          borderRadius: 10,
          elevation: 4,
          margin: 40
        }
      })
