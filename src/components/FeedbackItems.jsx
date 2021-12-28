import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

import Card from "./shared/Card";

function FeedbackItems({item, handleDelete, theam2}) {
    return (
      <Card reverse={theam2}>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes color="purple" onClick={()=> handleDelete(item.id)}/>
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    );
}

FeedbackItems.propTypes= {
    item: PropTypes.object,
}

export default FeedbackItems
