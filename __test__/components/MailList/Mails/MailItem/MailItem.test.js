import {
	fireEvent,
	render
} from '@testing-library/react';
import MailItem from '../../../../../src/components/MailList/Mails/MailItem';
import {EmailDataContext} from '../../../../../src/contexts';

describe('MailItem', () => {
	test('renders component', () => {
		const {getByText, getByAltText, container} = render(<MailItem from='he' subject='secret' time='12.00 PM' hasAttachment label='Clients' emailId={'1'}/>,);
		expect(getByText('he')).toBeTruthy();
		expect(getByText('secret')).toBeTruthy();
		expect(getByText('12.00 PM')).toBeTruthy();
		expect(getByAltText('attachment')).toBeTruthy();
		expect(getByText('Clients')).toBeTruthy();
		expect(container.getElementsByClassName('yellow-label').length).toBe(1);
	});

	test('does not render attachment', () => {
		const {queryByAltText} = render(<MailItem from='he' subject='secret' time='12.00 PM' label='Clients' emailId={'1'}/>,);
		expect(queryByAltText('attachment')).toBeFalsy();
	});

	test('switches color of label based on label', () => {
		let {container} = render(<MailItem from='he' subject='secret' time='12.00 PM' label='Documents' emailId={'1'}/>,);
		expect(container.getElementsByClassName('red-label').length).toBe(1);
		let {container: container2} = render(<MailItem from='he' subject='secret' time='12.00 PM' label='Ads' emailId={'1'}/>,);
		expect(container2.getElementsByClassName('blue-label').length).toBe(1);
	});

	test('click on item marks mail as read', () => {
		let emailData = {
			unreadMailCount: 2,
			mails: {
				1: {
					unread: true
				}
			}
		};

		let setEmailMock = jest.fn();
		const {getByText} = render(
			<EmailDataContext.Provider value={{emailData, setEmailData: setEmailMock}}>
				<MailItem from='he' subject='secret' time='12.00 PM' label='Documents' emailId={'1'}/>)
			</EmailDataContext.Provider>
		);
		fireEvent.click(getByText('secret'));
		expect(setEmailMock).toHaveBeenCalledWith({
			unreadMailCount: 1,
			mails: {
				1: {
					unread: false
				}
			}
		});
	});
});