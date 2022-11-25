import * as React from 'react';
import { View, Text } from 'react-native';

export default function CalendarScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Ohjelmat')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Kalenteri</Text>
        </View>
    );
}