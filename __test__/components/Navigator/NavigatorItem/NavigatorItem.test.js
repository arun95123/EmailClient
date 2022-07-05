import {
	render, screen
} from '@testing-library/react';
import NavigatorItem from '../../../../src/components/Navigator/NavigatorItem';

describe('NavigatorItem', () => {
	test('renders component', () => {
		const {getByText} = render(<NavigatorItem header='Potter' image='dummy-source' imageAlt='dummy' count={25} showDivider />,);
		expect(getByText('Potter')).toBeTruthy();
		expect(getByText('25')).toBeTruthy();
		const image = screen.getByRole('img');
		const hr = screen.getByRole('separator');
		expect(image).toHaveAttribute('src', 'dummy-source');
		expect(image).toHaveAttribute('alt', 'dummy');
		expect(hr).toBeTruthy();
	});

	test('does not show divider', () => {
		const {getByText} = render(<NavigatorItem header='Potter' image='dummy-source' imageAlt='dummy' />,);
		const hr = screen.queryByRole('separator');
		expect(hr).not.toBeInTheDocument();
	});
});