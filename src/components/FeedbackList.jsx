import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <div className="card empty">No feedback yet — be the first to leave one!</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div className="card feedback-item" key={item.id}>
          <FeedbackItem item={item} />
        </div>
      ))}
    </div>
  );
}
