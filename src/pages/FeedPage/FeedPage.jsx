import React, { useEffect, useState} from "react"
import Header from "../../components/Header/Header"
import { ScreenContainer, PostsContainer, Nav } from "./styled";
import NewPost from "./NewPost";
import { BASE_URL } from "../../constants/urls";
import PostCard from "../../components/PostCard/PostCard";
import { useNavigate, useParams } from "react-router-dom";
import { protectedPage } from "../../routes/protectedPage";
import axios from "axios";
import { Hr } from "../../styled";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {CircularProgress} from "@mui/material";



const FeedPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState()
    const params = useParams()
    const nextPage = Number(params.page) + 1
    const prevPage = Number(params.page) - 1

    const getPosts = (page) => {          
        setPosts([])
        axios.get(`${BASE_URL}/posts?page=${page}&size=10` , {
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("token")
            }
          })
            .then((response) => {
              setPosts(response.data)
            })
            .catch((error) => {
              console.log(error.response.data)
            }) 
        }

    const updatePage = (page) => {
        navigate(`/${page}`)        
        getPosts(`${page}`)
    }

    useEffect(() => {
       protectedPage(navigate)
       getPosts(params.page)
    }, [params])
    
   
          return(
        <ScreenContainer> 
            <Header/>
            <NewPost getPosts={getPosts}/>
            <Hr/>
            <PostsContainer>
                
                {posts && (posts.length > 0 ?
                posts.map(post => {return <PostCard key={post.id} post={post}/>})
                :
                <CircularProgress/>)
                }                 
            </PostsContainer>
            <Nav>
              <IconButton onClick={() => updatePage(`${prevPage}`)}><NavigateBefore/></IconButton>
              <p>Página {params.page}</p>
              <IconButton onClick={() => updatePage(`${nextPage}`)}><NavigateNext/></IconButton>

            </Nav>
                      
            
        
        </ScreenContainer>
        
    )
        
}

export default FeedPage