interface IFeedBackOptions {
  options: string[];
  onLeaveFeedback: (option: string) => void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: IFeedBackOptions) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
