import React ,{ Component }from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Facebook extends React.Component{
    render() {
        return (
            <View>
                <Text>Facebook</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginTop: 200,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            textfb: {
                color: 'blue',
                fontWeight: "500",
                fontSize: 20,
                alignItems: 'center',
                justifyContent: 'center',
            },