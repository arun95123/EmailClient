import React, {useContext, useState} from 'react';
import MailListHeader from './MailListHeader';
import { EmailDataContext } from '../../contexts';
import Mails from './Mails';
import './mail-list.scss';

const MailList = () => {
	let {emailData} = useContext(EmailDataContext);
	const [selectedMails, setSelectedMails] = useState([]);
	return(
		<div className="mail-list-wrapper">
			<MailListHeader
				mailHeader={'Inbox'}
				mailCount={emailData.mailCount}
				selectedMails={selectedMails}
			/>
			<Mails setSelectedMails={setSelectedMails} selectedMails={selectedMails}/>
		</div>
	);
};

export default MailList;