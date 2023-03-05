import React, {useContext} from 'react';
import Avatar from "./Avatar";
import {UserContext} from "../utils/userContext";

interface props {
    onClick: () => void,
    onContextMenu: () => void
}

const UserStats = ({onClick, onContextMenu}: props) => {
    const context = useContext(UserContext);
    return (
        <div className='user-stats'>
            <div onClick={() => {
                onClick()
            }} onContextMenu={(e) => {
                e.preventDefault();
                onContextMenu();
            }}>
                <Avatar/>
                {context.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => {
                        context.setFollowers(context.followers + 1)
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        context.setFollowers(context.followers - 1);
                    }}
                >Followers {context.followers}</div>
                <div
                    onClick={() => {
                        context.setFollowing(context.following + 1)
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        context.setFollowing(context.following - 1);
                    }}
                >Following {context.following}</div>
            </div>
        </div>
    );
};

export default UserStats;