import React, {useState, useLayoutEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import ContactComponent from '../Components/ContactComponents';
import HeaderComponent from '../Components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {whiteColor} from '../Utils/genericStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Contact} from '../Types/Contact';

export default function MainScreen({navigation}: any) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getCollection = async () => {
    try {
      const querySnapshot = await firestore().collection('users').get();
      const usersData: Contact[] = querySnapshot.docs.map(doc => ({
        id: doc.id, // Include the id of each document
        name: doc.data().name,
        picture: doc.data().picture,
      }));
      setContacts(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useLayoutEffect(() => {
    getCollection();
  }, []);

  return (
    <>
      <HeaderComponent>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          Messages
        </Text>
        <Icon
          name="log-out-outline"
          color={whiteColor}
          size={30}
          style={{marginLeft: 30}}
          onPress={() => auth().signOut()}
        />
      </HeaderComponent>
      <ScrollView>
        {contacts.map((item: any) => (
          <ContactComponent
            key={item.name}
            contact={item}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
}
