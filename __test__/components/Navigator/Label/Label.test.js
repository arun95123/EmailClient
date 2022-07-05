import {
	render, screen
} from '@testing-library/react';
import Label from '../../../../src/components/Navigator/Label';

describe('Label', () => {
	test('renders component', () => {
		const {getByText} = render(<Label name='Hogwarts' />,);
		expect(getByText('Hogwarts')).toBeTruthy();
		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('alt', 'label');
	});
});