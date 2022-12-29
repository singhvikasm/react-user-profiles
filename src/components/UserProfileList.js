import React, { useState } from "react";

import UserProfile from "./UserProfile";
import { ConfirmationModal } from './ConfirmationModal'; 

const UserProfileList = ({ userlist }) => {
    const [userlistState, setUserList] = useState(userlist);

    const [showPopup, setShowPopup] = useState(false);
    const [userToDelete, setUserToDelete] = useState(0);
    
    const deleteUser = (id) => {
        setUserToDelete(id);
        setShowPopup(true);
    }

    const handleDelete = () => {
        setUserList(userlistState.filter(el => el.id !== userToDelete));
        hidePopup();
    }

    const hidePopup = () => {
        setShowPopup(false);
    }

return (
    <>
        { showPopup && userToDelete ? 
            <ConfirmationModal
                handleConfirm={handleDelete}
                showModal={showPopup}
                hideModal={hidePopup}
            />
            : null
        }
        <div class="row" style={{"--bs-columns": 12, "--bs-gap": "5rem"}}> {userlistState.map((user, i) => {
        return (
        <UserProfile key={user.id} user={user} handleDelete={deleteUser.bind(this, user.id)}/>
        );})}
        </div>
    </>
);};
export default UserProfileList;