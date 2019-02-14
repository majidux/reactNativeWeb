import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native-web';
import Header from "./Pages/Header";
import Body from "./Pages/Body";


class App extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header/>
                    <Body/>
                </View>
            </ScrollView>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6ebee',
        paddingHorizontal: 70,
        
    },
});

export default App;
