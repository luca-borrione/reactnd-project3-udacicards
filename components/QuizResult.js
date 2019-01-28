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
  correctNumber: number,
  incorrectNumber: number,
};

const QuizResult = ({
  backToDeck,
  correctNumber,
  incorrectNumber,
  restartQuiz,
}: Props): Element<typeof View> => {
  const totNumOfCards: number = correctNumber + incorrectNumber;
  const score: number = Math.round((correctNumber / totNumOfCards) * 100);
  const resultText: string = `${correctNumber} correct ${incorrectNumber === 1 ? 'answer' : 'answers'} out of ${totNumOfCards}, your score is:`;
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
