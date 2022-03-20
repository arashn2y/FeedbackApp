import { useState, useEffect } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedbackForm = () => {
  const [text, setText] = useState("")
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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
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
