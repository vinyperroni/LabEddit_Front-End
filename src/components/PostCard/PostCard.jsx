import React, { useState, useContext } from "react"
import { CardContainer, Comments, Votes } from "./styled"
import vote from "../../assets/vote.svg"
import unvote from "../../assets/unvote.svg"
import comment from "../../assets/comment.svg"
import { onUnVote, onVote } from "../../services/post"
import voted from "../../assets/voted.svg"
import unvoted from "../../assets/unvoted.svg"
import { useNavigate } from "react-router-dom"

import GlobalContext from "../../context/GlobalContext"

const PostCard = (props) => {
    const navigate = useNavigate()
    const [userVote, setUserVote] = useState(props.post.userVote)
    const [votes, setVotes] = useState(props.post.voteSum)

    const { goToPostDetails } = useContext(GlobalContext);

    return(
        <CardContainer>
            <p>Enviado por: {props.post && props.post.username}</p>
            <p id="comment">{props.post && props.post.body}</p>
            <div>
                <Votes>
                    {props.post && ((userVote === 1)
                    ? 
                    <img src={voted} alt="voted" onClick={() => onVote(props.post.id, setUserVote, setVotes, votes, userVote, "posts")}/>
                    :
                    <img src={vote} alt="vote" onClick={() => onVote(props.post.id, setUserVote, setVotes, votes, userVote, "posts")}/>
                    )}
                    
                    <p>{props.post && ((votes === null)? 0 : votes)}</p>
                    {props.post && ((userVote === - 1)
                    ? 
                    <img src={unvoted} alt="unvoted" onClick={() => onUnVote(props.post.id, setUserVote, setVotes, votes, userVote, "posts")}/>
                    :
                    <img src={unvote} alt="unvote" onClick={() => onUnVote(props.post.id, setUserVote, setVotes, votes, userVote, "posts")}/>
                    )}

                </Votes>
                <Comments onClick={() => goToPostDetails(navigate, props.post.id, props.post)}>
                <img src={comment} alt="comment" />
                <p>{props.post && ((props.post.commentCount === null)? 0 : props.post.commentCount)}</p>
                </Comments>
            </div> 
        </CardContainer>
    )
}

export default PostCard