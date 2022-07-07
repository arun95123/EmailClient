import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './mail-modal.scss';

const MailModal = ({isOpen, closeModal, sendClick, emailContent}) => {
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

	let showMail = Object.keys(emailContent).length > 0;

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
		>
			<div className='modal-close' onClick={closeModal}>X</div>
			<div className='mail-modal'>
				<div className='mail-modal__row'>
					<div>{showMail ? 'From' : 'To'}</div>
					<input id='to' defaultValue={emailContent.from} disabled={showMail} onChange={onChangeHandler}/>
				</div>
				<div className='mail-modal__row'>
					<div>Cc</div>
					<input id='cc' defaultValue={emailContent.cc} disabled={showMail} onChange={onChangeHandler}/>
				</div>
				<input 
					id='subject'
					className='mail-modal__subject'
					placeholder='Add a subject'
					onChange={onChangeHandler}
					defaultValue={emailContent.subject}
					disabled={showMail}
				/>
				<textarea 
					id='body'
					className='mail-modal__body'
					placeholder='Type body here'
					onChange={onChangeHandler}
					defaultValue={emailContent.body}
					disabled={showMail}
				/>
				{!showMail ? <button onClick={clickHandler}>Send</button> : <></>}
			</div>
		</Modal>
	);
};

export default MailModal;

MailModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	sendClick: PropTypes.func,
	emailContent: PropTypes.shape({
		from: PropTypes.string,
		cc: PropTypes.string,
		subject: PropTypes.string,
		body: PropTypes.string,
	}),
};

MailModal.defaultProps = {
	sendClick: () => {},
	emailContent: {},
};