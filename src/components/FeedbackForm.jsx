import React from 'react'
import { useState,useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackForm() {
    const [text,setText] =useState('')
    const [rating,setRating] =useState('')
    const [btnDisabled,setBtnDisabled] =useState(true)
    const [message,setMessage] =useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
       if (feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
       }
    },[feedbackEdit])

    const chandleTextChange =(e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !=='' && text.trim().length<=10){
            setMessage('text must be les than 10 char')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)

        }
        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text,
                rating
            }
            
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback);
            }
         
            setText('')
        }
    }
  return (
   <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service</h2>
            <RatingSelect select={(rating)=>setRating(rating)} />
            <div className='input-group'>
                <input type="text" value={text} onChange={chandleTextChange} placeholder='White a review'/>
                <Button type='submit' isDisabled={btnDisabled} version='secondary'>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm