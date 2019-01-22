// @flow
import React, { Component, type Element } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import BaseTouch from './BaseTouch';
import { palePurple, purple, white } from '../utils/colors';
import commonStyles from '../utils/styles';
import { type Deck } from '../utils/types';

const styles = StyleSheet.create({
  addDeck: {
    flex: 1,
    backgroundColor: palePurple,
  },
  addDeckBlock1: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  addDeckBlock2: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 40,
  },
});

type Props = {
  busy: boolean,
  navigation: NavigationScreenProp<NavigationState>,
  setDeck: (title: string) => Promise<Deck>,
  setReadyState: () => void,
};

type State = {
  title: string,
};

class AddDeck extends Component<Props, State> {
  state = {
    title: '',
  }

  handleTextChange = (title: string) => {
    this.setState({ title });
  }

  handleSubmit = async () => {
    const { navigation, setDeck, setReadyState } = this.props;
    const { title } = this.state;
    const deck: Deck = await setDeck(title);
    navigation.navigate('DeckView', { deckId: deck.id });
    this.setState({ title: '' });
    setReadyState();
  }

  render() {
    const { title } = this.state;
    const { busy } = this.props;

    return (
      <KeyboardAvoidingView style={styles.addDeck}>
        <View style={styles.addDeckBlock1}>
          <Text
            style={[
              commonStyles.h3,
              { textAlign: 'center' },
            ]}
          >
            What is the title of your new deck?
          </Text>
          <TextInput
            style={commonStyles.inputText}
            value={title}
            placeholder="Deck Title"
            onChangeText={this.handleTextChange}
          />
        </View>
        <View style={styles.addDeckBlock2}>
          <BaseTouch
            button
            text="Add Deck"
            onPress={this.handleSubmit}
            backgroundColor={purple}
            color={white}
            borderColor={white}
            disabled={title === '' || busy}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddDeck;
