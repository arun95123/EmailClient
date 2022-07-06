import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { EmailDataContext } from '../../../../contexts';
import Attachment from '../../../../images/attachment.svg';
import './mail-item.scss';
import ColoredLabel from '../../../ColoredLabel/ColoredLabel';

const labelColor = {
	'Clients': 'yellow',
	'Documents': 'red',
	'Ads': 'blue'
};

const MailItem = ({from, subject, time, label, hasAttachment, unread, emailId, setSelectedMails, selectedMails}) => {

	const {emailData, setEmailData} = useContext(EmailDataContext);

	const emailClick = () => {
		emailData.mails[emailId].unread = false;
		emailData.unreadMailCount = emailData.unreadMailCount - 1;
		setEmailData({...emailData});
	};

	const checkBoxClick = (e) => {
		e.stopPropagation();
		if(e.target.checked){
			selectedMails.push(emailId);
			setSelectedMails([...selectedMails]);
		}else {
			let index = selectedMails.indexOf(emailId);
			selectedMails.splice(index, 1);
			setSelectedMails([...selectedMails]);
		}
	};

	return(
		<div className={`mail-item ${unread ? 'mail-item-unread' : ''}`} onClick={emailClick}>
			<input type={'checkbox'} onClick={checkBoxClick}/>
			<h6 className='mail-item__from'>{from}</h6>
			{label ? <ColoredLabel text={label} color={labelColor[label]} /> : <div></div>}
			<h6 className='mail-item__subject'>{subject}</h6>
			{hasAttachment ? <img src={Attachment} alt={'attachment'}/> : <div></div>}
			<h6 className='mail-item__time'>{time}</h6>
		</div>
	);
};

MailItem.propTypes = {
	from: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	label: PropTypes.string,
	hasAttachment: PropTypes.bool,
	unread: PropTypes.bool,
	emailId: PropTypes.string.isRequired,
	setSelectedMails: PropTypes.func,
	selectedMails: PropTypes.arrayOf(PropTypes.string)
};

MailItem.defaultProps = {
	label: null,
	hasAttachment: false,
	unread: false
};

export default MailItem;