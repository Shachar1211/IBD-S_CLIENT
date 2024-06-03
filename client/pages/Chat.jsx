import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import { useUser } from '../components/UserContext';
import Visitor from '../components/visitor';

export default function Chat({navigation}) {
  const { visitor,imagePaths } = useUser();

  return(
        <View style={styles.container}>
        <AppHeader navigation={navigation} label='צאט' startIcon={true} icon={imagePaths['chatFill']}/>
        {visitor &&<Visitor navigation={navigation}/>}
        {!visitor&&<Text style={styles.label}>דף צאט</Text>}
<AppFooter navigation={navigation} chatFillIcon={true} />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexGrow: 1,
        position:'relative',
        backgroundColor:'white',
    },
      label:{
        top:200,
        alignItems: 'center',
        justifyContent: 'center',
    }
});