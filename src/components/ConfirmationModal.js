import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({ handleConfirm, showModal, hideModal, user }) => {
  const [show, setShow] = useState(showModal);

  const handleClose = () => {
    setShow(false);
    hideModal();
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
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you would like to delete user profile?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { ConfirmationModal }