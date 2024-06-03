import React, { createContext, useState, useContext, useEffect } from 'react';
//פונקציה המשמשת ליצירת הקשר :createContext
//מאפשר שימוש בהקשר :useContext
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext(null); //state מאפשר לקומפוננטות והדפים לשתף את אותו 

export const UserProvider = ({ children }) => { //(children) app.js ב UserProvider הענקת גישה לדפים העטופים ב
  const [CurrentUser, setCurrentUserState] = useState('');
  const [NumOfVisitors, setNumOfVisitorsState] = useState([]);
  const [visitor, setvisitor] = useState(false);

  const imagePaths={ //נתיבי התמונות שבשרת
    chat: { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/chat.png" },
    chatFill: { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/chatFill.png" },
    forum : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/forum.png" },
    forumFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/forumFill.png" },
    home : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/home.png" },
    homeFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/homeFill.png" },
    calendar : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/calendar.png" },
    calendarFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/calendarIconL.png" },
    mail : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/mail.png" },
    mailFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/mailFill.png" },
    documentsFill:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/documents.png" },
    bell : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/bell.png" },
    emptyPlus : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/emptyPlus.png" },
    plusFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/plusM.png" },
    editPancil : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/editPancil.png" },
    downArrow : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/downArrow.png" },
    leftArrow : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/leftArrowS.png" },
    rightArrow : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/rightArrowS.png" },
    icon: { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/icon.png" },
    forumHome : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/forumHome.png" },
    rightsHome : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/rightsHome.png" },
    moreInfoHome : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/moreInfoHome.png" },
    rightsFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/rightIcon.png" },
    moreInfoFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/moreInfoFill.png" },
    menu : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/menu.png" },
    location : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/location.png" },
    userImage : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/userImage.png" },
    userFill : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/user.png" },
    friendsFill:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/user.png" },
    x : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/x.png" },
    forumIBD : { uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumIBD.png" },
    forumAsk:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumAsk.png" },
    forumRights:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumRights.png" },
    forumCompleteHealth:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumCompleteHealth.png" },
    forumFeelings:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumFeelings.png" },
    forumFood:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumFood.png" },
    forumSport:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumSport.png" },
    forumYoung:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumYoung.png" },
    forumDeases:{ uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/ForumDeases.png" },
    folder:{uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/folder.png"},
    document:{uri: "https://proj.ruppin.ac.il/cgroup57/test2/tar1/Images/document.png"}
  };

//--------------------- clear local storage ---------------------// הפעלה ידנית לצורך בדיקות בזמן הפיתוח
  // const clearLocalStorage = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log('Local storage cleared successfully.');
  //   } catch (error) {
  //     console.error('Error clearing local storage:', error);
  //   }
  // };
  // clearLocalStorage();

  useEffect(() => {
    setvisitor(false);
  }, []);

  useEffect(() => { //הרצה כאשר הקומפוננטה מופעלת לראשונה
    const fetchData = async () => {
      try {
        const currentUserData = await AsyncStorage.getItem('CurrentUser'); //שליפת נתוני המשתמש הנוכחי מהאחסון המקומי
        console.log('get CurrentUser:', currentUserData);
        if (currentUserData) {
          setCurrentUser(JSON.parse(currentUserData)); //המרה למבנה אובייקט במידה וקיימים נתונים
        }
        const visitorsNumData = await AsyncStorage.getItem('NumOfVisitors'); //שליפת מספר האורחים שנכנסו לאפליקציה מהאחסון המקומי
        console.log('get NumOfVisitors:', visitorsNumData);
        if (visitorsNumData) {
          setNumOfVisitors(JSON.parse(visitorsNumData));
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };
    fetchData();
  }, []);


const setCurrentUser = async (userData) => {
  try {
    await AsyncStorage.setItem('CurrentUser', JSON.stringify(userData)); //שמירת נתוני המשתמש באחסון המקומי, ממתין לסיום השמירה לפני שממשיך
    setCurrentUserState(userData);
    console.log('set CurrentUser:', JSON.stringify(userData));
    if(userData.password=='Visitor1!'){ //(מס האורח משורשר לאימייל הפיקטיבי שהגדרנו לו, לכן נבדוק לפי סיסמא) בהתאם state בדיקת האם המשתמש הוא אורח והגדרת ה
      setvisitor(true);
    }
    else{setvisitor(false)}
  } catch (error) {
    console.error('Error saving CurrentUser to AsyncStorage:', error);
  }
};


const setNumOfVisitors = async (NumOfVisitorsData) => { //שמירה באחסון המקומי מספר רץ באמצעותו נוכל לדעת מהו מספר האורחים שנכנסו למערכת
  try {
    await AsyncStorage.setItem('NumOfVisitors', JSON.stringify(NumOfVisitorsData));
    setNumOfVisitorsState(NumOfVisitorsData);
    console.log('set NumOfVisitors:', JSON.stringify(NumOfVisitorsData));
  } catch (error) {
    console.error('Error saving Events to AsyncStorage:', error);
  }
};

  return (
    <UserContext.Provider value={{ //הערכים המסופקים לילדים
      CurrentUser, setCurrentUser,
      NumOfVisitors, setNumOfVisitors,
      visitor,
      imagePaths
       }}>
      {children} 
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); //הגדרת פונקציה המשמשת לשימוש בהקשר

