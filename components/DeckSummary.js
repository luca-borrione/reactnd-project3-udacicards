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
    backgroundColor: purple,
    borderRadius: Platform.OS === 'ios' ? 10 : 2,
    height: 90,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    color: white,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: white,
    fontSize: 14,
    textAlign: 'center',
  },
});

type Props = {
  title: string,
  numOfCards: number
};

const DeckCard = ({
  title,
  numOfCards,
}: Props): Element<typeof View> => (
  <View>
    <TouchableOpacity
      style={styles.deckCard}
      onPress={() => alert()}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubTitle}>{numOfCards} Cards</Text>
    </TouchableOpacity>
  </View>
);

export default DeckCard;
