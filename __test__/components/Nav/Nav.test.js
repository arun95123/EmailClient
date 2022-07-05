import {
	render,
} from '@testing-library/react';
import Nav from '../../../src/components/Nav';

describe('Nav component', () => {
	test('Nav text shows up', () => {
		const {getByText} = render(<Nav />,);
		expect(getByText('Test Nav')).toBeTruthy();
	});
});