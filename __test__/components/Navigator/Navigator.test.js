import {
	render, screen
} from '@testing-library/react';
import Navigator from '../../../src/components/Navigator';

describe('Nav component', () => {
	test('Nav text shows up', () => {
		const {getByText} = render(<Navigator />,);
		expect(getByText('Inbox')).toBeTruthy();
		expect(getByText('25')).toBeTruthy();
		const image = screen.getByRole('img');
		const hr = screen.getByRole('separator');
		expect(image).toHaveAttribute('alt', 'inbox');
		expect(hr).toBeTruthy();
	});
});