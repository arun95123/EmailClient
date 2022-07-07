import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './mail-modal.scss';

const MailModal = ({isOpen, closeModal, sendClick}) => {
	if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#page-container');
	let [values, setValues] = useState({
		to: '',
		cc: '',
		subject: '',
		body: '',
		time: ''
	});

	const clickHandler = () => {
		sendClick(values);
		closeModal();
	};

	const onChangeHandler = (e) => {
		setValues({
			...values,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
		>
			<div className='modal-close' onClick={closeModal}>X</div>
			<div className='mail-modal'>
				<div className='mail-modal__row'>
					<div>To</div>
					<input id='to' onChange={onChangeHandler}/>
				</div>
				<div className='mail-modal__row'>
					<div>Cc</div>
					<input id='cc' onChange={onChangeHandler}/>
				</div>
				<input id='subject' className='mail-modal__subject' placeholder='Add a subject' onChange={onChangeHandler}/>
				<textarea id='body' className='mail-modal__body' placeholder='Type body here' onChange={onChangeHandler}/>
				<button onClick={clickHandler}>Send</button>
			</div>
		</Modal>
	);
};

export default MailModal;

MailModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	sendClick: PropTypes.func,
};