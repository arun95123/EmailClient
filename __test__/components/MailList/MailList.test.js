import {
	render
} from '@testing-library/react';
import MailList from '../../../src/components/MailList';
import {EmailDataContext} from '../../../src/contexts';


describe('MailList', () => {
	test('Show MailList Header section', () => {
		let emailData = {
			unreadMailCount: 2,
			mailCount: 16,
			mails: {
				1: {
					from: 'him',
					time: 'today',
					subject: 'something',
					unread: true
				},
				2: {
					from: 'her',
					time: 'today',
					subject: 'anything'
				}
			}
		};
		const {getByText} = render(
			<EmailDataContext.Provider value={{emailData}} >
				<MailList />
			</EmailDataContext.Provider>);
		expect(getByText('Inbox(16)')).toBeTruthy();
	});
});