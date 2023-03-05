import React, {useContext} from 'react';
import {UserContext} from "../utils/userContext";

interface Props {
    size?: string
}

const Avatar = ({ size}: Props) => {
    const avatar = useContext(UserContext).avatar;
    const  name = useContext(UserContext).name
    return (
        <img className={`user-avatar ${size ?? ''}`} src={avatar} alt={name}/>
    );
};

export default Avatar;