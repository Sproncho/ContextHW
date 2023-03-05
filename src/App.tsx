import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {UserContext} from "./utils/userContext";

//https://www.gravatar.com/avatar/0?d=retro
function App() {
    const [name, setName] = useState('Monster');
    const [avatar, setAvatar] = useState('https://www.gravatar.com/avatar/0?d=monsterid');
    const [followers, setFollowers] = useState(100);
    const [following, setFollowing] = useState(1000);

    return (
        <div className='app'>
            <UserContext.Provider
                value={{avatar, name, followers, following, setAvatar, setName, setFollowers, setFollowing}}>
                <Nav/>
                <Body/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
