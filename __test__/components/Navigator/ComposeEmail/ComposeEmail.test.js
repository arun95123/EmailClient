import {
	render, screen
} from '@testing-library/react';
import ComposeEmail from '../../../../src/components/Navigator/ComponseEmail';

describe('Label', () => {
	test('renders component', () => {
		const {getByText} = render(<ComposeEmail />,);
		expect(getByText('Compose Mail')).toBeTruthy();
	});
});