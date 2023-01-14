import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import './css/AllQuestions.css';
import ReactHtmlParser from 'react-html-parser'
function AllQuestions({question}){
    // console.log(question?.tags[0]);    
    let tags = JSON.parse(question?.tags[0])
   function truncate (str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }
    // const tags = [];
    return(
        <div className="all-questions">
            <div className="all-questions-container">
            <div className="all-questions-left">
            <div className="all-options">
            <div className="all-option">
                <p>0</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>{question?.answerDetails?.length}</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <small>0 Views</small>
            </div>
            </div>
            </div>
            <div className="question-answer">
                <Link to ={`/question?q=${question?._id}`}>{question.title}</Link>
                <div style={{
                    widtht: "90%"
                }}>
                <div>
                  {ReactHtmlParser(truncate(question?.body, 200))}
                </div>
            </div>
            <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>
            <div className="author">
                <small>{new Date(question?.created_at).toLocaleString()}</small>
                <div className="author-details">
                    <AiOutlineUser src = {question?.user?.photo} />
                    {/* <p>{question?.user?.displayName ? question?.user?.displayName :  String (question?.user?.email).split('@')[0]}</p> */}
                    <p>
                {question?.user?.displayName
                  ? question?.user?.displayName
                  : "Muzammil Iqbal"}
              </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}
export default AllQuestions