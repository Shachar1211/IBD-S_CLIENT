import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import { useUser } from '../components/UserContext';
import Visitor from '../components/visitor';
import UserAvatar from '../components/avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyDocuments({ navigation }) {
  const { visitor, imagePaths } = useUser();
  const [FolderExist, setFolderExist] = useState(false);
  const [FilesExist, setFilesExist] = useState(false);
  const [folders, setFolders] = useState([{ name: "aaaaaa" }, { name: "ddd" }, { name: "ddd" }]);

  const separateFoldersRow = useCallback(() => { // הוספת התיקיות
    const rows = [];
    let oneRow = [];

    for (let i = 0; i < folders.length; i++) {
      if (oneRow.length === 3) {
        rows.push(oneRow);
        oneRow = [];
      }
      oneRow.push(
        <View key={i} style={styles.folderWrapper}>
          <TouchableOpacity>
            <UserAvatar marginTop={30} size={100} source={imagePaths['folder']} />
          </TouchableOpacity>
          <Text style={styles.folderLabel}>{folders[i].name}</Text>
        </View>
      );
    }

    if (oneRow.length) {
      rows.push(oneRow);
    }

    return rows.map((row, index) => (
      <View key={index} style={styles.folderContainer}>
        {row}
      </View>
    ));
  }, [folders, imagePaths]);

  return (
    <View style={[styles.container,!FolderExist && !FilesExist ? { alignItems: 'center' } : null]}>
      <AppHeader navigation={navigation} backArrow={false} label='מסמכים אישיים' startIcon={true} icon={imagePaths['documentsFill']} />
      {visitor && <Visitor navigation={navigation} />}
      {!visitor && (
        <View>
          {!FolderExist && !FilesExist && (
            <View>
              <Text style={styles.label}>עדיין לא נפתחו תיקיות או הועלו מסמכים</Text>
              <View style={styles.twoInRowAvatar}>
                <TouchableOpacity>
                  <UserAvatar marginRight={60} size={100} source={imagePaths['document']} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFolderExist(true)}>
                  <UserAvatar size={100} source={imagePaths['folder']} />
                </TouchableOpacity>
              </View>
              <View style={styles.twoInRowLabels}>
                <Text style={styles.addLabel0}>הוספת מסמך</Text>
                <Text style={styles.addLabel1}>הוספת תיקייה</Text>
              </View>
            </View>
          )}
          <View style={styles.folderWrapperContainer}>
            {FolderExist && folders && separateFoldersRow()}
          </View>
        </View>
      )}
      <AppFooter navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    flexGrow: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  label: {
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#50436E',
  },
  twoInRowAvatar: {
    marginTop: 140,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  folderWrapperContainer: {
    alignItems: 'flex-end', // Align items to the end to achieve right alignment
    width: '100%',
    position:'relative',
    //right:150,
    //left:120,
  },
  folderContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
    marginRight:30,
  },
  folderWrapper: {
    alignItems: 'center',
    marginLeft: 30,
  },
  twoInRowLabels: {
    flexDirection: 'row',
  },
  folderLabel: {
    textAlign: 'center',
    width: 70,
    marginTop: 10,
    color: '#50436E',
  },
  addLabel0: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#50436E',
  },
  addLabel1: {
    marginTop: 10,
    marginLeft: 80,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#50436E',
  },
});

