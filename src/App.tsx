import './App.scss'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import HeroA from "./pages/hero-A/HeroA";
import HeroB from "./pages/hero-B/HeroB";
import HeroC from "./pages/hero-C/HeroC";
import HeroD from "./pages/hero-D/HeroD";
import Pricing from "./pages/pricing/Pricing";
import Product from "./pages/product/Product";
import LoginA from "./pages/login-A/LoginA";
import LoginB from "./pages/login-B/LoginB";


const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hero-1" element={<HeroA/>}/>
                <Route path="/hero-2" element={<HeroB/>}/>
                <Route path="/hero-3" element={<HeroC/>}/>
                <Route path="/hero-4" element={<HeroD/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/login-1" element={<LoginA/>}/>
                <Route path="/login-2" element={<LoginB/>}/>
            </Routes>
        </>
    )
}

export default App
