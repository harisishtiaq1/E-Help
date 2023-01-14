import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './css/index.css';
import Sidebar from './sidebar';
import Main from './Main';


function Index(){

    const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        // setQuestions(res.data.reverse());
        console.log(res.data);
        setQuestions(res.data.reverse());

      }).catch((err) => {
        console.log(err);
      });
    }
    getQuestion();
  }, []);
    return(
        <div className='stack-index'>
            <div className='stack-index-content'>
              <Sidebar />
              <Main questions = {questions}/>
            </div>
        </div>
    )
}
export default index;
