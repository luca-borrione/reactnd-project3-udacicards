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


## Screenshots

**Decks' List**
![screen shot 2019-01-28 at 23 43 23](https://user-images.githubusercontent.com/23177229/51882895-735c7e80-2378-11e9-94cc-3a3cea913c00.png)

**New Deck**
![screen shot 2019-01-28 at 23 33 00](https://user-images.githubusercontent.com/23177229/51882891-72c3e800-2378-11e9-9379-bc2de8419525.png)

**Deck Detail**
![screen shot 2019-01-29 at 02 00 18](https://user-images.githubusercontent.com/23177229/51882899-73f51500-2378-11e9-9044-409c603b01ef.png)

**New Card**
![screen shot 2019-01-28 at 23 35 24](https://user-images.githubusercontent.com/23177229/51882893-735c7e80-2378-11e9-961b-71be1f016b03.png)

**Quiz Card Question**
![screen shot 2019-01-28 at 23 58 42](https://user-images.githubusercontent.com/23177229/51882896-73f51500-2378-11e9-908e-1c6f79b51dde.png)

**Quiz Card Answer**
![screen shot 2019-01-28 at 23 58 47](https://user-images.githubusercontent.com/23177229/51882897-73f51500-2378-11e9-89fd-bc156ee38a66.png)

**Quiz Result**
![screen shot 2019-01-29 at 00 03 16](https://user-images.githubusercontent.com/23177229/51882898-73f51500-2378-11e9-956a-1a3088ad323b.png)

**Notification**
![screen shot 2019-01-28 at 22 11 02](https://user-images.githubusercontent.com/23177229/51882890-72c3e800-2378-11e9-9f88-cb34957fd810.png)

## Tests
This mobile app has been developed using the xcode simulator (iPhone XR) and the android studio simulator (Pixel 2 XL) and it has been tested on an actual iPhone 5S device
