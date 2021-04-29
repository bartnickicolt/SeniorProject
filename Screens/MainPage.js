import React, {Component} from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native';
import { Button, Container} from 'native-base'

{/* This first function is the navigator that allows us to go from page to page
when we add the file names with the navigation.navigate they are added to a stack
this way when we travel to a page we can swipe back to the previous page without 
adding anymore buttons to the screen.  It also adds a small back arrow to navigate
back to the previous screen.*/}
function MainPage({navigation}) {

    const goToBam = () =>{
        navigation.navigate('Bamberger')
    }

    const goToBas = () =>{
        navigation.navigate('Bassis')
    }
    const goToBen = () =>{
        navigation.navigate('Benhken')
    }
    const goToDick = () =>{
        navigation.navigate('Dick')
    }
    const goToDumke = () =>{
        navigation.navigate('Dumke')
    }
    const goToGio = () =>{
        navigation.navigate('Giovale')
    }
    const goToGore = () =>{
        navigation.navigate('Gore')
    }
    const goToHWAC = () =>{
        navigation.navigate('HWAC')
    }
    const goToJew = () =>{
        navigation.navigate('Jewett')
    }
    const goToMal = () =>{
        navigation.navigate('Malouf')
    }
    const goToMel = () =>{
        navigation.navigate('Meldrum')
    }
    const goToOlwell = () =>{
        navigation.navigate('Olwell')
    }
    const goToPayne = () =>{
        navigation.navigate('Payne')
    }
    const goToShaw = () =>{
        navigation.navigate('Shaw')
    }
    const goToStock = () =>{
        navigation.navigate('Stock')
    }

    /*const [value, onChangeText] = React.useState('Search here');*/
    return (
        <View style={styles.background}>
            <Image source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/Griff.jpg')}
            style={styles.banner}>
            </Image>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Welcome to Westminster College</Text>
            </View>
            <View style={styles.campus}>{/* this will house the map image of the building */}
                <Image source={require('C:/Users/ringf/Desktop/SeniorProject/GriffGuides/assets/Campus.png')}
                style={styles.campusPic}></Image>
            </View>
            <View style={styles.about}>
                <Text style={styles.history}>
               About Westminster: Westminster College has played a pivotal role in the educational heritage of the intermountain area. Founded in 1875 as the Salt Lake Collegiate Institute, a preparatory school, Westminster first offered college classes in 1897 as Sheldon Jackson College. Named in honor of its primary benefactor, Sheldon Jackson, the college operated for many years on the Collegiate Institute 
               campus in downtown Salt Lake City.
                </Text>
            </View>
            <View sytle={styles.buttons}>
                {/*This allows the view to scroll so we can go through the list of buildings we have*/}
                <ScrollView style={styles.buttonText}>

                        <Button full bordered
                        borderColor  
                        onPress={goToBam}
                        >
                        <Text>Bamberger</Text>
                        </Button>

                        <Button full bordered
                        >
                        <Text>Bassis</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToBen}
                        >
                        <Text>Behnken</Text>
                        </Button>
                        
                        <Button full bordered
                        onPress={goToDick}
                        >
                        <Text>Dick</Text>
                        </Button>
                        <Button full bordered
                            onPress={goToDumke}
                        >
                        <Text>Dumke</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToGio}
                        >
                        <Text>Giovale</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToGore}
                        >
                            <Text>Gore</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToHWAC}
                        >
                            <Text>HWAC</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToJew}
                        >
                            <Text>Jewett</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToMal}
                        >
                            <Text>Malouf</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToMel}
                        >
                            <Text>Meldrum</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToOlwell}
                        >
                            <Text>Olwell</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToPayne}
                        >
                            <Text>Payne</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToShaw}
                        >
                            <Text>Shaw</Text>
                        </Button>
                        <Button full bordered
                        onPress={goToStock}
                        >
                            <Text>Stock</Text>
                        </Button>
                        
                    
                </ScrollView>
            </View>    
        </View>
        
    )

}
{/*Styling for the page*/}
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
        alignContent: 'center',
        width: '100%',
        height: '35%',
    },

    welcomeText: {
        textAlign: 'center',
        fontSize: 25,
    },

    campus: {
        top: '15%',
        width: '100%' ,
        height: '230%',
    },

    campusPic: {
        height: '100%',
        width: '100%'
    },

    about: {
      justifyContent: 'center',
      top: '55%', 
      width: '100%',
      textAlign: 'center',
    },

    buttonText: {
        height: '100%',
        top: '80%',
        textAlign: 'center',
        width: '100%',
    },
    buttons: {
        paddingBottom: "2px",
        borderColor: '#541C98'
    }


})
export default MainPage;