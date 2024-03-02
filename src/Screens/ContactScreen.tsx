import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Contact} from '../Types/Contact';
import HeaderComponent from '../Components/HeaderComponent';
import {genericStyles, whiteColor} from '../Utils/genericStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ContactScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const contact: Contact = route.params.contact;

  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  callIcons: {
    marginHorizontal: 15,
  },
});
