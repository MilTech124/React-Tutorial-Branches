import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext= createContext()

export const FeedbackProvider = ({children}) => {
    const[feedback,setFeedback]=useState([
        {
            id:1,
            text:'This is Feedback 1',
            rating:10
        }, {
            id:2,
            text:'This is Feedback 2',
            rating:10
        }, {
            id:3,
            text:'This is Feedback 3',
            rating:10
        }
    ])

    const [feedbackEdit,setFeedbackEdit] =useState({
        item :{
            edit:false
        }
    })
    //DELETE FEEDBACK
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure to delete')){
            setFeedback(feedback.filter((item)=>
                item.id !== id
            ))
        }
    }

    //UPDATE FEEDBACK ITEM
    const updateFeedback = (id,updItem) => {
        setFeedback(feedback.map((item)=>(
            item.id===id ? {...item,...updItem} : item
        )
        )
        )
    }

    //Set item to be updated
    const editFeedback = (item)=> {
        setFeedbackEdit({
            item,
            edit:true
        })
    
    }
    //ADD FEEDBACK
    const addFeedback = (newFeedback) => {
        newFeedback.id=uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    return (
        <FeedbackContext.Provider 

            value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
            }}>

            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext