import React from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm'
import { LinearGradient } from 'expo';

export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <LinearGradient colors={['#d05ce3', '#9c27b0', '#6a0080']} style={styles.gradient}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                        <Text style={styles.header}>
                            YouMeet
                        </Text>
                        <Text style={styles.description}>
                            Meet new people in interesting places
                        </Text>
                        <LoginForm/>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ba68c8',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo : {
        width: 200,
        height : 200
    },
    header : {
        fontSize: 20,
        color : '#FFF',
    },
    description : {
        fontSize: 10
    }
});
