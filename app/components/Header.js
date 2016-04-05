import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    addWebsite: PropTypes.func.isRequired,
    website: PropTypes.string.isRequired
  };

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  renderTitle() {
    return (
      <h1>{this.props.website}</h1>
    );
  }

  render() {
    return (
      <header>
        {this.renderTitle()}
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
