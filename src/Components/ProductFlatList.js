import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Animated, TouchableHighlight} from 'react-native';
import {globalStyle} from "./globalStyle";
import {connect} from "react-redux";
import {fetchDataProduct} from "../services/productFetch/productFetchAction";

class ProductFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // fadeIn: new Animated.Value(0),
            // fadeOut: new Animated.Value(1),
            fader: new Animated.Value(0),
            translator: new Animated.Value(-100)
        }
    }
    
    componentDidMount() {
        this.fadeIn();
    }
    
    fadeIn = () => {
        Animated.parallel([
        
            Animated.timing(
                this.state.fader,
                {
                    toValue: 1,
                    duration: 1500,
                    delay: (this.props.index+1) * 500,
                    useNativeDriver:true
                    // friction:
                    // tension:
                }
            ),
            Animated.timing(
                this.state.translator,
                {
                    toValue: 0,
                    duration: 1500,
                    delay: (this.props.index+1) * 500,
                    useNativeDriver:true
    
                }
            )
        ]).start()
    };
    
    fadeOut = () => {
        this.state.fadeOut.setValue(1);
        Animated.timing(
            this.state.fadeOut,
            {
                toValue: 0,
                duration: 5000,
            }
        ).start();
       
    };
    
    render() {
        return (
                        <Animated.View style={[styles.singleProductsBoxes, globalStyle.flex1,{opacity:this.state.fader,transform:([{translateY:this.state.translator}])}]}>
                            <View style={styles.productImagesView}>
                                <Image
                                    source={this.props.item.volumeInfo.imageLinks.thumbnail}
                                    style={globalStyle.flex1}
                                />
                            </View>
                            <View style={[styles.details, globalStyle.flex1]}>
                                <View style={[styles.rateStarView, globalStyle.alignCenter]}>
                                    <Image
                                        source={require('../Assets/images/goldStar.png')}
                                        style={styles.rateStarImage}
                                    />
                                    <Image
                                        source={require('../Assets/images/goldStar.png')}
                                        style={styles.rateStarImage}
                                    />
                                    <Image
                                        source={require('../Assets/images/goldStar.png')}
                                        style={styles.rateStarImage}
                                    />
                                    <Image
                                        source={require('../Assets/images/goldStar.png')}
                                        style={styles.rateStarImage}
                                    />
                                    <Image
                                        source={require('../Assets/images/greyStar.png')}
                                        style={styles.rateStarImage}
                                    />
                                </View>
                                <View style={[styles.titleProductView]}>
                                    <TouchableHighlight underlayColor={'rgba(219,219,219,.5)'} onPress={() => {}}>
                                        <Text numberOfLines={1} style={styles.titleProduct}>{this.props.item.volumeInfo.title.slice(0,12)}{this.props.item.volumeInfo.title.length>12&&' ... '}</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={[globalStyle.flex1, globalStyle.justifyCenter, {flexWrap: 'wrap'}]}>
                                    <Text numberOfLines={1} style={styles.quantity}>Author : {this.props.item.volumeInfo.authors}</Text>
                                </View>
                                <View style={[styles.likes, globalStyle.flex1, globalStyle.alignCenter]}>
                                    <View style={[globalStyle.flexRow, globalStyle.alignCenter]}>
                                        <Text style={styles.quantity}>{this.props.item.saleInfo.saleability}</Text>
                                    </View>
                                    <View style={styles.lineSpace}>
                                        <Text style={globalStyle.greyColor}>|</Text>
                                    </View>
                                    <View style={[globalStyle.flexRow, globalStyle.alignCenter]}>
                                        <Image
                                            source={require('../Assets/images/comment.png')}
                                            style={styles.rateStarImage}
                                        />
                                        <Text style={styles.quantity}>{this.props.item.volumeInfo.pageCount}</Text>
                                    </View>
                        
                                </View>
                            </View>
                        </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    products: {
        height: 500,
        paddingTop: 20
    },
    title: {
        fontSize: 22,
        color: '#404040'
    },
    subtitleProduct: {
        color: '#a9a9a9',
        fontSize: 14,
        fontWeight: '600'
    },
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    showAllText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#747474',
    },
    productsBoxes: {
        flex: 5,
        flexDirection: 'row',
        // height:500
    },
    singleProductsBoxes: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 3,
        backgroundColor: '#fff',
        marginRight: 10,
        height: 400
        // flex:1
    },
    productImagesView: {
        flex: 2,
    },
    details: {
        justifyContent: 'center',
    },
    rateStarView: {
        flexDirection: 'row',
        flex: 1
    },
    rateStarImage: {
        width: 10,
        height: 10,
        marginHorizontal: 2
    },
    titleProduct: {
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 20
    },
    quantity: {
        color: '#a9a9a9',
        fontSize: 12,
        fontWeight: '700',
    },
    likes: {
        flexDirection: 'row',
    },
    titleProductView: {
        flex: 1,
    },
    lineSpace: {
        paddingHorizontal: 10
    },
    
});

const mapStateToProps = (state) => {
    return {
        itemProducts: state.productFetchCombiner
    }
};

export default connect(mapStateToProps, {fetchDataProduct})(ProductFlatList);
