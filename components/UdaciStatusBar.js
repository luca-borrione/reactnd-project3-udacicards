// @flow
import React, { type Element } from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo';

type Props = {
  backgroundColor: string,
};

const UdaciStatusBar = ({
  backgroundColor,
  ...props
}: Props): Element<typeof View> => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default UdaciStatusBar;
