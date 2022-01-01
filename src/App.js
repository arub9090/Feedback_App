
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './Context/FeedbackContex';


function App(){

    const [togtheam, settogtheam] = useState(false);



    const namePass=(reverse)=>{
        settogtheam(reverse);
    }

    return (
      <FeedbackProvider>
        <Router>
          <Header text="FeedBack APP" getData={namePass} />
          <div className="container">
            <Routes>
              <Route
                eaxct
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStates />
                    <FeedBackList theam={togtheam} />
                  </>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
    );
}

export default App;