import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: uuid(), text: "Amazing app!", rating: 5 },
    { id: uuid(), text: "Looks beautiful!", rating: 4 },
  ]);

  // holds item being edited: { item: {...}, edit: true } or { item: {}, edit: false }
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // add
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback]);
  };

  // delete
  const deleteFeedback = (id) => {
    if (confirm("Delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // set item to be edited (called when user clicks Edit)
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // update an item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
    // clear edit state
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
