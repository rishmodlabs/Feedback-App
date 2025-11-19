import React, { useContext } from "react";
import RatingSelect from "./RatingSelect"; // optional - or use your RatingStars
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const date = new Date(item.createdAt || Date.now()).toLocaleString();

  return (
    <>
      <div className="feedback-main">
        <div className="feedback-meta">
          <strong>Rating:</strong>{" "}
          <span className="rating" style={{ display: "inline-block", marginLeft: 8 }}>
            {item.rating}
          </span>
          <span style={{ marginLeft: 8 }} className="small">• {date}</span>
        </div>
        <div style={{ fontSize: 15 }}>{item.text}</div>
      </div>

      <div className="feedback-actions">
        <button
          className="action-btn"
          aria-label="edit"
          onClick={() => editFeedback(item)}
        >
          ✎
        </button>
        <button
          className="action-btn"
          aria-label="delete"
          onClick={() => deleteFeedback(item.id)}
        >
          🗑️
        </button>
      </div>
    </>
  );
}
