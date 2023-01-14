import React from "react";
import './css/Main.css';
import { useNavigate } from "react-router-dom";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
<<<<<<< HEAD
function Main(){
    
    return(
        <div className="main">
        <div className="main-container">
        <div className="main-top">
            <h2>All Questions</h2>
            <Link to ="/add-question">
            
                Ask Question
            
            </Link>
        </div>
        <div className="main-desc">
            <p>All question stat</p>
        <div className="main-filter">
        <div className="main-tabs">
                <div className="main-tab">
                <Link>Newest</Link>
                </div>
                <div className="main-tab">
                <Link>Active</Link>
                </div>
                <div className="main-tab">
                <Link>More</Link>
                </div>
        </div>
        <div className="main-filter-item">
                <BsFillFilterCircleFill />
                <p>Filter</p>
                </div>   
        </div>
=======
>>>>>>> 0acad686f2d22be86a1bf2de7aeeb5da50326200

function Main({ questions }) {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2>Allquestions</h2>
                    <Link to='/add-question'>
                        <button>
                            Ask Question
                        </button>
                    </Link>
                </div>
                <div className="main-desc">
                    <p>{questions && questions.length} Questions</p>
                    <div className="main-filter">
                        <div className="main-tabs">
                            <div className="main-tab">
                                <Link>Newest</Link>
                            </div>
                            <div className="main-tab">
                                <Link>Active</Link>
                            </div>
                            <div className="main-tab">
                                <Link>More</Link>
                            </div>
                        </div>
                        <div className="main-filter-item">
                            <BsFillFilterCircleFill />
                            <p>Filter</p>
                        </div>
                    </div>

                </div>
                <div className="questions">
                    {
                        questions.map((_q, index) => (<><div key={index} className="question">
                            <AllQuestions question={_q} />

                        </div> </>))
                    }

                </div>
            </div>


        </div>
    )
}
export default Main