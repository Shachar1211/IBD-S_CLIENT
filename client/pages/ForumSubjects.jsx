import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import UserAvatar from '../components/avatar';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import { useUser } from '../components/UserContext';
import Visitor from '../components/visitor';

export default function ForumSubjects({ navigation }) {
  const { visitor,imagePaths } = useUser();
  
  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} backArrow={false} label="פורום" startIcon={true} icon={imagePaths['forumFill']} />
      {visitor &&<Visitor navigation={navigation}/>}
      {!visitor&&<View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={50} iconWidth={40} borderRad={0} marginLeft={25} source={imagePaths['forumAsk']}/>
            <Text style={styles.avatarText}>שאל את הכירורג</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={55} iconWidth={50} borderRad={0} marginLeft={25} marginTopImg={10} source={imagePaths['forumIBD']} />
            <Text style={styles.avatarText}>מחלקת קרוהן</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={23} iconWidth={45} borderRad={0} marginLeft={25} source={imagePaths['forumRights']}/>
            <Text style={styles.avatarText}>מיצוי זכויות מטופל</Text>
          </View>
        </TouchableOpacity>
        </View>
      <View style={styles.icon}>
      <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={45} iconWidth={50} borderRad={0} marginLeft={25} source={imagePaths['forumCompleteHealth']}/>
            <Text style={styles.avatarText}>רפואה משלימה</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={50} iconWidth={45} borderRad={0} marginLeft={25} source={imagePaths['forumFeelings']}/>
            <Text style={styles.avatarText}>אתגרים רגשיים</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={45} iconWidth={37} borderRad={0} marginLeft={25} source={imagePaths['forumFood']}/>
            <Text style={styles.avatarText}>תזונה</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
      <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={46} iconWidth={43} borderRad={0} marginLeft={25} source={imagePaths['forumSport']}/>
            <Text style={styles.avatarText}>פעילות גופנית</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={48} iconWidth={51} borderRad={0} marginLeft={25} source={imagePaths['forumYoung']}/>
            <Text style={styles.avatarText}>צעירים מדברים</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
          <View style={styles.avatarContainer}>
          <UserAvatar size={80} marginTop={50} marginRight={25} iconHeight={55} iconWidth={42} borderRad={0} marginLeft={25} source={imagePaths['forumDeases']}/>
            <Text style={styles.avatarText}>מחלות מעי דלקתיות</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>}
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
  },
  icon: {
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    marginTop: 5,
    fontSize: 14,
    color: '#50436E'
  },
});

