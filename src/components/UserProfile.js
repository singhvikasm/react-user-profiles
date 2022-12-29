import React, { useState } from "react";
import './userProfile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash, faPen, faPhone, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { EditFormModal } from "./EditFormModal";

const UserProfile = ({ user, handleDelete }) => {

    const [toggleLike, setToggleLike] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [userState, setUserState] = useState(user);
    
    const handleToggleClick = () => {
        setToggleLike(!toggleLike);
    };

    const handleSave = (userdata) => {
        setUserState(userdata);
        setShowEdit(false);
    }

    const handleShowEdit = ()=> {
        setShowEdit(true);
    }
    const hideEdit = () => {
        setShowEdit(false);    
    }

    return (
        <>
        { showEdit ? 
            <EditFormModal
                handleConfirm={handleSave}
                user={userState}
                showModal={showEdit}
                hideModal={hideEdit}
            />
            : null
        }
        <div class="col-3">
            <div class="card">
                <img src={`https://avatars.dicebear.com/api/adventurer/${userState.username}.svg`} class="card-img-top" alt="profile pic"/>
                <div class="card-body">
                    <p class="card-name">{userState.name}</p>
                    <p class="card-text"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><span>{userState.email}</span></p>
                    <p class="card-text"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><span>{userState.phone}</span></p>
                    <p class="card-text"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon><span>{userState.website}</span></p>
                </div>
                <div>
                    <div class="cardFooter row">
                        <div class='likeButton col-4' float="left">
                            {toggleLike ? 
                            <FontAwesomeIcon icon={faHeart} onClick={handleToggleClick} /> : 
                            <FontAwesomeIcon icon={faHeartRegular} onClick={handleToggleClick} />}
                        </div>  
                        <div class='editButton col-4'>
                            <FontAwesomeIcon icon={faPen} onClick={handleShowEdit} />
                        </div>
                        <div class='deleteButton col-4' float="right">
                            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />    
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};
export default UserProfile;