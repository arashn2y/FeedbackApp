const FeedbackStats = ({ feedback }) => {

  const rating = feedback.reduce((prevValue, currValue) => prevValue + currValue.rating, 0)
  const averageRating = feedback.length ? (rating / feedback.length).toFixed(1).replace(/[.,]0$/, ''): 0;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {averageRating}</h4>
    </div>
  )
}

export default FeedbackStats