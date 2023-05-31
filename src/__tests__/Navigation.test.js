import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Navigation from '../components/Navigation';
import CountryList from '../components/CountryList';

describe('Test react components', () => {
  it('header renders', () => {
    const { container } = render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('Test CountryList renders', () => {
    const { container } = render(
      <Provider store={store}>
        <CountryList />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
