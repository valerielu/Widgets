import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs.jsx';
import Clock from './clock.jsx';
import Weather from './weather.jsx';
import AutoComplete from './autocomplete.jsx';


class Widgets extends React.Component {
  constructor() {
    super();
    this.tabsdata = [{title: "one", content:"I am the first"},
    {title:"two", content: "second pane here"},
    {title:'three', content: "third pane here"}];
    this.names = ["Abba",
                  "Barney",
                  "Barbara",
                  "Jeff",
                  "Jenny",
                  "Sarah",
                  "Sally",
                  "Xander"];
  }

  render() {
    return (
      <div className="widgets">
        <Clock />
        <Weather />
        <AutoComplete names={this.names} />
        <Tabs tabsdata={this.tabsdata} />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Widgets />, root);
});
