import React, {useState, useEffect} from 'react';
import Hamburger from '../../images/menu.svg';
import Email from '../../images/email.svg';
import Logout from '../../images/logout.svg';

import Notification from '../../images/notifications.svg';
import './top-nav.scss';
import ColoredLabel from '../ColoredLabel';

const TopNav = () => {
	const [leftNavOpen, setLeftNavOpen] = useState(false);

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
				<ColoredLabel text={16} color={'yellow'} classname={'top-nav__count'}/>
			</div>
			<div className='top-nav__notification'>
				<img src={Notification} alt={'notification'} />
				<ColoredLabel text={2} color={'red'} classname={'top-nav__count'}/>
			</div>
			<div className='top-nav__logout'>
				<img src={Logout} alt={'logout'} />
				<div>Log out</div>
			</div>
		</div>
	);
};

export default TopNav;