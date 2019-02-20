import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Header from "./Pages/Header";
import Body from "./Pages/Body";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from './services/combiner';
import thunk from 'redux-thunk';
import Footer from "./Pages/Footer";


const initialState = {};
export const store = createStore(rootReducer,initialState,applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <ScrollView>
                <Provider store={store}>
                    <View style={styles.container}>
                        <Header/>
                        <Body/>
                        <Footer/>
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
