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

  componentWillMount() {
    this.setState({website: this.getWebsite()})
  };


  getWebsite() {
    var website ;
    chrome.tabs.getSelected(null,function(tab) {
      website = tab.url;
      this.setState({website: website});
    }.bind(this));
    // Todo: send information to server. 
  }
  renderTitle() {
    return (
      <h3>{this.state.website}</h3>
    );
  }

  render() {
    return (
      <header>
        {this.renderTitle()}
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="Thoughts?!"
        />
      </header>
    );
  }
}
