import React from 'react'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black',
        // padding: 10,
    },
    messageContainer: {
        flex: 0.5,
        flexDirection: 'row',

        //   alignSelf:"flex-bottom",
        //   marginTop: auto,
        // position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        //   justifyContent: 'space-between',   
        //   bordercolor: 'black',
        //     borderWidth: 0.8,
        //     borderRadius: 6,
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        margin: 8,
        borderRadius: 8,
    },
    button: {
        margin: 2,
        padding: 0,
        broderRadius: 5,

    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    headerContainer: {
        flex: 0.75,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        // padding: 10,
        // margin: 10,
        borderRadius: 10,
        // width: '100%',

    },
    header: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    headerInfo: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        // backgroundColor: '#f5f5f5',
        // borderWidth: 1,
        borderColor: '#e5e5e5',
        width: 50,
    },

    headerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerButton: {
        marginLeft: 2,
        width: 20,
    },
    avatar: {
        // flex: 0.6,
        margin: -15,
    },
    card: {
        margin: 5,
        borderRadius: 10,
    },
    replyCard: {
        // paddingTop: -5,
        // top: -5,
        marginRight: 5,
        borderRadius: 10,
        // width: '100%',
        // backgroundColor: '#f5f5f5',
        // borderWidth: 1,
        // borderColor: '#e5e5e5',
    },
    innerCard: {
        marginLeft: -10,
        // width: '110%',
        // alignSelf: 'flex-start',
        borderRadius: 10,
    },
    cardContainer: {
        flex: 5,
        // backgroundColor: 'black',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // borderRadius: 20,
        // borderColor: 'black',
        // borderWidth: 0.8,
        marginBottom: 2,
        marginTop: -7,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        // height: 630,
    },
    time: {
        // justifyContent: 'flex-end',
        marginTop: 3,
        fontSize: 12,
        alignSelf: "flex-end",
        marginRight: -5,
    },
    text: {
        // marginLeft: -10,
    },

});