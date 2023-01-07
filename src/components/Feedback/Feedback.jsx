import { Component } from 'react';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbakOptions';
import Statistics from './Statistics/Statistics';

export class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleBtnClick = event => {
    const value = event.target.value;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, quantity) => {
      return total + quantity;
    }, 0);
  }

  countPositiveFeedbackPercentage(totalFeedbacksQuantity) {
    const { good } = this.state;
    return `${Math.round((good / totalFeedbacksQuantity) * 1000) / 10}%`;
  }

  render() {
    const labels = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedbacksQuantity = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={labels}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalFeedbacksQuantity ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              options={labels}
              total={totalFeedbacksQuantity}
              positivePercentage={this.countPositiveFeedbackPercentage(
                totalFeedbacksQuantity
              )}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
