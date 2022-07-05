import {
	render
} from '@testing-library/react';
import Mails from '../../../src/components/MailList/Mails';

describe('Mails', () => {
	test('Show MailList Header section', () => {
		const {getByText} = render(<Mails />,);
		expect(getByText('Pudge Butcher')).toBeTruthy();
	});
});