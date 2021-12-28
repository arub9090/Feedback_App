import PropTypes from 'prop-types'

function FeedbackStates({feedBack}) {
    // calculate rating 

    let average= feedBack.reduce((acc,curr)=>{
        return acc+curr.rating
    }, 0) / feedBack.length;

    average= average.toFixed(1).replace(/[.,]0$/,'');

    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStates.propTypes= {
    feedBack: PropTypes.array.isRequired,
}
export default FeedbackStates
