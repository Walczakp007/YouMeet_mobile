import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Font, LinearGradient} from "expo";
import UserInfo from "./UserInfo";

export default class Settings extends React.Component {
    state = {
      fontLoaded: false
    };
    async componentDidMount() {
        await Font.loadAsync({
            'Courgette': require('../../../assets/fonts/Courgette-Regular.ttf'),
            'Dosis': require('../../../assets/fonts/Dosis-Regular.ttf'),
            'Gloria': require('../../../assets/fonts/GloriaHallelujah.ttf'),
        });
        this.setState({fontLoaded: true});
    }
    goToAccountInfo = () => {
        this.props.navigation.navigate('accountInfo');
    };

    goToAppSettings = () => {
        this.props.navigation.navigate('appSettings');
    };

    render() {
        let edit = null;
        let app = null;
        let footerTxt= null;
        if (this.state.fontLoaded) {
            edit =  <Text style={styles.text}>
                Edit account
            </Text>;
            app =  <Text style={styles.text}>
                App settings
            </Text>;
            footerTxt = <Text style={styles.footerTxt}>
                YouMeet &copy; version 0.2
            </Text>;
        }
        return (
            <LinearGradient colors={['#b22b7d', '#ffffff']} locations={[0, 0.8]} style={styles.gradient}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <ScrollView>
                        <UserInfo showHamburger={true} navigator={this.props.navigation} fontLoaded={this.state.fontLoaded}/>
                        <View style={styles.area}>
                            <TouchableOpacity style={styles.button} onPress={this.goToAccountInfo}>
                                <Ionicons name="md-person" size={70} color={'white'} style={styles.icon}/>
                                {edit}
                            </TouchableOpacity>
                            <View style={{borderWidth:1, borderColor:'white', width:150}}></View>
                            <TouchableOpacity style={styles.button} onPress={this.goToAppSettings}>
                                <Ionicons name="md-settings" size={70} color={'white'} style={styles.icon}/>
                                {app}
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        {footerTxt}
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    area: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        margin: 20,
        padding: 20,
        justifyContent: 'center', alignItems: 'center',elevation: 1
    },
    button: {
        margin: 20,
        padding: 5,
        elevation: 1
    },
    text: {
        fontSize: 20,
        fontFamily: 'Dosis',
        color: 'white',
        letterSpacing: 1
    },
    icon: {
        alignSelf: 'center',
    },
    footer: {
        padding: 10,
        position: 'absolute', left: 0, right: 0, bottom: 0,  justifyContent: 'center', alignItems: 'center',
    },
    footerTxt: {
        color: 'black',
        fontFamily: 'Dosis',
        fontSize: 13,
    },
});
