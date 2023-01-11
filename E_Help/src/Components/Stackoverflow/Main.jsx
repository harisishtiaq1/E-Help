import React from "react";
import './css/Main.css';
import { BsFillFilterCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
function Main(){
    return(
        <div className="main">
        <div className="main-container">
        <div className="main-top">
            <h2>Allquestions</h2>
            <Link to = '/add-question'>
            <button>
                Ask Question
            </button>
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

        </div>
        <div className="questions">
        <div className="question">
                <AllQuestions />
                <AllQuestions />
                <AllQuestions />
                <AllQuestions />
                </div> 
                </div>  
        </div>


        </div>
    )
}
export default Main