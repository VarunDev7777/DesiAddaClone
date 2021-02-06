import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, FlatList } from 'react-native';
import appstyles from '../styles/config';
import Header from '../components/header';
import Dynamo from '../assets/images/dynamo.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = () => {
    const MENU = [
        {
            id: '1',
            text: 'My Matches',
            ico: 'game-controller-outline',
            icoback: 'rgb(66,105,242)'
        },
        {
            id: '2',
            text: 'Total Credits earned',
            ico: 'server',
            icoback: 'rgb(130,71,237)'
        },
        {
            id: '3',
            text: 'Rate us',
            ico: 'star',
            icoback: 'rgb(26,166,0)'
        },
        {
            id: '4',
            text: 'Share App',
            ico: 'share-social',
            icoback: 'rgb(0,129,250)'
        },
        {
            id: '5',
            text: 'Feedback',
            ico: 'chatbox',
            icoback: 'rgb(246,168,32)'
        },
        {
            id: '6',
            text: 'Logout',
            ico: 'log-out',
            icoback: 'rgb(214,76,76)'
        },
    ]
    return (
        <SafeAreaView style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
            <Header headTxt="Profile" context={false}/>
            <View style={styles.container}>
                <View style={styles.profileInfo}>
                    <Image source={Dynamo} style={styles.profileImage}/>
                    <View>
                        <Text style={styles.profileName}>Aditya Sawant</Text>
                        <Text style={styles.profileMail}>workfordynamo@gmail.com</Text>
                    </View>
                </View>
                <FlatList 
                    data={MENU}
                    renderItem={({item}) => <View style={styles.menuitem}><View style={[styles.imgContainer,{backgroundColor: item.icoback}]}><Icon name={item.ico} size={30} color="#fff"/></View><Text style={styles.menuTxt}>{item.text}</Text></View>}
                    keyExtractor={item => item.id}
                    style={{marginTop: 10}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    profileInfo:{
        flexDirection: 'row',
        paddingVertical: 25,
        paddingHorizontal: 20,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: appstyles.fontColorInactive
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginRight: 20
    },
    profileName: {
        fontFamily: 'Poppins-Medium',
        color: appstyles.fontColor,
        fontSize: 20
    },
    profileMail: {
        fontFamily: 'Poppins-Light',
        color: appstyles.fontColor,
        fontSize: 16
    },
    imgContainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    menuitem:{
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        paddingHorizontal: 25,
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 5
    },
    menuTxt: {
        color: appstyles.fontColor,
        fontSize: 16,
        fontFamily: 'Poppins-Light'
    },
})

export default Profile
