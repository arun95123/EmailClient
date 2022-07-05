import React from 'react';
import MailListHeader from './MailListHeader';
import Mails from './Mails';
import './mail-list.scss';

const MailList = () => (
	<div className="mail-list-wrapper">
		<MailListHeader mailHeader={'Inbox'} mailCount={16} />
		<Mails />
	</div>
);

export default MailList;