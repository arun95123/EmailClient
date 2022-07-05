import React from 'react';
import NavigatorItem from './NavigatorItem';
import Inbox from '../../images/inbox.svg';
import './navigator.scss';

const Navigator = () => {
	const folders = [
		{
			header: 'Inbox',
			image:  Inbox,
			imageAlt: 'inbox',
			showDivider: true,
			count: 25
		}
	];
	return (
		<div className="navigator">
			{folders.map(({header, image, imageAlt, count, showDivider}) => (
				<NavigatorItem 
					key={header} 
					header={header} 
					image={image}
					imageAlt={imageAlt}
					count={count}
					showDivider={showDivider}
				/>
			) )}
		</div>
	);
};

export default Navigator;