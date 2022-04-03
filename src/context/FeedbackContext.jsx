import { createContext, useState } from "react"

import { feedbackData } from "../data/Feedback"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
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
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
