import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <div className="container">
        <h1 className="title">Feedback App 💖💙💜</h1>
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}
