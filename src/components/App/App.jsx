import React from 'react';
import TopNav from '../TopNav';
import Navigator from '../Navigator';
import MailList from '../MailList';
import './app.scss';

const App = () => (
	<React.Fragment>
		<TopNav />
		<div className="content-area">
			<Navigator />
			<MailList />
		</div>
	</React.Fragment>

);

export default App;