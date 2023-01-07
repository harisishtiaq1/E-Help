import React from 'react'
import "../Question/Question.css"
function Question() {
  return (
    <div className='container'>
      <div className='signin-wrap'>
        <div className='pad-content'>
      <form>
    <div className='d-flex align-items-center justify-content-center left'>
    <h1>Ask A Question</h1>
    </div>
    <div className='left d-flex flex-column'>
        <h3>Title</h3>
        <p>Be specific and imagine you are asking a question to another person.</p>
        <input type="text" placeholder="Title of your Question" className='form-control'/>
    </div>
    <div className='left d-flex flex-column'>
        <h3>Description</h3>
        <p>Introduce the problem and expand on what you put in the title.</p>
        <textarea className='form-control' cols="30" rows="8" placeholder='What You want to ask'>
          
        </textarea>
    </div>
    <button type="submit" className="btn mb-3 clr left" >
              Submit
            </button>
            </form>
    </div>
    </div>
    </div>
  )
}

export default Question