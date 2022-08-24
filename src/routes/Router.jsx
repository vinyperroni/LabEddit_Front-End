import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostPage from "../pages/PostPage/PostPage"
import FirstPage from "../pages/FirstPage/FirstPage"


const Router = () => {
    

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<FirstPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<SignUpPage/>}/>
                <Route path="/:page" element={<FeedPage/>}/>
                <Route path="/post/:id" element={<PostPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router