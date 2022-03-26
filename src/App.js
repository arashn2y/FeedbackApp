import { useState } from "react"

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import { feedbackData } from "./data/Feedback"
import FeedbackForm from "./components/FeedbackForm"

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = id => {
    window.confirm("Are you sure?")
    const newFeedbackList = feedback.filter(item => item.id !== id)
    setFeedback(newFeedbackList)
  }

  const addFeedback = newFeedback => {
    const newFeedbackList = [newFeedback, ...feedback]
    setFeedback(newFeedbackList)
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm addHandler={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  )
}

export default App
