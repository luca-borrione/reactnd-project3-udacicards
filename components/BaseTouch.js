// @flow
import React, { type Element } from 'react';
import {
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  type Styles,
} from 'react-native';
import { purple, red, white } from '../utils/colors';

const styles: Styles = StyleSheet.create({
  baseTouch: {
    height: 70,
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
  baseTouchInactive: {
    borderColor: red,
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
  disabled?: boolean, // cannot be pressed and with opacity 0.5
  inactive?: boolean, // cannot be pressed
  onPress: () => void | Promise<void>,
  text: string,
};

const BaseTouch = ({
  backgroundColor,
  borderColor,
  button,
  color,
  disabled,
  inactive,
  onPress,
  text,
}: Props): Element<typeof TouchableOpacity> => (
  <TouchableOpacity
    style={[
      styles.baseTouch,
      button ? styles.baseTouchButton : {},
      button ? { backgroundColor, borderColor } : {},
      disabled ? styles.baseTouchDisabled : {},
      inactive ? styles.baseTouchInactive : {}, // DEBUG PURPOSES
    ]}
    onPress={onPress}
    disabled={disabled || inactive}
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
  inactive: false,
};

export default BaseTouch;
