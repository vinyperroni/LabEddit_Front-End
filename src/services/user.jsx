import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from '../routes/coordinator'

export const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(navigate)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err)
            
        })
}

export const signUp = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(navigate)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}