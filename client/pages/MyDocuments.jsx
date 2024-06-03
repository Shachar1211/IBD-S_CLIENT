import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import { useUser } from '../components/UserContext';
import Visitor from '../components/visitor';
import UserAvatar from '../components/avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import AppButton from '../components/buttons';

export default function MyDocuments({ navigation }) {
  const { visitor, imagePaths } = useUser();
  const [FolderExist, setFolderExist] = useState(false);
  const [newFolderAdded, setnewFolderAdded] = useState(false);
  const [newFolderSaved, setnewFolderSaved] = useState(false);
  const [FilesExist, setFilesExist] = useState(false);
  const [folderName, setfolderName] = useState('שם התיקייה');
  const [folders, setFolders] = useState([]);

  function saveFolder(){
    setFolders(folders.slice(0, -1));
    var newFolder = { name: folderName };
    var updateFoldersArr = [newFolder];
    setFolders(updateFoldersArr);
    setnewFolderSaved(true);
    console.log('folders', folders);
  }

  const showNewFolder = () => {
    setFolderExist(true);
    setnewFolderAdded(true);
    var newFolder = { name: folderName };
    var updateFolderArr = [...folders, newFolder];
    setFolders(updateFolderArr);
  };

  useFocusEffect(
    useCallback(() => {
      console.log('folderName', folderName);
      console.log('folders', folders);
    }, [folderName])
  );

  const separateFoldersRow = useCallback(() => {
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
          {newFolderAdded && i === folders.length - 1 ? (
            <TextInput
              value={folderName}
              onChangeText={(text) => setfolderName(text)}
              style={folderName === 'שם התיקייה' ? styles.inputText : styles.FilledinputText}
              autoFocus={true}
            />
          ) : (
            <Text style={styles.folderLabel}>{folders[i].name}</Text>
          )}
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
  }, [folders, imagePaths, folderName, newFolderAdded]);

  return (
    <View style={[styles.container, !FolderExist && !FilesExist ? { alignItems: 'center' } : null]}>
      <AppHeader
        navigation={navigation}
        backArrow={false}
        label='מסמכים אישיים'
        startIcon={true}
        icon={imagePaths['documentsFill']}
      />
      <View>
        {!FolderExist && !FilesExist && (
          <View>
            <Text style={styles.label}>עדיין לא נפתחו תיקיות או הועלו מסמכים</Text>
            <View style={styles.twoInRowAvatar}>
              <TouchableOpacity>
                <UserAvatar marginRight={60} size={100} source={imagePaths['document']} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => showNewFolder()}>
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
        {FolderExist && folders && !newFolderSaved &&<View style={styles.twoInRowButtons}>
          <AppButton width={100} bottom={90} borderColor='#9F0405' backgroundColor='#9F0405' label='ביטול' onPressHandler={() => {setFolderExist(false),setFolders([],setfolderName('שם התיקייה'))}}></AppButton>
          <AppButton width={100} bottom={90} label='שמירה' onPressHandler={() => saveFolder()}></AppButton>
        </View>} 
      </View>
      <AppFooter navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    alignItems: 'flex-end',
    width: '100%',
    position: 'relative',
  },
  folderContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
    marginRight: 30,
  },
  folderWrapper: {
    alignItems: 'center',
    marginLeft: 30,
  },
  folderLabel: {
    textAlign: 'center',
    width: 70,
    marginTop: 10,
    color: '#50436E',
  },
  inputText: {
    textAlign: 'center',
    width: 80,
    marginTop: 10,
    backgroundColor: '#D8F3F9',
    height: 17,
  },
  FilledinputText: {
    textAlign: 'center',
    width: 80,
    marginTop: 10,
    height: 17,
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
  twoInRowLabels: {
    flexDirection: 'row',
  },
  twoInRowButtons:{
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    position:'relative',
    top:520,
  },
});
