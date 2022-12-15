import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../pages/Home/Home";

export function RouterBrowser (){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}