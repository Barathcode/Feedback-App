import {motion, AnimatePresence} from "framer-motion"
import { useContext } from "react"
import React from 'react'
import FeedbackItems from "./FeedbackItems"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

  if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>No feedback yet</p>
  }

  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
            key={item.id} 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >
            <FeedbackItems key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return(
  // <div className="feedback-list">
  //   {feedback.map((item) => (
  //     <FeedbackItems key={item.id} item={item} 
  //     handleDelete={handleDelete} />
  //   ))}
  // </div>
  // )
}

export default FeedbackList
