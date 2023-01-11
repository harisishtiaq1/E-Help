import React from "react";
import './css/Header.css';
import {Avatar} from "@mui/material";
import { AiOutlineInbox } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
          <div className="header-container">
            <div className="header-left">
                <Link to = '/Stackoverflow'>  
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png" alt = 'logo' />
                {/* <img src = {require(".../images/logo.png")} alt = 'logo' /> */}
               
               </Link>
                <h3>AboutUs</h3>
            </div>
            <div className="header-middle">
                <div className="header-search-container">
                    <AiOutlineSearch />
                    <input type = 'text' placeholder="Search..." />
                </div>
            </div>
            <div className="header-right">
            <div className="header-right-container">
              <Avatar className="icon" /> 
              <AiOutlineInbox size={25} className="icon"/>
              <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
            </div>
            </div>
          </div>
        </header>
    )
}

export default Header