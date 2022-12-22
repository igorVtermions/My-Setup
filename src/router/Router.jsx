import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../pages/Home/Home";
import { Footer } from "../components/Footer/Footer"
import { Support } from "../pages/Support/Support";
import { Conclusion } from "../pages/Support/conclusion/Conclusion";

export function RouterBrowser (){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suporte" element={<Support />}/>
                <Route path="/certo" element={<Conclusion />} />
            </Routes>
            <Footer />
        </Router>
    )
}