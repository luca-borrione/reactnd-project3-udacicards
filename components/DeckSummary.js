// @flow
import React, { type Element } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { purple, white } from '../utils/colors';

const styles = StyleSheet.create({
  deckCard: {
    backgroundColor: white,
    borderWidth: 2,
    borderColor: purple,
    borderRadius: Platform.OS === 'ios' ? 10 : 2,
    height: 90,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  lastDeckCard: {
    marginBottom: 20,
  },
  cardTitle: {
    color: purple,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: purple,
    fontSize: 14,
    textAlign: 'center',
  },
});

type Props = {
  title: string,
  numOfCards: number,
  onPress: () => void,
  lastChild: boolean,
};

const DeckSummary = ({
  title,
  numOfCards,
  onPress,
  lastChild,
}: Props): Element<typeof View> => (
  <View>
    <TouchableOpacity
      style={[styles.deckCard, lastChild ? styles.lastDeckCard : {}]}
      onPress={onPress}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubTitle}>{numOfCards} Cards</Text>
    </TouchableOpacity>
  </View>
);

export default DeckSummary;
