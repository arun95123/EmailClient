import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import { EmailDataContext } from '../../contexts';
import TopNav from '../TopNav';
import Navigator from '../Navigator';
import MailList from '../MailList';
import LeftNav from '../LeftNav';

import './app.scss';
let originalEmailData;

const App = () => {
	const {state} = useLocation();
	const { email } = state;
	const [emailData, setEmailData] = useState({
		name: '',
		mailCount: 0,
		mailId: 0,
		sentMailId: 0,
		sentMailCount: 0,
		unreadMailCount: 0,
		draftCount: 0,
		mails: {},
		sentMails: {},
	});
	useEffect(() => {
		document.addEventListener('left-nav-expand', () => {
			document.getElementsByClassName('content-wrapper')[0].classList.add('content-wrapper-slide');
		});
		document.addEventListener('left-nav-collapse', () => {
			document.getElementsByClassName('content-wrapper')[0].classList.remove('content-wrapper-slide');
		});
	},[]);

	useEffect(() => {
		originalEmailData = JSON.parse(sessionStorage.getItem('emailData'));
		setEmailData(originalEmailData[email]);
	}, [email]);

	useEffect(() => {
		if(originalEmailData[email].sentMailCount < emailData.sentMailCount){
			let toMail = emailData.sentMails['id'+emailData.sentMailId].to;
			if(originalEmailData[toMail]){
				originalEmailData[toMail].mailCount++;
				originalEmailData[toMail].unreadMailCount++;
				originalEmailData[toMail].mailId++;
				originalEmailData[toMail].mails = {
					['id'+originalEmailData[toMail].mailId]: {...emailData.sentMails['id'+emailData.sentMailId]},
					...originalEmailData[toMail].mails
				};
			}
		}
		originalEmailData[email] = {...emailData};
		sessionStorage.setItem('emailData', JSON.stringify(originalEmailData));
	},[emailData]);

	return (
		<EmailDataContext.Provider value={{emailData: emailData, setEmailData: setEmailData, email}}>
			<div className='app'>
				<LeftNav />
				<div className='content-wrapper'>
					<TopNav />
					<div className='content-area'>
						<Navigator />
						<MailList />
					</div>
				</div>
			</div>
		</EmailDataContext.Provider>
	);
};

App.propTypes = {
	email: PropTypes.string.isRequired,
};

export default App;