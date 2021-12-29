import { useState } from "react"
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";

import Card from "./shared/Card"

function FeedbackForm({addFeedback}) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);


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
            addFeedback(newFeedback);
            setText('');
        }
    }

    return (
        <Card >
            <form onSubmit={submitHandler}>
            <h2>Please Write a Review for us</h2>
            <RatingSelect select={(rating)=> setRating(rating)}/>
            <div className="input-group">
                <input onChange={textHandler} type="text" name="" id=" " />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
          
            </form>
        </Card>
    )
}

export default FeedbackForm
