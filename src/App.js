import React from 'react';
import './i18n';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact'




import './App.css'

import {BrowserRouter,Switch, Route,Routes } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Navbar />
         <BrowserRouter>
            <Routes>
                <Route exact path="/" component={Home} />
               
                <Route path="/Contact" component={Contact} />
                <Route path="/Navbar" component={Navbar} />
                <Route path="/Footer" component={Footer} />
            
               
            
                


           </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;