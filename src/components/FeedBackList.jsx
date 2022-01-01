import { AnimatePresence, motion } from "framer-motion"
import FeedbackItems from "./FeedbackItems";
import {useContext} from 'react';
import FeedbackContext from '../Context/FeedbackContex';


function FeedBackList({theam}) {
    const {feedback } = useContext(FeedbackContext);
    if (!feedback || feedback.length === 0) {
    return (<>Not Feedback Yet</>)        
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItems key={item.id} item={item} theam2={theam}/>
                </motion.div>
                
            ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedBackList
