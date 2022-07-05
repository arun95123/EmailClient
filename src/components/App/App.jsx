import React from 'react';
import Nav from '../Nav';
import Navigator from '../Navigator';
import MailList from '../MailList';
import './app.scss';

const App = () => (
	<React.Fragment>
		<Nav />
		<div className="content-area">
			<Navigator />
			<MailList />
		</div>
	</React.Fragment>

);

export default App;