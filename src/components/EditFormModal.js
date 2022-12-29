import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './editForm.css';

const EditFormModal = ({ handleConfirm, showModal, hideModal, user }) => {
  const [show, setShow] = useState(showModal);
  const [userData, setUser] = useState(user);

  const handleClose = () => {
    setShow(false);
    hideModal();
  }

  const handleChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...userData,
      [name]: value 
    })
  }

  const handleSubmit = () => {
    if(userData.name && userData.email && userData.phone && userData.website)
    handleConfirm(userData);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Edit?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="editForm container">
            <div class="row">
                <label class="col-md-3">
                <span style={{'color': 'red'}}>*</span>Name:</label>
                <input type="text" name="name" className={userData.name ? '': 'has-error'} value={userData.name} onChange={handleChange}/>
            </div>

            <div class="row">
              <label class="col-md-3">
              <span style={{'color': 'red'}}>*</span>Email:</label>
              <input type="text" name="email" className={userData.email ? '': 'has-error'} value={userData.email} onChange={handleChange}/>
            </div>

            <div class="row">
              <label class="col-md-3">
              <span style={{'color': 'red'}}>*</span>Phone:</label>
              <input type="text" name="phone" className={userData.phone ? '': 'has-error'} value={userData.phone} onChange={handleChange}/>
            </div>

            <div class="row">
              <label class="col-md-3">
              <span style={{'color': 'red'}}>*</span>Website:</label>
              <input type="text" name="website" className={userData.website ? '': 'has-error'} value={userData.website} onChange={handleChange}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { EditFormModal }