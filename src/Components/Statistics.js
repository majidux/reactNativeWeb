import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';

export default class Statistics extends Component {
    render() {
        return (
            <View style={styles.statistic}>
                <View style={styles.statisticBox}>
                    <Text style={styles.titles}>New customers</Text>
                    <Text style={styles.numberStyle}>147</Text>
                </View>
                <View style={[styles.statisticBox,styles.middleBox]}>
                    <Text style={styles.titles}>Active users</Text>
                    <Text style={styles.numberStyle}>384</Text>
                </View>
                <View style={styles.statisticBox}>
                    <Text style={styles.titles}>Sales</Text>
                    <Text style={styles.numberStyle}>1047$</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    statistic: {
        // flex: 1,
        height:120,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    statisticBox:{
        flex:1,
        justifyContent:'center',
        paddingLeft:20,
        backgroundColor:'#fff',
        borderRadius:3,
        elevation: 20
    },
    middleBox:{
        marginHorizontal:20
    },
    numberStyle:{
        fontSize:30,
        fontWeight:'bold'
    },
    titles:{
        fontSize: 19,
        color:'#6f6f6f',
        fontWeight: '600'
    }
});
