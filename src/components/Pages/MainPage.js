import React from 'react';
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Services from "./Services";

const MainPage = props => {
    return (
        <BrowserRouter>
        <div className="MainPage">
            <Navbar />
            <div className="Content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/services">
                        <Services/>
                    </Route>
                </Switch>
            </div>
        </div>
        </BrowserRouter>

                    );
};

export default MainPage;

/*
const MainPage = props => {
    return (
     <Navbar />                  );
};
*/

/*
import MainPage from './components/Pages/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <MainPage/>
            <div className="App">
                hello
            </div>
        </BrowserRouter>
    );
}
*/
