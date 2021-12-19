import React from "react";

const StaticHomeScreen = () => {
    return (
        <div className="row">
            <img
                className="col-7"
                src="/images/bg-pic.png"/>
            <div className="col-5">
                <i className="fab fa-twitter fa-3x mt-5"></i>
                <h1
                    className="text-dark mt-5"
                    style={{fontWeight: 'bold'}}>
                    Happening now
                </h1>
                <h4 className="text-dark mt-5">Join Twitter today.</h4>
                <button className="btn btn-primary rounded-pill mt-3">
                    Sign up with email
                </button>
                <p className="mt-5">Already have an account?</p>
                <button
                    className="btn btn-primary rounded-pill"
                    style={{color: 'blue', backgroundColor: 'black', borderColor: 'gray'}}>
                    Sign in
                </button>
            </div>
        </div>
    )
}
export default StaticHomeScreen;