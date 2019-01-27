// @flow
import React, { type Element } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseTouch from './BaseTouch';
import commonStyles from '../utils/styles';
import { red } from '../utils/colors';

const styles = StyleSheet.create({
  resultText: {
    ...commonStyles.h3,
    textAlign: 'center',
  },
  score: {
    ...commonStyles.h1,
    color: red,
  },
});

type Props = {
  backToDeck: () => void,
  restartQuiz: () => void,
  numOfCorrectCards: number,
  numOfIncorrectCards: number,
};

const QuizResult = ({
  backToDeck,
  numOfCorrectCards,
  numOfIncorrectCards,
  restartQuiz,
}: Props): Element<typeof View> => {
  const totNumOfCards: number = numOfCorrectCards + numOfIncorrectCards;
  const score: number = Math.round((numOfCorrectCards / totNumOfCards) * 100);
  const resultText: string = `${numOfCorrectCards} correct ${numOfCorrectCards === 1 ? 'answer' : 'answers'} out of ${totNumOfCards}, your score is:`;
  return (
    <View style={commonStyles.screenContainer}>
      <View style={commonStyles.blockTop}>
        <Text style={styles.resultText}>{resultText}</Text>
        <Text style={styles.score}>{score} %</Text>
      </View>
      <View style={commonStyles.blockBottom}>
        <BaseTouch
          button
          text="Restart Quiz"
          onPress={restartQuiz}
        />
        <BaseTouch
          button
          text="Back to Deck"
          onPress={backToDeck}
        />
      </View>
    </View>
  );
};

export default QuizResult;
