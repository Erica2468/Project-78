import React, { Component } from "react";
import React, { Component } from "react";
import { Text, View, TextInput, SafeAreaView } from "react-native";
import { Text, View, TextInput, SafeAreaView } from "react-native";
import { Component } from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';
import { StyleSheet, Platform, StatusBar, ImageBackgrounda, ImageBackground } from 'react-native';
import { WebView } from "react-native-webview";
import { WebView } from "react-native-webview";
import { styles } from "./StarMap";
import { styles } from "./StarMap";
import { styles } from './StarMap';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})export default class StarMapScreen extends Component {
    constructor() {
        super();
        this.state = {
            longitude: '',
            latitude: ''
        };

    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;
        return (
            <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                    <Text
                    >Star Map</Text>

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white" />

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            });
                        } }
                        TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="Enter your latitude"
                        placeholderTextColor="#ffff#000000"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            });
                        } } />
                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20, }} />
            </View>
        );
    }
}

