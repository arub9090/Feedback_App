import PropTypes from 'prop-types'
import { AnimatePresence, motion } from "framer-motion"
import FeedbackItems from "./FeedbackItems";

function FeedBackList({feedBack, handleDelete2, theam}) {
    if (!feedBack || feedBack.length === 0) {
    return (<>Not Feedback Yet</>)        
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedBack.map((item)=>(
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItems key={item.id} item={item} handleDelete={handleDelete2} theam2={theam}/>
                </motion.div>
                
            ))}
            </AnimatePresence>
        </div>
    )
}
FeedBackList.propTypes={
    feedBack: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}

export default FeedBackList
