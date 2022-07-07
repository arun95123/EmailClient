import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MailItem from './MailItem';
import { EmailDataContext } from '../../../contexts';
import './mails.scss';

const Mails = ({setSelectedMails, selectedMails}) => {
	const { emailData } = useContext(EmailDataContext);

	return(
		<div className='mails-wrapper'>
			{Object.entries(emailData.mails).map(([emailId, {from, name, subject, time, hasAttachment, label, unread}]) => (
				<MailItem
					emailId={emailId}
					key={emailId}
					from={from}
					name={name}
					subject={subject}
					time={time}
					hasAttachment={hasAttachment}
					label={label}
					unread={unread}
					setSelectedMails={setSelectedMails}
					selectedMails={selectedMails}
				/>
			))}
		</div>

	);

};

Mails.propTypes = {
	setSelectedMails: PropTypes.func,
	selectedMails: PropTypes.arrayOf(PropTypes.string)
};

export default Mails;