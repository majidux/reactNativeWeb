import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native-web';
import Header from "./Pages/Header";
import Body from "./Pages/Body";

class App extends Component {
    render() {
        return (
            
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Header/>
                    <Body/>
                </ScrollView>
            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7ff',
        paddingHorizontal:70
    },
    scrollView: {
        flex: 1,
    }
});

export default App;
