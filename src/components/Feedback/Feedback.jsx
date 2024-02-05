import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.currentTarget;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const tolal = good + neutral + bad;
    return tolal;
  }

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100 || 0);

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <h1>Please leave feedback</h1>

        <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
