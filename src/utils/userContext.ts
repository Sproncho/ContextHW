import React from "react";

export const UserContext = React.createContext({
    avatar: "",
    name:"",
    followers:0,
    following:0,
    setAvatar:(avatar:string)=>{},
    setName:(avatar:string)=>{},
    setFollowers:(followers:number)=>{},
    setFollowing:(following:number)=>{},
});