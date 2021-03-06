import React, {useContext} from 'react';

import ComponseEmail from './ComponseEmail';
import NavigatorItem from './NavigatorItem';
import { EmailDataContext } from '../../contexts';
import Label from '../Label';
import Inbox from '../../images/inbox.svg';
import Mail from '../../images/mail.svg';
import Important from '../../images/important.svg';
import Draft from '../../images/draft.svg';
import Trash from '../../images/trash.svg';
import Red from '../../images/red.png';
import Yellow from '../../images/yellow.png';
import Blue from '../../images/blue.png';
import Aqua from '../../images/aqua.png';
import Green from '../../images/green.png';

import LabelImage from '../../images/label.svg';
import './navigator.scss';

const Navigator = () => {
	const {emailData} = useContext(EmailDataContext);
	const folders = [
		{
			header: 'Inbox',
			image:  Inbox,
			imageAlt: 'inbox',
			showDivider: true,
			count: emailData.mailCount,
			countColor: 'yellow'
		},
		{
			header: 'Sent Mail',
			image:  Mail,
			imageAlt: 'mail',
			count: emailData.sentMailCount,
			countColor: 'blue',
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
			count: emailData.draftCount,
			countColor: 'red'
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
			image:  Green,
			imageAlt: 'decorative',
		},
		{
			header: 'Documents',
			image:  Red,
			imageAlt: 'decorative',
		},
		{
			header: 'Social',
			image:  Blue,
			imageAlt: 'decorative',
		},
		{
			header: 'Advertising',
			image:  Aqua,
			imageAlt: 'decorative',
		},
		{
			header: 'Clients',
			image:  Yellow,
			imageAlt: 'decorative',
		}
	];

	const labels = ['Family', 'Work', 'Home', 'Children', 'Holidays', 'Music', 'Photography', 'Film'];
	return (
		<div className="navigator">
			<ComponseEmail />
			<div className="navigator__folders">
				<h5>FOLDERS</h5>
				{folders.map(({header, image, imageAlt, count, countColor, showDivider}) => (
					<NavigatorItem 
						key={header} 
						header={header} 
						image={image}
						imageAlt={imageAlt}
						count={count}
						countColor={countColor}
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
						classname='navigator__categories__dots'
					/>
				))}
			</div>
			<div className="navigator__labels">
				<h5>LABELS</h5>
				<div className="navigator__labels__wrapper">
					{labels.map((name) => (
						<Label 
							key={name} 
							name={name}
							image={LabelImage}
							imageAlt={'label'}
						/>
					))}
				</div>

			</div>
		</div>
	);
};

export default Navigator;