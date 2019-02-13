import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native-web';
import Header from "./Pages/Header";
import Body from "./Pages/Body";

let deviceHeight = Dimensions.get('window').height;

class App extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollView}>
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
        // flex: 1,
        backgroundColor: '#f3f5f7',
        paddingHorizontal: 70,
        // height: 2000
        
    },
    scrollView: {
        // flex: 1,
        // height: 500
    }
});

export default App;
