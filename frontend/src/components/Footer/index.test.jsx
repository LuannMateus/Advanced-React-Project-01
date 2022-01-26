import { renderTheme } from '../../styles/renderTheme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html="<h1>Hello!</h1>" />);

    expect(container).toMatchSnapshot();
  });
});
