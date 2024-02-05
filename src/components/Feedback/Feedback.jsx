import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.currentTarget;
    this.setState(state => ({ [name]: state[name] + 1 }));
    console.log(this.state);
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const tolal = good + neutral + bad;
    return tolal;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      this.countTotalFeedback() > 0 &&
        (this.state.good / this.countTotalFeedback()) * 100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" name="good" onClick={this.handleClick}>
              Good
            </button>
          </li>
          <li>
            <button type="button" name="neutral" onClick={this.handleClick}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" name="bad" onClick={this.handleClick}>
              Bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <ul>
          <li>{good}</li>
          <li>{neutral}</li>
          <li>{bad}</li>
        </ul>
        <p>Total amount: {this.countTotalFeedback()}</p>
        <p>Positive percentage: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
