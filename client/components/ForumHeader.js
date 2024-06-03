import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import UserAvatar from './avatar';
import { useUser } from '../components/UserContext';

const ForumHeader = ({}) => {
    const { imagePaths } = useUser();
    return (
        <View style={styles.icon} >
            {/* הגדרה של הגלילה לאופקית */}
            <ScrollView horizontal={true}>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={45} iconWidth={35} borderRad={0} marginLeft={5} source={imagePaths['forumAsk']} />
                        <Text style={styles.avatarText}>שאל את הכירורג</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={50} iconWidth={45} borderRad={0} marginTopImg={12} marginLeft={5} source={imagePaths['forumIBD']} />
                        <Text style={styles.avatarText}>מחלקת קרוהן</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={20} iconWidth={40} borderRad={0} marginLeft={5} source={imagePaths['forumRights']} />
                        <Text style={styles.avatarText}>מיצוי זכויות מטופל</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={40} iconWidth={45} borderRad={0} marginLeft={5} source={imagePaths['forumCompleteHealth']} />
                        <Text style={styles.avatarText}>רפואה משלימה</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={45} iconWidth={40} borderRad={0} marginLeft={5} source={imagePaths['forumFeelings']} />
                        <Text style={styles.avatarText}>אתגרים רגשיים</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={40} iconWidth={32} borderRad={0} marginLeft={5} source={imagePaths['forumFood']} />
                        <Text style={styles.avatarText}>תזונה</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={41} iconWidth={38} borderRad={0} marginLeft={5} source={imagePaths['forumSport']} />
                        <Text style={styles.avatarText}>פעילות גופנית</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={43} iconWidth={46} borderRad={0} marginLeft={5} source={imagePaths['forumYoung']} />
                        <Text style={styles.avatarText}>צעירים מדברים</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forum1')}>
                    <View style={styles.avatarContainer}>
                        <UserAvatar size={65} marginTop={50} marginRight={5} iconHeight={50} iconWidth={37} borderRad={0} marginLeft={5} source={imagePaths['forumDeases']} />
                        <Text style={styles.avatarText}>מחלות מעי דלקתיות</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )


}
export default ForumHeader;

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        marginTop: 0
    },
    avatarContainer: {
        alignItems: 'center',
        marginRight: 10
    },
    avatarText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 12,
        maxWidth: 80 
    }
});
