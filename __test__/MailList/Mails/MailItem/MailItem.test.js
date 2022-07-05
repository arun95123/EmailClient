import {
	render
} from '@testing-library/react';
import MailItem from '../../../../src/components/MailList/Mails/MailItem';

describe('MailItem', () => {
	test('renders component', () => {
		const {getByText, getByAltText, container} = render(<MailItem from='he' subject='secret' time='12.00 PM' hasAttachment label='Clients' />,);
		expect(getByText('he')).toBeTruthy();
		expect(getByText('secret')).toBeTruthy();
		expect(getByText('12.00 PM')).toBeTruthy();
		expect(getByAltText('attachment')).toBeTruthy();
		expect(getByText('Clients')).toBeTruthy();
		expect(container.getElementsByClassName('yellow-label').length).toBe(1);
	});

	test('does not render attachment', () => {
		const {queryByAltText} = render(<MailItem from='he' subject='secret' time='12.00 PM' label='Clients' />,);
		expect(queryByAltText('attachment')).toBeFalsy();
	});

	test('switches color of label based on label', () => {
		let {container} = render(<MailItem from='he' subject='secret' time='12.00 PM' label='Documents' />,);
		expect(container.getElementsByClassName('red-label').length).toBe(1);
		let {container: container2} = render(<MailItem from='he' subject='secret' time='12.00 PM' label='Ads' />,);
		expect(container2.getElementsByClassName('blue-label').length).toBe(1);
	});
});