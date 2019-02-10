import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getNewQuote } from './store';

import Text from './components/Text/Text';
import Author from './components/Author/Author';
import Button from './components/Button/Button';
import TwitterLink from './components/TwitterLink/TwitterLink';


class App extends Component {
  componentDidMount() {
    this.props.getQuote();
  }

  render() {
    return (
      <div className='wrapper' id="quote-box">
        <Button getQuote={this.props.getQuote} />
        <TwitterLink quote={this.props.quote} />
        <Text text={this.props.quote.text} />
        <Author auth={this.props.quote.author} />
      </div>
    );
  }
}

const addStateToProps = (state) => {
  return {
    quote: state.currentQuote
  }
}

const addDispatchToProps = (dispatch) => {
  return {
    getQuote: () => {
      dispatch(getNewQuote())
    }
  }
}

export default connect(
  addStateToProps,
  addDispatchToProps
)(App)
