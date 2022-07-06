import {
	fireEvent,
	render
} from '@testing-library/react';
import { EmailDataContext } from '../../../../src/contexts';
import MailListHeader from '../../../../src/components/MailList/MailListHeader';

describe('MailListHeader', () => {
	test('Show MailList Header section', () => {
		const {getByText, getByAltText} = render(<MailListHeader mailCount={16} mailHeader='Inbox' />,);
		expect(getByText('Inbox(16)')).toBeTruthy();
		expect(getByText('Search')).toBeTruthy();
		expect(getByAltText('refresh')).toBeTruthy();
		expect(getByAltText('read')).toBeTruthy();
		expect(getByAltText('priority')).toBeTruthy();
		expect(getByAltText('delete')).toBeTruthy();
		expect(getByAltText('forward')).toBeTruthy();
		expect(getByAltText('back')).toBeTruthy();
	});

	test('Delete selected mails', () => {
		let emailData = {
			unreadMailCount: 2,
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
		let setEmailDataMock = jest.fn();
		const {getByText, getByAltText} = render(
			<EmailDataContext.Provider value={{emailData, setEmailData: setEmailDataMock}}>
				<MailListHeader mailCount={16} mailHeader='Inbox' selectedMails={['2']}/>
			</EmailDataContext.Provider>
		);
		fireEvent.click(getByAltText('delete'));
		expect(setEmailDataMock).toHaveBeenCalledWith(
			{
				unreadMailCount: 2,
				mails: {
					1: {
						from: 'him',
						time: 'today',
						subject: 'something',
						unread: true
					}
				}
			}
		);
	});
});