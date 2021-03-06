import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import style from './App.css';
import Home from '../components/Home';

@connect(
  state => ({
    todos: state.todos,
    website: state.website
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    website: PropTypes.string.isRequired
  };

  render() {
    const { todos, actions, website } = this.props;

    return (
        <div className={style.normal}>
            <Home />
        </div>

    )
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} addWebsite={actions.addWebsite} website={website} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}
