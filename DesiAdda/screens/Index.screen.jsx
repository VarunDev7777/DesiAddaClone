import React from 'react';
import { Dimensions, View, StyleSheet, Image, FlatList, Text, SafeAreaView } from 'react-native';
import appstyles from '../styles/config';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome';

import Card from '../components/challangecard'

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
        <SafeAreaView style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
            <Header headTxt="DesiAdda" context={false}/>
            <View style={styles.container}>
                {/* flat list for challanges */}
                <FlatList 
                    data={challanges}
                    renderItem={({item}) => <View style={styles.imgcontainer}><Image source={item.uri} style={styles.image}/></View>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.matchContainer}>
                    {/* component header */}
                    <View style={styles.componentHeader}>
                        <Text style={[styles.filterText,{color: '#a1a1a1'}]}>All Matches</Text>
                        <View style={styles.filterContainer}>
                            <Icon name="sliders" size={30} color="#fff"/>
                            <Text style={styles.filterText}>filters</Text>
                        </View>
                    </View>
                    {/* card */}
                    <Card source={require("../assets/images/images.png")} title="PUBG Erangle - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imgcontainer: {
        height: Dimensions.get('window').height/3,
        borderRadius: 10,
        overflow: 'hidden',
        width: Dimensions.get('window').width - 30,
        margin: 10
    },
    image: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width - 30
    },
    matchContainer: {
        flex: 1,
        width: Dimensions.get('window').width - 30,
        justifyContent: 'center'
    },
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    flatList: {
        maxHeight: (Dimensions.get('window').height)/2.75,
    },
    filterText: {
        textTransform: 'uppercase', 
        color: '#fff', 
        marginLeft: 10, 
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        marginTop: 5
    }
})

export default Index