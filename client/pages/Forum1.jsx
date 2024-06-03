import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import { useUser } from '../components/UserContext';
import ForumHeader from '../components/ForumHeader';


export default function Forum1({ navigation }) {
    const { imagePaths } = useUser();

    return (
        <View style={styles.container}>
            <AppHeader navigation={navigation} label="פורום" startIcon={true} icon={imagePaths['forumFill']} />
            <ForumHeader />
            <AppFooter navigation={navigation} forumFillIcon={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        position: 'relative',
        backgroundColor: 'white',
    },
    label: {
        top: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});