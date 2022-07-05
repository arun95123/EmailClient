import React from 'react';
import MailItem from './MailItem';

const Mails = () => {
	const mailList = [
		{
			from: 'Pudge Butcher',
			subject: 'Regarding food',
			time: '6.00 PM',
			hasAttachment: true,
			label: 'Clients'
		}
	];

	return(
		<div>
			{mailList.map(({from, subject, time, hasAttachment, label}) => (
				<MailItem
					key={subject}
					from={from}
					subject={subject}
					time={time}
					hasAttachment={hasAttachment}
					label={label}
				/>
			))}
		</div>

	);

};

export default Mails;