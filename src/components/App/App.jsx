import React from 'react';
import TopNav from '../TopNav';
import Navigator from '../Navigator';
import MailList from '../MailList';
import LeftNav from '../LeftNav';

import './app.scss';

const App = () => (
	<div className='app'>
		<LeftNav />
		<div>
			<TopNav />
			<div className='content-area'>
				<Navigator />
				<MailList />
			</div>
		</div>

	</div>

);

export default App;