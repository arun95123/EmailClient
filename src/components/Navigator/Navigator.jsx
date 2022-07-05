import React from 'react';

import NavigatorItem from './NavigatorItem';
import Inbox from '../../images/inbox.svg';
import Mail from '../../images/mail.svg';
import Important from '../../images/important.svg';
import Draft from '../../images/draft.svg';
import Trash from '../../images/trash.svg';
import './navigator.scss';

const Navigator = () => {
	const folders = [
		{
			header: 'Inbox',
			image:  Inbox,
			imageAlt: 'inbox',
			showDivider: true,
			count: 25
		},
		{
			header: 'Sent Mail',
			image:  Mail,
			imageAlt: 'mail',
			showDivider: true,
		},
		{
			header: 'Important',
			image:  Important,
			imageAlt: 'astrick',
			showDivider: true,
		},
		{
			header: 'Draft',
			image:  Draft,
			imageAlt: 'draft',
			showDivider: true,
			count: 2
		},
		{
			header: 'Trash',
			image:  Trash,
			imageAlt: 'trash',
			showDivider: true,
		}
	];

	const categories = [
		{
			header: 'Work',
			image:  Inbox,
			imageAlt: 'decorative',
		},
		{
			header: 'Documents',
			image:  Mail,
			imageAlt: 'decorative',
		},
		{
			header: 'Social',
			image:  Important,
			imageAlt: 'decorative',
		},
		{
			header: 'Advertising',
			image:  Draft,
			imageAlt: 'decorative',
		},
		{
			header: 'Clients',
			image:  Trash,
			imageAlt: 'decorative',
		}
	];
	return (
		<div className="navigator">
			<div className="navigator__folders">
				<h5>FOLDERS</h5>
				{folders.map(({header, image, imageAlt, count, showDivider}) => (
					<NavigatorItem 
						key={header} 
						header={header} 
						image={image}
						imageAlt={imageAlt}
						count={count}
						showDivider={showDivider}
					/>
				))}
			</div>
			<div className="navigator__categories">
				<h5>CATEGORIES</h5>
				{categories.map(({header, image, imageAlt, count, showDivider}) => (
					<NavigatorItem 
						key={header} 
						header={header} 
						image={image}
						imageAlt={imageAlt}
						count={count}
						showDivider={showDivider}
					/>
				))}
			</div>
		</div>
	);
};

export default Navigator;