import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../consts";

const HomeScreen = () => {
    const user = useSelector(state => state.user);

    return(
        <div>
            <h1>Profile</h1>
            {JSON.stringify(user)}
        </div>
    )
}
export default HomeScreen;