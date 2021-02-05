import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import appstyles from '../styles/config';
import Header from '../components/header';

const Results = () => {
    return (
        <View style={[styles.container,{backgroundColor: appstyles.primaryColor}]}>
            <Header headTxt="Match Results" context={true}/>
            <View style={styles.container}>
                <Text style={{color: appstyles.fontColor}}>Results Screen</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Results
