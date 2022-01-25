import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoColumn } from '.';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('Should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
