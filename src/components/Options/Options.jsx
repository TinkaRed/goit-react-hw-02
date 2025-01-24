import './Options.css';

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`btn btn-${option}`}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button type="button" className="btn btn-reset" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
