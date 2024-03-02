import {StyleSheet} from 'react-native';

export const genericStyles = StyleSheet.create({
  // Image styles
  profileImageDimension: {
    height: 50,
    width: 50,
  },
  profileImageRadius: {
    borderRadius: 25,
  },

  // Header styles
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  headerHorizontalAlignment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const whiteColor = '#FFFF';
