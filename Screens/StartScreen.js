
import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';




function StartScreen({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Main')
    }
    return (
        <SafeAreaView style={styles.frontPage}>
            <SafeAreaView style={styles.GG}>
                <Text style={styles.griffguide}> Griff Guides</Text>
            </SafeAreaView>
            <ImageBackground
                source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/Griff.jpg')}
                style={styles.griffIMG}
            >
                <View  style={styles.startButton}>
                    <Button style={{fontSize: 25, color: '#fff'}} 
                    onPress={pressHandler}
                    title="Get Started">
                    </Button>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

{/*Styling for the page*/}
const styles = StyleSheet.create({
    griffIMG: {
        height: '80%',
        width: '100%',
        justifyContent: 'flex-end',
    },

    GG: {
        height: '20%',

    },

    griffguide: {
        textAlign: 'center',
        fontSize: 50,
        paddingTop: '20%',
        color: '#541C98',
    },

    startButton: {
        backgroundColor: '#541C98',
        height: '20%',
        justifyContent: 'center',
        color: 'white'
    },

    


})
export default StartScreen;