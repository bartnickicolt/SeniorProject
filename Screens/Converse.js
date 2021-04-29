import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'

function Converse() {
    return (
        <View style={styles.background}>
            <Image source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/Griff.jpg')}
            style={styles.banner}>
            </Image>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Converse Hall</Text>
            </View>
            <View style={styles.campus}>{/* this will house the map image of the building */}
                <Image source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/Campus.png')}
                style={styles.campusPic}></Image>
            </View>
            <View style={styles.about}>{/*This gives a history of the building*/}
                <Text style={styles.history}>
                Converse Hall is one of the oldest and central buildings on the campus of Westminster College in Salt Lake City, Utah, United States. It was listed on the National Register of Historic Places in 1978.
                </Text>
            </View>
        </View>
        
    )

}
{/* Here we have the styling for the page.*/}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#541C98',
        height: '15%',
    },

    starter: {
        color: '#fff',
    },

    banner: {
        height: '100%',
        width: '100%',
    },

    welcome: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '35%',
    },

    welcomeText: {
        textAlign: 'center',
        fontSize: 25,
    },

    campus: {
        top: '50%',
        width: '100%' ,
        height: '230%',
    },

    campusPic: {
        height: '100%',
        width: '100%'
    },

    about: {
      justifyContent: 'center',
      top: '80%', 
      width: '100%',
      textAlign: 'center',
    },
})
export default Converse;
