import {
	render, screen
} from '@testing-library/react';
import ColoredLabel from '../../../src/components/ColoredLabel';

describe('ColoredLabel', () => {
	test('renders component', () => {
		const {getByText, container} = render(<ColoredLabel text='harry' />,);
		expect(getByText('harry')).toBeTruthy();
		expect(container.getElementsByClassName('red-label').length).toBe(1);
	});

	test('changes color', () => {
		const {getByText, container} = render(<ColoredLabel text='harry' color='yellow' />,);
		expect(container.getElementsByClassName('yellow-label').length).toBe(1);
	});
});