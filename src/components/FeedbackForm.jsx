import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  // Load existing feedback into form while editing
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { text, rating };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newData);
    } else {
      addFeedback(newData);
    }

    // Reset
    setText("");
    setRating(5);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>{feedbackEdit.edit ? "Edit Feedback" : "Add Feedback"}</h2>

      <RatingSelect select={setRating} selected={rating} />

      <textarea
        placeholder="Write your feedback…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn">
        {feedbackEdit.edit ? "Update" : "Submit"}
      </button>
    </form>
  );
}
