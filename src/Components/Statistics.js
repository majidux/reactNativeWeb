import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native-web';
import Trend from 'react-trend';

export default class Statistics extends Component {
    render() {
        return (
            <View style={styles.statistic}>
                <View style={styles.statisticBox}>
                    <View style={styles.statisticText}>
                        <Text style={styles.titles}>New customers</Text>
                        <Text style={styles.numberStyle}>147</Text>
                    </View>
                    <View style={styles.statisticImage}>
                        <Trend data={[0, 50, 5, 22, 3.6, 11]} smooth radius={20} strokeWidth={5} maxwidth={280} height={100} gradient={['#ff0025']} autoDraw autoDrawDuration={3000} autoDrawEasing="ease-in"/>
                    </View>
                </View>
                <View style={[styles.statisticBox,styles.middleBox]}>
                    <View style={styles.statisticText}>
                        <Text style={styles.titles}>Active users</Text>
                        <Text style={styles.numberStyle}>384</Text>
                    </View>
                    <View style={styles.statisticImage}>
                        <Trend data={[0, 5, 15, 2, 11, 3]} smooth radius={20} strokeWidth={5} maxwidth={280} height={100} gradient={['#ff0025']} autoDraw autoDrawDuration={4000} autoDrawEasing="ease-in"/>
                    </View>
                    
                </View>
                <View style={styles.statisticBox}>
                    <View style={styles.statisticText}>
                        <Text style={styles.titles}>Sale</Text>
                        <Text style={styles.numberStyle}>1047$</Text>
                    </View>
                    <View style={styles.statisticImage}>
                        <Trend data={[0, 10, 5, 42, 22, 60]} smooth radius={20} strokeWidth={5} maxwidth={280} height={100} gradient={['#0F2']} autoDraw autoDrawDuration={2000} autoDrawEasing="ease-in"/>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    statistic: {
        height:120,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    statisticBox:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:20,
        backgroundColor:'#fff',
        borderRadius:3,
        elevation: 20,
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
    },
    imageChart:{
        flex:1,
    },
    statisticText:{
        justifyContent:'center',
        flex:1
    },
    statisticImage:{
        flex:1,
        padding:20
    }
});
