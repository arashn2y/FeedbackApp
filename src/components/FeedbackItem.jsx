import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, selectFeedback } = useContext(FeedbackContext)
  const { id, rating, text } = item

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}><FaTimes color='purple'/></button>
      <button className="edit" onClick={() => selectFeedback(item)}><FaEdit color='purple'/></button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

export default FeedbackItem
