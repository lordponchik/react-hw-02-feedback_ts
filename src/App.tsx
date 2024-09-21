import { Component } from 'react';
import './App.css';

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

  onLiveFeedback(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const name = evt.currentTarget.name as keyof IState;

    this.setState(prevEvent => {
      return { ...prevEvent, [name]: prevEvent[name] + 1 };
    });
  }

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

    return (
      <div className="App">
        <div>
          <h2>Please leave Feedback</h2>

          <form>
            <button
              type="button"
              name="good"
              onClick={e => {
                this.onLiveFeedback(e);
              }}
            >
              Good
            </button>
            <button
              type="button"
              name="neutral"
              onClick={e => {
                this.onLiveFeedback(e);
              }}
            >
              Neutral
            </button>
            <button
              type="button"
              name="bad"
              onClick={e => {
                this.onLiveFeedback(e);
              }}
            >
              Bad
            </button>
          </form>
        </div>
        <div>
          <h2>Statistics</h2>

          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>

          <p>Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback:
            {this.countPositiveFeedbackPercentage()}%
          </p>
        </div>
      </div>
    );
  }
}

export default App;
