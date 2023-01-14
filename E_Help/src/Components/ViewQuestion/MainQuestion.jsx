// import React from "react";
// import "react-quill/dist/quill.snow.css";
// import { Link } from "react-router-dom";
// import { AiOutlineArrowUp } from "react-icons/ai";
// import { AiOutlineArrowDown } from "react-icons/ai";
// import { Avatar } from "@mui/material";
// import { useState } from "react";
// import './index.css';
// import ReactQuill from "react-quill";

// function MainQuestion() {
//     const [show, setShow] = useState(false)
//     return (
//         <div className="main">
//             <div className="main-container">
//                 <div className="main-top">
//                     <h2 className="main-question">This is question title</h2>
//                     <Link to='/add-question'>
//                         <button>Ask Question</button>
//                     </Link>
//                 </div>
//                 <div className="main-desc">
//                     <div className="info">
//                         <p>Timestamp</p>
//                         <p>Active<span>today</span></p>
//                         <p>Viewed<span>43 times</span></p>
//                     </div>
//                 </div>
//                 <div className="all-questions">
//                     <div className="all-questions-container">
//                         <div className="all-questions-left">
//                             <div className="all-options">
//                                 <p className="arrow"> <AiOutlineArrowUp /> </p>
//                                 <p className="arrow">0</p>
//                                 <p className="arrow"> <AiOutlineArrowDown /> </p>
//                             </div>
//                         </div>
//                         <div className="question-answer">
//                             <p>This is question body</p>
//                             <div className="author">
//                                 <small>asked "Timestamp</small>
//                                 <div className="auth-details">
//                                     <Avatar />
//                                     <p>Author name</p>
//                                 </div>
//                             </div>
//                             <div className="comments">
//                                 <div className="comment">
//                                     <p> This is comment body = <span>User name</span> <small>Timestamp</small> </p>
//                                 </div>
//                                 <p onClick={() => setShow(!show)}>Add a comment</p>
//                                 {
//                                     show && (<div className="title">
//                                         <textarea style={{
//                                             margin:'5px 0px',
//                                             padding: "10px",
//                                             border: '1px solid orange',
//                                             borderRadius:'3px',
//                                             outline:'none',
//                                         }} type="text" placeholder="Add your comment..." rows={5} ></textarea>
//                                         <button style={{
//                                             maxwidth: 'fit-content'
//                                         }}>Add comment</button>
//                                     </div>
//                                     )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{
//                     flexDirection: 'column',

//                 }} className="all-questions">
//                     <p style={{
//                         marginBottom: '20px',
//                         fontSize:"1.3rem",
//                         fontWeight: '300'
//                     }}>No of answer</p>
//                     <div className="all-questions-container">
//                         <div className="all-questions-left">
//                             <div className="all-options">
//                                 <p className="arrow"> <AiOutlineArrowUp /> </p>
//                                 <p className="arrow">0</p>
//                                 <p className="arrow"> <AiOutlineArrowDown /> </p>
//                             </div>
//                         </div>
//                         <div className="question-answer">
//                             <p>This is answer body</p>
//                             <div className="author">
//                                 <small>asked "Timestamp</small>
//                                 <div className="auth-details">
//                                     <Avatar />
//                                     <p>Author name</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="main-answer">
//                 <h3 style={{
//                     fontSize: "22px",
//                     margin: "10px 0",
//                     fontweight: "400"
//                 }}>Your answer</h3>
//                 {/* <ReactQuill className="react-quill" theme="snow" style={{
//                     // height:'20px'
//                 }}/> */}
//                 <ReactQuill className="react-quill" theme="snow" style={{
//                     height: '200px'
//                 }}/>
            
//             </div>
//             <button style={{
//                 maxWidth: 'fit-content',
//                 marginTop: '100px'
//             }} >Post your Answer</button>
//         </div>
        

//     )
// }

// export default MainQuestion;


import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import ReactQuill from "react-quill";
// import Editor from "react-quill/lib/toolbar";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
// import { selectUser } from "../../feature/userSlice";
// import { stringAvatar } from "../../utils/Avatar";

function MainQuestion() {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [
      { color: ["#ff0000", "#00ff00", "#0000ff", "#220055"] },
      { background: [] },
    ], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    
  ];

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
//   const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    async function getFunctionDetails() {
      await axios
        .get(`/api/question/${id}`)
        .then((res) => setQuestionData(res.data[0]))
        .catch((err) => console.log(err));
    }
    getFunctionDetails();
  }, [id]);

  async function getUpdatedAnswer() {
    await axios
      .get(`/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  // console.log(questionData);
  const handleSubmit = async () => {
    const body = {
      question_id: id,
      answer: answer,
    //   user: user,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/api/answer", body, config)
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
       
      };
      await axios.post(`/api/comment/${id}`, body).then((res) => {
        setComment("");
        setShow(false);
        getUpdatedAnswer();
        // console.log(res.data);
      });
    }

    // setShow(true)
  };
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title} </h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
          {/* <a href="/add-question">
            <button>Ask Question</button>
          </a> */}
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked
              <span>{new Date(questionData?.created_at).toLocaleString()}</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
              <p>{ReactHtmlParser(questionData?.body)}</p>

              <div className="author">
                <small>
                  asked {new Date(questionData?.created_at).toLocaleString()}
                </small>
                <div className="auth-details">
                  <Avatar  />
                  <p>
                    {questionData?.displayName
                      ? questionData?.displayName
                      : "Muzammil"}
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  {questionData?.comments &&
                    questionData?.comments.map((_qd) => (
                      <p key={_qd?._id}>
                        {_qd.comment}{" "}
                        <span>
                          "Muzammil Iqbal"
                        </span>{" "}
                        {"    "}
                        <small>
                          {new Date(_qd.created_at).toLocaleString()}
                        </small>
                      </p>
                    ))}
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      onClick={handleComment}
                      style={{
                        maxWidth: "fit-content",
                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {questionData && questionData?.answerDetails.length} Answers
          </p>
          {questionData?.answerDetails.map((_q) => (
            <>
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                key={_q._id}
                className="all-questions-container"
              >
                <div className="all-questions-left">
                  <div className="all-options">
                    <p className="arrow">▲</p>

                    <p className="arrow">0</p>

                    <p className="arrow">▼</p>

                    <BookmarkIcon />

                    <HistoryIcon />
                  </div>
                </div>
                <div className="question-answer">
                  {ReactHtmlParser(_q.answer)}
                  <div className="author">
                    <small>
                      asked {new Date(_q.created_at).toLocaleString()}
                    </small>
                    <div className="auth-details">
                      <Avatar />
                      <p>
                        {_q?.displayName
                          ? _q?.displayName
                          : "Haris"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div> */}
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          value={answer}
          onChange={handleQuill}
        //   modules={Editor.modules}
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}

export default MainQuestion;
