import React,{useState, useContext} from 'react';
import { EmailDataContext } from '../../../contexts';
import MailModal from '../../MailModal';
import './compose-email.scss';

const ComposeEmail = () => {
	const [showCompose, setModalDisplay] = useState(false);
	const {emailData, setEmailData, email} = useContext(EmailDataContext);
	const closeCompose = () => setModalDisplay(false);
	const sendEmail = ({to, cc, subject, body, time}) => {
		emailData.sentMailCount++;
		emailData.sentMailId++;
		emailData.sentMails = {
			[emailData.sentMailId]: {
				from: email,
				to,
				cc,
				subject,
				body,
				time,
				unread: true
			},
			...emailData.sentMails
		};
		setEmailData({...emailData});
	};
	return (
		<>
			<button className="compose-email" onClick={() => setModalDisplay(true)}>Compose Mail</button>
			<MailModal isOpen={showCompose} closeModal={closeCompose} sendClick={sendEmail}/>
		</>
	);
};


export default ComposeEmail;