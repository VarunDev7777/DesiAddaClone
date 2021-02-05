import React from 'react';
import { Dimensions, View, StyleSheet, Image, FlatList } from 'react-native';
import appstyles from '../styles/config';
import Header from '../components/header';

const challanges = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        uri: require('../assets/images/797562-pubg-1.jpg'),
        name: "PUBG"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        uri: require('../assets/images/fortnite1twitter-5bfc2eb446e0fb0083c1094a.jpg'),
        name: "FORTNITE"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        uri: require('../assets/images/Garena-Free-Fire.jpg'),
        name: "FREEFIRE"
    },
]

const Index = () => {
    return (
        <View style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
            <Header headTxt="DesiAdda" context={false}/>
            <View style={styles.container}>
                <FlatList 
                    data={challanges}
                    renderItem={({item}) => <View style={styles.imgcontainer}><Image source={item.uri} style={styles.image}/></View>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgcontainer: {
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
        width: Dimensions.get('window').width - 30,
        margin: 10
    },
    image: {
        height: 250,
        width: Dimensions.get('window').width - 30
    }
})

export default Index