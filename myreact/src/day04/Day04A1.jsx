import { Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home.jsx"
import About from "./About.jsx"
import NotFound from "./NotFound.jsx"

export default function Day04A1(){
    return(
        <BrowserRouter>
        {/* 헤더에서 네비게이션(메뉴)를 설정해야 한다. */}
            <header>
                <Link to="/"> Home</Link> | 
                <Link to="/about"> About</Link> |  
                <Link to="/users"> Users</Link>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}