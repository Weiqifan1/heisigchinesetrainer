import React, {useState} from 'react';

const Home = props => {
    const [userName, setUserName] = useState('John');

    function setName() {
        setUserName("hans")
    }

    return (
        <div>
            <button onClick={setName}> changeName</button>
            <h1>{userName}</h1>
            home

            <form>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input
                    type="text"
                />
            </form>
        </div>
    );
}
export default Home;