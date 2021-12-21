import React from "react";
import {useNavigate} from "react-router-dom";
import './index.css';

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            <img className="left d-none d-lg-block float-start" src="/images/bg-pic.png"/>
            <div className="right ps-5 float-start">
                <i className="fab fa-twitter fa-3x mt-5"></i>
                <h1 className="text-dark mt-5 text-bold">Happening now</h1>
                <div className="mt-5"></div>
                <h4 className="text-dark mt-5 text-bold">Join Twitter today.</h4>
                <button className="btn btn-primary rounded-pill text-bold signup-button"
                        onClick={() => navigate('/signup')}>
                    <span className="text-bold">Sign up with email</span>
                </button>
                <div className="mt-5 text-bold fs-6">Already have an account?</div >
                <button
                    className="btn rounded-pill signin-button text-primary mt-2"
                    onClick={() => navigate('/signin')}>
                    <span className="text-bold">Sign in</span>
                </button>
            </div>
        </div>
    )
}
export default Index;