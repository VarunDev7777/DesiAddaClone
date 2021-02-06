import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import appstyles from '../styles/config';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
        rank: '1',
        playerName: 'DeviL',
        kills: 30,
        Winning: 30
    },
    {
        rank: '2',
        playerName: 'SomnathSahise',
        kills: 20,
        Winning: 25
    },
    {
        rank: '3',
        playerName: 'Harisingh',
        kills: 14,
        Winning: 20
    },
    {
        rank: '4',
        playerName: 'Hawk Admiral',
        kills: 5,
        Winning: 20
    },
    {
        rank: '5',
        playerName: 'Technical Tech',
        kills: 3,
        Winning: 10
    },
    {
        rank: '6',
        playerName: 'Fearless',
        kills: 4,
        Winning: 15
    },
    {
        rank: '7',
        playerName: 'Dilip',
        kills: 2,
        Winning: 5
    },
    {
        rank: '8',
        playerName: 'Op Rahul',
        kills: 8,
        Winning: 3
    },
    {
        rank: '9',
        playerName: 'Saaho',
        kills: 3,
        Winning: 4
    },
]

const Results = () => {
    const renderItem = (item) => {
        return(
            <View style={styles.dataContainer}>
                <Text style={[styles.dataTxt,{width: 40}]}>{item.rank}</Text>
                <Text style={[styles.dataTxt,{width: Dimensions.get('window').width/2}]}>{item.playerName}</Text>
                <Text style={[styles.dataTxt,{width: 60}]}>{item.kills}</Text>
                <Text style={styles.dataTxt}>{item.Winning}</Text>
            </View>
        )
    }
    return (
        <View style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
            <Header headTxt="Match Results" context={true}/>
            <View style={styles.container}>

                <View style={styles.matchDetails}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={styles.GameImage} source={require("../assets/images/images.png")}/>
                        <View>
                            <Text style={{color: appstyles.fontColor, fontFamily: 'Poppins-Medium', fontSize: 16}}>PUBG Erangle - Solo Battle</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}><Icon name="time-outline" size={22} color={appstyles.fontColorInactive}/><Text style={{color: appstyles.fontColorInactive, fontFamily: 'Poppins-Light', marginLeft: 5}}>11 Aug at 11:00 AM</Text></View>
                        </View>
                    </View>
                    <View style={styles.gameDetails}>
                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={styles.inactiveHead}>Entry Fee</Text>
                            <Text style={styles.activeHead}>₹50</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={styles.inactiveHead}>Price</Text>
                            <Text style={styles.activeHead}>₹5,000</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={styles.inactiveHead}>Per Kill</Text>
                            <Text style={styles.activeHead}>₹40</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1, width: Dimensions.get('window').width, paddingHorizontal: 25}}>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive, width: 40}]}>#</Text>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive, width: Dimensions.get('window').width/2}]}>Player Name</Text>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive, width: 60}]}>Kills</Text>
                        <Text style={[styles.dataTxt,{color: appstyles.fontColorInactive}]}>Winning</Text>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => renderItem(item)}
                        keyExtractor={item => item.rank}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    matchDetails:{
        padding: 20,
        width: Dimensions.get('window').width,
        borderBottomColor: appstyles.secondaryColor,
        borderBottomWidth: 1
    },
    inactiveHead: {
        color: appstyles.fontColorInactive,
        fontFamily: 'Poppins-Light',
        fontSize: 14
    },
    activeHead: {
        color: appstyles.fontColor,
        fontFamily: 'Poppins-Light',
        fontSize: 14.5
    },
    GameImage:{
        height: 120,
        width: 120,
        borderRadius: 10,
        marginRight: 15
    },
    gameDetails:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 25
    },
    dataTxt:{
        color: appstyles.fontColor,
        fontFamily: 'Poppins-Medium'
    },
    dataContainer: {
        flexDirection: 'row', 
        width: '100%', 
        paddingVertical: 10,
    }
})

export default Results
