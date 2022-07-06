import React, { useContext } from 'react';
import MailItem from './MailItem';
import { EmailDataContext } from '../../../contexts';
import './mails.scss';

const Mails = () => {
	const { emailData } = useContext(EmailDataContext);

	return(
		<div className='mails-wrapper'>
			{Object.entries(emailData.mails).map(([emailId, {from, subject, time, hasAttachment, label, unread}]) => (
				<MailItem
					emailId={emailId}
					key={emailId}
					from={from}
					subject={subject}
					time={time}
					hasAttachment={hasAttachment}
					label={label}
					unread={unread}
				/>
			))}
		</div>

	);

};

export default Mails;