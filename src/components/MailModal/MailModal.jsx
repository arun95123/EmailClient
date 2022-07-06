import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './mail-modal.scss';

const MailModal = ({isOpen, closeModal}) => {
	if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#page-container');

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
		>
			<div className='modal-close' onClick={closeModal}>X</div>
			<div className='mail-modal'>
				<div className='mail-modal__row'>
					<div>To</div>
					<input />
				</div>
				<div className='mail-modal__row'>
					<div>Cc</div>
					<input />
				</div>
				<input className='mail-modal__subject' placeholder='Add a subject'/>
				<textarea className='mail-modal__body' placeholder='Type body here'/>
				<button>Send</button>
			</div>
		</Modal>
	);
};

export default MailModal;

MailModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
};