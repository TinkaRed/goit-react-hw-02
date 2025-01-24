import './Feedback.css';

const Feedback = ({ feedback, total, positivePercentage }) => {
return (
    <div className="feedback">
    <h2>Statistics</h2>
    <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
    </ul>
    </div>
);
};

export default Feedback;
