import React, {useState} from "react";
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";
import {API_URL} from "../consts";
import IndexScreen from "./IndexScreen";
import {fetchUser} from "../services/user-service";
import {useDispatch} from "react-redux";

const SignupScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signUpHandler = () => {
        const user = {
            name,
            username: name + new Date().getTime(),
            email,
            password
        }
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            if(res.status === 404) {
                alert('Email has already been taken.');
            } else {
                fetchUser(dispatch);
                navigate('/setup');
            }
        });
    }

    return (
        <div>
            <IndexScreen/>
            <Modal
                style={signUp}
                isOpen={true}
                contentLabel="Sign Up Modal">
                <div style={{textAlign: 'center'}}>
                    <i
                        className="fas fa-times fa-2x position-absolute start-0 ms-4"
                        onClick={() => navigate('/')}></i>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
                <h5 className="text-dark text-bold mt-5 text-white">Create your account</h5>
                <div className="form-floating mt-4 border border-secondary rounded">
                    <input
                        className="form-control text-white bg-black"
                        id="name" placeholder=" "
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <label htmlFor="name" className="text-dark">Name</label>
                </div>
                <div className="form-floating mt-4 border border-secondary rounded">
                    <input type="email" id="email" placeholder=" "
                           className="form-control bg-black text-white"
                           value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="email" className="text-dark">Email</label>
                </div>
                <div className="form-floating mt-4 border border-secondary rounded">
                    <input type="password" id="password" placeholder=" "
                           className="form-control bg-black text-white"
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="password" className="text-dark">Password</label>
                </div>
                <button
                    className={`mt-5 btn bg-white text-black rounded-pill btn-full-width
                                ${!name || !email || !password ? 'disabled' : ''}`}
                    onClick={signUpHandler}>
                    <span className="text-bold">Sign up</span>
                </button>
            </Modal>
        </div>
    )
}
export default SignupScreen;

const signUp = {
    content: {
        width: '600px',
        height: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        borderRadius: '20px'
    },
};