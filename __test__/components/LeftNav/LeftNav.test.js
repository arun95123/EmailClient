import {
	render
} from '@testing-library/react';
import LeftNav from '../../../src/components/LeftNav';

describe('LeftNav', () => {
	test('Show LeftNav Items', () => {
		const {getByAltText} = render(<LeftNav />,);
		expect(getByAltText('profile')).toBeTruthy();
		expect(getByAltText('mailbox')).toBeTruthy();
		expect(getByAltText('widgets')).toBeTruthy();
		expect(getByAltText('graphs')).toBeTruthy();
		expect(getByAltText('dashboard')).toBeTruthy();
		expect(getByAltText('layouts')).toBeTruthy();
		expect(getByAltText('forms')).toBeTruthy();
	});
});