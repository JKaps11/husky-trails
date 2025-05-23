import { COLORS } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  topBar: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
    zIndex: 2,
  },
  topBar2: {
    position: 'absolute',
    flex: 1,
    backgroundColor: COLORS.defaultText,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 0,
    left: 0,
    width: '100%',
    height: '10%',
    zIndex: 2,
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    top: 0,
    zIndex: 1,
  },
  ActivityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: 2000
  }
});

export default defaultStyles;
