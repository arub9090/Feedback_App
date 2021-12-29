import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
function App(){

    const [feedBack, setFeedBack] = useState(FeedbackData);
    const [togtheam, settogtheam] = useState(false);

    const deleteFeedback=(id)=>{
       
       if (window.confirm("Are you Sure ?")) {
        setFeedBack(feedBack.filter((item)=> item.id !== id))   
       }
    }

    const namePass=(reverse)=>{
        settogtheam(reverse);
    }

    const addFeedbackHandler=(newFeedback)=>{
        newFeedback.id= uuidv4();
        setFeedBack([newFeedback,...feedBack]);
    }

    return (
        <>
          <Header text="FeedBack APP" getData={namePass}/>
          
            <div className="container">  
            <FeedbackForm addFeedback={addFeedbackHandler}/>
            <FeedbackStates feedBack={feedBack}/>
            <FeedBackList feedBack={feedBack} handleDelete2={deleteFeedback} theam={togtheam}/>
            </div>
        </>
    )
}

export default App;