import {
	render
} from '@testing-library/react';
import Mails from '../../../../src/components/MailList/Mails';
import {EmailDataContext} from '../../../../src/contexts';

describe('Mails', () => {
	test('Shows the mail items', () => {
		let emailData = {
			unreadMailCount: 2,
			mails: {
				1: {
					name: 'him',
					time: 'today',
					subject: 'something',
					unread: true
				},
				2: {
					name: 'her',
					time: 'today',
					subject: 'anything'
				}
			}
		};

		const {getByText} = render(
			<EmailDataContext.Provider value={{emailData}}>
				<Mails />)
			</EmailDataContext.Provider>
		);
		expect(getByText('something')).toBeTruthy();
		expect(getByText('anything')).toBeTruthy();

	});
});