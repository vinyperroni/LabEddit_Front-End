import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect} from 'react';
import axios from "axios";
import { goToPostPage } from "../routes/coordinator";

export default function GlobalProvider(props) {
    const [selectedPost, setSelectedPost] = useState({})

  const goToPostDetails = (navigate, id, post) => {
    
    setSelectedPost(post)
    
    goToPostPage(navigate, id)  
  }
  
    return(
        <GlobalContext.Provider value={{selectedPost, goToPostDetails}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
