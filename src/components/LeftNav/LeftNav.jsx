import React from 'react';
import LeftNavItem from './LeftNavItem';
import Profile from '../../images/profile.svg';
import EmailWhite from '../../images/email_white.svg';
import Dashboard from '../../images/dashboard.svg';
import Science from '../../images/science.svg';
import Diamond from '../../images/diamond.svg';
import Chart from '../../images/chart.svg';
import Form from '../../images/form.svg';

import './left-nav.scss';

const LeftNav = () => (
	<div className='left-nav'>
		<LeftNavItem icon={Profile} iconAlt={'profile'}  selected/>
		<LeftNavItem icon={Dashboard} iconAlt={'dashboard'}/>
		<LeftNavItem icon={Science} iconAlt={'widgets'} />
		<LeftNavItem icon={Diamond} iconAlt={'layouts'} />
		<LeftNavItem icon={EmailWhite} iconAlt={'mailbox'} selected highlight/>
		<LeftNavItem icon={Chart} iconAlt={'graphs'} />
		<LeftNavItem icon={Form} iconAlt={'forms'} />
	</div>
);

export default LeftNav;