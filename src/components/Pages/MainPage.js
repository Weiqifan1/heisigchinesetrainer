import React, {useState} from 'react';
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Services from "./Services";

const MainPage = props => {

    const [chrName, setChrName] = useState("lykke");

    const addChrNameHandler = (newName) => {
        setChrName(newName);
    };

    function onGreet() {
        alert("greet");
    }

    return (
        <BrowserRouter>
        <div className="MainPage">
            <Navbar />
            <div className="Content">
                <Switch>
                    <Route exact path="/">
                        <Home currentName={chrName} onAddChr={addChrNameHandler}/>
                    </Route>
                    <Route exact path="/services">
                        <Services greet={onGreet} name={chrName}/>
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
