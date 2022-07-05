import {
	render, screen
} from '@testing-library/react';
import Label from '../../../src/components/Label';

describe('Label', () => {
	test('renders component', () => {
		const {getByText} = render(<Label name='Hogwarts' image='some' imageAlt='label' />,);
		expect(getByText('Hogwarts')).toBeTruthy();
		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('alt', 'label');
	});

	test('does not show text and image', () => {
		const {container, getByRole} = render(<Label />,);
		const image = screen.queryByRole('img');
		expect(image).not.toBeInTheDocument();
		expect(container.getElementsByClassName('label__text').length).toBe(0);
	});
});