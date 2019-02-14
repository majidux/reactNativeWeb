import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native-web';
import {globalStyle} from "./globalStyle";
import FakeData from './FakeData';

export default class Products extends Component {
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
                        <TouchableHighlight underlayColor={'rgba(219,219,219,.5)'} onPress={() => {
                        }}>
                            <Text style={styles.showAllText}>SHOW ME ALL TOP SELLING PRODUCTS(28)</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.productsBoxes}>
                    
                    
                    {
                        FakeData.slice(0,4).map((item) =>
                            <View style={[styles.singleProductsBoxes, globalStyle.flex1]}>
                                <View style={styles.productImagesView}>
                                    <Image
                                        source={item.image}
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
                                        <Text style={styles.titleProduct}>{item.title}</Text>
                                        <Text style={styles.quantity}>({item.price})</Text>
                                    </View>
                                    <View style={[globalStyle.flex1, globalStyle.justifyCenter]}>
                                        <Text style={styles.quantity}>Quantity : {item.quantity}</Text>
                                    </View>
                                    <View style={[styles.likes, globalStyle.flex1, globalStyle.alignCenter]}>
                                        <View style={[globalStyle.flexRow, globalStyle.alignCenter]}>
                                            <Image
                                                source={require('../Assets/images/heart.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Text style={styles.quantity}>{item.comment}</Text>
                                        </View>
                                        <View style={styles.lineSpace}>
                                            <Text style={globalStyle.greyColor}>|</Text>
                                        </View>
                                        <View style={[globalStyle.flexRow, globalStyle.alignCenter]}>
                                            <Image
                                                source={require('../Assets/images/comment.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Text style={styles.quantity}>{item.likes}</Text>
                                        </View>
                                    
                                    </View>
                                </View>
                            </View>
                        )
                    }
                
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
        color: '#747474'
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
        flex: 4,
        flexDirection: 'row',
    },
    singleProductsBoxes: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 3,
        elevation: 20,
        backgroundColor: '#fff',
        marginHorizontal: 10
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
        fontWeight: '700'
    },
    likes: {
        flexDirection: 'row',
    },
    titleProductView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    lineSpace: {
        paddingHorizontal: 10
    }
});
