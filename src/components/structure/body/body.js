import './body.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from '../header/header';
import Footer from '../footer/footer';
import Robot from '../../robot/robot';

import Home from '../../../pages/home';
import Insurance from '../../../pages/insurance';
import Quote from '../../../pages/quote';

const Body = () => {
    return (
        <div className = 'body-wrapper'>

            <Router>
                
                <Header />

                <div className = 'core-wrapper'>

                    <Robot />

                    <Routes>

                        <Route exact path = '/' element = { <Home /> } />
                        <Route exact path = '/insurance.js' element = { <Insurance /> } />
                        <Route exact path = '/quote.js' element = { <Quote /> } />

                    </Routes>

                </div>

            </Router>

            
            <Footer />

        </div>
    )
}

export default Body;