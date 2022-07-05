import React from 'react';
import MailItem from './MailItem';
import './mails.scss';

const Mails = () => {
	const mailList = [
		{
			from: 'Pudge Butcher',
			subject: 'Regarding food',
			time: '6.00 PM',
			hasAttachment: true,
			label: 'Documents'
		},
		{
			from: 'Ezio Audiotre',
			subject: 'Rest in Peace',
			time: '12.00 AM',
		},
		{
			from: 'Naruto Uzumaki',
			subject: 'New Jutusu',
			time: 'Jan 30',
			label: 'Clients'
		},
		{
			from: 'Eren Yegar',
			subject: 'Defence of he walls',
			time: 'Jan 1',
			hasAttachment: true,
		},
		{
			from: 'Rob Stark',
			subject: 'Regarding red wedding',
			time: 'Dec 31',
		},
		{
			from: 'Hinata Shoyo',
			subject: 'Vollyball festival',
			time: 'Dec 1',
			label: 'Ads'
		},
		{
			from: 'Hinata Hyuga',
			subject: 'Wedding day',
			time: 'Nov 25',
		},
		{
			from: 'Mikasa Ackerman',
			subject: 'War is incoming',
			time: 'Nov 1',
		},
		{
			from: 'Emma Watson',
			subject: 'House clans problem',
			time: 'Sept 30',
		},
		{
			from: 'Jack Daniels',
			subject: 'Time to Party',
			time: 'Sept 1',
		}
	];

	return(
		<div className='mails-wrapper'>
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