import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import { EmailDataContext } from '../../contexts';
import ColoredLabel from '../ColoredLabel';
import Hamburger from '../../images/menu.svg';
import Email from '../../images/email.svg';
import Logout from '../../images/logout.svg';
import Notification from '../../images/notifications.svg';
import './top-nav.scss';

const TopNav = () => {
	const [leftNavOpen, setLeftNavOpen] = useState(false);

	const { emailData } = useContext(EmailDataContext);

	useEffect(() => {
		if(leftNavOpen){
			document.dispatchEvent(new CustomEvent('left-nav-expand'));
		}else {
			document.dispatchEvent(new CustomEvent('left-nav-collapse'));
		}
	}, [leftNavOpen]);

	return(
		<div className='top-nav'>
			<img
				src={Hamburger}
				alt={'menu'}
				className='top-nav__hamburger'
				onClick={() => setLeftNavOpen(!leftNavOpen)}
			/>
			<input placeholder='Search for something...'/>
			<div className='top-nav__email'>
				<img src={Email} alt={'email'} />
				{emailData.mailCount > 0 ? <ColoredLabel text={emailData.mailCount} color={'yellow'} classname={'top-nav__count'}/> : <></>}
			</div>
			<div className='top-nav__notification'>
				<img src={Notification} alt={'notification'} />
				{emailData.unreadMailCount > 0 ? <ColoredLabel text={emailData.unreadMailCount} color={'red'} classname={'top-nav__count'}/>: null}
			</div>
			<div className='top-nav__logout'>
				<img src={Logout} alt={'logout'} />
				<Link to='/'>Log out</Link>
			</div>
		</div>
	);
};

export default TopNav;