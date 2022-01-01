import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';

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
      <Router>
        <Header text="FeedBack APP" getData={namePass} />
        <div className="container">
          <Routes>
            <Route
              eaxct
              path="/"
              element={
                <>
                  <FeedbackForm addFeedback={addFeedbackHandler} />
                  <FeedbackStates feedBack={feedBack} />
                  <FeedBackList
                    feedBack={feedBack}
                    handleDelete2={deleteFeedback}
                    theam={togtheam}
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />}></Route>

            <Route path='/post/*' element={<Post />}></Route>

          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    );
}

export default App;