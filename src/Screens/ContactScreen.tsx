import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Contact, Message} from '../Types/Contact';
import HeaderComponent from '../Components/HeaderComponent';
import {genericStyles, greenColor, whiteColor} from '../Utils/genericStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ContactScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const contact: Contact = route.params.contact;
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = () => {
    if (message)
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          content: message,
          owner: 0,
        },
      ]);
    setMessage('');
  };

  const MessageComponent = ({
    message,
  }: {
    message: Message;
  }): React.ReactElement => {
    return (
      <View
        style={{
          flexDirection: message.owner == 1 ? 'row' : 'row-reverse',
          flexWrap: 'wrap',
          margin: 5,
        }}>
        <Text
          style={{
            borderColor: 'grey',
            borderWidth: 0.5,
            borderRadius: 5,
            paddingHorizontal: 8,
            paddingVertical: 5,
          }}>
          {message.content}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Header Component */}
      <HeaderComponent>
        <View style={[genericStyles.headerHorizontalAlignment]}>
          {/* Go back button */}
          <Icon
            name="arrow-back"
            size={30}
            style={{marginRight: 10}}
            color={whiteColor}
            onPress={() => {
              navigation.goBack();
            }}
          />
          {/* Profile pic. */}
          <Image
            source={{uri: contact.picture}}
            style={[
              genericStyles.profileImageDimension,
              genericStyles.profileImageRadius,
            ]}
          />
          {/* Contact name */}
          <Text style={[genericStyles.headerText, {marginLeft: 10}]}>
            {contact.name}
          </Text>
        </View>

        {/* Call buttons */}
        <View
          style={[
            genericStyles.headerHorizontalAlignment,
            {flex: 1, justifyContent: 'flex-end'},
          ]}>
          {/* normal call */}
          <TouchableOpacity style={styles.callIcons}>
            <Icon name="call" color={whiteColor} size={30} />
          </TouchableOpacity>

          {/* video-call */}
          <TouchableOpacity style={styles.callIcons}>
            <Icon name="videocam" color={whiteColor} size={30} />
          </TouchableOpacity>
        </View>
      </HeaderComponent>

      <ScrollView style={{paddingTop: 10}}>
        {messages.map(item => (
          <MessageComponent key={item.id} message={item} />
        ))}
      </ScrollView>

      {/* Text Input at the bottom */}
      <View
        style={{
          paddingHorizontal: 5,
          borderWidth: 1,
          borderColor: 'black',
          paddingVertical: 10,
          backgroundColor: greenColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Message"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
            width: '80%',
            backgroundColor: whiteColor,
            paddingHorizontal: 10,
          }}
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={() => {
            sendMessage();
          }}
        />
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => {
            sendMessage();
          }}>
          <Icon name="send" color={whiteColor} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  callIcons: {
    marginHorizontal: 15,
  },
});
