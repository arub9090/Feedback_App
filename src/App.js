import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStates from "./components/FeedbackStates";
function App(){

    const [feedBack, setFeedBack] = useState(FeedbackData);
    const [togtheam, settogtheam] = useState(false);

    const deleteFeedback=(id)=>{
        window.confirm("Are you Sure ?");
        setFeedBack(feedBack.filter((item)=> item.id !== id))
    }

    const namePass=(reverse)=>{
        settogtheam(reverse);
    }

    return (
        <>
          <Header text="FeedBack APP" getData={namePass}/>
          <FeedbackStates feedBack={feedBack}/>
            <div className="container">  
            <FeedBackList feedBack={feedBack} handleDelete2={deleteFeedback} theam={togtheam}/>
            </div>
        </>
    )
}

export default App;