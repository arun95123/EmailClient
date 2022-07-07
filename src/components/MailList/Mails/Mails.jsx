import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import MailItem from './MailItem';
import MailModal from '../../MailModal';
import { EmailDataContext } from '../../../contexts';
import './mails.scss';

const Mails = ({setSelectedMails, selectedMails}) => {
	const { emailData } = useContext(EmailDataContext);
	const [mailData, setMailData] = useState({
		isOpen: false,
		from: '',
		cc: '',
		subjct: '',
		to: ''
	});

	const readMail = (from, cc, subject, body) => {
		setMailData({...mailData, isOpen: true, from: from, cc, subject, body});
	};

	return(
		<div className='mails-wrapper'>
			{Object.entries(emailData.mails).map(([emailId, {from, cc, body, name, subject, time, hasAttachment, label, unread}]) => (
				<MailItem
					emailId={emailId}
					key={emailId}
					from={from}
					cc={cc}
					body={body}
					name={name}
					subject={subject}
					time={time}
					hasAttachment={hasAttachment}
					label={label}
					unread={unread}
					setSelectedMails={setSelectedMails}
					selectedMails={selectedMails}
					readMail={readMail}
				/>
			))}
			<MailModal
				isOpen={mailData.isOpen}
				closeModal={() => setMailData({...mailData, isOpen: false})}
				emailContent={{
					from: mailData.from,
					cc: mailData.cc,
					subject: mailData.subject,
					body: mailData.body,
				}}
			/>
		</div>

	);

};

Mails.propTypes = {
	setSelectedMails: PropTypes.func,
	selectedMails: PropTypes.arrayOf(PropTypes.string)
};

export default Mails;