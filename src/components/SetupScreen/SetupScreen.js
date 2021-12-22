import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-modal';
import './index.css';
import {useNavigate} from "react-router-dom";
import {updateHeader, updateProfile, updateUser} from "../../services/user-service";


const SetupScreen = () => {
    const user = useSelector(state => state.user);
    const [activeModal, setActiveModal] = useState('pic');
    const [pic, setPic] = useState({});
    const [picUrl, setPicUrl] = useState('/images/default-profile.png');
    const [picUploaded, setPicUploaded] = useState(false);
    const [header, setHeader] = useState({});
    const [headerUrl, setHeaderUrl] = useState('/images/default-header.png');
    const [headerUploaded, setHeaderUploaded] = useState(false);
    const [bio, setBio] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const processPic = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setPic(imageFile);
        setPicUrl(imageUrl);
        setPicUploaded(true);
    }

    const processHeader = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setHeader(imageFile);
        setHeaderUrl(imageUrl);
        setHeaderUploaded(true);
    }

    const updateProfilePic = () => {
        const data = new FormData();
        data.append("userId", user._id);
        data.append("profilePic", pic);
        updateProfile(dispatch, data);
    }

    const updateHeaderPic = () => {
        const data = new FormData();
        data.append("userId", user._id);
        data.append("headerPic", header);
        updateHeader(dispatch, data);
    }

    const setupHandler = () => {
        const updatedUser = {
            ...user,
            username,
            bio
        }
        updateUser(dispatch, updatedUser);
        if(pic) {
            updateProfilePic();
        }
        if(header) {
            updateHeaderPic();
        }
        navigate('/home');
    }

    return(
        <div>
            <Modal
                style={setup}
                isOpen={activeModal === 'pic'}
                contentLabel="Profile Picture Modal">
                <div style={{textAlign: 'center'}}>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
                <div className="mt-4 ms-2 fs-5 text-bold text-white">Pick a profile picture</div>
                <div className="mt-2 ms-2">Have a favorite selfie? Upload it now.</div>
                <label htmlFor="pic" className="mx-auto d-block mt-5">
                    <img src={picUrl} className="profile-pic-alone mx-auto d-block"
                         style={{cursor: 'pointer'}}/>
                    <input type="file" id="pic"
                           style={{display: "none"}}
                           accept="image/*" onChange={processPic}/>
                </label>
                {
                    !picUploaded &&
                    <button
                        className="btn btn-light bg-black border-0 mt-5 rounded-pill btn-full-width"
                        onClick={() => setActiveModal('header')}>
                        <span className="text-bold border-bottom">Skip for now</span>
                    </button>
                }
                {
                    picUploaded &&
                    <button
                        className="btn mt-5 rounded-pill bg-white text-black text-bold btn-full-width"
                        onClick={() => setActiveModal('header')}>
                        <span className="text-bold">Next</span>
                    </button>
                }
            </Modal>

            <Modal
                style={setup}
                isOpen={activeModal === 'header'}
                contentLabel="Header Modal">
                <div style={{textAlign: 'center'}}>
                    <i
                        className="fas fa-arrow-left fa-2x position-absolute start-0 ms-4"
                        onClick={() => setActiveModal('pic')}></i>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
                <div className="mt-4 ms-2 fs-5 text-bold text-white">Pick a header</div>
                <div className="mt-2 ms-2">People who visit your profile will see it. Show your style.</div>
                <label htmlFor="header">
                    <img className="header-pic ms-2 mt-5" src={headerUrl} style={{cursor: 'pointer'}}/>
                    <img src={picUrl} className="profile-pic ms-1"/>
                    <input type="file" id="header"
                           style={{display: "none"}}
                           accept="image/*" onChange={processHeader}/>
                </label>
                {
                    !headerUploaded &&
                    <button
                        className="btn btn-light bg-black border-0 mt-5 rounded-pill btn-full-width relative-up"
                        onClick={() => setActiveModal('bio')}>
                        <span className="text-bold border-bottom">Skip for now</span>
                    </button>
                }
                {
                    headerUploaded &&
                    <button
                        className="btn mt-5 rounded-pill bg-white text-black text-bold btn-full-width relative-up"
                        onClick={() => setActiveModal('bio')}>
                        <span className="text-bold">Next</span>
                    </button>
                }
            </Modal>

            <Modal
                style={setup}
                isOpen={activeModal === 'bio'}
                contentLabel="Bio Modal">
                <div style={{textAlign: 'center'}}>
                    <i
                        className="fas fa-arrow-left fa-2x position-absolute start-0 ms-4"
                        onClick={() => setActiveModal('header')}></i>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
                <div className="mt-4 ms-2 fs-5 text-bold text-white">Describe yourself</div>
                <div className="mt-2 ms-2">What makes you special? Don't think too hard, just have fun with it.</div>
                <div className="form-floating mt-5 mb-5 border border-secondary rounded">
                    <textarea
                        className="form-control text-white bg-black"
                        style={{resize: "none", height: "100px"}}
                        id="bio" placeholder=" "
                        value={bio}
                        onChange={e => setBio(e.target.value)}>
                    </textarea>
                    <label htmlFor="bio" className="text-dark">Your bio</label>
                </div>
                <div className="mt-5 mb-5">  </div>
                {
                    !bio &&
                    <button
                        className="btn btn-light bg-black border-0 mt-5 rounded-pill btn-full-width btn-position"
                        onClick={() => setActiveModal('username')}>
                        <span className="text-bold border-bottom">Skip for now</span>
                    </button>
                }
                {
                    bio &&
                    <button
                        className="btn mt-5 rounded-pill bg-white text-black text-bold btn-full-width btn-position"
                        onClick={() => setActiveModal('username')}>
                        <span className="text-bold">Next</span>
                    </button>
                }
            </Modal>

            <Modal
                style={setup}
                isOpen={activeModal === 'username'}
                contentLabel="Username Modal">
                <div style={{textAlign: 'center'}}>
                    <i
                        className="fas fa-arrow-left fa-2x position-absolute start-0 ms-4"
                        onClick={() => setActiveModal('bio')}></i>
                    <i className="fab fa-twitter fa-2x"></i>
                </div>
                <div className="mt-4 ms-2 fs-5 text-bold text-white">What should we call you?</div>
                <div className="mt-2 ms-2">Your @username is unique. You can always change it later.</div>
                <div className="form-floating mt-5 border border-secondary rounded">
                    <input
                        className="form-control text-white bg-black"
                        id="username" placeholder=" "
                        value={username}
                        onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="username" className="text-dark">Username</label>
                </div>
                <div className="mt-5 mb-5">  </div>
                {
                    !username &&
                    <button
                        className="btn btn-light bg-black border-0 mt-5 rounded-pill btn-full-width setup-btn-position"
                        onClick={() => navigate('/home')}>
                        <span className="text-bold border-bottom">Skip for now</span>
                    </button>
                }
                {
                    username &&
                    <button
                        className="btn mt-5 rounded-pill bg-white text-black text-bold btn-full-width setup-btn-position"
                        onClick={setupHandler}>
                        <span className="text-bold">Set up</span>
                    </button>
                }
            </Modal>
        </div>
    )
}
export default SetupScreen;

const setup = {
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