import React, {ReactNode} from 'react';
import {View} from 'react-native';

type HeaderComponentProps = {
  children?: ReactNode;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        paddingVertical: 20,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export default HeaderComponent;
