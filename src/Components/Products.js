import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, FlatList, ActivityIndicator} from 'react-native';
import {globalStyle} from "./globalStyle";
import {connect} from "react-redux";
import {fetchDataProduct} from "../services/productFetch/productFetchAction";
import ProductFlatList from "./ProductFlatList";


class Products extends Component {
    
    
    componentDidMount() {
        this.props.fetchDataProduct();
    }
    
    
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
                        data={this.props.itemProducts.productData.slice(0, 4)}
                        numColumns={4}
                        ListHeaderComponent={this.activityIndicator}
                        keyExtractor={item => item.volumeInfo.title}
                        renderItem={({item, index}) =>
                            <ProductFlatList item={item} index={index}/>
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
