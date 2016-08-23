import React from 'react';

class AutoComplete extends React.Component {
  constructor(names) {
    super();
    this.props = names;
    this.state = {names: names, search: ""};
  }

  handler(e) {
    this.setState({search: e.target.value});
  }

  clickHandler(e) {
    document.getElementById('auto-input').value = e.target.textContent;
    this.setState({search: e.target.textContent});
  }

  render() {
    let list = this.props.names.filter((name) => {
      let searchLength = this.state.search.length;
      return name.slice(0, searchLength).toLowerCase() === this.state.search.toLowerCase();
    });

    list = list.map((name) => (
      <li key={name} onClick={this.clickHandler.bind(this)}>{name}</li>
    ));

    return (
      <div className="autocomplete">
        <h1> Autocomplete </h1>

        <div className="input-list">
          <input type="text" onInput={this.handler.bind(this)} id="auto-input" placeholder="Search..."/>

          <ul className="names">
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

export default AutoComplete;
