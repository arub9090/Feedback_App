import PropTypes from 'prop-types'

import FeedbackItems from "./FeedbackItems";

function FeedBackList({feedBack, handleDelete2, theam}) {
    if (!feedBack || feedBack.length === 0) {
    return (<>Not Feedback Yet</>)        
    }

    return (
        <div className="feedback-list">
            {feedBack.map((item)=>(
                <FeedbackItems key={item.id} item={item} handleDelete={handleDelete2} theam2={theam}/>
            ))}
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
