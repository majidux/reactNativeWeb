import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, Animated, FlatList,ActivityIndicator} from 'react-native';
import {globalStyle} from "./globalStyle";
import FakeData from './FakeData';
import {connect} from "react-redux";
import {fetchDataProduct} from "../services/productFetch/productFetchAction";


class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: new Animated.Value(0),
            fadeOut: new Animated.Value(1)
        }
    }
    
    componentDidMount() {
        this.fadeIn();
        this.props.fetchDataProduct();
    }
    
    fadeIn = () => {
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 1,
                duration: 3000,
                friction: 1,
                tension: 10,
            }
        ).start(() => this.fadeOut())
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
    
    activityIndicator = () => {
        if (this.props.itemProducts.loading) {
            return <ActivityIndicator size={'large'}/>
        } else {
            return null
        }
    };
    
    render() {
        return (
            <View style={styles.products}>
                <View style={[styles.titleHeader, globalStyle.flex1]}>
                    <View>
                        <Text style={styles.title}>Top selling Products</Text>
                        <Text style={styles.subtitleProduct}>Live feed based on what people buying based on quantity of
                            bought products.</Text>
                    </View>
                    <View>
                        <TouchableHighlight underlayColor={'rgba(219,219,219,.5)'} onPress={() => {}}>
                            <Text style={styles.showAllText}>SHOW ME ALL TOP SELLING PRODUCTS(28)</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.productsBoxes}>
                    
                    <FlatList
                        data={this.props.itemProducts.productData.slice(0,4)}
                        numColumns={4}
                        ListHeaderComponent={this.activityIndicator}
                        keyExtractor={item => item.title}
                        renderItem={({item, index}) =>
                            <Animated.View style={[styles.singleProductsBoxes, globalStyle.flex1,{opacity:this.state.fadeIn}]}>
                                <View style={styles.productImagesView}>
                                    <Image
                                        source={item.volumeInfo.imageLinks.thumbnail}
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
                                            <Text numberOfLines={1} style={styles.titleProduct}>{item.volumeInfo.title.slice(0,12)}{item.volumeInfo.title.length>12&&' ... '}</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={[globalStyle.flex1, globalStyle.justifyCenter, {flexWrap: 'wrap'}]}>
                                        <Text numberOfLines={1} style={styles.quantity}>Author : {item.volumeInfo.authors}</Text>
                                    </View>
                                    <View style={[styles.likes, globalStyle.flex1, globalStyle.alignCenter]}>
                                        <View style={[globalStyle.flexRow, globalStyle.alignCenter]}>
                                            <Text style={styles.quantity}>{item.saleInfo.saleability}</Text>
                                        </View>
                                        <View style={styles.lineSpace}>
                                            <Text style={globalStyle.greyColor}>|</Text>
                                        </View>
                                        <View style={[globalStyle.flexRow, globalStyle.alignCenter]}>
                                            <Image
                                                source={require('../Assets/images/comment.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Text style={styles.quantity}>{item.volumeInfo.pageCount}</Text>
                                        </View>
                                    
                                    </View>
                                </View>
                            </Animated.View>
                        }
                    
                    />
                
                </View>
            </View>
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

export default connect(mapStateToProps, {fetchDataProduct})(Products);
