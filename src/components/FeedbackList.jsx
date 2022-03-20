import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, DeleteFeedback }) => {

  
  return (
    <div className='feeback-list'>
      {feedback.length
        ? feedback.map(item => <FeedbackItem key={item.id} item={item} DeleteFeedback={() => DeleteFeedback(item.id)} />)
        : "No Feedback"}
    </div>
  )
}

export default FeedbackList
