import React, {useState} from "react";
import Modal from 'react-modal';

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

Modal.setAppElement('#root');

const StaticHomeScreen = () => {
    const [openSignUp, setOpenSignUp] = useState(false);

    return (
        <div>
            <img className="left d-none d-lg-block float-start" src="/images/bg-pic.png"/>
            <div className="right ps-5 float-start">
                <i className="fab fa-twitter fa-3x mt-5"></i>
                <h1 className="text-dark mt-5 text-bold">Happening now</h1>
                <div className="mt-5"></div>
                    <h4 className="text-dark mt-5 text-bold">Join Twitter today.</h4>
                    <button className="btn btn-primary rounded-pill text-bold signup-button"
                            onClick={() => setOpenSignUp(true)}>
                        Sign up with email
                    </button>
                <div className="mt-5 text-bold fs-6">Already have an account?</div >
                <button
                    className="btn rounded-pill signin-button text-bold text-primary mt-2"
                    >
                    Sign in
                </button>
            </div>

            <Modal
                style={signUp}
                isOpen={openSignUp}
                contentLabel="Sign Up Modal">
                <div style={{textAlign: 'center'}}>
                    <i
                        className="fas fa-times fa-2x position-absolute start-0 ms-4"
                        onClick={() => setOpenSignUp(false)}></i>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
                <h5 className="text-dark text-bold mt-5">Create your account</h5>
                <div className="form-floating mt-4 border border-secondary rounded">
                    <input className="form-control text-white bg-black" id="name" placeholder=" "/>
                    <label htmlFor="name" className="text-dark">Name</label>
                </div>
                <div className="form-floating mt-4 border border-secondary rounded">
                    <input type="email" id="email" placeholder=" "
                           className="form-control bg-black text-white"/>
                    <label htmlFor="email" className="text-dark">Email</label>
                </div>
                <div className="form-floating mt-4 border border-secondary rounded">
                    <input type="password" id="password" placeholder=" "
                           className="form-control bg-black text-white"/>
                    <label htmlFor="password" className="text-dark">Password</label>
                </div>
                <button
                    style={{width: '100%'}}
                    className="mt-5 btn bg-dark text-black text-bold rounded-pill ">
                    Sign up
                </button>
            </Modal>
        </div>
    )
}
export default StaticHomeScreen;