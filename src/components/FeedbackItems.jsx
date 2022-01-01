import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react';
import FeedbackContext from '../Context/FeedbackContex';

import Card from "./shared/Card";

function FeedbackItems({item, theam2}) {
  const {deleteFeedback, editFeedbackHandler} = useContext(FeedbackContext)
    return (
      <Card reverse={theam2}>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes color="purple" onClick={()=> deleteFeedback(item.id)}/>
        </button>
        <button className="edit">
          <FaEdit onClick={()=>editFeedbackHandler(item)} color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    );
}

FeedbackItems.propTypes= {
    item: PropTypes.object,
}

export default FeedbackItems
