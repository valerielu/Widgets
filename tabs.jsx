import React from 'react';

class Tabs extends React.Component {
  constructor(tabsdata) {
    super();
    this.props = tabsdata;
    this.state = {currentTab: 0};
  }

  handleClick(idx) {
    this.setState({currentTab: idx});
  }

  render () {
    const header = this.props.tabsdata.map((data, idx) => (
      <li onClick={this.handleClick.bind(this, idx)}
          key={idx}
          className={this.state.currentTab === idx ? "bold" : ""}>
          {data.title}
      </li>
    ));

    const content = this.props.tabsdata[this.state.currentTab].content;

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <ul>
          <h2>{header}</h2>
          <br/>
          <article>
            {content}
          </article>
        </ul>
      </div>
    );
  }
}

export default Tabs;
