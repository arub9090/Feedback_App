import { v4 as uuidv4 } from 'uuid';
import {createContext, useState} from 'react';

const FeedbackContext= createContext();

export const FeedbackProvider =({children}) => {
    const [feedback, setFeedback]= useState([{
        id: 1,
        text: 'This is Feedback 1',
        rating: 10
    }, 
    {
        id: 2,
        text: 'This is Feedback 2',
        rating: 8
    },
    {
        id: 3,
        text: 'This is Feedback 3',
        rating: 6
    }])

    const [editFeedback, setEditFeedback] = useState({item: {}, edit: false})
 /**
  * Adding Feedback 
  */
    const addFeedbackHandler=(newFeedback)=>{
        newFeedback.id= uuidv4();
        setFeedback([newFeedback,...feedback]);
    }

    /**
     * Deleting feedback
     */

    const deleteFeedback=(id)=>{
        if (window.confirm("Are you Sure ?")) {
            setFeedback(feedback.filter((item)=> item.id !== id))   
        }
     }

     /**
      * Set the feedback to be edited
      */
     const editFeedbackHandler= (item) => {
        setEditFeedback( {item,
            edit: true})
     }

     /**
      * Updating the Feedbackform
      */

     const updateFeedback= (id, upDatedItem) => {
         setFeedback(
             feedback.map((item)=> (item.id ===id ? {...item,...upDatedItem}: item))
         )
     }


    return (
      <FeedbackContext.Provider
        value={{
          feedback,
          deleteFeedback,
          addFeedbackHandler,
          editFeedbackHandler,
          editFeedback,
          updateFeedback,
        }}
      >
        {children}
      </FeedbackContext.Provider>
    );
}

export default FeedbackContext;