import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear, setIsLoading, getPosts, navigate) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        navigate("/1")
        clear()
        setIsLoading(false)
        getPosts("1")
        
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
}

export const createComment = (body, id, clear, setIsLoading, getComments, setPost, post) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        clear()
        setIsLoading(false)
        getComments()
        setPost({...post, commentCount: Number(post.commentCount) + 1})
        localStorage.setItem("post", JSON.stringify({...post, commentCount: Number(post.commentCount) + 1}))    
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
}

export const onVote = (id, setUserVote, setVotes, votes, userVote, type) => {
  const url = `${BASE_URL}/${type}/${id}/votes`
  if (userVote === null) {
    const body = {
      direction: 1
    }
      axios.post(url, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setUserVote(1)
        setVotes(`${Number(votes) + 1}`)
      })
      .catch((err) => {
        console.log(err)
        
      })
    }else if (userVote === -1) {
      const body = {
        direction: 1
      }
        axios.put(url, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then((res) => {
          setUserVote(1)
          setVotes(`${Number(votes) + 2}`)
        })
        .catch((err) => {
          console.log(err)
          
        })
      }else if (userVote === 1) {
        axios.delete(url, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
          .then((res) => {
            setUserVote(null)
            setVotes(`${Number(votes) - 1}`)
          })
          .catch((err) => {
            console.log(err)
            
          })
          
      }
}

export const onUnVote = (id, setUserVote, setVotes, votes, userVote, type) => {
  const url = `${BASE_URL}/${type}/${id}/votes`
  if (userVote === null) {
    const body = {
      direction: -1
    }
      axios.post(url, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setUserVote(-1)
        setVotes(`${Number(votes) - 1}`)
      })
      .catch((err) => {
        console.log(err)
        
      })
  }else if (userVote === 1) {
    const body = {
      direction: -1
    }
      axios.put(url, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setUserVote(-1)
        setVotes(`${Number(votes) - 2}`)
      })
      .catch((err) => {
        console.log(err)
        
      })
  }else if (userVote === -1) {
    axios.delete(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setUserVote(null)
        setVotes(`${Number(votes) + 1}`)
      })
      .catch((err) => {
        console.log(err)
        
      })
      
  }
}