import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../pages/Home/Home";
import { Footer } from "../components/Footer/Footer"
import { Support } from "../pages/Support/Support";
import { Conclusion } from "../pages/Support/conclusion/Conclusion";
import { Thing } from "../pages/Thing/Thing";
import { Periph } from "../pages/Periph/Periph";

export function RouterBrowser (){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suporte" element={<Support />}/>
                <Route path="/certo" element={<Conclusion />} />
                <Route path="/acessorios" element={<Thing />} />
                <Route path="/perifericos" element={<Periph />} />
            </Routes>
            <Footer />
        </Router>
    )
}