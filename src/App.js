import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import { feedbackData } from "./data/Feedback"
import FeedbackForm from "./components/FeedbackForm"

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData)

  const DeleteFeedback = id => {
    window.confirm('Are you sure?')
    const NewFeedbackList = feedback.filter(item => item.id !== id)
    setFeedback(NewFeedbackList)
  }

  return (
    <>
      <Header />
      <div className="container">
      <FeedbackStats feedback={feedback}/>
      <FeedbackForm />
      <FeedbackList feedback={feedback} DeleteFeedback={DeleteFeedback}/>
      </div>
    </>
  )
}

export default App
