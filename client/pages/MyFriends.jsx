import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import { useUser } from '../components/UserContext';
import Visitor from '../components/visitor';

export default function Mail({navigation}) {
  const {visitor,imagePaths } = useUser();
  
  return(
        <View style={styles.container}>
        <AppHeader navigation={navigation} backArrow={false} label='החברים שלי' startIcon={true} icon={imagePaths['friendsFill']}/>
        {visitor &&<Visitor navigation={navigation}/>}
        {!visitor&&<Text style={styles.label}>דף החברים שלי</Text>}
          <AppFooter navigation={navigation} />
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