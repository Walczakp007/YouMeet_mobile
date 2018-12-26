import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {getMetUserIcon} from "../../services/user.service";

const historyItem = props => {
    let date = new Date(Date.parse(props.historyData.params.startDate));
    console.log('\n\n\n' + props.historyData.meeting_id + '\n\n\n');
    return(
        <View style={styles.container}>
            {props.historyData.params.photo ? (
                <Image source={{uri: props.historyData.params.photo}} style={styles.userIcon}/>) : (
                <Image source={getMetUserIcon(props.historyData.params.gender)} style={styles.userIcon}/>)
            }
            <View style={styles.rightBox}>
                <Text style={styles.person}>{props.historyData.params.firstName + ' ' + props.historyData.params.lastName + ', ' + props.historyData.params.age}</Text>
                <Text style={styles.description}>{props.historyData.params.placeDescription.replace(/(\r\n\t|\n|\r\t)/gm,' ')}</Text>
            </View>
            <View style={styles.leftBox}>
                <Text style={styles.date}>{date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes()}</Text>
                <Text style={styles.category}>Category: {props.historyData.params.categoryName}</Text>
            </View>
        </View>
    );
};

export default historyItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 70,
        backgroundColor: '#eee',
        flexDirection: 'row',
    },
    person: {
        margin: 10,
        marginBottom: 5,
        fontSize: 15,
        color: '#373D3F',
        fontFamily: 'Cabin',
    },
    description: {
        margin: 10,
        marginBottom : 15,
        fontSize: 12,
        color: '#373D3F',
        fontFamily: 'Cabin',
    },
    rightBox: {
        alignSelf: 'flex-start',
        marginRight: 'auto'
    },
    leftBox: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    },
    date: {
        margin: 5,
        fontSize: 10,
        color: '#373D3F',
        fontFamily: 'Cabin',
        alignSelf: 'center',
        textAlign: 'center',
    },
    category: {
        margin: 15,
        fontSize: 10,
        color: '#373D3F',
        fontFamily: 'Cabin',
        alignSelf: 'center',
        textAlign: 'center',
    },
    userIcon: {
        margin: 10,
        width: 50, height: 50, borderRadius: 25,
    },
});
