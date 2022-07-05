import React from 'react';
import MailListHeader from './MailListHeader';
import './mail-list.scss';

const MailList = () => (
	<div className="mail-list-wrapper">
		<MailListHeader mailHeader={'Inbox'} mailCount={16} />
	</div>
);

export default MailList;