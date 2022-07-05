import {
	render,
} from '@testing-library/react';
import TopNav from '../../../src/components/TopNav';

describe('TopNav', () => {
	test('TopNav shows up', () => {
		const {getByPlaceholderText, getByAltText, getByText} = render(<TopNav />,);
		expect(getByPlaceholderText('Search for something...')).toBeTruthy();
		expect(getByAltText('menu')).toBeTruthy();
		expect(getByAltText('email')).toBeTruthy();
		expect(getByAltText('notification')).toBeTruthy();
		expect(getByAltText('logout')).toBeTruthy();
		expect(getByText('16')).toBeTruthy();
		expect(getByText('2')).toBeTruthy();
		expect(getByText('Log out')).toBeTruthy();
	});
});