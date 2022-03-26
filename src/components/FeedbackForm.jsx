import { useState, useEffect } from "react"
import Rating from "./Rating"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedbackForm = ({ addHandler }) => {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (text === "") {
      setMessage(null)
      setBtnDisabled(true)
    } else if (text !== "" && text.length < 11) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }, [text])

  const textChangeHandler = e => setText(e.target.value)
  const selectHandler = rating => setRating(rating)
  const addFeedback = e => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        id: Math.random() * 10,
        text,
        rating
      }
      addHandler(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={addFeedback}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={selectHandler}/>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={textChangeHandler}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
