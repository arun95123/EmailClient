import React from 'react';
import PropTypes from 'prop-types';
import Attachment from '../../../../images/attachment.svg';
import './mail-item.scss';
import ColoredLabel from '../../../ColoredLabel/ColoredLabel';

const labelColor = {
	'Clients': 'yellow',
	'Documents': 'red',
	'Ads': 'blue'
};

const MailItem = ({from, subject, time, label, hasAttachment}) => (
	<div className='mail-item'>
		<input type={'checkbox'} />
		<h6 className='mail-item__from'>{from}</h6>
		{label ? <ColoredLabel text={label} color={labelColor[label]} /> : <div></div>}
		<h6 className='mail-item__subject'>{subject}</h6>
		{hasAttachment ? <img src={Attachment} alt={'attachment'}/> : <div></div>}
		<h6 className='mail-item__time'>{time}</h6>
	</div>
);

MailItem.propTypes = {
	from: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	label: PropTypes.string,
	hasAttachment: PropTypes.bool,
};

MailItem.defaultProps = {
	label: null,
	hasAttachment: false
};

export default MailItem;