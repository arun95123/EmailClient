import {
	fireEvent,
	render
} from '@testing-library/react';
import MailItem from '../../../../../src/components/MailList/Mails/MailItem';
import {EmailDataContext} from '../../../../../src/contexts';

describe('MailItem', () => {
	test('renders component', () => {
		const {getByText, getByAltText, container} = render(<MailItem name='he' subject='secret' time='12.00 PM' hasAttachment label='Clients' emailId={'1'}/>,);
		expect(getByText('he')).toBeTruthy();
		expect(getByText('secret')).toBeTruthy();
		expect(getByText('12.00 PM')).toBeTruthy();
		expect(getByAltText('attachment')).toBeTruthy();
		expect(getByText('Clients')).toBeTruthy();
		expect(container.getElementsByClassName('yellow-label').length).toBe(1);
	});

	test('does not render attachment', () => {
		const {queryByAltText} = render(<MailItem name='he' subject='secret' time='12.00 PM' label='Clients' emailId={'1'}/>,);
		expect(queryByAltText('attachment')).toBeFalsy();
	});

	test('switches color of label based on label', () => {
		let {container} = render(<MailItem name='he' subject='secret' time='12.00 PM' label='Documents' emailId={'1'}/>,);
		expect(container.getElementsByClassName('red-label').length).toBe(1);
		let {container: container2} = render(<MailItem name='he' subject='secret' time='12.00 PM' label='Ads' emailId={'1'}/>,);
		expect(container2.getElementsByClassName('blue-label').length).toBe(1);
	});

	test('click on item marks mail as read and shows mail', () => {
		let emailData = {
			unreadMailCount: 2,
			mails: {
				1: {
					from: 'her',
					cc: 'friend',
					subject: 'secret',
					body: 'reject',
					unread: true
				}
			}
		};

		let setEmailMock = jest.fn();
		let readMailMock = jest.fn();
		const {getByText} = render(
			<EmailDataContext.Provider value={{emailData, setEmailData: setEmailMock}}>
				<MailItem from='her' cc='friend' name='he' subject='secret' body='reject' time='12.00 PM' label='Documents' emailId={'1'} readMail={readMailMock}/>)
			</EmailDataContext.Provider>
		);
		fireEvent.click(getByText('secret'));
		expect(setEmailMock).toHaveBeenCalledWith({
			unreadMailCount: 1,
			mails: {
				1: {
					from: 'her',
					cc: 'friend',
					subject: 'secret',
					body: 'reject',
					unread: false
				}
			}
		});
		expect(readMailMock).toHaveBeenCalledWith('her','friend','secret','reject');
	});

	test('click on checkbox marks them as selecteed', () => {
		let emailData = {
			unreadMailCount: 2,
			mails: {
				1: {
					name: 'him',
					time: 'today',
					subject: 'something',
					unread: true
				}
			}
		};

		let setEmailMock = jest.fn();
		let setSelectedMailsMock = jest.fn();

		const {getByRole} = render(
			<EmailDataContext.Provider value={{emailData, setEmailData: setEmailMock}}>
				<MailItem name='he' subject='secret' time='12.00 PM' label='Documents' emailId={'1'}
					setSelectedMails={setSelectedMailsMock} selectedMails={['2', '3']}
				/>)
			</EmailDataContext.Provider>
		);
		fireEvent.click(getByRole('checkbox'));
		expect(setSelectedMailsMock).toHaveBeenCalledWith(['2', '3', '1']);
		fireEvent.click(getByRole('checkbox'));
		expect(setSelectedMailsMock).toHaveBeenCalledWith(['2', '3']);
	});
});