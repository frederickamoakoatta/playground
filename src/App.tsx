import './App.scss'
import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

const Home = lazy(() => import("./pages/home/Home"));
const HeroA = lazy(() => import("./pages/hero-A/HeroA"));
const HeroB = lazy(() => import("./pages/hero-B/HeroB"));
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const LoginA = lazy(() => import("./pages/login-A/LoginA"));
const LoginB = lazy(() => import("./pages/login-B/LoginB"));


const App = () => {

    return (
        <>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/hero-1" element={<HeroA/>}/>
                    <Route path="/hero-2" element={<HeroB/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/login-1" element={<LoginA/>}/>
                    <Route path="/login-2" element={<LoginB/>}/>
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default App
