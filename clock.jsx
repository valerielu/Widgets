import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
    this.intervalId = undefined;
  }

  refresh() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.intervalId = setInterval(this.refresh.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const date = this.state.date;
    return (
      <div className="clock">
        <h1> Clock </h1>
        <div className="timedate">
          <h1>Time: {date.toTimeString()}</h1>
          <h1>Date: {date.toDateString()}</h1>
        </div>
      </div>
    );
  }
}

export default Clock;
