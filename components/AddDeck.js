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
};

type State = {
  title: string,
};

const DEFAULT_TITLE: string = '';
const DEFAULT_STATE: State = {
  title: DEFAULT_TITLE,
};

class AddDeck extends Component<Props, State> {
  state = DEFAULT_STATE;

  onChangeText = (title: string): void => {
    this.setState({ title });
  }

  onPressAddDeck = async (): Promise<void> => {
    const { navigation, setDeck } = this.props;
    const { title } = this.state;
    if (!this.isNavigating()) {
      const deck: Deck = await setDeck(title);
      navigation.navigate('DeckView', { deckId: deck.id });
      this.resetState();
    }
  }

  resetState() {
    this.setState(DEFAULT_STATE);
  }

  isNavigating(): boolean {
    const { navigation } = this.props;
    return !navigation.isFocused();
  }

  render(): Element<typeof KeyboardAvoidingView> {
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
            onChangeText={this.onChangeText}
          />
        </View>
        <View style={styles.addDeckBlock2}>
          <BaseTouch
            button
            text="Add Deck"
            onPress={this.onPressAddDeck}
            backgroundColor={purple}
            color={white}
            borderColor={white}
            inactive={busy}
            disabled={title === DEFAULT_TITLE}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddDeck;
