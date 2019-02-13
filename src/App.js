import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native-web';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
});

export default App;
