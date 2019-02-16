import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native-web';

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
                        <Image
                            source={require('../Assets/images/chartGreen.png')}
                            style={styles.imageChart}
                        />
                    </View>
                </View>
                <View style={[styles.statisticBox,styles.middleBox]}>
                    <View style={styles.statisticText}>
                        <Text style={styles.titles}>Active users</Text>
                        <Text style={styles.numberStyle}>384</Text>
                    </View>
                    <View style={styles.statisticImage}>
                        <Image
                            source={require('../Assets/images/chartGreen2.png')}
                            style={styles.imageChart}
                        />
                    </View>
                </View>
                <View style={styles.statisticBox}>
                    <View style={styles.statisticText}>
                        <Text style={styles.titles}>Sale</Text>
                        <Text style={styles.numberStyle}>1047$</Text>
                    </View>
                    <View style={styles.statisticImage}>
                        <Image
                            source={require('../Assets/images/cahrtRed.png')}
                            style={styles.imageChart}
                        />
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
