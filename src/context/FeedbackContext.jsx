import { createContext, useState } from "react"

import { feedbackData } from "../data/Feedback"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData)
  const [selectedFeedback, setSelectedFeedback] = useState({
    item: {},
    isEdit: false
  })

  const deleteFeedback = id => {
    window.confirm("Are you sure?")
    const newFeedbackList = feedback.filter(item => item.id !== id)
    setFeedback(newFeedbackList)
  }

  const addFeedback = newFeedback => {
    const newFeedbackList = [newFeedback, ...feedback]
    setFeedback(newFeedbackList)
  }

  const selectFeedback = item => {
    setSelectedFeedback({ item, isEdit: true })
  }

  const editFeedback = updatedFeedback => {
    const { id, text, rating } = updatedFeedback
    const newFeedbackList = feedback.map(item => (item.id === id ? { id, text, rating } : item))
    setFeedback(newFeedbackList)
    selectedFeedback.isEdit = false
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        selectedFeedback,
        deleteFeedback,
        addFeedback,
        selectFeedback,
        editFeedback
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
