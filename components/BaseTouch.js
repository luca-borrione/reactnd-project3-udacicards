// @flow
import React, { type Element } from 'react';
import {
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  type Styles,
} from 'react-native';
import { purple, white } from '../utils/colors';

const styles: Styles = StyleSheet.create({
  baseTouch: {
    height: 70,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  baseTouchButton: {
    borderRadius: Platform.OS === 'ios' ? 10 : 2,
    borderColor: purple,
    borderWidth: 1,
  },
  baseTouchDisabled: {
    opacity: 0.5,
  },
  baseTouchText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

type Props = {
  backgroundColor?: string,
  borderColor?: string,
  button?: boolean,
  color?: string,
  disabled?: boolean,
  onPress: () => void,
  text: string,
};

const BaseTouch = ({
  backgroundColor,
  borderColor,
  button,
  color,
  disabled,
  onPress,
  text,
}: Props): Element<typeof TouchableOpacity> => (
  <TouchableOpacity
    style={[
      styles.baseTouch,
      button ? styles.baseTouchButton : {},
      button ? { backgroundColor, borderColor } : {},
      disabled ? styles.baseTouchDisabled : {},
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.baseTouchText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

BaseTouch.defaultProps = {
  backgroundColor: white,
  borderColor: purple,
  button: false,
  color: purple,
  disabled: false,
};

export default BaseTouch;
