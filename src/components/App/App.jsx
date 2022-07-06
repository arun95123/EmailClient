import React, {useEffect} from 'react';
import TopNav from '../TopNav';
import Navigator from '../Navigator';
import MailList from '../MailList';
import LeftNav from '../LeftNav';

import './app.scss';

const App = () => {
	useEffect(() => {
		document.addEventListener('left-nav-expand', () => {
			document.getElementsByClassName('content-wrapper')[0].classList.add('content-wrapper-slide');
		});
		document.addEventListener('left-nav-collapse', () => {
			document.getElementsByClassName('content-wrapper')[0].classList.remove('content-wrapper-slide');
		});
	},[]);
	return (
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

	);
};

export default App;