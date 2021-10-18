import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";


const Nav = ({LibraryStatus, SetLibraryStatus}) => {
    return(
        <nav>
            <h1>Chill-Music</h1>
            <button 
            onClick={() => SetLibraryStatus(!LibraryStatus)}
            >
            Library
            <FontAwesomeIcon  icon={faMusic} />
            </button>
        </nav>
    )

}

export default Nav;