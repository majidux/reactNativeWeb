import React, {Component} from 'react';
import {StyleSheet, ScrollView ,View} from 'react-native';
import Header from "./Pages/Header";
import Body from "./Pages/Body";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./services/commentReply/reducer";
import combiner from './services/combiner';
export const store =createStore(reducer);

class App extends Component {
    
    render() {
        return (
            <ScrollView>
                <Provider store={store}>
                    <View style={styles.container}>
                        <Header/>
                        <Body/>
                    </View>
                </Provider>
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
