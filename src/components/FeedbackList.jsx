import { motion, AnimatePresence } from "framer-motion"

import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, deleteFeedback }) => {
  return (
    <div className='feeback-list'>
      <AnimatePresence>
        {feedback.length
          ? feedback.map(item => (
            <motion.div key={item.id} initial={{opacity: 0}} animate={{ opacity : 1 }} exit={{ opacity: 0}}>
              <FeedbackItem
                key={item.id}
                item={item}
                DeleteFeedback={() => deleteFeedback(item.id)}
              />
              </motion.div>
            ))
          : "No Feedback"}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
