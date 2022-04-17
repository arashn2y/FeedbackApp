import { useState, useEffect, useContext } from "react"

import FeedbackContext from "../context/FeedbackContext"
import Rating from "./Rating"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedbackForm = () => {
  const { addFeedback, selectedFeedback, editFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (selectedFeedback.isEdit) {
      setText(selectedFeedback.item.text)
      setRating(selectedFeedback.item.rating)
      setBtnDisabled(false)
    }
  }, [selectedFeedback])

  const textChangeHandler = e => {
    if (e.target.value === "") {
      setMessage(null)
      setBtnDisabled(true)
    } else if (e.target.value.length < 10) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  const selectHandler = rating => setRating(rating)
  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        id: selectedFeedback.isEdit ? selectedFeedback.item.id : Math.random() * 10,
        text,
        rating
      }
      selectedFeedback.isEdit ? editFeedback(newFeedback) : addFeedback(newFeedback)

      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={selectHandler} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={textChangeHandler}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            {selectedFeedback.isEdit ? "Update" : "Submit"}
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
