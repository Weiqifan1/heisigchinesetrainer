import React, {useState} from 'react';
import '../cssFiles/Home.css';

const Home = props => {
    const [userName, setUserName] = useState(props.currentName);

    const addUserHandler = (event) => {
        event.preventDefault();
        props.onAddChr(userName);
    };

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    };

    return (
        <div>
            home
            <form onSubmit={addUserHandler}>
                <p>Enter your name:</p>
                <input className="center-col" type="text" name="formUserName" defaultValue={props.currentName} onChange={userNameChangeHandler}/>
                <button type="submit">Tilfoej</button>
            </form>
        </div>
    );
}
export default Home;