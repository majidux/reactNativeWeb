import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, PixelRatio, TouchableHighlight } from 'react-native';
import ReplyFlatList from "./ReplyFlatList";
import { globalStyle } from "./globalStyle";
import { connect } from "react-redux";

class CommentLeftSide extends Component {


      render() {
            return (
                  <View style={styles.commentLeftSide}>
                        <View>
                              <View style={styles.headerComment}>
                                    <View style={styles.titleView}>
                                          <View style={styles.imageCommentView}>
                                                <Image
                                                      source={require('../Assets/images/comment.png')}
                                                      style={styles.imageComment}
                                                />
                                          </View>
                                          <View>
                                                <Text style={styles.recentComment}>Recent comments</Text>
                                          </View>
                                    </View>
                                    <View style={styles.subtitleRecentView}>
                                          <Text style={styles.subtitleRecent}>Reply on comments that are not flattering</Text>
                                    </View>
                              </View>

                              <FlatList
                                    data={this.props.commentState.textReply.slice(0, 2)}
                                    extraData={this.props.commentState}
                                    keyExtractor={item => item.id.toString()}
                                    renderItem={({ item ,index}) =>
                                          <ReplyFlatList children={item} text={item.commentReply} index={index} />
                                    }
                              />
                        </View>


                        <View style={[globalStyle.flexRow, globalStyle.flex1, { flexWrap: 'wrap' }]}>
                              <View style={globalStyle.flex1}>
                                    <View style={styles.headerComment}>
                                          <View style={styles.titleView}>
                                                <View style={styles.imageCommentView}>
                                                      <Image
                                                            source={require('../Assets/images/active.png')}
                                                            style={styles.imageComment}
                                                      />
                                                </View>
                                                <View>
                                                      <Text style={styles.recentComment}>Active promo codes</Text>
                                                </View>
                                          </View>
                                          <View style={styles.subtitleRecentView}>
                                                <Text style={styles.subtitleRecent}>Quick preview on active promocodes</Text>
                                          </View>
                                    </View>
                                    <View style={styles.activePromo}>
                                          <View style={styles.boxDetail}>
                                                <View style={styles.boxDetailItems}>
                                                      <Text numberOfLines={1} style={styles.codeUsedActiveFont}>Code</Text>
                                                </View>
                                                <View style={[styles.boxDetailItemUsed]}>
                                                      <Text numberOfLines={1} style={styles.codeUsedActiveFont}>Used</Text>
                                                </View>
                                                <View style={styles.boxDetailItems}>
                                                      <Text numberOfLines={1} style={styles.codeUsedActiveFont}>Active to</Text>
                                                </View>
                                          </View>
                                          <View style={styles.boxDetail}>
                                                <View style={styles.boxDetailItems}>
                                                      <Text numberOfLines={1} style={styles.fontMain}>W8CN4721</Text>
                                                      <Text numberOfLines={1} style={styles.fontSubMain}>-15% discount</Text>
                                                </View>
                                                <View style={styles.boxDetailItems}>
                                                      <Text style={styles.fontMain}>28/50</Text>
                                                </View>
                                                <View style={styles.boxDetailItems}>
                                                      <Text numberOfLines={1} style={styles.fontMain}>24.1.2016</Text>
                                                      <Text numberOfLines={1} style={styles.fontSubMain}>1 month more</Text>
                                                </View>
                                          </View>
                                          <View style={styles.boxDetail}>
                                                <View style={styles.boxDetailItems}>
                                                      <Text numberOfLines={1} style={styles.fontMain}>ELE-ADV82</Text>
                                                      <Text numberOfLines={1} style={styles.fontSubMain}>-10% discount</Text>
                                                </View>
                                                <View style={styles.boxDetailItems}><Text
                                                      numberOfLines={1} style={styles.fontMain}>Unlimited</Text></View>
                                                <View style={styles.boxDetailItems}>
                                                      <Text numberOfLines={1} style={styles.fontMain}>04.01.2016</Text>
                                                      <Text numberOfLines={1} style={styles.fontSubMain}>two weeks more</Text>
                                                </View>
                                          </View>
                                          <TouchableHighlight underlayColor={'rgba(100,100,100,.5)'} onPress={() => { }}>
                                                <View style={styles.boxDetailFooter}>
                                                      <Text numberOfLines={1} style={styles.fontMain}>SHOW ME ALL PROMO CODES</Text>
                                                </View>
                                          </TouchableHighlight>
                                    </View>
                              </View>
                              <View style={globalStyle.flex1}>
                                    <View style={styles.headerComment}>
                                          <View style={styles.titleView}>
                                                <View style={styles.imageCommentView}>
                                                      <Image
                                                            source={require('../Assets/images/location.png')}
                                                            style={styles.imageComment}
                                                      />
                                                </View>
                                                <View>
                                                      <Text style={styles.recentComment}>Best sales spots</Text>
                                                </View>
                                          </View>
                                          <View style={styles.subtitleRecentView}>
                                                <Text style={styles.subtitleRecent}>Check report width best sales spot in Europe</Text>

                                          </View>
                                    </View>
                                    <View style={styles.mapArea}>
                                          <Image
                                                source={require('../Assets/images/map.png')}
                                                style={[globalStyle.flex1, globalStyle.radius5]}
                                          />
                                    </View>
                              </View>
                        </View>

                  </View>
            );
      }
}

const styles = StyleSheet.create({
      commentLeftSide: {
            flex: 4,
            marginRight: 30,
      },
      headerComment: {
            height: 60,
            marginVertical: 15
      },
      imageComment: {
            width: 15,
            height: 15
      },
      titleView: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
      },
      recentComment: {
            fontSize: 22,
            color: '#404040'
      },
      subtitleRecent: {
            color: '#a9a9a9',
            fontSize: PixelRatio.get() * 14,
            fontWeight: '600'
      },
      subtitleRecentView: {
            marginLeft: 20
      },
      imageCommentView: {
            marginRight: 5
      },
      allComment: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            paddingRight: 0,
      },
      profilePicture: {
            width: 40,
            height: 40,
            borderRadius: 30,
            marginHorizontal: 10
      },
      commentFont: {
            color: '#a9a9a9',
            fontSize: 12,
            fontWeight: '700',
      },
      lineViewOutSide: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20
      },
      lineViewInSide: {
            width: 350,
            height: 1,
            borderBottomWidth: 2,
            borderBottomColor: '#rgba(100,100,100,.2)'
      },
      activePromo: {
            flex: 1,
            backgroundColor: '#fff',
            marginRight: 10,
            borderRadius: 5
      },
      mapArea: {
            flex: 1,
            marginLeft: 10,
      },
      boxDetail: {
            borderBottomWidth: 1,
            borderColor: '#d9d9d9',
            flexDirection: 'row',
            height: 70,
            justifyContent: 'space-between',
            paddingHorizontal: 20
      },
      boxDetailFooter: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 70,
      },
      boxDetailItems: {
            paddingLeft: 20,
            justifyContent: 'center',
            flex: 1
      },
      boxDetailItemUsed:{
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: '#e1e1e1',
            paddingLeft: 20,
            justifyContent: 'center',
            flex: 1
      },
      codeUsedActiveFont: {
            color: '#a9a9a9',
            fontWeight: '700'
      },
      fontMain: {
            color: '#7a7a7a',
            fontWeight: '700'
      },
      fontSubMain: {
            color: '#a9a9a9',
            fontSize: 11,
            fontWeight: '700'
      }
});

const mapStateToProps = state => {
      return {
            commentState: state.commentState,
      }
};

export default connect(mapStateToProps)(CommentLeftSide)
