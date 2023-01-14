import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import  {TagsInput}  from 'react-tag-input-component';
import "./Question.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import {selectUser} from '../../features/userSlice';


function Question(){

    // const user = useSelector(selectUser)

    // const [loading, setLoading] = userState(false)

const [title, setTitle] = React.useState("")
const [body, setBody] = React.useState("")
const [tags, setTags] = React.useState("")

const history = useHistory()

const handleQuill = (value) => {
    setBody(value)
}

const handleSubmit = async (e) => {
    e.preventDefault()

    if(title !== "" && body !== "") {
        // setLoading(true)
        const bodyJSON = {
            title: title,
            body: body,
            tag: JSON.stringify(tags),
            // user: user
        }
        await axios.post('/api/question', bodyJSON).then((res) => {
            alert('Question added successfully')
            // setLoading(false)
            history.push('/')
        }).catch((err) => {
            console.log(err)
            // setLoading(false)
        })
    }
}
    return(
        
        
         <div className="add-question">
        <div className="add-question-container">
        <div className="head-title">
            <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
        <div className="question-options">
        <div className="question-option">
        <div className="title">
            <h3>
                Title
            </h3>
            <small>Be specific and imaging you're asking a question to
                another
                person
            </small>
            <input value = {title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add question titile" />
        </div>
        </div>
        <div className="question-option">
        <div className="title">
            <h3>
                Body
            </h3>
            <small>Include all the information someone would need to
                qnswer your
                question
            </small>
            <ReactQuill value={body} onChange={handleQuill} className="react-quill" theme="snow"/>
        </div>
        </div>
        <div className="question-option">
        <div className="title">
            <h3>
            Tags
            </h3>
            <small>Add up to 5 tags to your question</small>
<<<<<<< HEAD
            <div name = "tags" placeHolder="press enter to add new tag"/>
=======
            <TagsInput value={tags} onChange={setTags} name = "tags" placeHolder="press enter to add new tag"/>
>>>>>>> 0acad686f2d22be86a1bf2de7aeeb5da50326200
        </div>
        </div>
        </div>
        </div>
        {/* <button disabled={loading} type="submit" onClick={handleSubmit} className="button">{
            loading ? 'Adding question..' : 'Add your question'
        }</button> */}
        <button type="submit" onClick={handleSubmit} className="button">{
        }Add your question</button>
        </div>
        </div>        
    )
}
export default Question;
