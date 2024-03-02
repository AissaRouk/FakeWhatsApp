import {Contact} from '../Types/Contact';
import {TouchableOpacity, Image, Text} from 'react-native';

export default function ContactComponent(contact: Contact): React.JSX.Element {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingLeft: 15,
      }}>
      <Image
        source={{uri: contact.picture}}
        style={{width: 50, height: 50, borderRadius: 25}} // Specify width and height
      />
      <Text style={{marginLeft: 10, color: 'black', fontSize: 18}}>
        {contact.name}
      </Text>
    </TouchableOpacity>
  );
}
