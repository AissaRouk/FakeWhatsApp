import {Image, Text, View} from 'react-native';
import {Contact} from '../Types/Contact';
import HeaderComponent from '../Components/HeaderComponent';
import {genericStyles} from '../Utils/genericStyles';

export default function ContactScreen({route}: {route: any}) {
  const contact: Contact = route.params.contact;

  return (
    <View>
      <HeaderComponent>
        <Image
          source={{uri: contact.picture}}
          style={[
            genericStyles.profileImageDimension,
            genericStyles.profileImageRadius,
          ]}
        />
        <Text style={[genericStyles.headerText, {marginLeft: 10}]}>
          {contact.name}
        </Text>
      </HeaderComponent>
    </View>
  );
}
