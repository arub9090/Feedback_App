import { useState, useContext, useEffect} from "react"
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import FeedbackContext from "../Context/FeedbackContex";

import Card from "./shared/Card"

function FeedbackForm() {

    const {addFeedbackHandler, editFeedback, updateFeedback} = useContext(FeedbackContext);
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    useEffect(() => {
        if(editFeedback.edit === true){
            setBtnDisabled(false);
            setText(editFeedback.item.text);
            setRating(editFeedback.item.rating);
        }
        
    }, [editFeedback])


    const textHandler=(e)=>{
        if (text==='') {
            setBtnDisabled(true);
            setMessage(null)
        }else if (text !=='' && text.trim().length <=10) {
            setBtnDisabled(true);
            setMessage('It needs to be more than ten Charecters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback={
                text,
                rating,
            }

            if(editFeedback.edit === true){
                updateFeedback(editFeedback.item.id, newFeedback)
            }else{
                addFeedbackHandler(newFeedback);
            }
        }
        setText("");
    }

    return (
        <Card >
            <form onSubmit={submitHandler}>
            <h2>Please Write a Review for us</h2>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group">
                <input onChange={textHandler} type="text" name="" id="" value={text} placeholder="Write a Review" />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
          
            </form>
        </Card>
    )
    
}

export default FeedbackForm
