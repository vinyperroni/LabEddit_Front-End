import React, { useState} from "react"
import { CardContainer, Votes } from "./styled"
import vote from "../../assets/vote.svg"
import unvote from "../../assets/unvote.svg"
import { onUnVote, onVote } from "../../services/post"
import voted from "../../assets/voted.svg"
import unvoted from "../../assets/unvoted.svg"


const CommentCard = (props) => {
    const [userVote, setUserVote] = useState(props.comment.userVote)
    const [votes, setVotes] = useState(props.comment.voteSum)



    return(
        <CardContainer>
            <p>Enviado por: {props.comment && props.comment.username}</p>
            <p id="comment">{props.comment && props.comment.body}</p>
            <div>
                <Votes>
                    {props.comment && ((userVote === 1)
                    ? 
                    <img src={voted} alt="voted" onClick={() => onVote(props.comment.id, setUserVote, setVotes, votes, userVote, "comments")}/>
                    :
                    <img src={vote} alt="vote" onClick={() => onVote(props.comment.id, setUserVote, setVotes, votes, userVote, "comments")}/>
                    )}
                    
                    <p>{props.comment && ((votes === null)? 0 : votes)}</p>
                    {props.comment && ((userVote === - 1)
                    ? 
                    <img src={unvoted} alt="unvoted" onClick={() => onUnVote(props.comment.id, setUserVote, setVotes, votes, userVote, "comments")}/>
                    :
                    <img src={unvote} alt="unvote" onClick={() => onUnVote(props.comment.id, setUserVote, setVotes, votes, userVote, "comments")}/>
                    )}

                </Votes>
            </div> 
        </CardContainer>
    )
}

export default CommentCard