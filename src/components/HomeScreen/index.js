import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../consts";

const HomeScreen = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const getProfile = () => {
        fetch(`${API_URL}/user`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => navigate('/login'));
    }
    useEffect(getProfile, [navigate]);

    return(
        <div>
            <h1>Profile</h1>
            {JSON.stringify(user)}
        </div>
    )
}
export default HomeScreen;