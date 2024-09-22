interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

function Statistics({ good, neutral, bad, total, positivePercentage }: IStatisticsProps) {
  return (
    <div>
      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {positivePercentage}%
      </p>
    </div>
  );
}

export default Statistics;
