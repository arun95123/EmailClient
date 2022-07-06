import {
	fireEvent,
	render, screen
} from '@testing-library/react';
import ComposeEmail from '../../../../src/components/Navigator/ComponseEmail';

describe('Label', () => {
	test('renders component', () => {
		const {getByText} = render(<ComposeEmail />);
		expect(getByText('Compose Mail')).toBeTruthy();
	});

	test('shows and closes modal', () => {
		const {getByText, queryByText} = render(<ComposeEmail />);
		fireEvent.click((getByText('Compose Mail')));
		expect(getByText('To')).toBeTruthy();
		fireEvent.click((getByText('X')));
		expect(queryByText('To')).not.toBeInTheDocument();
	});
});