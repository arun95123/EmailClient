import React,{useState} from 'react';
import MailModal from '../../MailModal';
import './compose-email.scss';

const ComposeEmail = () => {
	const [showCompose, setModalDisplay] = useState(false);
	const closeCompose = () => setModalDisplay(false);
	return (
		<>
			<button className="compose-email" onClick={() => setModalDisplay(true)}>Compose Mail</button>
			<MailModal isOpen={showCompose} closeModal={closeCompose} />
		</>
	);
};


export default ComposeEmail;