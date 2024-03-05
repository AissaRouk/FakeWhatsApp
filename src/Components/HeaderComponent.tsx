import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {greenColor} from '../Utils/genericStyles';

type HeaderComponentProps = {
  children?: ReactNode;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: greenColor,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export default HeaderComponent;
