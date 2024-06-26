import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(item.id)} color="purple" />{" "}
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
export default FeedbackItem;
