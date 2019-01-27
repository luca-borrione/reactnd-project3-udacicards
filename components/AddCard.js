// @flow
import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  NavigationActions,
  type NavigationState,
  type NavigationScreenProp,
} from 'react-navigation';
import BaseTouch from './BaseTouch';
import commonStyles from '../utils/styles';

const styles = StyleSheet.create({
  addCard: {
    flex: 1,
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
  inputText: {
    ...commonStyles.inputText,
    marginTop: 10,
    marginBottom: 10,
  },
});

type Props = {
  busy: boolean,
  navigation: NavigationScreenProp<NavigationState>,
  addCard: (question: string, answer: string) => Promise<void>,
  setReadyState: () => void,
};

type State = {
  answer: string,
  question: string,
};

const DEFAULT_ANSWER = '';
const DEFAULT_QUESTION = '';

class AddCard extends Component<Props, State> {
  state = {
    answer: DEFAULT_ANSWER,
    question: DEFAULT_QUESTION,
  };

  onChangeAnswerText = (answer: string) => {
    this.setState({ answer });
  };

  onChangeQuestionText = (question: string) => {
    this.setState({ question });
  };

  onPressAddCard = async () => {
    const { addCard, setReadyState } = this.props;
    const { answer, question } = this.state;
    await addCard(question, answer);
    this.navigateBack();
    this.resetState();
    setReadyState();
  }

  navigateBack() {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  }

  resetState() {
    this.setState({
      answer: DEFAULT_ANSWER,
      question: DEFAULT_QUESTION,
    });
  }

  render() {
    const { answer, question } = this.state;
    const { busy } = this.props;
    return (
      <KeyboardAvoidingView style={styles.addCard} behavior="padding">
        <View style={styles.addDeckBlock1}>
          <TextInput
            value={question}
            style={styles.inputText}
            placeholder="Question"
            onChangeText={this.onChangeQuestionText}
          />
          <TextInput
            value={answer}
            style={styles.inputText}
            placeholder="Answer"
            onChangeText={this.onChangeAnswerText}
          />
        </View>
        <View style={styles.addDeckBlock2}>
          <BaseTouch
            button
            text="Add Card"
            onPress={this.onPressAddCard}
            inactive={busy}
            disabled={question === DEFAULT_QUESTION || answer === DEFAULT_ANSWER}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;
