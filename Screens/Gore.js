import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

function Gore() {
    return (
        <View style={styles.background}>
            <Image source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/Griff.jpg')}
            style={styles.banner}>
            </Image>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Bill and Vieve Gore</Text>
            </View>
            <View style={styles.campus}>{/* this will house the map image of the building */}
                <Image source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/NewGore.jpg')}
                style={styles.campusPic}></Image>
            </View>
            <View style={styles.about}>{/*This gives a history of the building*/}
                <Text style={styles.history}>
                Westminster College’s Bill and Vieve Gore School of Business is dedicated to providing academic programs that integrate business with liberal arts and provide a student-oriented learning environment and innovative education.                </Text>
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
export default Gore;