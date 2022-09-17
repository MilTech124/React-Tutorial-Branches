import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text,setText] =useState('')

    const chandleTextChange =(e)=>{
        setText(e.target.value);
    }
  return (
   <Card>
        <form>
            <h2>How would you rate your service</h2>
            <div className='input-group'>
                <input type="text" value={text} onChange={chandleTextChange} placeholder='White a review'/>
                <Button type='submit' version='secondary'>Send</Button>
            </div>

        </form>
    </Card>
  )
}

export default FeedbackForm