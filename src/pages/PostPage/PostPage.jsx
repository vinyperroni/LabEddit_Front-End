import React, { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { PostCommentContainer, ScreenContainer } from "./styled"
import PostCard from "../../components/PostCard/PostCard"
import CommentCard from "../../components/CommentCard/CommentCard"
import GlobalContext from "../../context/GlobalContext"
import {Hr} from "../../styled"
import { TextField, Button } from "@mui/material"
import { primaryColor, secundaryColor } from "../../constants/colors"
import CircularProgress from '@mui/material/CircularProgress'
import useForm from "../../hooks/useForm"
import { createComment } from "../../services/post"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useNavigate, useParams } from "react-router-dom"
import {protectedPage} from "../../routes/protectedPage"



const PostPage = () => {
    const navigate = useNavigate()
    const {selectedPost, setSelectedPost} = useContext(GlobalContext)
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    

    const [form, onChange, clear] = useForm({ body: "" })


    useEffect(() => {
        protectedPage(navigate)
        if (localStorage.getItem("post")) {
            setPost(JSON.parse(localStorage.getItem("post")))
        }else{
            setPost(selectedPost)
            localStorage.setItem("post", JSON.stringify(selectedPost))
        }
        getComments()
    }, [setSelectedPost])

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, post.id, clear, setIsLoading, getComments, setPost, post)
    }

    
    const getComments = () => {
        axios.get(`${BASE_URL}/posts/${params.id}/comments?page=1&size=1000`, {
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setComments(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    

    return(
        <ScreenContainer>
        <Header/>
        
        <PostCommentContainer onSubmit={onSubmitForm}>
            <PostCard key={post.id} post={post}/>              
            <TextField
                name="body"
                id="outlined-multiline-static"
                placeholder="Digite seu comentário aqui..."
                multiline
                rows={4}
                value={form.body}
                onChange={onChange}                
                sx={{
                    background: "#EDEDED",
                    boxSizing: "border-box",
                    borderRadius: "20px",
                    "fieldset":{
                        borderRadius: "20px",
                        border: "none",
                    }
                }}
            />
            <Button                    
                variant={"contained"}     
                sx={{
                    textTransform: 'none',                
                    borderRadius: '100px',
                    backgroundImage: `linear-gradient(to right, ${secundaryColor} 0%, ${primaryColor}  51%, ${secundaryColor}  100%)`,
                    transition: '0.5s',
                    backgroundSize: '200% auto',
                    '&:hover': {
                        backgroundPosition: 'right center',
                        textDecoration: 'none',

                    }
                }}
                type={"submit"}  
            >
                {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
            </Button>                
              
        </PostCommentContainer>
        <Hr/>
        {comments && (comments.length > 0 ?
         comments.map(comment => {return <CommentCard  comment={comment} key={comment.id}/>})
        :
        <p>Sem comentários</p>
        )}

        </ScreenContainer>
    )
}

export default PostPage