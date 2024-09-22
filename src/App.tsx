import { Component } from 'react';
import './App.css';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './components/Notification/Notification';

interface IState {
  good: number;
  neutral: number;
  bad: number;
}

class App extends Component<{}, IState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option: string) => {
    this.setState(prevEvent => {
      return { ...prevEvent, [option]: prevEvent[option as keyof IState] + 1 };
    });
  };

  countTotalFeedback(): number {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(): number {
    const { good } = this.state;

    return Math.ceil((good * 100) / this.countTotalFeedback()) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className="App">
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
