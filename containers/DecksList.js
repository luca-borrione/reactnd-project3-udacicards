// @flow
import { connect } from 'react-redux';
import { type List } from 'immutable';
import toJS from '../hoc/to-js';
import { getDecks } from '../selectors/decks';
import DecksList from '../components/DecksList';
import {
  type DeckMap,
  type StateMap,
} from '../utils/types';

const mapStateToProps = (state: StateMap): {
  decks: List<DeckMap>,
} => ({
  decks: getDecks(state),
});

export default connect(
  mapStateToProps,
)(toJS(DecksList));
