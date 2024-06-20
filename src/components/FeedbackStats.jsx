import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  // Calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      // akumulator, hodnota
      return acc + cur.rating; // soucet hodnot ratingu
    }, 0) / feedback.length; // deleno poctem

  average = average.toFixed(1).replace(/[.,]0$/, ""); // na 1 des. misto / replace odstrani zbytecne 0 za des. carkou

  console.log(average);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
