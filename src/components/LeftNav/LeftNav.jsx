import React, {useEffect} from 'react';
import LeftNavItem from './LeftNavItem';
import Profile from '../../images/profile.svg';
import EmailWhite from '../../images/email_white.svg';
import Dashboard from '../../images/dashboard.svg';
import Science from '../../images/science.svg';
import Diamond from '../../images/diamond.svg';
import Chart from '../../images/chart.svg';
import Form from '../../images/form.svg';
import Pic from '../../images/pic.jpeg';

import './left-nav.scss';

const LeftNav = () => {
	useEffect(() => {
		document.addEventListener('left-nav-expand', () => {
			document.getElementsByClassName('left-nav')[0].classList.add('left-nav-expanded');
		});
		document.addEventListener('left-nav-collapse', () => {
			document.getElementsByClassName('left-nav')[0].classList.remove('left-nav-expanded');
		});
	},[]);
	return(
		<div className='left-nav'>
			<div className='left-nav__collapsed'>
				<LeftNavItem icon={Profile} iconAlt={'profile'}  selected/>
				<LeftNavItem icon={Dashboard} iconAlt={'dashboard'}/>
				<LeftNavItem icon={Science} iconAlt={'widgets'} />
				<LeftNavItem icon={Diamond} iconAlt={'layouts'} />
				<LeftNavItem icon={EmailWhite} iconAlt={'mailbox'} selected highlight/>
				<LeftNavItem icon={Chart} iconAlt={'graphs'} />
				<LeftNavItem icon={Form} iconAlt={'forms'} />
			</div>
			<div className='left-nav__expanded'>
				<div className='left-nav__expanded__profile-wrapper'>
					<img className='left-nav__expanded__pic' src={Pic} alt='profile-pic' />
					<div className='left-nav__expanded__name'>Emma Watson</div>
					<div className='left-nav__expanded__role'>Vice Director</div>
				</div>
				<LeftNavItem icon={Dashboard} iconAlt={'dashboard'} heading={'Dashboard'}/>
				<LeftNavItem icon={Science} iconAlt={'widgets'} heading={'Widgets'} />
				<LeftNavItem icon={Diamond} iconAlt={'layouts'} heading={'Layouts'} />
				<LeftNavItem icon={EmailWhite} iconAlt={'mailbox'} selected highlight heading={'Mailbox'}/>
				<LeftNavItem icon={Chart} iconAlt={'graphs'} heading={'Graphs'} />
				<LeftNavItem icon={Form} iconAlt={'forms'} heading={'Forms'} />
			</div>
		</div>
	);
};


export default LeftNav;