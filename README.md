# Mobile Flashcards Project

This is the final assessment project for Udacity's React Native course, which is part of the [React Nanodegree program](https://eu.udacity.com/course/react-nanodegree--nd019)

A flashcard is a card bearing information, used in classroom drills or in private study. One writes a question on a side and an answer overleaf. Flashcards exercise the mental process of active recall: given a prompt (the question), one produces the answer.

This mobile app meets the [project specifications](https://review.udacity.com/#!/rubrics/1021/view) required by Udacity and in particular:
- the mobile starts with the decks list view, containing a tab to navigate to the new deck screen
- tapping over a deck the user can enter the deck view, contanings buttons to:
  - add a new card to the deck
  - start the quiz
  - delete the deck
- the quiz shows the card details one at a time
- the card view starts showing the question and buttons to:
  - show the answer
  - delete the card
- when the answer is shown, the app reveals two new buttons to mark the answer as:
  - correct
  - incorrect
- once all the questions have been answered a result screen contaning the score achieved by the user is shown
- the app contains a feature to show a notification every day at 8:00pm to remind the user to go through at least one quiz.


## Tech Stack:
- [Node](https://nodejs.org):
A JavaScript runtime built on Chrome's V8 JavaScript engine
- [React Native](https://facebook.github.io/react-native/):
A JavaScript library for building native mobile apps using JavaScript and React
- [Redux](https://redux.js.org/):
A predictable state container for JavaScript apps.
- [Immutable JS](https://facebook.github.io/immutable-js/):
Immutable collections for JavaScript
- [Flow](https://flow.org/):
Static type checker for JavaScript
- [ESLint](https://eslint.org/):
Lintint utility for JavaScript and JSX


## Commands

* install all project dependencies with `npm install` (version used 6.5.0)
* start the development server with `expo start`
* start the flow server with `npm run flow`




