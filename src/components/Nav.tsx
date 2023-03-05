import React, {useContext} from 'react';
import Avatar from "./Avatar";
import {UserContext} from "../utils/userContext";


const Nav = () => {

    return (
        <div className='nav'>
           <Avatar size='small'/>
        </div>
    );
};

export default Nav;